import React, {useEffect} from 'react'

import '../styles/Home.scss'
import ReactGA from "react-ga4";
import {ANALYTICS_TRACKING_ID} from "../main.tsx";

const Skills = React.lazy(() => import('./Skills.tsx'))

export default function Home () {

  useEffect(() => {
    ReactGA.initialize(ANALYTICS_TRACKING_ID);
    ReactGA.send({ hitType: "pageview", page: "/", title: "Home Page" });
  }, [])

  return (<div className="home-container">
      <Skills/>
    </div>)
}
