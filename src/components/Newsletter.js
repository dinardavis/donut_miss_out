import React from 'react'

export default function Newsletter() {
  const [formData, setFormData] = React.useState(
    {
      email: ""
    }
  )
  const [submitted, setSubmitted] = React.useState(false)

  function handleChange(event) {
    setFormData(prevFormData => {
      return {
          ...prevFormData,
          [event.target.name]: event.target.value
      }
    })
  }

  function handleSubmitNewsletter(event) {
    const emailField = document.querySelector(".newsletter-email");
    event.preventDefault()
    if(formData.email.length === 0) {
      emailField.placeholder = "Donut forget an email! 🍩😉"
      emailField.classList.add("input-error")
      setTimeout(() => {
        emailField.placeholder = "Email address"
        emailField.classList.remove("input-error")
      }, 2000)
    } else {
      setSubmitted(true)
      setFormData({
        email: ""
      })
      setTimeout(() => {
        setSubmitted(false)
      }, 2000)
    }
  }

  return (   
    <form id="newsletter" onSubmit={handleSubmitNewsletter}>
      <h1>{submitted ? "Thanks for subscribing!": "Subscribe to our newsletter"}</h1>
      <div className='submit-container'>
        <input 
          className='newsletter-email'
          type="email"
          placeholder="Email address"
          onChange={handleChange}
          name="email"
          value={formData.email}
        />
        <button className='newsletter-btn btn'>Submit</button>
      </div>
    </form>
  )
}
