import React, { useEffect, useState } from 'react';
import { createAppKit, Action } from '@reown/appkit';
import { SolanaAdapter } from '@reown/appkit-adapter-solana';
import { solana, solanaTestnet, solanaDevnet } from '@reown/appkit/networks';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';

const WalletConnect = () => {
  const [appKit, setAppKit] = useState(null);
  const [walletState, setWalletState] = useState({
    address: null,
    connected: false,
    connection: null,
    provider: null
  });

  // Debug logging helper
  const debug = (message, data) => {
    console.log(`[WalletConnect] ${message}`, data || '');
    if (window.Streamlit) {
      window.Streamlit.setComponentValue({
        type: 'debug',
        message,
        data
      });
    }
  };

  useEffect(() => {
    const initializeAppKit = async () => {
      try {
        debug('Initializing AppKit...');

        // Define actions
        const connectWalletAction = new Action({
          name: 'connect-wallet',
          description: 'Connect your Solana wallet',
          icon: ['fas', 'wallet'],
          onClick: async (kit) => {
            debug('Connect wallet action triggered');
            await kit.connect();
          }
        });

        const disconnectWalletAction = new Action({
          name: 'disconnect-wallet',
          description: 'Disconnect your wallet',
          icon: ['fas', 'sign-out-alt'],
          onClick: async (kit) => {
            debug('Disconnect wallet action triggered');
            await kit.disconnect();
          }
        });

        const solanaAdapter = new SolanaAdapter({
          wallets: [
            new PhantomWalletAdapter(),
            new SolflareWalletAdapter()
          ]
        });

        const kit = await createAppKit({
          adapters: [solanaAdapter],
          networks: [solana, solanaTestnet, solanaDevnet],
          metadata: {
            name: 'SolanaTrader',
            description: 'Solana Trading Bot',
            url: window.location.origin,
            icons: []
          },
          projectId: 'd4817081c49921b655331c276542e7ff', // Replace with your project ID
          actions: [connectWalletAction, disconnectWalletAction],
          features: {
            wallet: true,
            analytics: true
          }
        });

        debug('AppKit initialized', kit);
        setAppKit(kit);

        // Set up event listeners
        kit.on('connect', (connection) => {
          debug('Wallet connected', connection);
          const newState = {
            address: connection.account?.address,
            connected: true,
            connection: connection,
            provider: connection.provider
          };
          setWalletState(newState);

          // Send data to Streamlit
          if (window.Streamlit) {
            window.Streamlit.setComponentValue({
              type: 'wallet',
              ...newState
            });
          }
        });

        kit.on('disconnect', () => {
          debug('Wallet disconnected');
          const newState = {
            address: null,
            connected: false,
            connection: null,
            provider: null
          };
          setWalletState(newState);

          // Send data to Streamlit
          if (window.Streamlit) {
            window.Streamlit.setComponentValue({
              type: 'wallet',
              ...newState
            });
          }
        });

      } catch (error) {
        debug('AppKit initialization error', error);
        console.error('AppKit initialization error:', error);
      }
    };

    initializeAppKit();

    // Tell Streamlit we're ready
    if (window.Streamlit) {
      window.Streamlit.setComponentReady();
      debug('Component ready signal sent');
    }
  }, []);

  const handleConnect = async () => {
    try {
      debug('Manual connect triggered');
      await appKit?.connect();
    } catch (error) {
      debug('Connection error', error);
      console.error('Connection error:', error);
    }
  };

  const handleDisconnect = async () => {
    try {
      debug('Manual disconnect triggered');
      await appKit?.disconnect();
    } catch (error) {
      debug('Disconnection error', error);
      console.error('Disconnection error:', error);
    }
  };

  return (
    <div className="p-4">
      {!walletState.connected ? (
        <button
          onClick={handleConnect}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Connect Wallet
        </button>
      ) : (
        <div className="space-y-2">
          <div>
            <p className="text-sm text-gray-600">Connected Address:</p>
            <p className="font-mono text-sm truncate">{walletState.address}</p>
          </div>
          <button
            onClick={handleDisconnect}
            className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
          >
            Disconnect
          </button>
        </div>
      )}
    </div>
  );
};

export default WalletConnect;