import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/Style/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { TranslationProvider } from './components/other-function/TranslationList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TranslationProvider>
      <App />
    </TranslationProvider>
  </React.StrictMode>
);

reportWebVitals();
