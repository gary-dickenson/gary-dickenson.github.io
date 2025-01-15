import React from 'react'
import '../styles/About.scss'

const ComingSoon = React.lazy(() => import('./ComingSoon.js'))

export default function About () {
  return <ComingSoon/>
}
