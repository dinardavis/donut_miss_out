import React from 'react'
import { GiDonut } from "react-icons/gi";
import { BsBox2HeartFill } from "react-icons/bs";
import { RiSecurePaymentFill } from "react-icons/ri";
import { BiRun } from "react-icons/bi";
import orderDonut from "../assets/imgs/hand.png"


export default function Order() {
  return (
    <section id="order" className='order-section'>
     <img className='order-image' src={orderDonut} alt='a hand holding a donut' />
      <div className='order-content'>
        <h1 className='section-header order-header'>Our<span>Delivery</span></h1>
        <p className='order-copy'>Put a smile on the faces of your coworkers, family, or yourself with a special order from <span className='name-highlight'>Donut Miss It</span>! When you get a minimum dozen donuts  in your order you're also eligible to add one of our themed gift wraps to make your occasion even sweeter.</p>
        <p className='order-copy'>Can’t decide which donuts to build? Try one of our limited-time seasonal or most popular assortments today!</p>
        <div className='order-features'>
          <div className='order-feature'>
            <div className='feature-icon-container'>
              <GiDonut className='feature-icon'/>
            </div>
            <div className='feature-text'>
              <span>Choose</span><br /> Your Donuts
            </div>
          </div>
          <div className='order-feature'>
            <div className='feature-icon-container'>
              <BsBox2HeartFill className='feature-icon'/>
            </div>
            <div className='feature-text'>
              <span>Create</span><br /> Your Own Box
            </div>
          </div>
          <div className='order-feature'>
            <div className='feature-icon-container'>
              <RiSecurePaymentFill className='feature-icon'/>
            </div>
            <div className='feature-text'>
              <span>Secure</span><br />Pay
            </div> 
          </div>
          <div className='order-feature'>
            <div className='feature-icon-container'>
              <BiRun className='feature-icon'/>
            </div>
            <div className='feature-text'>
              <span>Fast</span><br />Delivery
            </div>
          </div>
        </div>
        <button className='order-btn btn'>Order Now</button>
      </div>
    </section>
  )
}
