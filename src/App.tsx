import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import AboutUs from './components/AboutUs';
import Team from './components/Team';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Booking from './components/Booking';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-16 overflow-x-hidden"
    >
      <Header />
      <main className="mx-8">
        <Hero />
        <Services />
        <Gallery />
        <AboutUs />
        <Team />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </motion.div>
  );
}

export default App;