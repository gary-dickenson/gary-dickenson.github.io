import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'G-J5PBBJW7CH'
}

TagManager.initialize(tagManagerArgs)


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
