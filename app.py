import streamlit as st
import requests
import tweepy
import numpy as np
import pandas as pd
from datetime import datetime, timedelta
import plotly.graph_objects as go
from textblob import TextBlob
from solana.rpc.api import Client
from solana.transaction import Transaction
from solders.system_program import TransferParams, transfer
from solana.rpc.types import TxOpts
from streamlit.components.v1 import components
import talib
import json
from typing import Dict, List

class MemecoinAnalyzer:
    def __init__(self, twitter_api):
        self.twitter_api = twitter_api
        
    def fetch_dexscreener_data(self):
        """Fetch memecoin data from Dexscreener"""
        url = "https://api.dexscreener.com/latest/dex/tokens/solana"
        response = requests.get(url)
        return response.json()
    
    def filter_memecoins(self, data, ticker):
        """Filter memecoins based on ticker"""
        memecoins = []
        for token in data['pairs']:
            if ticker in token['baseToken']['symbol']:
                memecoins.append(token)
        return memecoins
    
    def analyze_social_sentiment(self, ticker, count=100):
        """Analyze social media sentiment"""
        # Twitter analysis
        query = f"#{ticker}"
        tweets = self.twitter_api.search_tweets(q=query, count=count, lang='en')
        
        tweet_sentiments = []
        tweet_data = []
        
        for tweet in tweets:
            # Analyze sentiment
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
        
        sentiment_analysis = {
            'average_sentiment': np.mean(tweet_sentiments),
            'sentiment_volatility': np.std(tweet_sentiments),
            'total_tweets': len(tweets),
            'tweet_data': tweet_data
        }
        
        return sentiment_analysis

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
        liquidity = float(memecoin_data['liquidity']['usd'])
        volume = float(memecoin_data['volume']['h24'])
        price_change = float(memecoin_data.get('priceChange', {}).get('h24', 0))
        
        risk_metrics = {
            'liquidity_score': min(liquidity / 1000000, 1),  # Normalize to 0-1
            'volume_score': min(volume / 100000, 1),
            'price_volatility': abs(price_change) / 100,
            'sentiment_risk': abs(sentiment_data['sentiment_volatility']),
            'social_volume': min(sentiment_data['total_tweets'] / 1000, 1)
        }
        
        # Calculate overall risk score (0-100, higher is riskier)
        risk_score = (
            (1 - risk_metrics['liquidity_score']) * 30 +
            (1 - risk_metrics['volume_score']) * 20 +
            risk_metrics['price_volatility'] * 25 +
            risk_metrics['sentiment_risk'] * 15 +
            (1 - risk_metrics['social_volume']) * 10
        )
        
        return risk_score, risk_metrics

# Streamlit UI
st.title("Enhanced Solana Memecoin Trading Bot")

# Wallet connection
wallet_connected = components.declare_component(
    "solana_wallet",
    path="./dist"
)
connected_wallet = wallet_connected()

if connected_wallet:
    wallet_address = connected_wallet["address"]
    st.success(f"Connected Wallet: {wallet_address}")
else:
    st.warning("Please connect your Solana wallet.")

# Twitter API setup
consumer_key = 'YOUR_CONSUMER_KEY'
consumer_secret = 'YOUR_CONSUMER_SECRET'
access_token = 'YOUR_ACCESS_TOKEN'
access_token_secret = 'YOUR_ACCESS_TOKEN_SECRET'

auth = tweepy.OAuth1UserHandler(consumer_key, consumer_secret, access_token, access_token_secret)
twitter_api = tweepy.API(auth)

# Initialize analyzer
analyzer = MemecoinAnalyzer(twitter_api)

# Input field for ticker symbol
ticker = st.text_input("Enter the memecoin ticker symbol (e.g., DOGE):").upper()

# Analysis section
if st.button("Analyze Token"):
    if ticker:
        with st.spinner("Analyzing token..."):
            # Fetch and filter memecoin data
            memecoin_data = analyzer.fetch_dexscreener_data()
            filtered_memecoins = analyzer.filter_memecoins(memecoin_data, ticker)
            
            if filtered_memecoins:
                memecoin = filtered_memecoins[0]  # Use first matching pair
                
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
                
                st.subheader("Social Sentiment Analysis")
                col1, col2 = st.columns(2)
                with col1:
                    st.metric("Average Sentiment", 
                             f"{sentiment_data['average_sentiment']:.2f}")
                with col2:
                    st.metric("Tweet Volume", 
                             sentiment_data['total_tweets'])
                
                # Display recent tweets
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
                st.subheader("Execute Trade")
                trade_amount = st.number_input("Amount to Trade:", 
                                             min_value=0.0, 
                                             format="%.4f")
                
                if st.button("Execute Trade"):
                    if trade_amount > 0 and connected_wallet:
                        try:
                            # Initialize Solana client
                            client = Client("https://api.mainnet-beta.solana.com")
                            
                            # Create transaction
                            transaction = Transaction()
                            transfer_instruction = transfer(
                                TransferParams(
                                    from_pubkey=connected_wallet["public_key"],
                                    to_pubkey=memecoin['baseToken']['address'],
                                    lamports=int(trade_amount * 1e9)
                                )
                            )
                            transaction.add(transfer_instruction)
                            
                            # Execute transaction
                            response = client.send_transaction(
                                transaction,
                                opts=TxOpts(skip_confirmation=False)
                            )
                            st.success(f"Transaction successful! Signature: {response['result']}")
                            
                        except Exception as e:
                            st.error(f"Transaction failed: {e}")
                    else:
                        st.warning("Please enter a valid amount and connect your wallet.")
            else:
                st.warning("No memecoin found with the specified ticker.")
    else:
        st.warning("Please enter a ticker symbol.")