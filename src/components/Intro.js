import React from 'react'
import mainBackground from "../assets/imgs/main_background.png"
import donutHero from "../assets/imgs/donut_main.png"

import { FaFacebookF } from "react-icons/fa"
import { BsInstagram } from "react-icons/bs"
import { BsSnapchat } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"

export default function Intro() {
  return (
    <section className='intro-section'>
      <img className='intro-background' src={mainBackground} alt='' />
      <div className='intro-content'>
        <h1 className='section-header intro-header'>World's best<br/><span>donuts</span></h1>
        <p>A little sweetness goes a long way!</p>

        <img className="intro-donut" src={donutHero} alt="Sprinkle donut surrounded by clouds" />

        <button className="shop-now-btn btn">Shop Now</button>
        <div className="socials-container">
          <p>Follow Us On Social Media</p>
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
    </section>
  )
}
