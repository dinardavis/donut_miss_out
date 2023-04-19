import React from 'react'

export default function Donuts() {
  return (
    <section id="donuts">
      <h1 className='section-header about-header'>Our <span>Donuts</span></h1>
      <p className='donuts-copy'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, odit eum repellendus facilis in architecto, tempore, accusantium consequuntur minima commodi doloremque repellat quis inventore. Inventore, rem? At ea eius ipsam?</p>
      <div className='donuts-carousel'>
        <a className='carousel-scroll-btn'>
          <div>0</div>
        </a>
        <div className='donut-card'>
          <img src='/donut.png' alt='donut' />
          <h2>Gladed to Perfection</h2>
        </div>
        <div className='donut-card'>
          <img src='/donut.png' alt='donut' />
          <h2>Gladed to Perfection</h2>
        </div>
        <div className='donut-card'>
          <img src='/donut.png' alt='donut' />
          <h2>Gladed to Perfection</h2>
        </div>
        <div className='donut-card'>
          <img src='/donut.png' alt='donut' />
          <h2>Gladed to Perfection</h2>
        </div>
        <a className='carousel-scroll-btn'>
          <div>0</div>
        </a>
      </div>
    </section>
  )
}
