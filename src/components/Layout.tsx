import React, {ReactNode} from 'react'

const Header = React.lazy(() => import('./Header'))
const Footer = React.lazy(() => import('./Footer'))

interface ContextProps {
  children: ReactNode
}

export const Layout = ({children}: ContextProps) => {
  return <div>
    <Header/>
    <main id="containers" className="containers">
      {children}
    </main>
    <Footer/>
  </div>
}
