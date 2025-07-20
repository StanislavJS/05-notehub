import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'modern-normalize';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './components/App/App';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>
  </StrictMode>,
)
// This file is the entry point for the React application. It sets up the React application with a query client for data fetching and renders the main App component into the root element of the HTML document. The use of StrictMode helps identify potential problems in the application during development. The modern-normalize CSS is imported to provide a consistent baseline for styling across browsers.

