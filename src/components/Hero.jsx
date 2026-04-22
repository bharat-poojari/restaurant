import React from 'react';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="hero">
      <div className="hero-video-wrapper">
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src="https://raw.githubusercontent.com/bharat-poojari/restaurant/main/a.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-particles"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-badge">
          <svg viewBox="0 0 24 24" fill="currentColor" className="badge-icon">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
          <span>India's Spiciest Restaurant Since 2008</span>
          <svg viewBox="0 0 24 24" fill="currentColor" className="badge-icon">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
        </div>
        
        <h1 className="hero-title">
          <span className="title-word">IGNITE YOUR</span>
          <span className="title-word">SENSES</span>
        </h1>
        
        <p className="hero-subtitle">Where Fire Meets Flavor</p>
        
        <p className="hero-description">
          Embark on a fiery culinary adventure through India's spiciest delicacies. 
          From mild warmth to extreme heat, we challenge your taste buds with authentic, 
          traditional recipes that pack serious flavor and fire.
        </p>
        
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => scrollToSection('menu')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
            </svg>
            <span>Explore Spicy Menu</span>
          </button>
          <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Book A Table</span>
          </button>
        </div>

        <div className="hero-features">
          <div className="feature-box">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div className="feature-text">
              <span className="feature-number">50+</span>
              <span className="feature-label">Spicy Dishes</span>
            </div>
          </div>
          <div className="feature-box">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="feature-text">
              <span className="feature-number">15+</span>
              <span className="feature-label">Years Experience</span>
            </div>
          </div>
          <div className="feature-box">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="feature-text">
              <span className="feature-number">10K+</span>
              <span className="feature-label">Happy Guests</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
