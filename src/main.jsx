import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
/* Montserrat: the typeface used across wytlabs.com. Self-hosted — no
   third-party request. */
import '@fontsource-variable/montserrat/wght.css';
/* Globals (tokens, reset, primitives) must load before component stylesheets so
   component rules win on equal specificity. */
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
