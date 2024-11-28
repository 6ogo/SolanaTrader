import React from 'react';
import ReactDOM from 'react-dom';
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

// Initialize the component with the App wrapper
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Add Streamlit component functions
const Streamlit = window.Streamlit;

if (Streamlit) {
  Streamlit.loadViewer({});
  Streamlit.setComponentReady();
}

export default App;