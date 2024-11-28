import React from 'react';
import { createRoot } from 'react-dom/client';
import WalletConnect from './components/WalletConnect';
import SmartContractInteraction from './components/SmartContractInteraction';

const App = () => {
  return (
    <div>
      <WalletConnect />
      <SmartContractInteraction />
    </div>
  );
};

const streamlitRender = (targetElement) => {
  const root = createRoot(targetElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

export default streamlitRender;