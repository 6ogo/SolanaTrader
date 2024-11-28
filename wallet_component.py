import streamlit.components.v1 as components
import streamlit as st
from typing import Optional, Dict
import os

# Define the path to the built frontend
BUILD_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "frontend", "dist")

# Declare the Streamlit custom component
_component_func = components.declare_component("wallet_connect", path=BUILD_DIR)

def wallet_connect() -> Optional[Dict]:
    """
    Create a wallet connection component and handle the connection state.
    Returns the wallet information if connected, None otherwise.
    """
    try:
        # Call the custom component
        wallet_state = _component_func()

        # Process the component's output
        if wallet_state and isinstance(wallet_state, dict):
            return {
                "address": wallet_state.get("address"),
                "connected": wallet_state.get("connected", False),
                "connection": wallet_state.get("connection"),
                "provider": wallet_state.get("provider"),
            }
        return None
    except Exception as e:
        st.error(f"Error in wallet_connect: {e}")
        return None

# Streamlit app logic
if __name__ == "__main__":
    st.title("Wallet Connect Component")
    
    # Use the wallet_connect component
    result = wallet_connect()
    
    if result:
        st.success(f"Connected Wallet: {result['address']}")
    else:
        st.warning("No wallet connected")
