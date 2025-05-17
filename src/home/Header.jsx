import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from '../assets/images/logo.png';
import { Button, IconButton } from '../sharedComponents/buttons';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isthisLandingPage, setIsthisLandingPage] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      setIsthisLandingPage(true);
      
    } else {
      setIsthisLandingPage(false);
      setIsScrolled(true);//always true for other pages
    }
  }, [location.pathname]);

  useEffect(() => {
    if(isthisLandingPage){
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }
  }, [isthisLandingPage]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/login?mode=register');
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: "easeInOut" 
      }
    }
  };

  return (
    <motion.header 
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src={Logo} alt="FitIzen India Logo" className="h-10 md:h-12" />
            {/* <span className={`ml-2 text-xl font-bold font-heading ${isScrolled ? 'text-primary' : 'text-white'}`}>
              FitIzen
            </span> */}
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#events" isScrolled={isScrolled}>Events</NavLink>
            <NavLink href="#how-it-works" isScrolled={isScrolled}>How It Works</NavLink>
            <NavLink href="#categories" isScrolled={isScrolled}>Categories</NavLink>
            <NavLink href="#testimonials" isScrolled={isScrolled}>Testimonials</NavLink>
            <div className="ml-4 flex space-x-3">
              <button onClick={handleLogin} className="btn-secondary !py-2 !px-4">Sign In</button>
              <button onClick={handleRegister} className="btn-primary !py-2 !px-4">Register</button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <IconButton 
            className="md:hidden z-20"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            variant="text"
            position="only"
            icon={isOpen ? 
              <FiX className="text-primary text-2xl" /> : 
              <FiMenu className={`text-2xl ${isScrolled ? 'text-primary' : 'text-white'}`} />
            }
          />

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-white z-10 flex flex-col pt-20 pb-6 px-6"
            >
              <nav className="flex flex-col space-y-6 text-center">
                <MobileNavLink href="#events" onClick={toggleMenu}>Events</MobileNavLink>
                <MobileNavLink href="#how-it-works" onClick={toggleMenu}>How It Works</MobileNavLink>
                <MobileNavLink href="#categories" onClick={toggleMenu}>Categories</MobileNavLink>
                <MobileNavLink href="#testimonials" onClick={toggleMenu}>Testimonials</MobileNavLink>
                <div className="pt-6 flex flex-col space-y-3">
                  <button onClick={handleLogin} className="btn-secondary w-full">Sign In</button>
                  <button onClick={handleRegister} className="btn-primary w-full">Register</button>
                </div>
              </nav>
            </motion.div>
          )}
        </div>
      </div>
    </motion.header>
  );
};

const NavLink = ({ href, children, isScrolled }) => (
  <a 
    href={href} 
    className={`font-medium hover:text-primary transition-colors ${
      isScrolled ? 'text-dark-700' : 'text-white'
    }`}
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, onClick, children }) => (
  <a 
    href={href} 
    onClick={onClick}
    className="text-xl font-medium text-dark-800 hover:text-primary transition-colors"
  >
    {children}
  </a>
);

export default Header; 