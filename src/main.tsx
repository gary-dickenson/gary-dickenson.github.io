import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'

import ReactGA from 'react-ga4';
import TagManager from 'react-gtm-module'

export const TAG_MANAGER_TRACKING_ID = 'GTM-W7NS2KDV'
export const ANALYTICS_TRACKING_ID = 'G-J5PBBJW7CH'

const tagManagerArgs = {
  gtmId: TAG_MANAGER_TRACKING_ID
}

ReactGA.initialize(ANALYTICS_TRACKING_ID);
TagManager.initialize(tagManagerArgs)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
