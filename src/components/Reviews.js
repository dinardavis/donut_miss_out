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
      quote: "I’ve realized that the right place doesn’t mean anything without the right people.",
      name: "Mia Wallace",
      id: 2
    },
    {
      quote: "There's a sensuous thing going on where you don't talk about it, but you know it...",
      name: "Vincent Vega",
      id: 3
    },
  ]

  const [reviewIndex, setReviewIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);
  const delay = 4500;

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
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
  }, [reviewIndex]);

  const reviews = reviewData.map(review => {
    return (
      <div key={review.id} className='customer-review'>
        <FaQuoteLeft className='quote-left' />
        <p className='quote-copy'>{review.quote}<FaQuoteRight className='quote-right'/></p>
        <p className='review-name'>- {review.name}</p>
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
    <section id="reviews">
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
