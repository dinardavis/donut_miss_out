import React from 'react'
import { GiDonut } from "react-icons/gi";
import { BsBox2HeartFill } from "react-icons/bs";
import { RiSecurePaymentFill } from "react-icons/ri";
import { BiRun } from "react-icons/bi";
import orderDonut from "../assets/imgs/hand.png"


export default function OnlineOrder() {
  return (
    <section id="order" className='order-section'>
     <img className='order-image' src={orderDonut} alt='a hand holding a donut' />
      <div className='order-content'>
        <h1 className='section-header order-header'>Online<span>Delivery</span></h1>
        <p className='order-copy'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, odit eum repellendus facilis in architecto, tempore, accusantium consequuntur minima commodi doloremque repellat quis inventore. </p>
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
            <span>Secure</span><br /> Pay
          </div> 
        </div>
        <div className='order-feature'>
          <div className='feature-icon-container'>
            <BiRun className='feature-icon'/>
          </div>
          <div className='feature-text'>
            <span>Fast</span><br /> Delivery
          </div>
        </div>
      </div>
      </div>
     
    </section>
  )
}
