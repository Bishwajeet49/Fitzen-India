import React from 'react';
import { motion } from 'framer-motion';
import { FaRunning, FaSwimmer, FaYinYang, FaBiking } from 'react-icons/fa';
import { IoIosBicycle } from 'react-icons/io';
import { MdSportsHandball, MdSportsScore } from 'react-icons/md';

const categories = [
  {
    id: 1,
    name: "Running",
    icon: FaRunning,
    count: 140,
    color: "from-primary/80 to-primary/40"
  },
  {
    id: 2,
    name: "Cycling",
    icon: IoIosBicycle,
    count: 95,
    color: "from-accent-blue/80 to-accent-blue/40"
  },
  {
    id: 3,
    name: "Triathlon",
    icon: MdSportsScore,
    count: 35,
    color: "from-accent-purple/80 to-accent-purple/40"
  },
  {
    id: 4,
    name: "Swimming",
    icon: FaSwimmer,
    count: 42,
    color: "from-accent-green/80 to-accent-green/40"
  },
  {
    id: 5,
    name: "Yoga & Fitness",
    icon: FaYinYang,
    count: 68,
    color: "from-amber-500/80 to-amber-500/40"
  },
  {
    id: 6,
    name: "Team Sports",
    icon: MdSportsHandball,
    count: 56,
    color: "from-rose-600/80 to-rose-600/40"
  }
];

const Categories = () => {
  return (
    <section id="categories" className="section bg-white">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore by <span className="text-primary">Categories</span>
          </h2>
          <p className="text-dark-600 max-w-2xl mx-auto">
            Find events that match your interests and fitness goals.
            Browse through our diverse range of sports categories.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="btn-primary">View All Categories</button>
        </motion.div>
      </div>
    </section>
  );
};

const CategoryCard = ({ category, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="relative rounded-xl overflow-hidden h-60 group cursor-pointer"
  >
    {/* Background with gradient */}
    <div className={`absolute inset-0 bg-gradient-to-t ${category.color} transition-all duration-700 group-hover:bg-gradient-to-br`}></div>
    
    {/* Decorative elements */}
    <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-150"></div>
    <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-150 group-hover:delay-100"></div>
    
    {/* Content */}
    <div className="absolute inset-0 p-6 flex flex-col items-center justify-center text-white">
      <div className="relative mb-4 transition-all duration-500 group-hover:scale-125 group-hover:rotate-6">
        <div className="absolute inset-0 bg-white/20 rounded-full blur-md scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"></div>
        <motion.div 
          whileHover={{ 
            rotateY: [0, 180, 360],
            transition: { duration: 1.2, ease: "easeInOut" }
          }}
        >
          <category.icon className="text-white text-6xl relative z-10 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
        </motion.div>
      </div>
      <h3 className="text-2xl font-bold mb-1 transition-all duration-500 group-hover:-translate-y-1 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">{category.name}</h3>
      <div className="flex justify-between items-center w-full mt-2">
        <span className="transition-all duration-300 group-hover:font-semibold">{category.count} Events</span>
        <motion.span 
          className="rounded-full bg-white/20 w-8 h-8 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all duration-500 group-hover:scale-110"
          whileHover={{ 
            scale: 1.2,
            rotate: [0, 5, 0, -5, 0],
            transition: { duration: 0.5 }
          }}
        >
          →
        </motion.span>
      </div>
    </div>
    
    <a href="#" className="absolute inset-0" aria-label={`View ${category.name} events`}></a>
  </motion.div>
);

export default Categories; 