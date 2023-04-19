import React from 'react'

export default function Newsletter() {
  return (   
    <form id="newsletter">
      <h1>Subscribe to our newsletter</h1>
      <div className='submit-container'>
        <input placeholder='Enter your email address' />
        <button className='btn'>Submit</button>
      </div>
    </form>
  )
}
