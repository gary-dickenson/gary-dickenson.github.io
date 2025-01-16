import React from 'react'
import './styles/App.scss'
import { Layout } from './components/Layout'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

const Home = React.lazy(() => import('./components/Home'))
const About = React.lazy(() => import('./components/About'))

export const App = () => {
  return <React.Suspense fallback={<p>Loading</p>}>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Layout>
    </Router>
  </React.Suspense>
}
