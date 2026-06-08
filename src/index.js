import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Mengambil elemen root dari file index.html
const container = document.getElementById('root');

// Membuat root React 18
const root = createRoot(container);

// Me-render komponen utama (App) ke dalam DOM
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);