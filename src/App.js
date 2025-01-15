import React from 'react'
import '../styles/App.scss'
import Layout from './Layout'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const HomeComponent = React.lazy(() => import('./Home'))
const AboutComponent = React.lazy(() => import('./About'))

export default function App () {

  return (<React.Suspense fallback={<p>Loading</p>}>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomeComponent/>}/>
          <Route path="/about" element={<AboutComponent/>}/>
        </Routes>
      </Layout>
    </Router>
  </React.Suspense>)
}
