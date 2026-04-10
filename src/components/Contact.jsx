import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Reservation request submitted!');
  };

  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <div className="section-header">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Reserve Your <span className="text-gradient">Table</span></h2>
        </div>

        <div className="contact-wrapper">
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9746433591814!2d77.21612931508057!3d28.63503908241961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd371d9e0d7b%3A0x45a458229419bd55!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MasalaKing Location"
            ></iframe>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" placeholder=" " required className="form-input" id="name" />
                <label className="form-label" htmlFor="name">Your Name</label>
                <span className="form-border"></span>
              </div>

              <div className="form-group">
                <input type="email" placeholder=" " required className="form-input" id="email" />
                <label className="form-label" htmlFor="email">Email Address</label>
                <span className="form-border"></span>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input type="tel" placeholder=" " required className="form-input" id="phone" />
                  <label className="form-label" htmlFor="phone">Phone Number</label>
                  <span className="form-border"></span>
                </div>
                <div className="form-group">
                  <select required className="form-input form-select" id="guests" defaultValue="">
                    <option value="" disabled>Guests</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3-4">3-4 People</option>
                    <option value="5+">5+ People</option>
                  </select>
                  <span className="form-border"></span>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input type="date" required className="form-input" id="date" />
                  <span className="form-border"></span>
                </div>
                <div className="form-group">
                  <input type="time" required className="form-input" id="time" />
                  <span className="form-border"></span>
                </div>
              </div>

              <div className="form-group">
                <textarea placeholder=" " rows="4" className="form-input" id="message"></textarea>
                <label className="form-label" htmlFor="message">Special Requests</label>
                <span className="form-border"></span>
              </div>

              <button type="submit" className="btn btn-primary btn-full">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Book Your Table</span>
              </button>
            </form>

            <div className="contact-info-cards">
              <div className="info-mini-card">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+919876543210">+91 98765 43210</a>
              </div>
              <div className="info-mini-card">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@masalaking.com">info@masalaking.com</a>
              </div>
              <div className="info-mini-card">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Mon-Sun: 11 AM - 11 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;