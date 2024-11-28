import React from 'react';
import { createRoot } from 'react-dom/client';
import WalletConnect from './components/WalletConnect';

// Create a function that Streamlit can call to render your component
const streamlitRender = (targetElement) => {
  const root = createRoot(targetElement);
  root.render(
    <React.StrictMode>
      <WalletConnect />
    </React.StrictMode>
  );
};

export default streamlitRender;