import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedService, setExpandedService] = useState(null);
  const [selectedGallery, setSelectedGallery] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const menuItems = [
    {
      id: 1,
      name: 'Butter Chicken',
      price: 450,
      category: 'Main Course',
      desc: 'Creamy tomato curry with tender chicken pieces, served with aromatic basmati rice',
      fullDesc: 'Our signature butter chicken features succulent chicken pieces marinated overnight in yogurt and spices, cooked in a rich tomato-based gravy with fresh cream and butter.',
      spiceLevel: 3,
      image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&q=80',
      ingredients: ['Chicken', 'Tomatoes', 'Cream', 'Butter', 'Kashmiri Chili', 'Garam Masala'],
      prepTime: '45 mins',
      veg: false,
      popular: true
    },
    {
      id: 2,
      name: 'Vindaloo',
      price: 520,
      category: 'Main Course',
      desc: 'Fiery Goan pork curry with vinegar, garlic and intense heat',
      fullDesc: 'Traditional Goan vindaloo with tender pork marinated in fiery red chilies, vinegar, and aromatic spices.',
      spiceLevel: 5,
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80',
      ingredients: ['Pork', 'Kashmiri Chili', 'Vinegar', 'Garlic', 'Ginger', 'Black Pepper'],
      prepTime: '90 mins',
      veg: false,
      popular: true
    },
    {
      id: 3,
      name: 'Phaal Curry',
      price: 580,
      category: 'Main Course',
      desc: 'Extremely spicy curry with chicken and ghost peppers',
      fullDesc: 'One of the hottest curries in the world! Made with bhut jolokia (ghost peppers), scotch bonnets, and habaneros.',
      spiceLevel: 5,
      image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&q=80',
      ingredients: ['Chicken', 'Ghost Peppers', 'Scotch Bonnet', 'Habanero', 'Tomatoes'],
      prepTime: '60 mins',
      veg: false,
      popular: false
    },
    {
      id: 4,
      name: 'Chicken 65',
      price: 380,
      category: 'Appetizer',
      desc: 'Deep-fried spicy chicken bites with curry leaves and red chili',
      fullDesc: 'Crispy, spicy South Indian chicken appetizer marinated in yogurt, red chili powder, and aromatic spices.',
      spiceLevel: 4,
      image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&q=80',
      ingredients: ['Chicken', 'Red Chili', 'Curry Leaves', 'Ginger-Garlic', 'Yogurt'],
      prepTime: '30 mins',
      veg: false,
      popular: true
    },
    {
      id: 5,
      name: 'Andhra Chili Chicken',
      price: 420,
      category: 'Appetizer',
      desc: 'Fiery chicken stir-fry from Andhra Pradesh with intense spices',
      fullDesc: 'Spicy chicken stir-fry cooked Andhra-style with loads of red chilies, curry leaves, and aromatic spices.',
      spiceLevel: 5,
      image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=800&q=80',
      ingredients: ['Chicken', 'Red Chili', 'Curry Leaves', 'Black Pepper', 'Mustard Seeds'],
      prepTime: '35 mins',
      veg: false,
      popular: false
    },
    {
      id: 6,
      name: 'Spicy Biryani',
      price: 480,
      category: 'Rice',
      desc: 'Hyderabadi-style spicy biryani with extra heat from green chilies',
      fullDesc: 'Aromatic basmati rice layered with spicy marinated chicken, green chilies, and traditional spices.',
      spiceLevel: 4,
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80',
      ingredients: ['Basmati Rice', 'Chicken', 'Green Chili', 'Saffron', 'Biryani Masala'],
      prepTime: '70 mins',
      veg: false,
      popular: true
    },
    {
      id: 7,
      name: 'Chili Paneer',
      price: 340,
      category: 'Vegetarian',
      desc: 'Indo-Chinese spicy paneer with bell peppers and green chilies',
      fullDesc: 'Crispy paneer cubes tossed in a spicy Indo-Chinese sauce with bell peppers, onions, and green chilies.',
      spiceLevel: 4,
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80',
      ingredients: ['Paneer', 'Bell Peppers', 'Green Chili', 'Soy Sauce', 'Chili Sauce'],
      prepTime: '25 mins',
      veg: true,
      popular: false
    },
    {
      id: 8,
      name: 'Spicy Fish Fry',
      price: 450,
      category: 'Seafood',
      desc: 'Crispy fried fish marinated in red chili and coastal spices',
      fullDesc: 'Fresh fish marinated in a fiery blend of red chili powder, turmeric, and coastal spices.',
      spiceLevel: 4,
      image: 'https://th.bing.com/th/id/OIP.Q4n9XRpfUVny92YOK9SwngHaE8?w=280&h=187&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3',
      ingredients: ['Fish', 'Red Chili', 'Turmeric', 'Curry Leaves', 'Coconut Oil'],
      prepTime: '30 mins',
      veg: false,
      popular: true
    },
    {
      id: 9,
      name: 'Mutton Rogan Josh',
      price: 550,
      category: 'Main Course',
      desc: 'Kashmiri lamb curry with aromatic spices and moderate heat',
      fullDesc: 'Traditional Kashmiri mutton curry slow-cooked with aromatic spices, Kashmiri chilies, and yogurt.',
      spiceLevel: 3,
      image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=80',
      ingredients: ['Mutton', 'Kashmiri Chili', 'Yogurt', 'Fennel', 'Cardamom'],
      prepTime: '120 mins',
      veg: false,
      popular: false
    },
    {
      id: 10,
      name: 'Green Chili Chicken',
      price: 460,
      category: 'Main Course',
      desc: 'Spicy green chili-based chicken curry with coconut',
      fullDesc: 'Chicken cooked in a vibrant green curry made with green chilies, coriander, mint, and coconut.',
      spiceLevel: 4,
      image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&q=80',
      ingredients: ['Chicken', 'Green Chili', 'Coconut', 'Coriander', 'Mint'],
      prepTime: '45 mins',
      veg: false,
      popular: true
    },
    {
      id: 11,
      name: 'Spicy Prawns Masala',
      price: 620,
      category: 'Seafood',
      desc: 'Jumbo prawns in fiery tomato and chili masala',
      fullDesc: 'Succulent prawns cooked in a spicy masala with tomatoes, red chilies, and aromatic spices.',
      spiceLevel: 5,
      image: 'data:image/webp;base64,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',
      ingredients: ['Prawns', 'Red Chili', 'Tomatoes', 'Tamarind', 'Curry Leaves'],
      prepTime: '35 mins',
      veg: false,
      popular: true
    },
    {
      id: 12,
      name: 'Spicy Egg Curry',
      price: 280,
      category: 'Vegetarian',
      desc: 'Hard-boiled eggs in spicy onion-tomato gravy',
      fullDesc: 'Boiled eggs simmered in a spicy, tangy gravy made with onions, tomatoes, and aromatic spices.',
      spiceLevel: 3,
      image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800&q=80',
      ingredients: ['Eggs', 'Onions', 'Tomatoes', 'Red Chili', 'Garam Masala'],
      prepTime: '30 mins',
      veg: true,
      popular: false
    }
  ];

  const services = [
    {
      title: 'Authentic Spices',
      desc: 'We source the finest and freshest spices directly from farms across India',
      image: 'https://th.bing.com/th/id/OIP.-ZKCPROiSPVsW0TIiSPkbgHaE8?w=272&h=181&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3',
      details: 'Our spice collection includes rare varieties from Kerala, Kashmir, and Rajasthan. Each spice is carefully selected and stored to preserve its authentic flavor and aroma.'
    },
    {
      title: 'Expert Chefs',
      desc: 'Our master chefs bring decades of traditional cooking expertise',
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&q=80',
      details: 'Trained in the finest culinary traditions of India, our chefs have mastered the art of balancing spices and creating unforgettable flavors.'
    },
    {
      title: 'Fresh Ingredients',
      desc: 'Daily fresh produce and premium quality meats from trusted suppliers',
      image: 'https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?w=600&q=80',
      details: 'We partner with local farmers and trusted suppliers to ensure every ingredient is fresh, organic, and of the highest quality.'
    },
    {
      title: 'Traditional Cooking',
      desc: 'Time-honored cooking methods including tandoor and dum cooking',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80',
      details: 'Our kitchen features traditional clay ovens (tandoors) and we practice slow-cooking techniques for maximum flavor.'
    }
  ];

  const portfolio = [
    {
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
      title: 'Fine Dining Experience',
      category: 'Interior',
      description: 'Elegant ambiance with traditional Indian decor'
    },
    {
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
      title: 'Open Kitchen',
      category: 'Kitchen',
      description: 'Watch our chefs create magic with spices'
    },
    {
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80',
      title: 'Warm Atmosphere',
      category: 'Ambiance',
      description: 'Cozy seating perfect for family gatherings'
    },
    {
      image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800&q=80',
      title: 'Private Dining',
      category: 'Events',
      description: 'Exclusive spaces for special occasions'
    },
    {
      image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80',
      title: 'Outdoor Garden',
      category: 'Outdoor',
      description: 'Al fresco dining under the stars'
    },
    {
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
      title: 'Bar & Lounge',
      category: 'Bar',
      description: 'Curated selection of wines and cocktails'
    }
  ];

  const categories = ['All', 'Main Course', 'Appetizer', 'Rice', 'Seafood', 'Vegetarian'];

  const filteredMenu = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, change) => {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(0, item.quantity + change) }
        : item
    ).filter(item => item.quantity > 0));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const placeOrder = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      setOrderPlaced(false);
      setCart([]);
      setCartOpen(false);
    }, 4000);
  };

  const renderSpiceLevel = (level) => {
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

  return (
    <div className="app">
      {/* Navigation */}
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
            {['home', 'about', 'menu', 'services', 'portfolio', 'help', 'contact'].map((item) => (
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
              {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
            </button>

            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-video-wrapper">
          <video className="hero-video" autoPlay loop muted playsInline>
            <source src="a.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
          <div className="hero-particles"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-badge">
            <svg viewBox="0 0 24 24" fill="currentColor" className="badge-icon">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
            <span>India's Spiciest Restaurant Since 2008</span>
            <svg viewBox="0 0 24 24" fill="currentColor" className="badge-icon">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
          </div>
          
          <h1 className="hero-title">
            <span className="title-word">IGNITE YOUR</span>
            
            <span className="title-word">SENSES</span>
          </h1>
          
          <p className="hero-subtitle">Where Fire Meets Flavor</p>
          
          <p className="hero-description">
            Embark on a fiery culinary adventure through India's spiciest delicacies. 
            From mild warmth to extreme heat, we challenge your taste buds with authentic, 
            traditional recipes that pack serious flavor and fire.
          </p>
          
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection('menu')}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
              </svg>
              <span>Explore Spicy Menu</span>
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Book A Table</span>
            </button>
          </div>

          <div className="hero-features">
            <div className="feature-box">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div className="feature-text">
                <span className="feature-number">50+</span>
                <span className="feature-label">Spicy Dishes</span>
              </div>
            </div>
            <div className="feature-box">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="feature-text">
                <span className="feature-number">15+</span>
                <span className="feature-label">Years Experience</span>
              </div>
            </div>
            <div className="feature-box">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="feature-text">
                <span className="feature-number">10K+</span>
                <span className="feature-label">Happy Guests</span>
              </div>
            </div>
          </div>
        </div>

        
      </section>

      {/* About Section */}
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
                <img src="data:image/webp;base64,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" alt="Spices" />
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

      {/* Menu Section */}
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
                    {renderSpiceLevel(item.spiceLevel)}
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

      {/* Services Section */}
      <section id="services" className="services">
        <div className="section-container">
          <div className="section-header">
            <span className="section-subtitle">What Makes Us Special</span>
            <h2 className="section-title">Our <span className="text-gradient">Excellence</span></h2>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
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

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio">
        <div className="section-container">
          <div className="section-header">
            <span className="section-subtitle">Our Space</span>
            <h2 className="section-title">Restaurant <span className="text-gradient">Gallery</span></h2>
            <p className="section-description">Step inside MasalaKing and experience the ambiance</p>
          </div>

          <div className="gallery-grid">
            {portfolio.map((item, index) => (
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

      {/* Help Section */}
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
            {[
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
            ].map((faq, index) => (
              <div className="faq-card" key={index}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
              <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Reservation request submitted!'); }}>
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
                    <select required className="form-input form-select" id="guests">
                      <option value="">Guests</option>
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

      {/* Footer */}
      <footer className="footer">
        <div className="footer-animated-bg"></div>
        <div className="footer-content-wrapper">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png" 
                  alt="MasalaKing" 
                  className="footer-logo-img"
                />
                <span className="logo-text">MASALA<span className="logo-accent">KING</span></span>
              </div>
              <p className="footer-tagline">
                Where every dish ignites passion and every bite tells a story of fire and flavor. 
                Join us on a spicy journey through India's culinary heritage.
              </p>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="YouTube">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-section">
              <h4>Quick Links</h4>
              <div className="footer-links">
                <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
                <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About Us</a>
                <a href="#menu" onClick={(e) => { e.preventDefault(); scrollToSection('menu'); }}>Menu</a>
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a>
                <a href="#portfolio" onClick={(e) => { e.preventDefault(); scrollToSection('portfolio'); }}>Gallery</a>
                <a href="#help" onClick={(e) => { e.preventDefault(); scrollToSection('help'); }}>Help</a>
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
              </div>
            </div>

            <div className="footer-section">
              <h4>Contact Info</h4>
              <div className="footer-contact">
                <p>123 Spice Street</p>
                <p>Connaught Place</p>
                <p>New Delhi, India 110001</p>
                <p><a href="tel:+919876543210">+91 98765 43210</a></p>
                <p><a href="mailto:info@masalaking.com">info@masalaking.com</a></p>
              </div>
            </div>

            <div className="footer-section">
              <h4>Opening Hours</h4>
              <div className="footer-hours">
                <p>Monday - Thursday</p>
                <p className="time">11:00 AM - 10:30 PM</p>
                <p>Friday - Sunday</p>
                <p className="time">11:00 AM - 11:30 PM</p>
                <p className="kitchen-close">Kitchen closes 30 mins before</p>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2024 MasalaKing. All Rights Reserved. Crafted with 🔥 and Spices.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <span>•</span>
              <a href="#">Terms & Conditions</a>
              <span>•</span>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Product Detail Modal */}
      {selectedProduct && (
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
                  {renderSpiceLevel(selectedProduct.spiceLevel)}
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
      )}

      {/* Gallery Modal */}
      {selectedGallery && (
        <div className="modal-overlay" onClick={() => setSelectedGallery(null)}>
          <div className="gallery-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedGallery(null)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img src={selectedGallery.image} alt={selectedGallery.title} />
            <div className="gallery-modal-info">
              <span className="gallery-modal-category">{selectedGallery.category}</span>
              <h3>{selectedGallery.title}</h3>
              <p>{selectedGallery.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Cart Sidebar */}
      {cartOpen && (
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
      )}

      {/* Order Success Modal */}
      {orderPlaced && (
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
      )}
    </div>
  );
}

export default App;