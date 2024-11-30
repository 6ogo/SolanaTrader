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


class TechnicalAnalysis:
    @staticmethod
    def calculate_indicators(price_data: pd.Series) -> Dict:
        """Calculate technical indicators for the price data"""
        prices = price_data.astype(float)
        
        indicators = {
            'rsi': talib.RSI(prices),
            'macd': talib.MACD(prices)[0],
            'macd_signal': talib.MACD(prices)[1],
            'macd_hist': talib.MACD(prices)[2],
            'ema_9': talib.EMA(prices, timeperiod=9),
            'sma_20': talib.SMA(prices, timeperiod=20),
            'momentum': talib.MOM(prices, timeperiod=14)
        }
        
        return indicators

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

# Initialize analyzer
analyzer = MemecoinAnalyzer(twitter_api)

# Input field for ticker symbol
ticker = st.text_input("Enter the memecoin ticker symbol (e.g., DOGE):").upper()

# Analysis section
if st.button("Analyze Token"):
    if ticker:
        with st.spinner("Analyzing token..."):
            memecoin_data = analyzer.fetch_dexscreener_data()
            filtered_memecoins = analyzer.filter_memecoins(memecoin_data, ticker)
            
            if filtered_memecoins:
                memecoin = filtered_memecoins[0]
                
                # Display basic info
                col1, col2, col3 = st.columns(3)
                with col1:
                    st.metric("Price (USD)", f"${float(memecoin['priceUsd']):.6f}")
                with col2:
                    st.metric("24h Volume", f"${float(memecoin['volume']['h24']):,.0f}")
                with col3:
                    st.metric("Liquidity", f"${float(memecoin['liquidity']['usd']):,.0f}")
                
                # Social sentiment analysis
                sentiment_data = analyzer.analyze_social_sentiment(ticker)
                
                if sentiment_data['total_tweets'] > 0:
                    st.subheader("Social Sentiment Analysis")
                    col1, col2 = st.columns(2)
                    with col1:
                        st.metric("Average Sentiment", f"{sentiment_data['average_sentiment']:.2f}")
                    with col2:
                        st.metric("Tweet Volume", sentiment_data['total_tweets'])
                    
                    st.subheader("Recent Tweets")
                    for tweet in sentiment_data['tweet_data'][:5]:
                        st.write(f"User: @{tweet['user']}")
                        st.write(f"Tweet: {tweet['text']}")
                        st.write(f"Sentiment: {tweet['sentiment']:.2f}")
                        st.write("---")
                
                # Risk analysis
                risk_score, risk_metrics = RiskManager.calculate_risk_metrics(
                    memecoin, sentiment_data
                )
                
                st.subheader("Risk Analysis")
                st.metric("Risk Score", f"{risk_score:.1f}/100")
                
                # Trading interface
                if st.session_state.wallet_connected:
                    st.subheader("Execute Trade")
                    col1, col2 = st.columns(2)
                    with col1:
                        trade_amount = st.number_input(
                            "Amount (SOL):",
                            min_value=0.0,
                            format="%.4f"
                        )
                    with col2:
                        trade_type = st.selectbox(
                            "Trade Type",
                            ["Buy", "Sell"]
                        )
                    
                    if st.button("Execute Trade"):
                        if trade_amount > 0:
                            token_mint = memecoin['baseToken']['address']
                            if trade_type == "Buy":
                                success = buy_token(
                                    st.session_state.wallet_address,
                                    token_mint,
                                    trade_amount
                                )
                                if success:
                                    st.balloons()
                        else:
                            st.warning("Please enter a valid amount.")
                else:
                    st.warning("Please connect your wallet to trade.")
            else:
                st.warning("No memecoin found with the specified ticker.")
    else:
        st.warning("Please enter a ticker symbol.")