// frontend/src/components/WalletConnect.jsx
import React, { useMemo } from 'react';
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

require('@solana/wallet-adapter-react-ui/styles.css');

function WalletConnect() {
    const wallets = useMemo(
        () => [
            new PhantomWalletAdapter(),
            new SolflareWalletAdapter(),
            new BackpackWalletAdapter(),
        ],
        []
    );

    return (
        <ConnectionProvider endpoint={clusterApiUrl('mainnet-beta')}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    <div className="wallet-container">
                        <WalletMultiButton />
                    </div>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
}

export default WalletConnect;