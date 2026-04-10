import React from 'react';

const OrderSuccessModal = () => {
  return (
    <div className="order-success-overlay">
      <div className="order-success-modal">
        <div className="success-animation">
          <svg className="checkmark" viewBox="0 0 52 52">
            <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
            <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
          </svg>
        </div>
        <h2>🔥 Order Placed Successfully! 🔥</h2>
        <p>Your spicy feast is being prepared with love and fire!</p>
        <p className="order-info">Estimated delivery: 30-40 minutes</p>
        <div className="order-warning">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span>Caution: Extremely Spicy! Keep water ready 💧</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessModal;