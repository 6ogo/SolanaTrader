import React from 'react';
import { createAppKit } from '@reown/appkit';
import { SolanaAdapter } from '@reown/appkit-adapter-solana';
import { solana, solanaTestnet, solanaDevnet } from '@reown/appkit/networks';
import { useAppKitAccount, useAppKitProvider } from '@reown/appkit';
import { useAppKitConnection } from '@reown/appkit-adapter-solana';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';


const WalletConnect = () => {
  // Set up Solana Adapter
  const solanaWeb3JsAdapter = new SolanaAdapter({
    wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()]
  });

  // Project configuration
  const projectId = 'd4817081c49921b655331c276542e7ff'; // Your existing project ID
  const metadata = {
    name: 'SolanaTrader',
    description: 'Advanced Solana Trading Bot',
    url: window.location.origin,
    icons: [] // Add your icons here
  };

  // Create AppKit instance
  createAppKit({
    adapters: [solanaWeb3JsAdapter],
    networks: [solana, solanaTestnet, solanaDevnet],
    metadata: metadata,
    projectId,
    features: {
      analytics: true
    }
  });

  // Use AppKit hooks
  const { address } = useAppKitAccount();
  const { connection } = useAppKitConnection();
  const { walletProvider } = useAppKitProvider('solana');

  return (
    <div>
      <appkit-button />
      {address && (
        <div>
          <p>Connected Address: {address}</p>
          {/* Add your trading interface components here */}
        </div>
      )}
    </div>
  );
};

export default WalletConnect;