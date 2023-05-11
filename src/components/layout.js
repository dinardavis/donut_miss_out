import * as React from 'react';
import Nav from './Nav'
import Footer from './Footer'

export default function Layout({ children }) {

  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }

  return (
    <>
      <main id="home" className='main-container'>
        <Nav />
        {children}
        <Footer />
      </main>
    </> 
  )
}