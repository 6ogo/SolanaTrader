import os
import streamlit.components.v1 as components
import streamlit as st
from typing import Optional, Dict

# Get absolute path to the build directory
COMPONENT_ROOT = os.path.dirname(os.path.abspath(__file__))
BUILD_DIR = os.path.join(COMPONENT_ROOT, "frontend", "dist")

if not os.path.exists(BUILD_DIR):
    st.error(f"Build directory not found: {BUILD_DIR}")
    st.info("Please run 'npm run build' in the frontend directory")
    raise Exception("Build directory not found")

# Verify index.html exists
if not os.path.exists(os.path.join(BUILD_DIR, "index.html")):
    st.error("index.html not found in build directory")
    raise Exception("index.html not found")

# Create the component
try:
    _component_func = components.declare_component(
        "wallet_connect",
        path=BUILD_DIR
    )
except Exception as e:
    st.error(f"Error declaring component: {e}")
    raise e

def wallet_connect(key: Optional[str] = None) -> Optional[Dict]:
    """Create a wallet connection component."""
    try:
        return _component_func(key=key, default=None)
    except Exception as e:
        st.error(f"Error connecting wallet: {str(e)}")
        return None

def init_wallet_component():
    """Initialize the wallet component"""
    try:
        import os
        os.makedirs("frontend/dist", exist_ok=True)
        
        with open("frontend/dist/wallet.html", "w") as f:
            f.write(WALLET_HTML)
        
        return components.declare_component(
            "solana_wallet",
            path="frontend/dist"
        )
    except Exception as e:
        st.error(f"Error initializing wallet component: {str(e)}")
        return None

# Initialize Solana wallet handler
wallet_handler = SolanaWallet()

# Create the wallet connection component
wallet_component = init_wallet_component()

def buy_token(wallet_address: str, token_mint: str, amount: float):
    """Execute token purchase"""
    try:
        # Simplified for now - just create a basic transaction
        tx_data = wallet_handler.create_transfer_tx(
            wallet_address,
            token_mint,  # This will be the recipient address
            amount
        )
        
        if not tx_data:
            return False
            
        # Send the transaction to be signed
        result = wallet_component(
            type="sign_and_send",
            transaction=tx_data["transaction"]
        )
        
        if result and result.get("success"):
            st.success(f"Transaction successful! Signature: {result['signature']}")
            return True
        else:
            st.error("Transaction failed: " + result.get("error", "Unknown error"))
            return False
            
    except Exception as e:
        st.error(f"Error executing purchase: {str(e)}")
        return False
