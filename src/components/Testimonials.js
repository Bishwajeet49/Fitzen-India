import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { FiStar, FiUser, FiCalendar, FiAward, FiMessageCircle } from 'react-icons/fi';

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Marathon Runner",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
    testimony: "FitIzen India transformed how I discover running events. The platform is incredibly user-friendly, and I've participated in 5 marathons I found through them in the last year alone. The registration process is seamless!",
    rating: 5,
    type: "participant",
    featured: true
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Event Organizer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
    testimony: "As someone who organizes cycling events, FitIzen India has been a game-changer. Our participant numbers have increased by 60% since listing on the platform. The analytics tools are especially helpful for planning future events.",
    rating: 5,
    type: "organizer",
    featured: false
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "Triathlon Enthusiast",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
    testimony: "I love the variety of events available on FitIzen India. The filtering options make it easy to find exactly what I'm looking for, whether it's a triathlon, swimming competition, or cycling tour. Great platform for fitness enthusiasts!",
    rating: 4,
    type: "participant",
    featured: false
  },
  {
    id: 4,
    name: "Anika Reddy",
    role: "Yoga Retreat Organizer",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
    testimony: "FitIzen India helped us reach a broader audience for our yoga retreats. The platform is perfect for niche events like ours, and the team provided excellent support throughout the onboarding process. Highly recommended!",
    rating: 5,
    type: "organizer",
    featured: true
  },
  {
    id: 5,
    name: "Arjun Mehta",
    role: "Recreational Runner",
    avatar: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
    testimony: "As someone new to running events, FitIzen India made it easy to find beginner-friendly options. The detailed event descriptions and reviews from past participants helped me choose the right events for my skill level.",
    rating: 5,
    type: "participant",
    featured: false
  },
  {
    id: 6,
    name: "Neha Kapoor",
    role: "Marathon Organizer",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
    testimony: "The dashboard for organizers is intuitive and provides all the tools needed to manage registrations. Since using FitIzen India, our administrative workload has decreased significantly, allowing us to focus on creating better experiences.",
    rating: 4,
    type: "organizer",
    featured: false
  },
  {
    id: 7,
    name: "Suresh Kumar",
    role: "CrossFit Athlete",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
    testimony: "I've been using FitIzen India to find CrossFit competitions across the country. The platform has connected me with events I never would have discovered otherwise. The mobile app experience is flawless and the event reminders are super helpful!",
    rating: 5,
    type: "participant",
    featured: true
  },
  {
    id: 8,
    name: "Meera Desai",
    role: "Sports Festival Director",
    avatar: "https://images.unsplash.com/photo-1590086782957-93c06ef21604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
    testimony: "Our annual multi-sport festival saw a 75% increase in registrations after we partnered with FitIzen India. Their ticketing system is smooth, and the detailed analytics help us understand our audience better. The promotional tools have expanded our reach significantly.",
    rating: 5,
    type: "organizer",
    featured: true
  }
];

const TestimonialCard = ({ testimonial, index, activeIndex }) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={`${testimonial.id}-${index}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className={`card relative overflow-hidden p-6 md:p-8 rounded-2xl h-full flex flex-col ${
        activeIndex === index ? 'shadow-xl' : 'shadow-lg'
      }`}
    >
      {testimonial.featured && (
        <div className="absolute top-4 right-4">
          <span className="bg-yellow-400/10 text-yellow-600 px-3 py-1 rounded-full text-xs font-medium flex items-center">
            <FiAward className="mr-1" /> Featured
          </span>
        </div>
      )}
      
      <div className="absolute top-0 left-0 w-full h-1">
        <div 
          className={`h-full ${testimonial.type === 'organizer' ? 'bg-accent-blue' : 'bg-primary'}`} 
          style={{ width: `${testimonial.rating * 20}%` }}
        ></div>
      </div>
      
      <div className="mb-4 md:mb-6">
        <div className="flex items-center space-x-1 text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <FiStar 
              key={i} 
              className={`${i < testimonial.rating ? 'fill-current' : ''} w-5 h-5`} 
            />
          ))}
          <span className="ml-2 text-sm text-dark-500">{testimonial.rating}.0</span>
        </div>
      </div>
      
      <div className="relative mb-6 md:mb-8 flex-grow">
        <FiMessageCircle className="absolute -left-1 -top-1 text-gray-200 w-10 h-10 opacity-30" />
        <p className="text-dark-700 text-base md:text-lg relative z-10">
          "{testimonial.testimony}"
        </p>
      </div>
      
      <div className="flex xsm:flex-col items-center xsm:items-start pt-4 md:pt-6 border-t border-gray-100">
        <div className="relative xsm:mb-3">
          <img 
            src={testimonial.avatar} 
            alt={testimonial.name} 
            className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-white shadow-sm"
          />
          <span className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${
            testimonial.type === 'organizer' ? 'bg-accent-blue' : 'bg-primary'
          }`}></span>
        </div>
        <div className="ml-4 xsm:ml-0">
          <h4 className="font-bold text-dark-800">{testimonial.name}</h4>
          <div className="flex items-center text-sm">
            <span className="text-dark-500">{testimonial.role}</span>
            <span className="mx-2 text-gray-300">•</span>
            <span className={`${
              testimonial.type === 'organizer' ? 'text-accent-blue' : 'text-primary'
            } text-xs font-semibold`}>
              {testimonial.type === 'organizer' ? 'Organizer' : 'Participant'}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  </AnimatePresence>
);

