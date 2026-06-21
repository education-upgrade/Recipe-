import React from 'react'
import { createRoot } from 'react-dom/client'
import './newRecipeBatch1.js'
import App from './App.jsx'
import './styles.css'
import './plannerExtras.css'
import './referenceLayout.css'
import './tightMobile.css'
import './filterPanel.css'
import './twoColumnCards.css'

const rootElement = document.getElementById('root')
createRoot(rootElement).render(<App />)
