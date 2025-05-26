import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/sass/style.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { BaseUrlProvider } from './context/BaseUrlContext.tsx';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BaseUrlProvider>
      <App />
    </BaseUrlProvider>
  </StrictMode>
);
