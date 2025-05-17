import React from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiCalendar, FiMapPin } from 'react-icons/fi';
import HeroImage from '../assets/images/hero-image.jpg';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={HeroImage} 
          alt="Athletes running in a marathon" 
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/80 to-dark-900/40"></div>
      </div>

      {/* Hero Content */}
      <div className="container-custom relative z-10">
        <motion.div 
          className="max-w-3xl text-white"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
          >
            <span className="block">Discover & Join</span>
            <span className="text-primary">Sports Events</span>
            <span className="block">Across India</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl opacity-90 mb-8"
          >
            Your one-stop platform to find marathons, cycling events, triathlons, and more.
            Join events or list your own in just a few clicks.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
          >
            <button className="btn-primary">
              <FiSearch className="mr-2" />
              Browse Events
            </button>
            <button className="btn-secondary">
              <FiCalendar className="mr-2" />
              Create Event
            </button>
          </motion.div>
          
          {/* Search Box */}
          <motion.div 
            variants={itemVariants}
            className="bg-white p-4 rounded-xl shadow-custom max-w-2xl"
          >
            <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
              <div className="flex-1 relative">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-400" />
                <input 
                  type="text"
                  placeholder="Search events..." 
                  className="input !pl-10"
                />
              </div>
              
              <div className="flex-1 relative">
                <FiMapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-400" />
                <select className="input !pl-10 appearance-none">
                  <option value="">All Locations</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="delhi">Delhi</option>
                  <option value="bangalore">Bangalore</option>
                  <option value="chennai">Chennai</option>
                  <option value="hyderabad">Hyderabad</option>
                </select>
              </div>
              
              <button className="btn-primary md:w-auto">Search</button>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Curved bottom shape */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path 
            fill="url(#waveGradient)" 
            d="M0,256 C320,192 480,288 720,256 C960,224 1200,160 1440,192 L1440,320 L0,320 Z"
          ></path>
          <path 
            fill="#f9fafb" 
            fillOpacity="0.7" 
            d="M0,288 C240,256 480,192 720,224 C960,256 1200,288 1440,256 L1440,320 L0,320 Z"
          ></path>
          <path 
            fill="#F9FAFB" 
            d="M0,288 C180,304 360,320 720,304 C1080,288 1260,256 1440,272 L1440,320 L0,320 Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero; 