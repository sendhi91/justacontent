import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // FILE INI HARUS ADA
import App from './App';
import { DarkModeProvider } from './context/DarkModeContext';

// Tambahkan ini:
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'yet-another-react-lightbox/styles.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);