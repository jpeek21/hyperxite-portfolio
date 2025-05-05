import React from 'react';
import ReactDOM from 'react-dom'; // ✅ no /client
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render( // ✅ old syntax
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // ✅ standard container
);

// Optional analytics
reportWebVitals();
