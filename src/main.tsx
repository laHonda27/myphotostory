import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { SkeletonTheme } from 'react-loading-skeleton';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SkeletonTheme baseColor="#f3f4f6" highlightColor="#e5e7eb">
      <App />
    </SkeletonTheme>
  </StrictMode>
);