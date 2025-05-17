
import React from 'react';

import Hero from '../home/Hero.jsx';
import HowItWorks from '../home/HowItWorks.jsx';
import Categories from '../home/Categories.jsx';
import EventsShowcase from '../home/EventsShowcase.jsx';
import ParticipantBenefits from '../home/ParticipantBenefits.jsx';
import OrganizerBenefits from '../home/OrganizerBenefits.jsx';
import Testimonials from '../home/Testimonials.jsx';
import Newsletter from '../home/Newsletter.jsx';


export default function Home() {
  return (
    
      <main className='border-2 border-red-500'>
        <Hero />
        <EventsShowcase />
        <HowItWorks />
        <Categories />
        <ParticipantBenefits />
        <OrganizerBenefits />
        <Testimonials />
        <Newsletter />
      </main>
   
  )
}
