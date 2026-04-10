import React from 'react';

const Help = () => {
  const faqItems = [
    { question: 'What are your opening hours?', answer: 'We are open daily from 11:00 AM to 11:00 PM, and the kitchen closes 30 minutes before closing time.' },
    { question: 'Do you accept reservations?', answer: 'Yes, you can book a table through the contact form on this page or by calling us directly at +91 98765 43210.' },
    { question: 'Can I order food online?', answer: 'Currently we offer dine-in reservations and local pickup. Online delivery is coming soon.' },
    { question: 'Is your menu suitable for vegetarians?', answer: 'Absolutely. We have a dedicated vegetarian section with flavorful options like Chili Paneer and Spicy Egg Curry.' },
    { question: 'How spicy are your dishes?', answer: 'We offer a range from mild to extremely hot. Each dish description includes its heat level so you can choose with confidence.' },
    { question: 'Do you have gluten-free options?', answer: 'Yes, we can prepare many dishes gluten-free on request. Please inform our staff when you place your order.' },
    { question: 'Can I customize my spice level?', answer: 'Yes, our chefs are happy to adjust the spice level to suit your taste, from mild to maximum heat.' },
    { question: 'What safety measures do you follow?', answer: 'We maintain strict hygiene and food safety standards, with regular kitchen cleaning and staff health checks.' },
    { question: 'Do you offer group bookings?', answer: 'Yes. For groups larger than five, please contact us in advance so we can reserve the best seating for you.' },
    { question: 'How can I contact customer support?', answer: 'Reach out via email at info@masalaking.com or call us at +91 98765 43210 for any assistance.' },
  ];

  return (
    <section id="help" className="help">
      <div className="section-container">
        <div className="section-header">
          <span className="section-subtitle">Need Help?</span>
          <h2 className="section-title">Frequently Asked <span className="text-gradient">Questions</span></h2>
          <p className="section-description">
            Find answers to common questions about reservations, menu choices, order policies, and more.
          </p>
        </div>

        <div className="faq-grid">
          {faqItems.map((faq, index) => (
            <div className="faq-card" key={index}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Help;