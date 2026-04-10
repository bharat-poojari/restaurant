import React from 'react';

const Services = ({ servicesData, expandedService, setExpandedService }) => {
  return (
    <section id="services" className="services">
      <div className="section-container">
        <div className="section-header">
          <span className="section-subtitle">What Makes Us Special</span>
          <h2 className="section-title">Our <span className="text-gradient">Excellence</span></h2>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div 
              className={`service-card ${expandedService === index ? 'expanded' : ''}`}
              key={index}
              onClick={() => setExpandedService(expandedService === index ? null : index)}
            >
              <div className="service-image-wrapper">
                <img src={service.image} alt={service.title} />
                <div className="service-overlay"></div>
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
                {expandedService === index && (
                  <p className="service-details">{service.details}</p>
                )}
                <button className="service-expand-btn">
                  {expandedService === index ? 'Show Less' : 'Learn More'}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={expandedService === index ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;