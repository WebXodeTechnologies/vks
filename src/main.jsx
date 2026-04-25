import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async'; // Required for SEO
import App from './App.jsx';
import './index.css';

/**
 * 100/100 Lighthouse Strategy:
 * We wrap the App in HelmetProvider here once. 
 * This allows every sub-page to change the <head> tags 
 * without a performance hit or memory leaks.
 */

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </StrictMode>
  );
}