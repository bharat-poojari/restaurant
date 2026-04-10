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

const Menu = ({ 
  categories, 
  selectedCategory, 
  setSelectedCategory, 
  filteredMenu, 
  setSelectedProduct, 
  addToCart, 
  placeOrder 
}) => {
  return (
    <section id="menu" className="menu">
      <div className="section-container">
        <div className="section-header">
          <span className="section-subtitle">Spicy Delights</span>
          <h2 className="section-title">Our Fiery <span className="text-gradient">Menu</span></h2>
          <p className="section-description">Dare to taste the heat? Choose your spice level wisely!</p>
        </div>

        <div className="menu-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filteredMenu.map((item, index) => (
            <div className="menu-card" key={item.id} style={{ animationDelay: `${index * 0.1}s` }}>
              {item.popular && <div className="popular-badge">🔥 Popular</div>}
              
              <div className="menu-card-image" onClick={() => setSelectedProduct(item)}>
                <img src={item.image} alt={item.name} loading="lazy" />
                <div className="menu-overlay">
                  <button className="view-details-btn">View Details</button>
                </div>
                <div className="spice-badge">
                  <SpiceLevel level={item.spiceLevel} />
                </div>
              </div>
              
              <div className="menu-card-body">
                <div className="menu-header">
                  <h3 className="menu-name">{item.name}</h3>
                  <span className="menu-category">{item.category}</span>
                </div>
                <p className="menu-desc">{item.desc}</p>
              </div>

              <div className="menu-card-footer">
                <span className="menu-price">₹{item.price}</span>
                <div className="menu-actions">
                  <button 
                    className="menu-action-btn quick-order"
                    onClick={() => {
                      addToCart(item);
                      placeOrder();
                    }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Quick Order
                  </button>
                  <button 
                    className="menu-action-btn add-cart"
                    onClick={() => addToCart(item)}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;