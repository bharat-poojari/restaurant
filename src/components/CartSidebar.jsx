import React from 'react';

const CartSidebar = ({ cart, setCartOpen, updateQuantity, getTotalPrice, placeOrder, scrollToSection }) => {
  return (
    <>
      <div className="cart-overlay" onClick={() => setCartOpen(false)}></div>
      <div className="cart-sidebar">
        <div className="cart-header">
          <h3>Your Cart</h3>
          <button className="cart-close" onClick={() => setCartOpen(false)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <p>Your cart is empty</p>
              <button className="btn btn-primary" onClick={() => { setCartOpen(false); scrollToSection('menu'); }}>
                Browse Menu
              </button>
            </div>
          ) : (
            <>
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-details">
                    <h4>{item.name}</h4>
                    <span className="cart-item-price">₹{item.price}</span>
                  </div>
                  <div className="cart-item-controls">
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
        
        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span className="total-price">₹{getTotalPrice()}</span>
            </div>
            <button className="btn btn-primary btn-full" onClick={placeOrder}>
              <span>Place Order</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;