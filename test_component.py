import streamlit as st
import os
from wallet_component import wallet_connect

st.title("Wallet Component Test")

# Debug info
st.write("Debug Information:")
BUILD_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "frontend", "dist")
st.code(f"""
Current directory: {os.getcwd()}
Build directory: {BUILD_DIR}
Build directory exists: {os.path.exists(BUILD_DIR)}
""")

if os.path.exists(BUILD_DIR):
    st.write("Contents of build directory:", os.listdir(BUILD_DIR))

# Component - Add a unique key
st.write("### Wallet Component")
result = wallet_connect(key="wallet_connect_1")  # Add this key parameter

# Show raw result
st.write("Raw component result:", result)

# Parse result if it exists
if result:
    if isinstance(result, dict):
        if result.get('type') == 'wallet':
            st.success(f"Connected to wallet: {result.get('address')}")
        elif result.get('type') == 'debug':
            st.info(f"Debug: {result.get('message')}")
            if result.get('data'):
                st.json(result['data'])