import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import { RoutesApp } from './routes/RoutesApp'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RoutesApp />
  </React.StrictMode>,
)
