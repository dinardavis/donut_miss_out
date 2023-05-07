import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import donutsContact from '../assets/imgs/donuts_contact.png'
import { BsFillCheckCircleFill } from 'react-icons/bs'

export default function ThankYou() {
  const [successPopup, setSuccessPopup] = React.useState({})
  const [animate, setAnimate] = React.useState(false)

  React.useEffect(() => {
    setSuccessPopup(document.querySelector(".success-popup"))
  }, [])

  React.useEffect(() => {
    if(animate === false) {
      setAnimate(true)
    }
    setTimeout(() =>{
      if(animate) {
        animateThankYouModal();
      }
    }, 100)
  }, [animate])

  function animateThankYouModal() {
    if(successPopup.classList) {
      successPopup.classList.add("active") 
    }
  }

  return (
    <Layout>
      <section className='contact-section'>
        <div className='success-popup'>
          <div className='checkmark-background'>
            <BsFillCheckCircleFill className='success-checkmark'/>
          </div>
          <h1 className='contact-header success-message'>Success!</h1>
          <h1 className='contact-header success-thanks'>Thank you for contacting us.</h1>
          <p>Someone from our team will be reaching out to you soon.</p>
          <Link to="/contact" className="btn success-btn">Back to Contact
          </Link> 
        </div>

        <img className="contact-donuts" src={donutsContact} alt="Many donuts of different flavors" />
      </section>
    </Layout>

  )
}