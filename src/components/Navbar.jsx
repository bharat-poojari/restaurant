import React from 'react';

const Navbar = ({ scrolled, menuOpen, setMenuOpen, activeSection, scrollToSection, cartCount, setCartOpen }) => {
  const navItems = ['home', 'about', 'menu', 'services', 'portfolio', 'help', 'contact'];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo" onClick={() => scrollToSection('home')}>
          <img 
            src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png" 
            alt="MasalaKing Logo" 
            className="logo-image"
          />
          <span className="logo-text">MASALA<span className="logo-accent">KING</span></span>
        </div>
        
        <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <button
              key={item}
              className={`nav-link ${activeSection === item ? 'active' : ''}`}
              onClick={() => scrollToSection(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>

        <div className="nav-actions">
          <button className="cart-btn" onClick={() => setCartOpen(true)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>

          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;