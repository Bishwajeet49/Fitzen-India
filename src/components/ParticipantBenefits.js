import React from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiCalendar, FiCreditCard, FiAward, FiMapPin, FiStar } from 'react-icons/fi';
import ParticipantImage from '../assets/images/participant-image.jpg';

const ParticipantBenefits = () => {
  return (
    <section className="section bg-secondary-100">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Benefits for <span className="text-primary">Participants</span>
            </h2>
            <p className="text-dark-600 mb-8">
              Discover, enroll, and participate in the best sports events across India. FitIzen India
              makes it easy to find events that match your interests and fitness goals.
            </p>
            
            <div className="space-y-6">
              <BenefitCard 
                icon={<FiSearch />}
                title="Discover Events Easily"
                description="Find events based on location, date, sport type, and difficulty level with our powerful search filters."
              />
              
              <BenefitCard 
                icon={<FiCalendar />}
                title="All Events in One Place"
                description="Browse through hundreds of sports events across India without having to visit multiple websites."
              />
              
              <BenefitCard 
                icon={<FiCreditCard />}
                title="Secure & Simple Registration"
                description="Register and pay for events securely in just a few clicks with our streamlined process."
              />
              
              <BenefitCard 
                icon={<FiAward />}
                title="Exclusive Discounts"
                description="Enjoy early bird discounts and special offers available only to FitIzen India users."
              />
              
              <BenefitCard 
                icon={<FiMapPin />}
                title="Location-Based Recommendations"
                description="Get personalized event recommendations based on your location and preferences."
              />
              
              <BenefitCard 
                icon={<FiStar />}
                title="Verified Reviews & Ratings"
                description="Make informed decisions with authentic reviews and ratings from past participants."
              />
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-10"
            >
              <button className="btn-primary">Find Events Near You</button>
            </motion.div>
          </motion.div>
          
          {/* Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image */}
            <div className="rounded-2xl overflow-hidden relative">
              <img 
                src={ParticipantImage} 
                alt="Athletes participating in a marathon" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
              
              {/* Stats Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-dark-900/80 backdrop-blur-sm p-6 flex justify-between">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">20K+</div>
                  <div className="text-sm text-white">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">1500+</div>
                  <div className="text-sm text-white">Events Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">95%</div>
                  <div className="text-sm text-white">Would Join Again</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const BenefitCard = ({ icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="flex"
  >
    <div className="w-10 h-10 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
      {icon}
    </div>
    <div>
      <h3 className="font-bold text-dark-800 mb-1">{title}</h3>
      <p className="text-dark-600 text-sm">{description}</p>
    </div>
  </motion.div>
);

export default ParticipantBenefits; 