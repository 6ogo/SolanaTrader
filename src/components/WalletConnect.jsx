// src/components/WalletConnect.jsx
import React, { useMemo } from 'react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
    ConnectionProvider,
    WalletProvider,
    useWallet
} from '@solana/wallet-adapter-react';
import {
    WalletModalProvider,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import {
    PhantomWalletAdapter,
    SolflareWalletAdapter,
    BackpackWalletAdapter
} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';

// Import wallet adapter CSS
require('@solana/wallet-adapter-react-ui/styles.css');

const WalletConnect = () => {
    // Network configuration
    const network = WalletAdapterNetwork.Mainnet;
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    // Configure supported wallets
    const wallets = useMemo(() => [
        new PhantomWalletAdapter(),
        new SolflareWalletAdapter(),
        new BackpackWalletAdapter()
    ], []);

    // Wallet detection
    const checkWalletExtensions = () => {
        const phantom = window?.phantom?.solana;
        const solflare = window?.solflare;
        const backpack = window?.backpack;

        if (!phantom && !solflare && !backpack) {
            return {
                available: false,
                message: "No Solana wallet extensions found. Please install Phantom, Solflare, or Backpack."
            };
        }
        return {
            available: true,
            message: "Wallet extension detected"
        };
    };

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    <div className="wallet-container">
                        <WalletMultiButton className="wallet-button" />
                        <WalletStatus />
                    </div>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

// Component to show wallet status
const WalletStatus = () => {
    const { connected, publicKey } = useWallet();
    return (
        <div className="wallet-status">
            {connected ? (
                <div className="connected">
                    Connected: {publicKey.toString().slice(0, 6)}...{publicKey.toString().slice(-4)}
                </div>
            ) : (
                <div className="disconnected">
                    Not connected
                </div>
            )}
        </div>
    );
};

export default WalletConnect;