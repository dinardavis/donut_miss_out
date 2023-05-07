import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import donutsContact from '../assets/imgs/donuts_contact.png'

export default function Contact() {
  const [contactForm, setContactForm] = React.useState({})
  const [animate, setAnimate] = React.useState(false)
  const [formData, setFormData] = React.useState(
    {
      firstName: "", 
      lastName: "", 
      email: "", 
      message: "",
    }
  )

  React.useEffect(() => {
    setContactForm(document.querySelector(".contact-form"))
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
    if(contactForm.classList) {
      contactForm.classList.add("active") 
    }
  }

  function handleChange(event) {
    setFormData(prevFormData => {
      return {
          ...prevFormData,
          [event.target.name]: event.target.value
      }
    })
  }
  
  function handleSubmit(event) {
    event.preventDefault()
    submitToApi(formData)
  }

  function submitToApi() {
    console.log("Data submitted!")
  }

  return (
    <Layout>
      <section className='contact-section'>
        <form className='form contact-form' onSubmit={handleSubmit}>
          <h1 className='section-header contact-header'>How can we help?</h1>
          <div className="form-row form-row-name">
            <input
              type="text"
              placeholder="First Name"
              onChange={handleChange}
              name="firstName"
              id="firstName"
              value={formData.firstName}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              onChange={handleChange}
              name="lastName"
              id="lastName"
              value={formData.lastName}
              required
            />
          </div>
          <div className="form-row">
            <input type="email"
              placeholder="Email"
              onChange={handleChange}
              name="email"
              value={formData.email}
              required
            />
          </div>
          <div className="form-row">
            <textarea 
              name="message" 
              id="message"                 
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message (Ex. &quot;Are you calling me on the cellular phone? I don't know you. Who is this? Don't come here, I'm hanging up the phone! Prank caller, prank caller!&quot;)"
              required
            >  
            </textarea>
          </div>
          <Link to="/thankyou"><button type='submit' className='btn contact-btn'>Send Message</button></Link>
        </form>

        <img className="contact-donuts" src={donutsContact} alt="Many donuts of different flavors" />
      </section>
    </Layout>

  )
}