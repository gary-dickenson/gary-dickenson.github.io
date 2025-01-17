import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'

import ReactGA from 'react-ga4';
import TagManager from 'react-gtm-module'

export const TRACKING_ID = "G-J5PBBJW7CH"

const tagManagerArgs = {
  gtmId: TRACKING_ID
}

ReactGA.initialize(TRACKING_ID);
TagManager.initialize(tagManagerArgs)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
