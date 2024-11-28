import React from 'react';
import { createRoot } from 'react-dom/client';
import WalletConnect from './components/WalletConnect';

// Create a Streamlit Wrapper Component
const StreamlitComponentWrapper = () => {
  return (
    <div>
      <WalletConnect />
    </div>
  );
};

// Check if we're running in Streamlit
if (window.Streamlit) {
  const root = createRoot(document.getElementById('root'));
  
  // Define the function that Streamlit will call
  const componentMounter = (element) => {
    root.render(
      <React.StrictMode>
        <StreamlitComponentWrapper />
      </React.StrictMode>
    );
  };

  // Register our component with Streamlit
  window.Streamlit.registerRenderHandler(componentMounter);
} else {
  console.warn('Not running in Streamlit');
}