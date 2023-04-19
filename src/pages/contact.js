import * as React from 'react'
import Layout from '../components/Layout'

export default function Contact() {
  return (
    <Layout>
      <section>
        <form className='form contact-form'>
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="form-row">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message"></textarea>
          </div>
          <button type='submit' className='btn'>Submit</button>
        </form>
      </section>
    </Layout>

  )
}