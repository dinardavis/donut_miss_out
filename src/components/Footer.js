import * as React from 'react'
import { Link } from 'gatsby'
import NewsLetter from './Newsletter';

import footerBackground from "../assets/imgs/footer_background.png"

import { MdLocationOn } from "react-icons/md"
import { MdEmail } from "react-icons/md"
import { MdPhone } from "react-icons/md"
import { FaFacebookF } from "react-icons/fa"
import { BsInstagram } from "react-icons/bs"
import { BsSnapchat } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"


export default function Footer() {
  return (
    <footer className='footer'>
        <NewsLetter />
        <div className='footer-info'>
          <ul>
            <li><MdLocationOn className='footer-icon'/> 1435 Flower Street<br /> Glendale, CA 91201</li>
            <li><MdEmail className='footer-icon'/> sotasty@donutmissit.com</li>
            <li><MdPhone className='footer-icon'/> 201.555-8282</li>
          </ul>
        </div>

        <hr/>

        <nav className='footer-nav'>
          <ul>
            <li>
              <Link to="/#home">home</Link>
            </li>
            <li>
              <Link to="/#about">about</Link>
            </li>
            <li>
              <Link to="/#donuts">our donuts</Link>
            </li>
            <li>
              <Link to="/#order">order online</Link>
            </li>
            <li>
              <Link to="/#reviews">reviews</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </nav>

        <div className="socials-container">
          <div className="social-icons">
            <a href="https://facebook.com">
              <div className='social-icon-container'>
                <FaFacebookF className="social" />
              </div>
            </a>
            <a href="https://instagram.com">
              <div className='social-icon-container'>
                <BsInstagram className="social" />
              </div>
            </a>
            <a href="https://snapchat.com">
              <div className='social-icon-container'>
                <BsSnapchat className="social" />
              </div>
            </a>
            <a href="https://twitter.com">
              <div className='social-icon-container'>
                <BsTwitter className="social" />
              </div>
            </a>
          </div>    
        </div>
  
      <div className='footer-copyright'>&copy; {new Date().getFullYear()} Donut Miss It</div>
      <img className='footer-background' src={footerBackground} alt='' />
    </footer>
  )
}