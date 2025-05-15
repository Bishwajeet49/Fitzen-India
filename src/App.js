import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EventsShowcase from './components/EventsShowcase';
import HowItWorks from './components/HowItWorks';
import OrganizerBenefits from './components/OrganizerBenefits';
import ParticipantBenefits from './components/ParticipantBenefits';
import Categories from './components/Categories';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <EventsShowcase />
        <HowItWorks />
        <OrganizerBenefits />
        <ParticipantBenefits />
        <Categories />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App; 