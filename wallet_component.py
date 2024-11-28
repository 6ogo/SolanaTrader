import streamlit.components.v1 as components
import os

def init_wallet_component():
    # Get the absolute path to the frontend/dist directory
    parent_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(parent_dir, "frontend", "dist")
    
    # Create the component
    return components.declare_component(
        "wallet_connect",
        path=build_dir
    )

# Create component instance
wallet_component = init_wallet_component()

def wallet_connect():
    """Render the wallet connect component"""
    return wallet_component()