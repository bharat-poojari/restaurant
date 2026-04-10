import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Help from './components/Help';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import GalleryModal from './components/GalleryModal';
import CartSidebar from './components/CartSidebar';
import OrderSuccessModal from './components/OrderSuccessModal';
import { menuItems } from './data/menuData';
import { servicesData } from './data/servicesData';
import { portfolioData } from './data/portfolioData';

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

  const categories = ['All', 'Main Course', 'Appetizer', 'Rice', 'Seafood', 'Vegetarian'];

  const filteredMenu = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="app">
      <Navbar
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        cartCount={cart.length}
        setCartOpen={setCartOpen}
      />

      <Hero scrollToSection={scrollToSection} />

      <About />

      <Menu
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        filteredMenu={filteredMenu}
        setSelectedProduct={setSelectedProduct}
        addToCart={addToCart}
        placeOrder={placeOrder}
      />

      <Services
        servicesData={servicesData}
        expandedService={expandedService}
        setExpandedService={setExpandedService}
      />

      <Portfolio
        portfolioData={portfolioData}
        setSelectedGallery={setSelectedGallery}
      />

      <Help />

      <Contact />

      <Footer scrollToSection={scrollToSection} />

      {selectedProduct && (
        <ProductModal
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          addToCart={addToCart}
          placeOrder={placeOrder}
        />
      )}

      {selectedGallery && (
        <GalleryModal
          selectedGallery={selectedGallery}
          setSelectedGallery={setSelectedGallery}
        />
      )}

      {cartOpen && (
        <CartSidebar
          cart={cart}
          setCartOpen={setCartOpen}
          updateQuantity={updateQuantity}
          getTotalPrice={getTotalPrice}
          placeOrder={placeOrder}
          scrollToSection={scrollToSection}
        />
      )}

      {orderPlaced && <OrderSuccessModal />}
    </div>
  );
}

export default App;