import React from 'react';

const SpiceLevel = ({ level }) => {
  return (
    <div className="spice-level">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`spice-icon ${i < level ? 'active' : ''}`}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
      ))}
    </div>
  );
};

const ProductModal = ({ selectedProduct, setSelectedProduct, addToCart, placeOrder }) => {
  return (
    <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={() => setSelectedProduct(null)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="modal-image">
          <img src={selectedProduct.image} alt={selectedProduct.name} />
        </div>
        
        <div className="modal-body">
          <div className="modal-header">
            <div>
              <h2>{selectedProduct.name}</h2>
              <span className="modal-category">{selectedProduct.category}</span>
            </div>
            <span className="modal-price">₹{selectedProduct.price}</span>
          </div>
          
          <p className="modal-description">{selectedProduct.fullDesc}</p>
          
          <div className="modal-details">
            <div className="detail-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Prep Time: {selectedProduct.prepTime}</span>
            </div>
            <div className="detail-item">
              <span className="spice-label">Heat Level:</span>
              <SpiceLevel level={selectedProduct.spiceLevel} />
            </div>
          </div>
          
          <div className="modal-ingredients">
            <h4>Key Ingredients</h4>
            <div className="ingredients-list">
              {selectedProduct.ingredients.map((ingredient, i) => (
                <span key={i} className="ingredient-tag">{ingredient}</span>
              ))}
            </div>
          </div>
          
          <div className="modal-actions">
            <button 
              className="btn btn-secondary btn-full"
              onClick={() => {
                addToCart(selectedProduct);
                setSelectedProduct(null);
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>Add to Cart</span>
            </button>
            <button 
              className="btn btn-primary btn-full"
              onClick={() => {
                addToCart(selectedProduct);
                setSelectedProduct(null);
                placeOrder();
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Order Now - ₹{selectedProduct.price}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;