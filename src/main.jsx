import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
if (!window.location.hash) {
  window.location.replace(window.location.href + "#/");
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <App />
  </React.StrictMode>
  
)
