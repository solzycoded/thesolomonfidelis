import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const appRoot = document.getElementById('root');

const root = ReactDOM.createRoot(appRoot)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
