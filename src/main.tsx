import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./App.css"

// @ts-ignore
import "@fontsource/playfair-display";
// @ts-ignore
import "@fontsource/inter";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
