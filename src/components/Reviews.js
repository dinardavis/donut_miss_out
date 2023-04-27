import React from 'react'

import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

export default function Reviews() {

  const reviewData = [
    {
      quote: "Well, yeah. I was just sitting here, eating my donut, drinking my coffee, when I had what alcoholics refer to as a moment of clarity.",
      name: "Jules Winnfield",
      id: 1
    },
    {
      quote: "I’ve realized that the right place doesn’t mean anything without the right donut.",
      name: "Mia Wallace",
      id: 2
    },
    {
      quote: "Pretty please with sugar on top...",
      name: "The Wolf",
      id: 3
    },
    {
      quote: "You don’t have to tell me how good my donut is, OK? I’m the one who bought it; I know how good it is.",
      name: "Jimmie Dimmick",
      id: 4
    },
    {
      quote: "There's a sensuous thing going on where you don't talk about it, but you know it...",
      name: "Vincent Vega",
      id: 5
    },
    {
      quote: "We don’t want to think, we want to know...donuts.",
      name: "Marsellus Wallace",
      id: 6
    },
  ]

  const [reviewIndex, setReviewIndex] = React.useState(0);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
  const timeoutRef = React.useRef(null);
  const delay = 6500;


  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleWindowResize)

    if(windowWidth < 800) {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setReviewIndex((prevReviewIndex) =>
            prevReviewIndex === reviewData.length - 1 ? 0 : prevReviewIndex + 1
          ),
        delay
      );
  
      return () => {
        resetTimeout();
      };
    } else {
      setReviewIndex(0)
    }
   
  }, [reviewIndex, windowWidth]);

  const reviews = reviewData.map(review => {
    return (
      <div key={review.id} className='customer-review'>
        <div className='review-content'>
         
          <p className='quote-copy'> <FaQuoteLeft className='quote-left' />{review.quote}<FaQuoteRight className='quote-right'/></p>
          <p className='review-name'>- {review.name}</p>
        </div>
      </div>
    )
  })

  const reviewMarkers = reviewData.map((_ , idx) => {
    return <div key={idx}className={`review-marker ${reviewIndex === idx ? "active" : ""}`}
      onClick={() => {
        setReviewIndex(idx);
      }}>
    </div>
  })
  
  return (
    <section id="reviews" className='reviews-section'>
      <h1 className='section-header reviews-header'>The<span>Reviews</span></h1>
      <div className='review-container'>
        <div className='review-track' style={{ transform: `translate3d(${-reviewIndex * 100}%, 0, 0)` }}>
          {reviews}
        </div> 
      
      </div>
      <div className='review-marker-container'>
          {reviewMarkers}
        </div>
    </section>
  )
}
