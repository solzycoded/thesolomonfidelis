import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const appRoot = document.getElementById('root');

const dom = ReactDOM.createRoot(appRoot)

dom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
