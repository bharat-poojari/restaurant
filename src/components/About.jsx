import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-container">
        <div className="section-header">
          <span className="section-subtitle">Our Story</span>
          <h2 className="section-title">The Heat <span className="text-gradient">Legacy</span></h2>
          <p className="section-description">A journey through fire, flavor, and tradition</p>
        </div>

        <div className="about-content">
          <div className="about-image-grid">
            <div className="about-image-main">
              <img src="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800&q=80" alt="Chef" />
              <div className="image-overlay">
                <span className="overlay-text">Master Chef</span>
              </div>
            </div>
            <div className="about-image-secondary">
              <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80" alt="Spices" />
              <div className="image-overlay">
                <span className="overlay-text">Fresh Spices</span>
              </div>
            </div>
            <div className="about-image-tertiary">
              <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80" alt="Kitchen" />
              <div className="image-overlay">
                <span className="overlay-text">Our Kitchen</span>
              </div>
            </div>
          </div>

          <div className="about-text">
            <div className="about-intro">
              <p className="about-paragraph highlight">
                Since 2008, MasalaKing has been Delhi's premier destination for authentic spicy Indian cuisine. 
                What started as a small family kitchen has grown into a legendary restaurant known for 
                pushing the boundaries of heat and flavor.
              </p>
              
              <p className="about-paragraph">
                Our master chefs source the finest chilies from across India - from the smoky Kashmiri chilies 
                of the north to the fiery bird's eye chilies of the south. Each dish is a carefully crafted 
                balance of heat, spice, and authentic Indian flavors.
              </p>

              <p className="about-paragraph">
                Whether you're a spice novice or a heat-seeking veteran, we have something to challenge 
                and delight your palate. Our spice scale ranges from mild warmth to intense heat 
                that will test even the bravest food warriors.
              </p>
            </div>

            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-icon">🌶️</div>
                <div className="stat-info">
                  <span className="stat-value">50+</span>
                  <span className="stat-label">Spicy Varieties</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">👨‍🍳</div>
                <div className="stat-info">
                  <span className="stat-value">12</span>
                  <span className="stat-label">Expert Chefs</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">🏆</div>
                <div className="stat-info">
                  <span className="stat-value">25+</span>
                  <span className="stat-label">Awards Won</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;