import streamlit as st
import requests
import tweepy
import numpy as np
import pandas as pd
from datetime import datetime, timedelta
import plotly.graph_objects as go
from textblob import TextBlob
import solana
from solana.rpc.api import Client
from solana.transaction import Transaction
from solders.system_program import TransferParams, transfer
from solana.rpc.types import TxOpts
from streamlit.components.v1 import components
from TikTokApi import TikTokApi
from typing import Dict, List, Optional
import asyncio
import aiohttp
import time
import sqlite3
from datetime import datetime, timedelta
import numpy as np
from scipy.signal import find_peaks
import talib
import json
from typing import Dict, List
from wallet_component import wallet_connect, buy_token, SolanaWallet

# Initialize session state for wallet
if 'wallet_connected' not in st.session_state:
    st.session_state.wallet_connected = False
if 'wallet_address' not in st.session_state:
    st.session_state.wallet_address = None

class MemecoinAnalyzer:
    def __init__(self, twitter_api=None):
        self.twitter_api = twitter_api
        
    def fetch_dexscreener_data(self):
        """Fetch memecoin data from Dexscreener"""
        try:
            url = "https://api.dexscreener.com/latest/dex/tokens/solana"
            response = requests.get(url, timeout=10)
            response.raise_for_status()
            data = response.json()
            
            if not data or 'pairs' not in data:
                st.error("Invalid response from Dexscreener API")
                return {'pairs': []}
                
            return data
        except requests.exceptions.RequestException as e:
            st.error(f"Error fetching data: {str(e)}")
            return {'pairs': []}
    
    def filter_memecoins(self, data, ticker):
        """Filter memecoins based on ticker"""
        try:
            if not data or not isinstance(data, dict) or 'pairs' not in data:
                st.warning("No data available to filter")
                return []
                
            memecoins = []
            for token in data['pairs']:
                if not isinstance(token, dict) or 'baseToken' not in token:
                    continue
                    
                base_token = token.get('baseToken', {})
                if not isinstance(base_token, dict) or 'symbol' not in base_token:
                    continue
                    
                if ticker.upper() in base_token['symbol'].upper():
                    memecoins.append(token)
                    
            return memecoins
        except Exception as e:
            st.error(f"Error filtering memecoins: {str(e)}")
            return []
    
    def analyze_social_sentiment(self, ticker, count=100):
        """Analyze social media sentiment"""
        default_sentiment = {
            'average_sentiment': 0.0,
            'sentiment_volatility': 0.0,
            'total_tweets': 0,
            'tweet_data': []
        }
        
        if not self.twitter_api:
            st.warning("Twitter API not configured")
            return default_sentiment
            
        try:
            query = f"#{ticker}"
            tweets = self.twitter_api.search_tweets(q=query, count=count, lang='en')
            
            tweet_sentiments = []
            tweet_data = []
            
            for tweet in tweets:
                analysis = TextBlob(tweet.text)
                sentiment_score = analysis.sentiment.polarity
                tweet_sentiments.append(sentiment_score)
                
                tweet_data.append({
                    'user': tweet.user.screen_name,
                    'text': tweet.text,
                    'date': tweet.created_at,
                    'sentiment': sentiment_score,
                    'likes': tweet.favorite_count,
                    'retweets': tweet.retweet_count
                })
            
            return {
                'average_sentiment': np.mean(tweet_sentiments) if tweet_sentiments else 0.0,
                'sentiment_volatility': np.std(tweet_sentiments) if tweet_sentiments else 0.0,
                'total_tweets': len(tweets),
                'tweet_data': tweet_data
            }
        except Exception as e:
            st.error(f"Error analyzing sentiment: {str(e)}")
            return default_sentiment


    def cache_price_data(self, token_address: str, price_data: dict):
        """Cache new price data"""
        with self.conn:
            self.conn.execute("""
                INSERT OR REPLACE INTO price_history 
                VALUES (?, ?, ?, ?, ?)
            """, (
                token_address,
                datetime.now(),
                price_data['price'],
                price_data['volume'],
                price_data['liquidity']
            ))

class RiskManager:
    @staticmethod
    def calculate_risk_metrics(memecoin_data, sentiment_data):
        """Calculate risk metrics for the trade"""
        try:
            liquidity = float(memecoin_data['liquidity']['usd'])
            volume = float(memecoin_data['volume']['h24'])
            price_change = float(memecoin_data.get('priceChange', {}).get('h24', 0))
            
            risk_metrics = {
                'liquidity_score': min(liquidity / 1000000, 1),
                'volume_score': min(volume / 100000, 1),
                'price_volatility': abs(price_change) / 100,
                'sentiment_risk': abs(sentiment_data['sentiment_volatility']),
                'social_volume': min(sentiment_data['total_tweets'] / 1000, 1)
            }
            
            risk_score = (
                (1 - risk_metrics['liquidity_score']) * 30 +
                (1 - risk_metrics['volume_score']) * 20 +
                risk_metrics['price_volatility'] * 25 +
                risk_metrics['sentiment_risk'] * 15 +
                (1 - risk_metrics['social_volume']) * 10
            )
            
            return risk_score, risk_metrics
        except Exception as e:
            st.error(f"Error calculating risk metrics: {str(e)}")
            return 100, {}

# Streamlit UI
st.title("Enhanced Solana Trading")

