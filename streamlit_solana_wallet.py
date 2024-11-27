import streamlit as st
import streamlit.components.v1 as components
from streamlit_solana_wallet import solana_wallet

_component_func = components.declare_component(
    "solana_wallet",
    path="\dist"
)