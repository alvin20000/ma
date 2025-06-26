import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import TrendingEvents from './components/TrendingEvents';
import Services from './components/Services';
import VideoSection from './components/VideoSection';
import Gallery from './components/Gallery';
import AboutUs from './components/AboutUs';
import Team from './components/Team';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Booking from './components/Booking';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-16 overflow-x-hidden"
    >
      <Header isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      <main className={isMobileMenuOpen ? 'mx-2 sm:mx-4 md:mx-8 filter blur-sm pointer-events-none select-none' : 'mx-2 sm:mx-4 md:mx-8'}>
        <Hero />
        <TrendingEvents />
        <Services />
        <VideoSection />
        <Gallery />
        <AboutUs />
        <Team />
        <Reviews />
        <Contact />
      </main>
      <Footer className={isMobileMenuOpen ? 'filter blur-sm pointer-events-none select-none' : ''} />
      <ScrollToTop />
    </motion.div>
  );
}

export default App;