# Wallet connection
# Wallet connection
if not st.session_state.wallet_connected:
    if st.button("Connect Phantom Wallet"):
        with st.spinner("Connecting to wallet..."):
            result = wallet_connect()
            if result and isinstance(result, dict) and result.get("connected", False):
                st.session_state.wallet_connected = True
                st.session_state.wallet_address = result.get("address")
                st.success(f"Connected Wallet: {st.session_state.wallet_address}")
                st.rerun()  # Refresh the page to update the UI
            else:
                st.error("Failed to connect wallet. Please make sure Phantom is installed.")

twitter_api = None
try:
    # Check if Twitter API keys exist in secrets
    if "TWITTER_API_KEYS" in st.secrets:
        auth = tweepy.OAuth1UserHandler(
            st.secrets["TWITTER_API_KEYS"]["consumer_key"],
            st.secrets["TWITTER_API_KEYS"]["consumer_secret"],
            st.secrets["TWITTER_API_KEYS"]["access_token"],
            st.secrets["TWITTER_API_KEYS"]["access_token_secret"]
        )
        twitter_api = tweepy.API(auth)
except Exception as e:
    st.warning("Twitter API configuration failed. Social sentiment analysis will be disabled.")

class WalletMonitor:
    def __init__(self, cache: DataCache, alert_config: AlertConfig):
        self.cache = cache
        self.alert_config = alert_config
        self.monitored_wallets = set()

    def add_wallet(self, wallet_address: str):
        """Add wallet to monitoring"""
        self.monitored_wallets.add(wallet_address)

    def get_wallet_tokens(self, wallet_address: str) -> List[str]:
        """Get tokens in wallet"""
        # Implement Solana token account lookup
        pass

    async def monitor_wallet_tokens(self):
        """Monitor tokens in watched wallets"""
        while True:
            for wallet in self.monitored_wallets:
                tokens = self.get_wallet_tokens(wallet)
                for token in tokens:
                    await self.check_token_alerts(token)
            await asyncio.sleep(60)  # Check every minute

    async def check_token_alerts(self, token_address: str):
        """Check for alert conditions"""
        try:
            # Get latest data
            price_data = self.cache.get_price_history(token_address, days=1)
            if price_data.empty:
                return

            alerts = []
            
            # Price drop alert
            price_change = (price_data['price'].iloc[-1] / price_data['price'].iloc[0]) - 1
            if price_change < -self.alert_config.price_drop_threshold:
                alerts.append({
                    'type': 'PRICE_DROP',
                    'severity': 'HIGH',
                    'message': f'Price dropped by {-price_change:.1%}'
                })

            # Liquidity drop alert
            liq_change = (price_data['liquidity'].iloc[-1] / price_data['liquidity'].iloc[0]) - 1
            if liq_change < -self.alert_config.liquidity_drop_threshold:
                alerts.append({
                    'type': 'LIQUIDITY_DROP',
                    'severity': 'CRITICAL',
                    'message': f'Liquidity dropped by {-liq_change:.1%}'
                })

            # Volume spike alert
            avg_volume = price_data['volume'].mean()
            current_volume = price_data['volume'].iloc[-1]
            if current_volume > avg_volume * self.alert_config.volume_spike_threshold:
                alerts.append({
                    'type': 'VOLUME_SPIKE',
                    'severity': 'MEDIUM',
                    'message': f'Volume {current_volume/avg_volume:.1f}x above average'
                })

            # Save and notify alerts
            for alert in alerts:
                self.save_alert(token_address, alert)
                await self.notify_alert(token_address, alert)

        except Exception as e:
            st.error(f"Error checking alerts: {e}")

    def save_alert(self, token_address: str, alert: Dict):
        """Save alert to database"""
        with self.cache.conn:
            self.cache.conn.execute("""
                INSERT INTO alert_history 
                VALUES (?, ?, ?, ?, ?)
            """, (
                token_address,
                alert['type'],
                datetime.now(),
                alert['severity'],
                alert['message']
            ))

    async def notify_alert(self, token_address: str, alert: Dict):
        """Notify user of alert"""
        # You can implement different notification methods here
        # For now, we'll just show in Streamlit
        st.warning(f"Alert for {token_address}: {alert['message']} ({alert['severity']})")


