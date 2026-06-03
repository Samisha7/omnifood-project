import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedIn from './components/FeaturedIn';
import HowItWorks from './components/HowItWorks';
import Meals from './components/Meals';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedIn />
        <HowItWorks />
        <Meals />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
