import * as React from 'react'
import { navigate } from 'gatsby'
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
  const [formInputsValid, setFormInputsValid] = React.useState(
    {
      firstName: false, 
      lastName: false, 
      email: false, 
      message: false,
    }
  )
  const firstNameField = document.querySelector(".firstNameField")
  const lastNameField = document.querySelector(".lastNameField")
  const emailField = document.querySelector(".emailField")
  const messageField = document.querySelector(".messageField")


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
    validateFormInputs()
  }
  
  function handleSubmit(event) {
    event.preventDefault()
    if(formInputsValid.firstName && formInputsValid.lastName && formInputsValid.email && formInputsValid.message) {
      navigate('/thankyou')
    } else {
      if(firstNameField.value.length === 0) {
        firstNameField.classList.add("input-error")
      }
      if(lastNameField.value.length === 0) {
        lastNameField.classList.add("input-error")
      }
      if(emailField.value.length === 0) {
        emailField.classList.add("input-error")
      }
      if(messageField.value.length === 0) {
        messageField.classList.add("input-error")
      }
    }
  }

  function validateFormInputs() {
    if(firstNameField.value.length === 0 && document.activeElement === firstNameField) {
      firstNameField.classList.add("input-error")
      setFormInputsValid(prevFormInputsValid => {
        return {...prevFormInputsValid, firstName: false}
      })
    } else if(firstNameField.value.length > 0) {
      firstNameField.classList.remove("input-error")
      setFormInputsValid(prevFormInputsValid => {
        return {...prevFormInputsValid, firstName: true}
      })
    }

    if(lastNameField.value.length === 0 && document.activeElement === lastNameField) {
      lastNameField.classList.add("input-error")
      setFormInputsValid(prevFormInputsValid => {
        return {...prevFormInputsValid, lastName: false}
      })
    } else if(lastNameField.value.length > 0) {
      lastNameField.classList.remove("input-error")
      setFormInputsValid(prevFormInputsValid => {
        return {...prevFormInputsValid, lastName: true}
      })
    }

    if(emailField.value.length === 0 && document.activeElement === emailField) {
      emailField.classList.add("input-error")
      setFormInputsValid(prevFormInputsValid => {
        return {...prevFormInputsValid, email: false}
      })
    } else if(emailField.value.length > 0) {
      emailField.classList.remove("input-error")
      setFormInputsValid(prevFormInputsValid => {
        return {...prevFormInputsValid, email: true}
      })
    }

    if(messageField.value.length === 0 && document.activeElement === messageField) {
      messageField.classList.add("input-error")
      setFormInputsValid(prevFormInputsValid => {
        return {...prevFormInputsValid, message: false}
      })
    } else if(messageField.value.length > 0) {
      messageField.classList.remove("input-error")
      setFormInputsValid(prevFormInputsValid => {
        return {...prevFormInputsValid, message: true}
      })
    }
  }

  return (
    <Layout>
      <section className='contact-section'>
        <form className='form contact-form' onSubmit={handleSubmit}>
          <h1 className='section-header contact-header'>How can we help?</h1>
          <div className="form-row form-row-name">
            <input
              className="firstNameField"
              type="text"
              placeholder="First Name"
              onChange={handleChange}
              name="firstName"
              id="firstName"
              value={formData.firstName}
            />
            <input
              className="lastNameField"
              type="text"
              placeholder="Last Name"
              onChange={handleChange}
              name="lastName"
              id="lastName"
              value={formData.lastName}
            />
          </div>
          <div className="form-row">
            <input 
               className="emailField"
              type="email"
              placeholder="Email"
              onChange={handleChange}
              name="email"
              value={formData.email}
            />
          </div>
          <div className="form-row">
            <textarea 
              className="messageField"
              name="message" 
              id="message"                 
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message (Ex. &quot;Are you calling me on the cellular phone? I don't know you. Who is this? Don't come here, I'm hanging up the phone! Prank caller, prank caller!&quot;)"
            >  
            </textarea>
          </div>
          <button type='submit' className='btn contact-btn'>Send Message</button>
        </form>

        <img className="contact-donuts" src={donutsContact} alt="Many donuts of different flavors" />
      </section>
    </Layout>

  )
}