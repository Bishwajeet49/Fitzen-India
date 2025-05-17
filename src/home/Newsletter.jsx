import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiArrowRight } from 'react-icons/fi';

const Newsletter = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-red-700 text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated with Sports Events
            </h2>
            <p className="opacity-90">
              Subscribe to our newsletter and receive weekly updates about the latest sports events, 
              exclusive offers, and fitness tips tailored to your interests.
            </p>
          </motion.div>
          
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <div className="relative flex-grow">
              <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-400" />
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="input !pl-12 w-full text-dark-800"
                required
              />
            </div>
            <button 
              type="submit" 
              className="btn-dark flex items-center justify-center whitespace-nowrap"
            >
              Subscribe
              <FiArrowRight className="ml-2" />
            </button>
          </motion.form>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-6 text-sm opacity-80"
          >
            By subscribing, you agree to our Privacy Policy and consent to receive updates from FitIzen India.
          </motion.div>
        </div>
      </div>
      
      {/* Wave Shape */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 100" 
          className="w-full h-auto transform rotate-180"
        >
          <path 
            fill="#F9FAFB" 
            fillOpacity="1" 
            d="M0,32L60,37.3C120,43,240,53,360,53.3C480,53,600,43,720,42.7C840,43,960,53,1080,53.3C1200,53,1320,43,1380,37.3L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Newsletter; 