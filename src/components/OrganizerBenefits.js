import React from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiUsers, FiBarChart2, FiPieChart, FiShield, FiCreditCard } from 'react-icons/fi';
import OrganizerImage from '../assets/images/organizer-image.jpg';

const OrganizerBenefits = () => {
  const benefits = [
    {
      icon: <FiUsers />,
      title: "Wider Audience Reach",
      description: "Connect with thousands of sports enthusiasts actively looking for events across India."
    },
    {
      icon: <FiTrendingUp />,
      title: "Enhanced Visibility",
      description: "Showcase your events on our platform with detailed listings that highlight what makes them special."
    },
    {
      icon: <FiBarChart2 />,
      title: "Powerful Dashboard",
      description: "Manage registrations, track attendance, and handle all event logistics from one central dashboard."
    },
    {
      icon: <FiPieChart />,
      title: "Data & Analytics",
      description: "Access valuable insights about your events and attendees to make data-driven decisions."
    },
    {
      icon: <FiShield />,
      title: "Secure Platform",
      description: "Rest easy knowing that our platform handles registrations and payments with top-level security."
    },
    {
      icon: <FiCreditCard />,
      title: "Simplified Payments",
      description: "Receive payments directly to your account with flexible payout options and transparent fees."
    }
  ];

  return (
    <section className="section bg-gradient-to-r from-dark-900 to-dark-800 text-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden relative"
          >
            <img 
              src={OrganizerImage} 
              alt="Event organizer using laptop" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
            
            {/* Stats Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-dark-900/80 backdrop-blur-sm p-6 flex justify-between">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm">Event Organizers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10K+</div>
                <div className="text-sm">Monthly Visitors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm">Satisfaction Rate</div>
              </div>
            </div>
          </motion.div>
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Benefits for <span className="text-primary">Organizers</span>
            </h2>
            <p className="mb-8">
              FitIzen India provides powerful tools and a ready audience of sports enthusiasts 
              to help you create successful events with less effort and better results.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex"
                >
                  <div className="mr-4 text-primary text-2xl">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{benefit.title}</h3>
                    <p className="text-white/80 text-sm">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-10"
            >
              <button className="btn-primary">Register as Organizer</button>
              <a href="#testimonials" className="text-white/80 hover:text-white ml-6 underline">
                See Success Stories
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OrganizerBenefits; 