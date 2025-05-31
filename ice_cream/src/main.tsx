import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { IceCreamProvider } from "./components/ice-cart";
import './App.css';
import './index.css';
import App from './App';
import { CartProvider } from "./components/cart_context"; // Import the provider

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <IceCreamProvider>
      <BrowserRouter>
      <CartProvider>
      <App />
    </CartProvider>
      </BrowserRouter>
      </IceCreamProvider>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found!");
}
