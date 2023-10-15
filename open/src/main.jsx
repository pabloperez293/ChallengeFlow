import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// tipografiias
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import './index.css'

// Importamos de Bluuweb
import { CssBaseline } from '@mui/material'
import { SnackbarProvider } from "notistack";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SnackbarProvider>
      <CssBaseline />
      <App />
    </SnackbarProvider>
  </React.StrictMode>,
)
