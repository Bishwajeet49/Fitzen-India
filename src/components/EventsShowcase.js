import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FiCalendar, FiMapPin, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

// Sample event data (in real app, this would come from an API)
const events = [
  {
    id: 1,
    title: "Mumbai Marathon 2023",
    date: "Dec 15, 2023",
    location: "Mumbai, Maharashtra",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "Running",
    price: "₹1,500",
    description: "Join India's largest marathon event with routes along the iconic Marine Drive. hdhdhhdhdhdh  htesh loren dhdhdhhd hdhd d d d hdhdhdhd d d dhdhdh   hdhdhd",
    status: "past"
  },
  {
    id: 2,
    title: "Bengaluru Cycling Festival",
    date: "Jan 20, 2024",
    location: "Bengaluru, Karnataka",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "Cycling",
    price: "₹2,000",
    description: "Experience the thrill of cycling through Bengaluru's beautiful routes in this annual festival.",
    status: "past"
  },
  {
    id: 3,
    title: "Delhi Triathlon Championship",
    date: "Feb 5, 2024",
    location: "Delhi NCR",
    image: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "Triathlon",
    price: "₹3,500",
    description: "Challenge yourself in swimming, cycling, and running at Delhi's premier triathlon event.",
    status: "past"
  },
  {
    id: 4,
    title: "Goa Beach Run",
    date: "Jun 12, 2024",
    location: "Panjim, Goa",
    image: "https://images.unsplash.com/photo-1502904550040-7534597429ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "Running",
    price: "₹1,200",
    description: "Run along the beautiful beaches of Goa in this scenic and refreshing event.",
    status: "upcoming"
  },
  {
    id: 5,
    title: "Himalayan Mountain Biking Tour",
    date: "Jul 25, 2024",
    location: "Manali, Himachal Pradesh",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "Cycling",
    price: "₹5,000",
    description: "Experience the adventure of mountain biking in the breathtaking Himalayan landscape.",
    status: "upcoming"
  },
  {
    id: 6,
    title: "Hyderabad Night Marathon",
    date: "Aug 10, 2024",
    location: "Hyderabad, Telangana",
    image: "https://images.unsplash.com/photo-1507187632231-5beb21a654a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "Running",
    price: "₹1,800",
    description: "Run through the illuminated streets of Hyderabad in this unique nighttime marathon.",
    status: "upcoming"
  },
  {
    id: 7,
    title: "Jaipur Heritage Cycle Tour",
    date: "Sep 15, 2024",
    location: "Jaipur, Rajasthan",
    image: "https://images.unsplash.com/photo-1569937756447-1d44f657dc69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "Cycling",
    price: "₹2,500",
    description: "Cycle through the pink city of Jaipur and explore its rich heritage and architecture.",
    status: "upcoming"
  }
];

const EventsShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('upcoming');
  
  const getFilteredEvents = () => {
    if (activeFilter === 'all') {
      return events;
    } else if (activeFilter === 'upcoming') {
      return events.filter(event => event.status === 'upcoming');
    } else {
      return events.filter(event => event.category.toLowerCase() === activeFilter.toLowerCase());
    }
  };
  
  const filteredEvents = getFilteredEvents();

  return (
    <section id="events" className="section bg-dark-50 py-16">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trending <span className="text-primary">Events</span>
          </h2>
          <p className="text-dark-600 max-w-2xl mx-auto">
            Discover and enroll in the most popular sports events happening across India. 
            From marathons to cycling tours, find your next challenge here.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center mb-8 gap-2"
        >
          <FilterButton 
            active={activeFilter === 'upcoming'} 
            onClick={() => setActiveFilter('upcoming')}
          >
            Upcoming Events
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'all'} 
            onClick={() => setActiveFilter('all')}
          >
            All Events
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'running'} 
            onClick={() => setActiveFilter('running')}
          >
            Running
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'cycling'} 
            onClick={() => setActiveFilter('cycling')}
          >
            Cycling
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'triathlon'} 
            onClick={() => setActiveFilter('triathlon')}
          >
            Triathlon
          </FilterButton>
        </motion.div>

        {/* Events Slider Container */}
        <div className="relative mx-auto max-w-7xl">
          {/* Navigation Buttons */}
          <div className="navigation-container absolute inset-0 flex items-center justify-between pointer-events-none z-10">
            <div className="swiper-button-prev-custom pointer-events-auto w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-primary cursor-pointer hover:bg-primary hover:text-white transition-all duration-300 -ml-5">
              <FiChevronLeft size={20} />
            </div>
            <div className="swiper-button-next-custom pointer-events-auto w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-primary cursor-pointer hover:bg-primary hover:text-white transition-all duration-300 -mr-5">
              <FiChevronRight size={20} />
            </div>
          </div>
          
          {/* Swiper Component */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="px-5"
          >
            {filteredEvents.length > 0 ? (
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={25}
                slidesPerView={1}
                navigation={{
                  nextEl: '.swiper-button-next-custom',
                  prevEl: '.swiper-button-prev-custom',
                }}
                pagination={{ 
                  clickable: true,
                  el: '.swiper-pagination-custom'
                }}
                autoplay={{ 
                  delay: 3000, 
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  }
                }}
                className="pb-16"
              >
                {filteredEvents.map(event => (
                  <SwiperSlide key={event.id} className="h-auto">
                    <EventCard event={event} />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-500">No events found matching your criteria.</p>
              </div>
            )}
            
            {/* Custom Pagination */}
            <div className="swiper-pagination-custom flex justify-center items-center gap-2 mt-8"></div>
          </motion.div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <button className="btn-primary">View All Events</button>
        </div>
      </div>

      {/* Custom styles */}
      <style jsx global>{`
        .swiper-slide {
          height: auto !important;
        }
        
        /* Fix pagination color */
        .swiper-pagination-bullet {
          background: #e2e8f0;
          opacity: 1;
          width: 10px;
          height: 10px;
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-bullet-active {
          background: var(--color-primary, #f97316) !important;
          width: 30px !important;
          border-radius: 5px !important;
        }
        
        .swiper-pagination-custom .swiper-pagination-bullet {
          background: #e2e8f0;
          opacity: 1;
          width: 10px;
          height: 10px;
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-custom .swiper-pagination-bullet-active {
          background: var(--color-primary, #f97316);
          width: 30px;
          border-radius: 5px;
        }
        
        /* Hide default navigation buttons */
        .swiper-button-next,
        .swiper-button-prev {
          display: none;
        }
        
        @media (max-width: 640px) {
          .navigation-container {
            padding: 0 10px;
          }
          .swiper-button-prev-custom, 
          .swiper-button-next-custom {
            margin: 0;
          }
        }
      `}</style>
    </section>
  );
};

const FilterButton = ({ children, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-5 py-2 rounded-full transition-all ${
      active 
        ? 'bg-primary text-white shadow-md' 
        : 'bg-white text-dark-700 hover:bg-dark-100'
    }`}
  >
    {children}
  </button>
);

const EventCard = ({ event }) => (
  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col overflow-hidden border border-gray-100">
    {/* Image Container - fixed height */}
    <div className="relative h-48 overflow-hidden">
      <img 
        src={event.image} 
        alt={event.title} 
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
      <div className="absolute top-4 left-4">
        <span className="bg-primary text-white text-sm px-3 py-1 rounded-full font-medium">
          {event.category}
        </span>
      </div>
    </div>
    
    {/* Content - flex grow to fill available space */}
    <div className="p-5 flex flex-col flex-grow">
      <div className="flex items-center text-dark-500 text-sm mb-2 space-x-4">
        <div className="flex items-center">
          <FiCalendar className="mr-1.5 text-primary" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center">
          <FiMapPin className="mr-1.5 text-primary" />
          <span className="truncate max-w-[100px]">{event.location}</span>
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-2 line-clamp-1 hover:text-primary transition-colors">
        {event.title}
      </h3>
      
      {/* Fixed height description container */}
      <p className="text-dark-600 mb-4 line-clamp-3">
        {event.description}
      </p>
      
      {/* Push to bottom with mt-auto */}
      <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
        <span className="font-bold text-primary">{event.price}</span>
        <button className="btn-primary !py-2 !px-4 rounded-md">Enroll Now</button>
      </div>
    </div>
  </div>
);

export default EventsShowcase; 