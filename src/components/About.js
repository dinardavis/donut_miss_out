import * as React from 'react'
import donutTrays from "../assets/imgs/donut_trays.jpg"
import donutTable from "../assets/imgs/donut_table.jpg"

export default function About() {
  return (
    <section id="about" className='about-section'>
      <div className='about-content'>
        <div className='about-copy'>
          <h1 className='section-header about-header'>About<span>Us</span></h1>
          <p className='about-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, odit eum repellendus facilis in architecto, tempore, accusantium consequuntur minima commodi doloremque repellat quis inventore. Inventore, rem? At ea eius ipsam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque mollitia quisquam recusandae impedit iure. Nostrum possimus incidunt officiis? Cumque sapiente adipisci deserunt aut ad dicta illo harum quae sunt velit.</p>
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