import React, { useState, useEffect } from 'react';
import { createAppKit, AppKitButton } from '@reown/appkit';
import { SolanaAdapter } from '@reown/appkit-adapter-solana';
import { solana, solanaTestnet, solanaDevnet } from '@reown/appkit/networks';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';

// Simple Alert component
const Alert = ({ children, variant = 'default' }) => (
  <div className={`p-4 rounded-lg ${variant === 'destructive' ? 'bg-red-100 text-red-800' : 'bg-gray-100'}`}>
    {children}
  </div>
);

// Simple Button component
const Button = ({ children, variant = 'default', className = '', ...props }) => (
  <button
    className={`px-4 py-2 rounded-lg ${
      variant === 'outline' 
        ? 'border border-gray-300 hover:bg-gray-100' 
        : 'bg-blue-600 text-white hover:bg-blue-700'
    } ${className}`}
    {...props}
  >
    {children}
  </button>
);

const WalletConnect = () => {
  const [error, setError] = useState('');
  const [isInitialized, setIsInitialized] = useState(false);
  const [appKit, setAppKit] = useState(null);
  const [walletState, setWalletState] = useState({
    address: null,
    connected: false,
    connection: null,
    provider: null
  });

  // Initialize AppKit
  useEffect(() => {
    const initializeAppKit = async () => {
      if (!isInitialized) {
        try {
          const solanaWeb3JsAdapter = new SolanaAdapter({
            wallets: [
              new PhantomWalletAdapter(), 
              new SolflareWalletAdapter()
            ]
          });

          const kit = await createAppKit({
            adapters: [solanaWeb3JsAdapter],
            networks: [solana, solanaTestnet, solanaDevnet],
            metadata: {
              name: 'SolanaTrader',
              description: 'Advanced Solana Trading Bot',
              url: window.location.origin,
              icons: []
            },
            projectId: 'd4817081c49921b655331c276542e7ff',
            features: {
              analytics: true
            }
          });

          setAppKit(kit);
          setIsInitialized(true);
          setError('');

          // Set up event listeners
          kit.on('connect', (connection) => {
            setWalletState(prev => ({
              ...prev,
              address: connection.account?.address,
              connected: true,
              connection: connection,
              provider: connection.provider
            }));
          });

          kit.on('disconnect', () => {
            setWalletState({
              address: null,
              connected: false,
              connection: null,
              provider: null
            });
          });

        } catch (err) {
          setError('Failed to initialize wallet connection');
          console.error('Initialization error:', err);
        }
      }
    };

    initializeAppKit();
  }, [isInitialized]);

  // Update Streamlit component value when connection status changes
  useEffect(() => {
    if (window.Streamlit) {
      window.Streamlit.setComponentValue(walletState);
    }
  }, [walletState]);

  const handleConnect = async () => {
    try {
      await appKit?.connect();
    } catch (err) {
      setError(err.message || 'Failed to connect wallet');
      console.error('Connection error:', err);
    }
  };

  const handleDisconnect = async () => {
    try {
      await appKit?.disconnect();
    } catch (err) {
      console.error('Disconnection error:', err);
    }
  };

  const getNetworkName = (endpoint) => {
    if (!endpoint) return 'Not Connected';
    if (endpoint.includes('mainnet')) return 'Mainnet';
    if (endpoint.includes('testnet')) return 'Testnet';
    if (endpoint.includes('devnet')) return 'Devnet';
    return 'Unknown Network';
  };

  return (
    <div className="space-y-4">
      {error && (
        <Alert variant="destructive">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{error}</span>
          </div>
        </Alert>
      )}

      <div className="flex flex-col gap-4">
        {!walletState.connected ? (
          <Button onClick={handleConnect} className="w-full">
            Connect Wallet
          </Button>
        ) : (
          <div className="p-4 bg-gray-100 rounded-lg space-y-2">
            <div>
              <p className="text-sm text-gray-600">Connected Address:</p>
              <p className="font-mono text-sm truncate">{walletState.address}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Network:</p>
              <p className="font-mono text-sm">
                {getNetworkName(walletState.connection?.endpoint)}
              </p>
            </div>
            <Button 
              variant="outline" 
              onClick={handleDisconnect}
              className="w-full mt-2"
            >
              Disconnect
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WalletConnect;