class WalletAnalyzer:
    def __init__(self):
        self.risk_threshold = {
            'dev_wallet_percentage': 0.10,  # 10% max for dev wallets
            'top10_holders_percentage': 0.50,  # 50% max for top 10 holders
            'min_unique_holders': 100
        }
        async def fetch_holder_data(self, token_address: str) -> List[Dict]:
            """Fetch token holder data from Solana"""
            try:
                # Use Solana Web3 to fetch token accounts
                token_accounts = await self.client.get_token_accounts_by_owner(
                    token_address,
                    {'programId': 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'}
                )
                
                holders = []
                for account in token_accounts['result']['value']:
                    balance = account['account']['data']['parsed']['info']['tokenAmount']['uiAmount']
                    owner = account['pubkey']
                    
                    holders.append({
                        'address': owner,
                        'balance': balance,
                        'last_transaction': None  # You could fetch this if needed
                    })
                
                return holders
                
            except Exception as e:
                st.error(f"Error fetching holder data: {e}")
                return []

    def identify_dev_wallets(self, holders_data: List[Dict]) -> List[Dict]:
        """Identify potential developer wallets"""
        dev_wallets = []
        total_supply = sum(holder['balance'] for holder in holders_data)
        
        for holder in holders_data:
            # Criteria for identifying dev wallets:
            # 1. Large initial allocation
            # 2. Early transaction history
            # 3. Multiple token interactions
            
            wallet_share = holder['balance'] / total_supply if total_supply > 0 else 0
            
            if wallet_share > 0.05:  # Holds more than 5% of supply
                try:
                    # You could add more sophisticated checks here
                    tx_history = self.get_wallet_transaction_history(holder['address'])
                    is_early_holder = self.check_if_early_holder(tx_history)
                    has_dev_pattern = self.analyze_transaction_pattern(tx_history)
                    
                    if is_early_holder or has_dev_pattern:
                        dev_wallets.append({
                            'address': holder['address'],
                            'balance': holder['balance'],
                            'share': wallet_share,
                            'risk_score': self.calculate_dev_wallet_risk(wallet_share, tx_history)
                        })
                        
                except Exception as e:
                    st.warning(f"Could not analyze wallet {holder['address']}: {e}")
        
        return dev_wallets

    # Helper methods for WalletAnalyzer
    def get_wallet_transaction_history(self, wallet_address: str) -> List[Dict]:
        """Get transaction history for a wallet"""
        # Implement actual transaction fetching logic
        return []

    def check_if_early_holder(self, tx_history: List[Dict]) -> bool:
        """Check if wallet was an early holder"""
        return True  # Implement actual logic

    def analyze_transaction_pattern(self, tx_history: List[Dict]) -> bool:
        """Analyze if transaction pattern matches developer behavior"""
        return True  # Implement actual logic

    def calculate_dev_wallet_risk(self, wallet_share: float, tx_history: List[Dict]) -> float:
        """Calculate risk score for potential developer wallet"""
        risk_score = min(wallet_share * 5, 1.0)  # Basic score based on holdings
        return risk_score

    def analyze_wallet_distribution(self, token_address):
        """Analyze token holder distribution"""
        try:
            # Fetch holder data from Solana (you'll need to implement the actual API call)
            holders_data = self.fetch_holder_data(token_address)
            
            # Calculate key metrics
            total_supply = sum(holder['balance'] for holder in holders_data)
            dev_wallets = self.identify_dev_wallets(holders_data)
            dev_percentage = sum(w['balance'] for w in dev_wallets) / total_supply
            
            # Sort holders by balance
            sorted_holders = sorted(holders_data, key=lambda x: x['balance'], reverse=True)
            top10_percentage = sum(h['balance'] for h in sorted_holders[:10]) / total_supply
            
            return {
                'dev_wallet_percentage': dev_percentage,
                'top10_holders_percentage': top10_percentage,
                'unique_holders': len(holders_data),
                'dev_wallets': dev_wallets,
                'holder_distribution': self.calculate_distribution_metrics(sorted_holders)
            }
        except Exception as e:
            st.error(f"Error analyzing wallets: {e}")
            return None

    def calculate_risk_score(self, wallet_analysis):
        """Calculate risk score based on wallet distribution"""
        if not wallet_analysis:
            return 1.0  # Maximum risk if analysis fails
            
        risk_score = 0
        
        # Dev wallet concentration risk
        if wallet_analysis['dev_wallet_percentage'] > self.risk_threshold['dev_wallet_percentage']:
            risk_score += 0.4
            
        # Top holder concentration risk    
        if wallet_analysis['top10_holders_percentage'] > self.risk_threshold['top10_holders_percentage']:
            risk_score += 0.3
            
        # Holder count risk
        if wallet_analysis['unique_holders'] < self.risk_threshold['min_unique_holders']:
            risk_score += 0.3
            
        return min(risk_score, 1.0)

class BaseTrader:
    def __init__(self, client, wallet):
        self.client = client
        self.wallet = wallet
        self.trade_history = []

    async def get_current_price(self, token_address):
        """Get current price for a token"""
        try:
            # Add actual price fetching logic here
            response = await self.client.get_token_price(token_address)
            return float(response['price'])
        except Exception as e:
            st.error(f"Error getting price: {e}")
            return None

class AutomatedTrader(BaseTrader):
    def __init__(self, client, wallet):
        super().__init__(client, wallet)
        self.active_trades = []
        self.auto_levels = {}
        
    async def monitor_price(self, token_address, target_price, stop_loss):
        """Monitor price and execute trade when conditions are met"""
        while True:
            current_price = await self.get_current_price(token_address)
            
            if current_price >= target_price:
                await self.execute_trade(token_address, 'sell')
                break
            elif current_price <= stop_loss:
                await self.execute_trade(token_address, 'sell')
                break
                
            await asyncio.sleep(5)  # Check every 5 seconds

class DexAnalyzer:
    def __init__(self):
        self.rug_indicators = {
            'min_liquidity_age': timedelta(days=2),
            'min_tx_count': 100,
            'min_liquidity_usd': 10000,
            'suspicious_buy_sell_ratio': 0.3,  # Very low sells compared to buys
            'suspicious_holder_count': 10
        }

    def analyze_pair_health(self, pair_data):
        """Analyze pair for rug pull risks and health indicators"""
        try:
            # Basic metrics
            liquidity_usd = float(pair_data['liquidity']['usd'])
            pair_age = datetime.now() - datetime.fromtimestamp(pair_data['pairCreatedAt'])
            tx_count = sum(int(pair_data['txns']['h24'].get(k, 0)) for k in ['buys', 'sells'])
            
            # Calculate buy/sell ratio
            buys = int(pair_data['txns']['h24'].get('buys', 0))
            sells = int(pair_data['txns']['h24'].get('sells', 0))
            buy_sell_ratio = buys / sells if sells > 0 else float('inf')
            
            # Analyze price history for suspicious patterns
            price_history = self.get_price_history(pair_data['baseToken']['address'])
            sudden_drops = self.detect_sudden_drops(price_history)
            liquidity_removals = self.detect_liquidity_removals(price_history)
            
            risk_factors = []
            risk_score = 0
            
            # Age check
            if pair_age < self.rug_indicators['min_liquidity_age']:
                risk_factors.append("Very new token (high risk)")
                risk_score += 0.3
            
            # Transaction activity check
            if tx_count < self.rug_indicators['min_tx_count']:
                risk_factors.append("Low transaction count")
                risk_score += 0.2
            
            # Liquidity check
            if liquidity_usd < self.rug_indicators['min_liquidity_usd']:
                risk_factors.append("Low liquidity")
                risk_score += 0.2
            
            # Buy/Sell ratio check
            if buy_sell_ratio > 1/self.rug_indicators['suspicious_buy_sell_ratio']:
                risk_factors.append("Suspicious buy/sell ratio")
                risk_score += 0.2
            
            # Price and liquidity pattern checks
            if sudden_drops:
                risk_factors.append("History of sudden price drops")
                risk_score += 0.3
            
            if liquidity_removals:
                risk_factors.append("History of liquidity removals")
                risk_score += 0.4
            
            return {
                'risk_score': min(risk_score, 1.0),
                'risk_factors': risk_factors,
                'metrics': {
                    'liquidity_usd': liquidity_usd,
                    'pair_age_days': pair_age.days,
                    'tx_count_24h': tx_count,
                    'buy_sell_ratio': buy_sell_ratio,
                    'sudden_drops': len(sudden_drops),
                    'liquidity_removals': len(liquidity_removals)
                }
            }
        except Exception as e:
            st.error(f"Error analyzing pair health: {e}")
            return None

    def detect_dead_project_revival(self, pair_data, social_metrics):
        """Analyze if this is a dead project showing signs of revival"""
        try:
            # Check historical activity
            recent_tx_count = sum(int(pair_data['txns']['h24'].get(k, 0)) for k in ['buys', 'sells'])
            previous_tx_count = sum(int(pair_data['txns']['h24'].get(k, 0)) for k in ['buys', 'sells'])
            
            # Volume comparison
            current_volume = float(pair_data['volume']['h24'])
            prev_volume = float(pair_data['volume']['h6'])  # Using 6h as comparison
            volume_increase = (current_volume - prev_volume) / prev_volume if prev_volume > 0 else float('inf')
            
            # Social activity surge
            social_activity_surge = (
                social_metrics['twitter']['volume'] > 100 or 
                social_metrics['tiktok']['total_views'] > 10000
            )
            
            is_revival = False
            revival_factors = []
            
            if recent_tx_count > previous_tx_count * 3:
                revival_factors.append("Sudden increase in transactions")
                is_revival = True
            
            if volume_increase > 2:  # 200% increase
                revival_factors.append("Major volume increase")
                is_revival = True
            
            if social_activity_surge:
                revival_factors.append("Social media activity surge")
                is_revival = True
            
            return {
                'is_revival': is_revival,
                'revival_factors': revival_factors,
                'metrics': {
                    'volume_increase': volume_increase,
                    'tx_count_increase': recent_tx_count / previous_tx_count if previous_tx_count > 0 else float('inf'),
                    'social_activity': social_metrics
                }
            }
        except Exception as e:
            st.error(f"Error analyzing project revival: {e}")
            return None

class TradingRecommendation:
    def __init__(self):
        self.weight_social = 0.3
        self.weight_price = 0.3
        self.weight_volume = 0.2
        self.weight_momentum = 0.2
        
    def analyze_price_action(self, price_data):
        """Analyze price movements and patterns"""
        latest_price = price_data['close'].iloc[-1]
        price_change = (latest_price - price_data['close'].iloc[0]) / price_data['close'].iloc[0] * 100
        volatility = price_data['high'].max() / price_data['low'].min() - 1
        
        return {
            'trend': 1 if price_change > 0 else -1,
            'volatility_score': max(0, 1 - volatility),  # Lower volatility is better
            'momentum': price_change / volatility if volatility > 0 else price_change
        }

    def analyze_volume_profile(self, price_data, token_data):
        """Analyze trading volume patterns"""
        avg_volume = price_data['volume'].mean()
        current_volume = price_data['volume'].iloc[-1]
        liquidity = float(token_data['pairs'][0]['liquidity']['usd'])
        
        return {
            'volume_trend': current_volume / avg_volume,
            'liquidity_score': min(1, liquidity / 1000000),  # Normalize to 0-1
            'volume_stability': 1 - price_data['volume'].std() / price_data['volume'].mean()
        }

    def calculate_social_score(self, social_metrics):
        """Calculate combined social sentiment score"""
        twitter_metrics = social_metrics['twitter']
        tiktok_metrics = social_metrics['tiktok']
        
        twitter_score = (
            twitter_metrics['sentiment'] * 0.6 +
            min(1, twitter_metrics['volume'] / 1000) * 0.4
        )
        
        tiktok_score = (
            min(1, tiktok_metrics['total_views'] / 1000000) * 0.5 +
            tiktok_metrics['engagement_rate'] * 0.5
        )
        
        return (twitter_score * 0.6 + tiktok_score * 0.4)

    def get_recommendation(self, price_data, token_data, social_metrics):
        """Generate trading recommendation based on all available data"""
        price_analysis = self.analyze_price_action(price_data)
        volume_analysis = self.analyze_volume_profile(price_data, token_data)
        social_score = self.calculate_social_score(social_metrics)
        
        # Calculate composite score (0-100)
        score = (
            social_score * self.weight_social +
            (price_analysis['volatility_score'] * 0.5 + 
             max(0, price_analysis['momentum']) * 0.5) * self.weight_price +
            (volume_analysis['liquidity_score'] * 0.6 + 
             volume_analysis['volume_stability'] * 0.4) * self.weight_volume +
            (max(0, price_analysis['momentum']) * 0.7 + 
             volume_analysis['volume_trend'] * 0.3) * self.weight_momentum
        ) * 100
        
        # Generate recommendation
        if score >= 70:
            recommendation = "Strong Buy"
            color = "success"
        elif score >= 60:
            recommendation = "Buy"
            color = "success"
        elif score >= 40:
            recommendation = "Hold"
            color = "warning"
        elif score >= 30:
            recommendation = "Sell"
            color = "danger"
        else:
            recommendation = "Strong Sell"
            color = "danger"

        return {
            'score': score,
            'recommendation': recommendation,
            'color': color,
            'details': {
                'price_action': price_analysis,
                'volume_profile': volume_analysis,
                'social_sentiment': social_score
            },
            'suggested_entry': price_data['low'].mean() * 0.98,  # 2% below average low
            'suggested_stop_loss': price_data['low'].min() * 0.95,  # 5% below lowest low
            'suggested_target': price_data['high'].max() * 1.05  # 5% above highest high
        }

class SocialMediaAnalyzer:
    def __init__(self, twitter_api, tiktok_api):
        self.twitter_api = twitter_api
        self.tiktok_api = tiktok_api
        
    async def get_tiktok_data(self, ticker_formats, count=20):
        """Fetch TikTok data for a hashtag"""
        try:
            # Use the TikTok format (with #)
            tag_data = await self.tiktok_api.hashtag(ticker_formats['tiktok'])
            videos = await tag_data.videos(count=count)
            
            tiktok_data = []
            for video in videos:
                data = {
                    'desc': video.desc,
                    'create_time': video.create_time,
                    'stats': {
                        'views': video.stats['playCount'],
                        'likes': video.stats['diggCount'],
                        'shares': video.stats['shareCount'],
                        'comments': video.stats['commentCount']
                    }
                }
                tiktok_data.append(data)
            
            return tiktok_data
        except Exception as e:
            st.error(f"TikTok API error: {e}")
            return []
    def analyze_tweet_sentiment(self, tweets):
        """Analyze sentiment of tweets"""
        total_sentiment = 0
        tweet_count = 0
        engagement_total = 0
        
        for tweet in tweets:
            # Analyze sentiment using TextBlob
            analysis = TextBlob(tweet.text)
            sentiment = analysis.sentiment.polarity
            
            # Calculate engagement
            engagement = tweet.favorite_count + tweet.retweet_count
            engagement_total += engagement
            
            # Weight sentiment by engagement
            total_sentiment += sentiment * (1 + min(engagement/1000, 1))
            tweet_count += 1
        
        return {
            'sentiment': total_sentiment / tweet_count if tweet_count > 0 else 0,
            'volume': tweet_count,
            'engagement': engagement_total / tweet_count if tweet_count > 0 else 0
        }

    def analyze_tiktok_engagement(self, tiktok_data):
        """Analyze TikTok engagement metrics"""
        if not tiktok_data:
            return {
                'total_views': 0,
                'engagement_rate': 0,
                'trend_score': 0
            }
        
        total_views = 0
        total_engagement = 0
        total_shares = 0
        
        for video in tiktok_data:
            stats = video['stats']
            views = stats['views']
            likes = stats['likes']
            comments = stats['comments']
            shares = stats['shares']
            
            total_views += views
            total_engagement += likes + comments
            total_shares += shares
        
        engagement_rate = total_engagement / total_views if total_views > 0 else 0
        trend_score = total_shares / len(tiktok_data) if tiktok_data else 0
        
        return {
            'total_views': total_views,
            'engagement_rate': engagement_rate,
            'trend_score': trend_score
        }
        
    def analyze_social_metrics(self, ticker_formats):
        """Analyze metrics from multiple social platforms"""
        # Twitter analysis (using $ format)
        tweets = self.twitter_api.search_tweets(
            q=ticker_formats['twitter'], 
            count=100, 
            lang='en'
        )
        twitter_sentiment = self.analyze_tweet_sentiment(tweets)
        
        # TikTok analysis (using # format)
        tiktok_data = asyncio.run(self.get_tiktok_data(ticker_formats))
        tiktok_metrics = self.analyze_tiktok_engagement(tiktok_data)
        
        return {
            'twitter': twitter_sentiment,
            'tiktok': tiktok_metrics,
            'combined_score': self.calculate_combined_score(twitter_sentiment, tiktok_metrics)
        }


class PriceChartManager:
    @staticmethod
    def create_price_chart(price_data, token_symbol):
        """Create interactive price chart"""
        fig = go.Figure()
        
        # Candlestick chart
        fig.add_trace(go.Candlestick(
            x=price_data.index,
            open=price_data['open'],
            high=price_data['high'],
            low=price_data['low'],
            close=price_data['close'],
            name='Price'
        ))
        
        # Add volume bars
        fig.add_trace(go.Bar(
            x=price_data.index,
            y=price_data['volume'],
            name='Volume',
            yaxis='y2'
        ))
        
        # Layout
        fig.update_layout(
            title=f'{token_symbol} Price and Volume',
            yaxis_title='Price (USD)',
            yaxis2=dict(
                title='Volume',
                overlaying='y',
                side='right'
            ),
            xaxis_title='Date',
            height=600
        )
        
        return fig

class AutomatedTrader(BaseTrader):
    def __init__(self, client, wallet):
        super().__init__(client, wallet)
        self.active_trades = []
        self.auto_levels = {}
        
    async def monitor_price(self, token_address, target_price, stop_loss):
        """Monitor price and execute trade when conditions are met"""
        while True:
            current_price = await self.get_current_price(token_address)
            
            if current_price >= target_price:
                await self.execute_trade(token_address, 'sell')
                break
            elif current_price <= stop_loss:
                await self.execute_trade(token_address, 'sell')
                break
                
            await asyncio.sleep(5)  # Check every 5 seconds
    
    async def execute_trade(self, token_address, trade_type, amount=None):
        """Execute trade on DEX"""
        try:
            # Create transaction
            transaction = Transaction()
            
            # Add transfer instruction
            transfer_instruction = transfer(
                TransferParams(
                    from_pubkey=self.wallet["public_key"],
                    to_pubkey=token_address,
                    lamports=int(amount * 1e9) if amount else 0
                )
            )
            transaction.add(transfer_instruction)
            
            # Send transaction
            response = self.client.send_transaction(
                transaction,
                opts=TxOpts(skip_confirmation=False)
            )
            
            # Record trade
            self.trade_history.append({
                'timestamp': datetime.now(),
                'token': token_address,
                'type': trade_type,
                'amount': amount,
                'status': 'success',
                'tx_signature': response['result']
            })
            
            return response['result']
            
        except Exception as e:
            self.trade_history.append({
                'timestamp': datetime.now(),
                'token': token_address,
                'type': trade_type,
                'amount': amount,
                'status': 'failed',
                'error': str(e)
            })
            raise e
    
    def set_auto_levels(self, token_address, levels):
        """Set automatic buy/sell levels"""
        self.auto_levels[token_address] = {
            'buy': sorted(levels['buy'], reverse=True),  # Higher to lower
            'sell': sorted(levels['sell'])  # Lower to higher
        }
        
    async def monitor_auto_levels(self, token_address):
        """Monitor price and execute trades at preset levels"""
        while True:
            try:
                current_price = await self.get_current_price(token_address)
                levels = self.auto_levels.get(token_address, {})
                
                # Check buy levels
                for buy_level in levels.get('buy', []):
                    if current_price <= buy_level['price']:
                        await self.execute_trade(token_address, 'buy', buy_level['amount'])
                        levels['buy'].remove(buy_level)
                
                # Check sell levels
                for sell_level in levels.get('sell', []):
                    if current_price >= sell_level['price']:
                        await self.execute_trade(token_address, 'sell', sell_level['amount'])
                        levels['sell'].remove(sell_level)
                
                await asyncio.sleep(5)
            except Exception as e:
                st.error(f"Error monitoring levels: {e}")
                await asyncio.sleep(30)


def normalize_ticker(ticker: str) -> dict:
    """
    Normalize ticker for different platforms
    Returns a dict with formatted tickers for each platform
    """
    # Remove any leading/trailing whitespace
    clean_ticker = ticker.strip()
    
    # Remove $ or # if present
    clean_ticker = clean_ticker.lstrip('$').lstrip('#')
    
    return {
        'dexscreener': clean_ticker,  # Raw ticker for DexScreener
        'twitter': f"${clean_ticker}",  # Add $ for Twitter
        'tiktok': f"#{clean_ticker}",   # Add # for TikTok
        'display': clean_ticker.upper()  # Display version
    }

def fetch_dexscreener_data(ticker_formats):
    """Fetch token data from Dexscreener API"""
    try:
        # Use the clean ticker format for DexScreener
        url = f"https://api.dexscreener.com/latest/dex/tokens/solana/{ticker_formats['dexscreener']}"
        response = requests.get(url)
        data = response.json()
        
        if 'pairs' in data and data['pairs']:
            return data
        return None
        
    except Exception as e:
        st.error(f"Error fetching Dexscreener data: {e}")
        return None


def prepare_price_data(token_data):
    """Prepare price data for charting"""
    try:
        # Extract price history from token data
        pair = token_data['pairs'][0]  # Use most liquid pair
        
        # Construct DataFrame
        price_data = pd.DataFrame({
            'open': [float(pair.get('priceUsd', 0))],  # Current price as open
            'high': [float(pair.get('priceUsd', 0)) * (1 + float(pair.get('priceChange', {}).get('h24', 0))/100)],
            'low': [float(pair.get('priceUsd', 0)) * (1 - float(pair.get('priceChange', {}).get('h24', 0))/100)],
            'close': [float(pair.get('priceUsd', 0))],
            'volume': [float(pair.get('volume', {}).get('h24', 0))]
        }, index=[pd.Timestamp.now()])
        
        # Add some historical data points using price change
        for i in range(1, 24):  # Create 24 hours of dummy data
            time_point = pd.Timestamp.now() - pd.Timedelta(hours=i)
            price_change = float(pair.get('priceChange', {}).get('h24', 0)) / 24 * i
            base_price = float(pair.get('priceUsd', 0))
            
            historical_price = base_price / (1 + price_change/100)
            price_data.loc[time_point] = {
                'open': historical_price * 0.998,
                'high': historical_price * 1.005,
                'low': historical_price * 0.995,
                'close': historical_price,
                'volume': float(pair.get('volume', {}).get('h24', 0)) / 24
            }
        
        # Sort index
        price_data.sort_index(inplace=True)
        
        return price_data
        
    except Exception as e:
        st.error(f"Error preparing price data: {e}")
        return pd.DataFrame()

# Streamlit UI
def main():
    st.title("Advanced Solana Memecoin Trading Bot")
    
    # Initialize APIs and components
    client = Client("https://api.mainnet-beta.solana.com")
    cache = DataCache()
    pattern_detector = PatternDetector(cache)
    wallet_monitor = WalletMonitor(cache, AlertConfig())
    dex_analyzer = DexAnalyzer()

    # Initialize wallet connection
    connected_wallet = wallet_connect()
    
    if connected_wallet:
        wallet_address = connected_wallet["address"]
        st.success(f"Connected Wallet: {wallet_address}")
        
        # Initialize automated trader
        trader = AutomatedTrader(client, connected_wallet)
        
        # Add wallet to monitor
        wallet_monitor.add_wallet(wallet_address)
        
        # Start monitoring in background
        monitoring_task = asyncio.create_task(wallet_monitor.monitor_wallet_tokens())
    else:
        st.warning("Please connect your wallet to continue")
        st.info("Make sure you have a Solana wallet extension installed (Phantom, Solflare, or Backpack)")
        return
    
    # After fetching token data
    if token_data:
        # Cache new data
        cache.cache_price_data(
            token_data['pairs'][0]['baseToken']['address'],
            {
                'price': float(token_data['pairs'][0]['priceUsd']),
                'volume': float(token_data['pairs'][0]['volume']['h24']),
                'liquidity': float(token_data['pairs'][0]['liquidity']['usd'])
            }
        )
        
        # Detect patterns
        patterns = pattern_detector.detect_patterns(
            token_data['pairs'][0]['baseToken']['address'],
            price_data
        )
        
        # Display patterns
        with st.expander("Pattern Analysis"):
            if patterns:
                for pattern_type, details in patterns.items():
                    st.subheader(pattern_type.replace('_', ' ').title())
                    st.write(f"Confidence: {details['confidence']:.2%}")
                    if 'locations' in details:
                        st.write("Detected at points:", details['locations'])

    # After fetching token data:
    if token_data:
        pair_health = dex_analyzer.analyze_pair_health(token_data['pairs'][0])
        revival_analysis = dex_analyzer.detect_dead_project_revival(token_data['pairs'][0], social_metrics)

        # Display DEX analysis
        with st.expander("DEX Analysis"):
            if pair_health:
                st.subheader("Pair Health Analysis")
                st.metric("Risk Score", f"{pair_health['risk_score']:.2f}")
                
                if pair_health['risk_factors']:
                    st.warning("Risk Factors Detected:")
                    for factor in pair_health['risk_factors']:
                        st.write(f"- {factor}")
                
                st.json(pair_health['metrics'])
            
            if revival_analysis and revival_analysis['is_revival']:
                st.subheader("Project Revival Analysis")
                st.info("Dead Project Revival Detected!")
                for factor in revival_analysis['revival_factors']:
                    st.write(f"- {factor}")
                
                st.json(revival_analysis['metrics'])

    # Social media credentials
    twitter_auth = tweepy.OAuth1UserHandler(
        consumer_key = 'Gpeneaa7JDOr1lL1y3Nie9d6v',
        consumer_secret = '2noMxf6ZbkdBL3qLiSxwpNvgj3UW3yIwLmwA1nBwXOuA0AEfMH',
        access_token = '139061631-ScNlbW18b4OJjAuYVdhgvJT4dorFNIoE3dI9gXVW',
        access_token_secret = 'OwCQwFUH15dGgC0O6V889bdpH39AdUrBPYKHYHBVJOz1a')
    twitter_api = tweepy.API(twitter_auth)
    
    # Initialize TikTok API
    tiktok_api = TikTokApi()
    
    # Initialize analyzers
    social_analyzer = SocialMediaAnalyzer(twitter_api, tiktok_api)
    chart_manager = PriceChartManager()
    
    # Token input with format handling
    raw_ticker = st.text_input("Enter memecoin ticker symbol (e.g., WIF, $WIF):").strip()
    
    if raw_ticker:
        # Normalize ticker for different platforms
        ticker_formats = normalize_ticker(raw_ticker)
        
        # Show which formats are being used
        with st.expander("Ticker Formats"):
            st.write(f"DexScreener Search: {ticker_formats['dexscreener']}")
            st.write(f"Twitter Search: {ticker_formats['twitter']}")
            st.write(f"TikTok Search: {ticker_formats['tiktok']}")
        
        # Fetch token data using normalized ticker
        token_data = fetch_dexscreener_data(ticker_formats)
        
        if token_data:
            # Initialize recommendation engine
            recommendation_engine = TradingRecommendation()

            # Initialize wallet analyzer
            wallet_analyzer = WalletAnalyzer()
            wallet_analysis = wallet_analyzer.analyze_wallet_distribution(token_data['pairs'][0]['baseToken']['address'])

            # Display wallet analysis
            with st.expander("Wallet Analysis"):
                if wallet_analysis:
                    st.metric("Dev Wallet Concentration", f"{wallet_analysis['dev_wallet_percentage']:.1%}")
                    st.metric("Top 10 Holders", f"{wallet_analysis['top10_holders_percentage']:.1%}")
                    st.metric("Unique Holders", wallet_analysis['unique_holders'])
                    
                    # Risk warning
                    risk_score = wallet_analyzer.calculate_risk_score(wallet_analysis)
                    if risk_score > 0.7:
                        st.error("⚠️ High wallet concentration risk detected!")
                    elif risk_score > 0.4:
                        st.warning("⚡ Moderate wallet concentration risk")

            # Direct trading buttons
            col1, col2 = st.columns(2)
            with col1:
                buy_amount = st.number_input("Buy Amount", min_value=0.0, format="%.4f")
                if st.button("Buy Now", type="primary"):
                    asyncio.run(trader.execute_trade(
                        token_data['pairs'][0]['baseToken']['address'],
                        'buy',
                        buy_amount
                    ))
            
            with col2:
                sell_amount = st.number_input("Sell Amount", min_value=0.0, format="%.4f")
                if st.button("Sell Now", type="primary"):
                    asyncio.run(trader.execute_trade(
                        token_data['pairs'][0]['baseToken']['address'],
                        'sell',
                        sell_amount
                    ))
            
            # Auto-levels setup
            with st.expander("Set Auto Levels"):
                st.subheader("Buy Levels")
                num_buy_levels = st.number_input("Number of Buy Levels", 1, 5, 3)
                buy_levels = []
                for i in range(num_buy_levels):
                    col1, col2 = st.columns(2)
                    with col1:
                        price = st.number_input(f"Buy Level {i+1} Price", format="%.8f")
                    with col2:
                        amount = st.number_input(f"Buy Level {i+1} Amount", format="%.4f")
                    buy_levels.append({"price": price, "amount": amount})
                
                st.subheader("Sell Levels")
                num_sell_levels = st.number_input("Number of Sell Levels", 1, 5, 3)
                sell_levels = []
                for i in range(num_sell_levels):
                    col1, col2 = st.columns(2)
                    with col1:
                        price = st.number_input(f"Sell Level {i+1} Price", format="%.8f")
                    with col2:
                        amount = st.number_input(f"Sell Level {i+1} Amount", format="%.4f")
                    sell_levels.append({"price": price, "amount": amount})
                
                if st.button("Start Auto Trading"):
                    trader.set_auto_levels(
                        token_data['pairs'][0]['baseToken']['address'],
                        {'buy': buy_levels, 'sell': sell_levels}
                    )
                    asyncio.run(trader.monitor_auto_levels(
                        token_data['pairs'][0]['baseToken']['address']
                    )) 
            # Get recommendation
            recommendation = recommendation_engine.get_recommendation(
            price_data,
            token_data,
            social_metrics)
            
            # Display recommendation
            col1, col2, col3 = st.columns(3)
            with col1:
                st.metric("Recommendation Score", f"{recommendation['score']:.1f}/100")
            with col2:
                st.markdown(f"**Recommendation:** :{recommendation['color']}[{recommendation['recommendation']}]")
            with col3:
                st.metric("Social Sentiment", f"{recommendation['details']['social_sentiment']:.2f}")
            
            # Display suggested trading levels
            st.subheader("Suggested Trading Levels")
            levels_col1, levels_col2, levels_col3 = st.columns(3)
            with levels_col1:
                st.metric("Entry Price", f"${recommendation['suggested_entry']:.8f}")
            with levels_col2:
                st.metric("Stop Loss", f"${recommendation['suggested_stop_loss']:.8f}")
            with levels_col3:
                st.metric("Target Price", f"${recommendation['suggested_target']:.8f}")
            
            # Display detailed analysis
            with st.expander("Detailed Analysis"):
                st.write("Price Action Analysis:")
                st.json(recommendation['details']['price_action'])
                
                st.write("Volume Profile:")
                st.json(recommendation['details']['volume_profile'])
                
                st.write("Risk Factors:")
                if recommendation['score'] < 50:
                    st.warning("High Risk Factors Detected")
                    if recommendation['details']['volume_profile']['liquidity_score'] < 0.3:
                        st.write("- Low liquidity")
                    if recommendation['details']['price_action']['volatility_score'] < 0.4:
                        st.write("- High volatility")
                    if recommendation['details']['social_sentiment'] < 0:
                        st.write("- Negative social sentiment")
            # Use display format for chart title
            price_data = prepare_price_data(token_data)
            chart = chart_manager.create_price_chart(price_data, ticker_formats['display'])
            st.plotly_chart(chart)
            
            # Social media analysis with formatted tickers
            with st.expander("Social Media Analysis"):
                social_metrics = social_analyzer.analyze_social_metrics(ticker_formats)
                
                col1, col2 = st.columns(2)
                with col1:
                    st.subheader("Twitter Metrics")
                    st.write(f"Sentiment Score: {social_metrics['twitter']['sentiment']:.2f}")
                    st.write(f"Tweet Volume: {social_metrics['twitter']['volume']}")
                
                with col2:
                    st.subheader("TikTok Metrics")
                    st.write(f"Total Views: {social_metrics['tiktok']['total_views']:,}")
                    st.write(f"Engagement Rate: {social_metrics['tiktok']['engagement_rate']:.2%}")
            
            # Automated trading setup
            with st.expander("Automated Trading"):
                col1, col2 = st.columns(2)
                with col1:
                    target_price = st.number_input("Target Price (USD)", 
                                                 min_value=0.0, 
                                                 format="%.8f")
                    stop_loss = st.number_input("Stop Loss (USD)", 
                                              min_value=0.0, 
                                              format="%.8f")
                
                with col2:
                    trade_amount = st.number_input("Trade Amount", 
                                                 min_value=0.0, 
                                                 format="%.4f")
                
                if st.button("Start Automated Trading"):
                    if all([target_price, stop_loss, trade_amount]):
                        asyncio.run(trader.monitor_price(
                            token_data['address'],
                            target_price,
                            stop_loss
                        ))
                    else:
                        st.warning("Please set all trading parameters")
            
            # Trade history
            with st.expander("Trade History"):
                if trader.trade_history:
                    df = pd.DataFrame(trader.trade_history)
                    st.dataframe(df)
                else:
                    st.write("No trades executed yet")

if __name__ == "__main__":
    main()