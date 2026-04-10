import React from 'react';

const Portfolio = ({ portfolioData, setSelectedGallery }) => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="section-container">
        <div className="section-header">
          <span className="section-subtitle">Our Space</span>
          <h2 className="section-title">Restaurant <span className="text-gradient">Gallery</span></h2>
          <p className="section-description">Step inside MasalaKing and experience the ambiance</p>
        </div>

        <div className="gallery-grid">
          {portfolioData.map((item, index) => (
            <div 
              className="gallery-item" 
              key={index}
              onClick={() => setSelectedGallery(item)}
            >
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="gallery-overlay">
                <span className="gallery-category">{item.category}</span>
                <h3 className="gallery-title">{item.title}</h3>
                <p className="gallery-description">{item.description}</p>
                <button className="gallery-view-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;