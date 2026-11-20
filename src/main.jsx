import React from 'react';
import { createRoot } from 'react-dom/client';
import './temas/chicvisach.css';
import './estilos.css';
import './chic.css';
import App from './App.jsx';
import ClickSpark from './reactbits/ClickSpark/ClickSpark.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClickSpark sparkColor="#C9A24B" sparkCount={8} sparkSize={12} sparkRadius={26} duration={600}>
      <App />
    </ClickSpark>
  </React.StrictMode>
);
