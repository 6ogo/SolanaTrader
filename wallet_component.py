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
        st.error(f"Error in wallet_connect: {e}")
        return None

if __name__ == "__main__":
    st.write("Testing wallet component")
    result = wallet_connect(key="test")
    st.write("Component result:", result)