import React from 'react'

import facebookImage from "../assets/imgs/facebook.png" 


// const PHOTOS_API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY

/* PHOTO CAROUSEL */

export default function SocialSites() {

  const [photos, setPhotos] = React.useState([])
 
  React.useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos/?query=donut&client_id=irSM3XZycpgVKpl8v_cZPXQzf0IJ9haBK6DCZzlcVsI&orientation=portrait&per_page=9`)
      .then(res => res.json())
      .then(data => setPhotos(data.results))
  }, [])

  const instaImages = photos.map(photo => {
    return (
      <div key={photo.id} className='insta-image'>
        <a href='https://www.instagram.com/' target='_blank' rel="noreferrer">
          <img src={photo.urls.regular} alt="donut" />
        </a> 
      </div>
    )
  })
  
  console.log(photos)

  return (
    <section id="socials-section section">
      <div className='instagram-container'>
        <h1 className='section-header socials-header'>Our<span>Instagram</span></h1>
        <div className='image-container'>
          {instaImages}
        </div>
      </div>
      <div className='facebook-container'>  
        <h1 className='section-header social-sites-header'>Our<span>Facebook</span></h1>
        <div className='facebook-content'>
          <img className="facebook-screenshot" src={facebookImage} alt="Donut Miss It's Facebook Page screenshot" />
          <div className='facebook-events'>
          <a href='https://www.facebook.com/' target='_blank' rel="noreferrer">
            <div className='event-card' >
              <div className='event-date'>
                <p>May <br/><span>21</span></p>
              </div>
              <div className='event-desc'>
                <h3>The Happy Blueberry Donut Giveaway!</h3>
                <p>21 May 2032 &#x2022;14:00  Start</p>
              </div>
            </div>
          </a>
          <hr className='event-divider'/>
          <a href='https://www.facebook.com/' target='_blank' rel="noreferrer">  
            <div className='event-card' >
              <div className='event-date'>
                <p>May <br/><span>28</span></p>
              </div>
              <div className='event-desc'>
                <h3>Community Center Food Drive In Partnership w/Big Jerry Cab Co.</h3>
                <p>28 May 2032 &#x2022;12:00  Start</p>
              </div>
            </div>
          </a>
          <hr className='event-divider'/>
          <a href='https://www.facebook.com/' target='_blank' rel="noreferrer">  
            <div className='event-card' >
              <div className='event-date'>
                <p>June <br/><span>4</span></p>
              </div>
              <div className='event-desc'>
                <h3>Honey Bunny Memorial Picnic & Foster Care Fundraiser</h3>
                <p>4 June 2032 &#x2022;12:00  Start</p>
              </div>
            </div>
          </a>
        </div>
        </div>
      </div>
    </section>
  )
}
