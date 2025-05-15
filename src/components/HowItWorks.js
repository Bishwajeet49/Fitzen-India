import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiCalendar, FiSearch, FiCheckCircle, FiUsers, 
  FiTrendingUp, FiSettings, FiArrowRight, 
  FiSmartphone, FiCreditCard, FiBarChart2 
} from 'react-icons/fi';

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState('participants');

  const participantSteps = [
    {
      id: 1,
      icon: <FiSearch />,
      secondaryIcon: <FiSmartphone />,
      title: "Discover Events",
      description: "Browse through curated sports events across India based on your preferences, location, and interests.",
      color: "from-primary to-red-500",
      feature: "App & Web Available"
    },
    {
      id: 2,
      icon: <FiCalendar />,
      secondaryIcon: <FiCreditCard />,
      title: "Register & Pay",
      description: "Simple one-page registration with secure payment options. Save your details for faster checkout next time.",
      color: "from-accent-blue to-blue-600",
      feature: "Secure Payments"
    },
    {
      id: 3,
      icon: <FiCheckCircle />,
      secondaryIcon: <FiUsers />,
      title: "Participate & Share",
      description: "Receive instant confirmation with all event details. Share your participation and invite friends to join.",
      color: "from-accent-green to-green-600",
      feature: "Social Integration"
    }
  ];

  const organizerSteps = [
    {
      id: 1,
      icon: <FiSettings />,
      secondaryIcon: <FiCalendar />,
      title: "Create & Configure",
      description: "Set up your organization profile and create beautifully designed event pages in minutes.",
      color: "from-accent-purple to-purple-600",
      feature: "Custom Branding"
    },
    {
      id: 2,
      icon: <FiCalendar />,
      secondaryIcon: <FiBarChart2 />,
      title: "Promote & Manage",
      description: "Use built-in marketing tools to reach more participants and manage registrations efficiently.",
      color: "from-accent-yellow to-yellow-600",
      feature: "Real-time Analytics"
    },
    {
      id: 3,
      icon: <FiTrendingUp />,
      secondaryIcon: <FiUsers />,
      title: "Grow & Scale",
      description: "Access detailed analytics, collect feedback, and build a community around your events.",
      color: "from-accent-blue to-cyan-600",
      feature: "Audience Insights"
    }
  ];

  const currentSteps = activeTab === 'participants' ? participantSteps : organizerSteps;

  return (
    <section id="how-it-works" className="section relative py-20 overflow-hidden bg-gradient-to-b from-white to-dark-50">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 right-0 w-96 h-96 rounded-full bg-accent-blue blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-primary blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-3">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              Simple Process
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-dark-800 to-primary bg-clip-text text-transparent">
            How FitIzen India Works
          </h2>
          <p className="text-dark-600 max-w-2xl mx-auto text-lg">
            Our platform makes fitness event discovery and management seamless for everyone.
            Follow these simple steps to get started.
          </p>
        </motion.div>
        
        {/* Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="bg-white shadow-lg rounded-full p-1.5 inline-flex">
            <button
              onClick={() => setActiveTab('participants')}
              className={`px-8 py-3 rounded-full text-sm font-medium transition-all flex items-center ${
                activeTab === 'participants' 
                  ? 'bg-primary text-white shadow-md' 
                  : 'text-dark-600 hover:bg-gray-100'
              }`}
            >
              <FiUsers className="mr-2" /> For Participants
            </button>
            <button
              onClick={() => setActiveTab('organizers')}
              className={`px-8 py-3 rounded-full text-sm font-medium transition-all flex items-center ${
                activeTab === 'organizers' 
                  ? 'bg-accent-blue text-white shadow-md' 
                  : 'text-dark-600 hover:bg-gray-100'
              }`}
            >
              <FiCalendar className="mr-2" /> For Organizers
            </button>
          </div>
        </motion.div>
        
        {/* Content - Steps with Animation */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-dark-100 transform -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid md:grid-cols-3 gap-8 relative">
              <AnimatePresence mode="wait">
                {currentSteps.map((step, index) => (
                  <StepCard
                    key={`${activeTab}-${step.id}`}
                    step={step}
                    index={index}
                    isActive={activeTab}
                  />
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mt-16 px-4"
        >
          <StatCard number="2 Min" label="Average Setup Time" />
          <StatCard number="500+" label="Events Listed" />
          <StatCard number="10K+" label="Monthly Users" />
          <StatCard number="24/7" label="Customer Support" />
        </motion.div>
        
        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-3 rounded-full text-white font-medium transition-all flex items-center mx-auto ${
              activeTab === 'participants' ? 'bg-gradient-to-r from-primary to-red-600' : 'bg-gradient-to-r from-accent-blue to-blue-600'
            }`}
          >
            {activeTab === 'participants' ? 'Browse Events' : 'Create an Event'}
            <FiArrowRight className="ml-2" />
          </motion.button>
          <p className="text-dark-500 mt-4 text-sm">
            {activeTab === 'participants' 
              ? 'Join thousands of fitness enthusiasts across India' 
              : 'Over 200+ organizers trust FitIzen India'}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const StepCard = ({ step, index, isActive }) => {
  const animationDelay = 0.2 * (index + 1);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, delay: animationDelay }}
      className="relative"
    >
      <motion.div 
        whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
        className="card p-8 rounded-2xl bg-white shadow-lg flex flex-col h-full relative overflow-hidden"
      >
        {/* Step Number */}
        <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full bg-dark-50 flex items-start justify-start pt-6 pl-6">
          <span className="text-xl font-bold text-dark-300">0{step.id}</span>
        </div>
        
        {/* Content */}
        <div className="flex-grow">
          {/* Icon with gradient background */}
          <div className="flex items-center mb-6">
            <div className={`w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-r ${step.color} text-white text-2xl`}>
              {step.icon}
            </div>
            <div className="ml-4 bg-dark-50 p-1 rounded-lg">
              <div className="w-8 h-8 flex items-center justify-center text-dark-500 text-lg">
                {step.secondaryIcon}
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-3">{step.title}</h3>
          <p className="text-dark-600 mb-6">{step.description}</p>
        </div>
        
        {/* Feature tag */}
        <div className="mt-auto pt-4 border-t border-dark-100">
          <div className="flex items-center text-sm text-dark-500">
            <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color} mr-2`}></span>
            {step.feature}
          </div>
        </div>
      </motion.div>
      
      {/* Arrow connection for desktop - hidden on mobile */}
      {index < 2 && (
        <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary text-2xl hidden lg:block">
          <FiArrowRight />
        </div>
      )}
    </motion.div>
  );
};

const StatCard = ({ number, label }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white/50 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center"
  >
    <h3 className="text-2xl md:text-3xl font-bold mb-1 bg-gradient-to-r from-primary to-accent-blue bg-clip-text text-transparent">
      {number}
    </h3>
    <p className="text-dark-500 text-sm">{label}</p>
  </motion.div>
);

export default HowItWorks; 