const Testimonials = () => {
  const [filter, setFilter] = useState('all');
  const [activeIndex, setActiveIndex] = useState(0);
  
  const filteredTestimonials = filter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.type === filter);

  return (
    <section id="testimonials" className="section relative py-20 overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-accent-blue blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-yellow-400 blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="inline-block mb-3">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-dark-800 to-primary bg-clip-text text-transparent">
            Success Stories From Our Community
          </h2>
          <p className="text-dark-600 max-w-2xl mx-auto text-base md:text-lg">
            Join thousands of satisfied users who've transformed their fitness journey with FitIzen India.
          </p>
        </motion.div>
        
        {/* Filter tabs - Fixed responsiveness */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8 md:mb-12 px-4"
        >
          <div className="bg-white shadow-lg rounded-full p-1.5 inline-flex flex-wrap justify-center w-full max-w-md">
            <button 
              onClick={() => setFilter('all')}
              className={`px-4 md:px-6 py-2 rounded-full text-sm font-medium transition-all flex-1 ${
                filter === 'all' 
                  ? 'bg-primary text-white shadow-md' 
                  : 'text-dark-600 hover:bg-gray-100'
              }`}
            >
              All Stories
            </button>
            <button 
              onClick={() => setFilter('participant')}
              className={`px-4 md:px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center justify-center flex-1 ${
                filter === 'participant' 
                  ? 'bg-primary text-white shadow-md' 
                  : 'text-dark-600 hover:bg-gray-100'
              }`}
            >
              <FiUser className="mr-1.5" /> Participants
            </button>
            <button 
              onClick={() => setFilter('organizer')}
              className={`px-4 md:px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center justify-center flex-1 ${
                filter === 'organizer' 
                  ? 'bg-accent-blue text-white shadow-md' 
                  : 'text-dark-600 hover:bg-gray-100'
              }`}
            >
              <FiCalendar className="mr-1.5" /> Organizers
            </button>
          </div>
        </motion.div>
        
        {/* Featured testimonials with 3D effect */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative mb-16 md:mb-20"
        >
          <div className="testimonial-wrapper">
            <Swiper
              modules={[EffectCoverflow, Pagination, Autoplay]}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView="auto"
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{ 
                clickable: true,
                el: '.testimonial-pagination',
                type: 'bullets',
              }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              className="testimonial-swiper pb-12"
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
              {filteredTestimonials.map((testimonial, index) => (
                <SwiperSlide key={testimonial.id} className="max-w-md w-full">
                  <TestimonialCard 
                    testimonial={testimonial} 
                    index={index}
                    activeIndex={activeIndex}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Custom pagination container - properly positioned */}
            <div className="testimonial-pagination flex justify-center items-center mt-2"></div>
          </div>
        </motion.div>
        
        {/* Stats section - Improved responsiveness */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto px-4"
        >
          <StatCard 
            number="500+" 
            label="Events Listed" 
            color="from-primary to-purple-600"
          />
          <StatCard 
            number="98%" 
            label="Satisfaction Rate" 
            color="from-yellow-400 to-orange-500"
          />
          <StatCard 
            number="10K+" 
            label="Active Users" 
            color="from-accent-blue to-blue-600"
          />
        </motion.div>
      </div>

      {/* Add custom styles to handle pagination placement */}
      <style jsx global>{`
        .testimonial-wrapper {
          position: relative;
        }
        
        .testimonial-swiper {
          padding-bottom: 20px !important; 
          margin-bottom: 15px;
        }
        
        .testimonial-pagination {
          position: relative !important;
          bottom: 0 !important;
          left: 0 !important;
          width: 100% !important;
          display: flex;
          justify-content: center;
          margin-top: 10px;
        }
        
        .testimonial-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #ccc;
          opacity: 0.6;
          margin: 0 5px;
        }
        
        .testimonial-pagination .swiper-pagination-bullet-active {
          opacity: 1;
          background: var(--color-primary, #EF6D58);
        }
        
        @media (max-width: 640px) {
          .testimonial-swiper .swiper-slide {
            width: 85% !important;
          }
        }
      `}</style>
    </section>
  );
};

const StatCard = ({ number, label, color }) => (
  <motion.div 
    whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
    className="bg-white rounded-2xl p-4 md:p-6 shadow-lg text-center"
  >
    <h3 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
      {number}
    </h3>
    <p className="text-dark-500 text-sm md:text-base">{label}</p>
  </motion.div>
);

export default Testimonials; 