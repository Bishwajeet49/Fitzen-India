
import React from 'react';
import Header from '../home/Header.jsx';
import Hero from '../home/Hero.jsx';
import HowItWorks from '../home/HowItWorks.jsx';
import Categories from '../home/Categories.jsx';
import EventsShowcase from '../home/EventsShowcase.jsx';
import ParticipantBenefits from '../home/ParticipantBenefits.jsx';
import OrganizerBenefits from '../home/OrganizerBenefits.jsx';
import Testimonials from '../home/Testimonials.jsx';
import Newsletter from '../home/Newsletter.jsx';
import Footer from '../home/Footer.jsx';

export default function Home() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <EventsShowcase />
        <HowItWorks />
        <Categories />
        <ParticipantBenefits />
        <OrganizerBenefits />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
