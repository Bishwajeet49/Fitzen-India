import React from 'react';
import { motion } from 'framer-motion';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiYoutube } from 'react-icons/fi';
import Logo from '../assets/images/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-16 mb-12">
          {/* Brand & Mission */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <img src={Logo} alt="FitIzen India Logo" className="h-10" />
              <span className="ml-2 text-xl font-bold font-heading text-primary">FitIzen</span>
            </div>
            <p className="text-white/70 mb-6">
              Your one-stop platform to discover, join, and organize sports events across India.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://facebook.com" icon={<FiFacebook />} />
              <SocialLink href="https://twitter.com" icon={<FiTwitter />} />
              <SocialLink href="https://instagram.com" icon={<FiInstagram />} />
              <SocialLink href="https://linkedin.com" icon={<FiLinkedin />} />
              <SocialLink href="https://youtube.com" icon={<FiYoutube />} />
            </div>
          </div>
          
          {/* For Participants */}
          <div>
            <h3 className="text-lg font-bold mb-4">For Participants</h3>
            <ul className="space-y-3">
              <FooterLink href="#">Browse Events</FooterLink>
              <FooterLink href="#">Find by Location</FooterLink>
              <FooterLink href="#">Find by Category</FooterLink>
              <FooterLink href="#">Registration Guide</FooterLink>
              <FooterLink href="#">FAQs</FooterLink>
            </ul>
          </div>
          
          {/* For Organizers */}
          <div>
            <h3 className="text-lg font-bold mb-4">For Organizers</h3>
            <ul className="space-y-3">
              <FooterLink href="#">List Your Event</FooterLink>
              <FooterLink href="#">Organizer Dashboard</FooterLink>
              <FooterLink href="#">Marketing Tools</FooterLink>
              <FooterLink href="#">Success Stories</FooterLink>
              <FooterLink href="#">Organizer FAQs</FooterLink>
            </ul>
          </div>
          
          {/* Company & Support */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Contact Us</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
            </ul>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10 text-center text-white/60 text-sm"
        >
          <p>© {currentYear} FitIzen India. All rights reserved.</p>
          <p className="mt-2">
            Designed and developed with ❤️ for sports enthusiasts across India.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white/80 hover:text-white"
  >
    {icon}
  </a>
);

const FooterLink = ({ href, children }) => (
  <li>
    <a 
      href={href} 
      className="text-white/70 hover:text-primary transition-colors"
    >
      {children}
    </a>
  </li>
);

export default Footer; 