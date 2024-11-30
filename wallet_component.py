# wallet_component.py
from solana.rpc.api import Client
from solana.transaction import Transaction
import streamlit.components.v1 as components
import streamlit as st
from typing import Optional, Dict
import base58
import json

WALLET_HTML = """
<html>
    <head>
        <script src="https://unpkg.com/@solana/web3.js@latest/lib/index.iife.min.js"></script>
    </head>
    <body>
        <script>
            async function connectWallet() {
                try {
                    // Wait a bit for Phantom to be available
                    await new Promise(resolve => setTimeout(resolve, 500));
                    
                    const provider = window.phantom?.solana;
                    
                    if (!provider?.isPhantom) {
                        throw new Error("Phantom wallet not found! Please install Phantom.");
                    }
                    
                    const connection = await provider.connect();
                    const publicKey = connection.publicKey.toString();
                    
                    // Send the response back to Streamlit
                    const response = {
                        type: 'wallet_response',
                        data: {
                            address: publicKey,
                            connected: true
                        }
                    };
                    
                    window.parent.postMessage(response, '*');
                    return response;
                } catch (err) {
                    console.error("Wallet connection error:", err);
                    window.parent.postMessage({
                        type: 'wallet_response',
                        data: {
                            address: null,
                            connected: false,
                            error: err.message
                        }
                    }, '*');
                }
            }

            // Auto-connect on load
            window.addEventListener('load', connectWallet);
        </script>
    </body>
</html>
"""

class SolanaWallet:
    def __init__(self):
        self.client = Client("https://api.mainnet-beta.solana.com")
        
    def create_transfer_tx(
        self,
        from_address: str,
        to_address: str,
        amount: float,
    ) -> Dict:
        """Create a SOL transfer transaction"""
        try:
            transaction = Transaction()
            recent_blockhash = self.client.get_latest_blockhash()
            transaction.recent_blockhash = recent_blockhash.value.blockhash
            
            return {
                "transaction": base58.b58encode(transaction.serialize()).decode('ascii'),
                "message": transaction.serialize_message().hex()
            }
        except Exception as e:
            st.error(f"Error creating transaction: {str(e)}")
            return None

def wallet_connect():
    """Create an inline component for wallet connection"""
    try:
        return st.components.v1.html(
            WALLET_HTML,
            height=100  # Give some height for potential error messages
        )
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