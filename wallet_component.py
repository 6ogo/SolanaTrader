import streamlit as st
import streamlit.components.v1 as components
import os

# Define the component directory
COMPONENT_PATH = os.path.join(
    os.path.dirname(os.path.abspath(__file__)),
    "./frontend/dist",
)

# Create the component
_solana_wallet = components.declare_component(
    "solana_wallet",
    path=COMPONENT_PATH,
)

def wallet_connect():
    """
    Create a Solana wallet connection component.
    Returns the connected wallet information if successful.
    """
    return _solana_wallet()

# Add to your main.py
def check_wallet_extension():
    """Check if wallet extension is installed"""
    js_code = """
    <script>
    function checkWallet() {
        if (typeof window.phantom !== 'undefined' || 
            typeof window.solflare !== 'undefined' || 
            typeof window.backpack !== 'undefined') {
            return true;
        }
        return false;
    }
    </script>
    """
    st.components.v1.html(js_code, height=0)