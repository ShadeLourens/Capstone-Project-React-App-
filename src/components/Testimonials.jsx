// Testimonials.jsx
// Displays a grid of customer testimonials with images and quotes

import React from "react";
import "./Testimonials.css";

export default function Testimonials() {
  // Static testimonial content
  const reviews = [
    {
      image: "/images/review1.jpg",
      text: "I’ve never felt more confident in my skin. The texture, the glow—everything changed within weeks. I love that the ingredients are clean and effective. I’m obsessed!",
      name: "Jasmine A.",
    },
    {
      image: "/images/review2.jpg",
      text: "Although my skin is typically sensitive, these products are quite mild and very moisturising.  I have suggested it to every single member of my family! The glow is real, and I won't survive a single day without it!",
      name: "Priya N.",
    },
    {
      image: "/images/review3.jpg",
      text: "You can actually feel the difference. My redness calmed down, my breakouts are gone, and I constantly get compliments on my skin. This is skincare that actually works.",
      name: "Sofia L.",
    },
  ];

  return (
    <section className="testimonials-section py-5">
      <h2 className="section-title text-center mb-5">Clients Love</h2>

      <div className="container">
        <div className="row justify-content-center">
          {/* Render testimonial cards */}
          {reviews.map((review, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="testimonial-card p-4 text-center">
                <img
                  src={review.image}
                  alt={review.name}
                  className="review-img mb-3"
                />
                <div className="stars mb-3">★★★★★</div>
                <p className="testimonial-text">{review.text}</p>
                <p className="reviewer-name mt-3 fw-bold">{review.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
