import React from 'react'

import '../styles/Home.scss'

const Skills = React.lazy(() => import('./Skills.tsx'))

export default function Home () {
  return (<div className="home-container">
      <Skills/>
    </div>)
}
