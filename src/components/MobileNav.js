import React from "react";
import { Link } from "gatsby";

import { FaFacebookF } from "react-icons/fa"
import { BsInstagram } from "react-icons/bs"
import { BsSnapchat } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"

export default function MobileNav(props) {

  if(props.mobileNavState) {
    document.body.classList.add('fixed-position')
  } else {
    document.body.classList.remove('fixed-position')
  }
 
  return (
    <div className="mobile-nav">
      <div className="hamburger" onClick={props.handleToggle} >
        <div className={`burger-lines ${props.mobileNavState? "animate-burger" : "burger-box-shadow"}`}></div>
        <div className={`burger-lines ${props.mobileNavState? "animate-burger" : ""}`}></div>
        <div className={`burger-lines ${props.mobileNavState? "animate-burger" : ""}`}></div>
      </div>
      

      <div className={`mobile-nav-container ${props.mobileNavState ? "show-mobile-nav" : ""}`} onClick={props.handleToggle}>
        <ul>
          <li>
            <Link to="/#about" activeClassName='active-link'>about</Link>
          </li>
          <li>
            <Link to="/#order" activeClassName='active-link'>order</Link>
          </li>
          <li>
            <Link to="/#reviews" activeClassName='active-link'>reviews</Link>
          </li>
          <li>
            <Link to="/contact" activeClassName='active-link'>contact</Link>
          </li>
        </ul>
        <div className="socials-container">
          <div className="social-icons">
            <a href="https://facebook.com" target='_blank' rel="noreferrer">
              <div className='social-icon-container'>
                <FaFacebookF className="social" />
              </div>
            </a>
            <a href="https://instagram.com" target='_blank' rel="noreferrer">
              <div className='social-icon-container'>
                <BsInstagram className="social" />
              </div>
            </a>
            <a href="https://snapchat.com" target='_blank' rel="noreferrer">
              <div className='social-icon-container'>
                <BsSnapchat className="social" />
              </div>
            </a>
            <a href="https://twitter.com" target='_blank' rel="noreferrer">
              <div className='social-icon-container'>
                <BsTwitter className="social" />
              </div>
            </a>
          </div>    
        </div>
      </div>
    </div>
  )
}


