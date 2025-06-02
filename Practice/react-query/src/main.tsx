import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import App from './App.tsx';
import {BaseUrlProvider} from './context/BaseUrlContext.tsx';
import {QueryClientProvider, QueryClient} from 'react-query';

const query = new QueryClient(); 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BaseUrlProvider>
    <QueryClientProvider client={query}>
      <App />
      </QueryClientProvider>
    </BaseUrlProvider>
  </StrictMode>
);
