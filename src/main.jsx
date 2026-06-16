import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles.css'

const rootElement = globalThis.document.getElementById('root')
createRoot(rootElement).render(<App />)
