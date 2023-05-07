import * as React from 'react'
import donutTrays from "../assets/imgs/donut_trays.jpg"
import donutTable from "../assets/imgs/donut_table.jpg"

export default function About() {
  return (
    <section id="about" className='about-section'>
      <div className='about-content'>
        <div className='about-copy'>
          <h1 className='section-header about-header'>About<span>Us</span></h1>
          <p className='about-text'><span className='name-highlight'>Donut Miss It</span> is more than just a donut shop. Our stores are beloved parts of each of the communities we serve. We are dedicated to delighting our guests by treating them like family and consistently providing a superior product and exceptional customer service in an authentic manner. We pride ourselves on our community engagement and commitment to making innovated changes every day.</p>
          <button className='about-btn btn'>Read More</button>
        </div>
        <div className='about-img-container'>
          <div className='about-graphic'>
            <img className='about-imgs about-img-1' src={donutTrays} alt='Donut being made' />
            <img className='about-imgs about-img-2' src={donutTable} alt='Donut on a table with coffee' />
            <div className='about-graphic graphic-1'></div>
            <div className='about-graphic graphic-2'></div>
            <div className='about-graphic graphic-3'></div>
            <div className='about-graphic graphic-4'></div>
          </div>
        </div>
      </div>
     
    </section>
  )
}