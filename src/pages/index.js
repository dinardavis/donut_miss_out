import * as React from "react"
import Layout from "../components/Layout"
import Intro from "../components/Intro"
import About from "../components/About"
import OnlineOrder from "../components/OnlineOrder"
import Reviews from "../components/Reviews"
import SocialSites from '../components/SocialSites'

import '../assets/css/reset.css'
import '../assets/css/styles.css'
import '../assets/css/nav_styles.css'

export default function Home() {
  return (
    <Layout>
      <>
        <Intro />
        <About />
        <OnlineOrder />
        <Reviews />
        <SocialSites />
      </>
    </Layout>
  )
}
