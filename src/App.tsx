import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = {
    home: <Hero />,
    trending: <TrendingEvents />,
    services: <Services />,
    video: <VideoSection />,
    gallery: <Gallery />,
    about: <AboutUs />,
    team: <Team />,
    reviews: <Reviews />,
    contact: <Contact />
  };

  const pageVariants = {
    initial: { opacity: 0, x: 100 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -100 }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  return (
    <div className="min-h-screen overflow-hidden">
      <Header 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />
      
      <main className={`pt-20 ${isMobileMenuOpen ? 'filter blur-sm pointer-events-none select-none' : ''}`}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeSection}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="min-h-screen"
          >
            {sections[activeSection as keyof typeof sections]}
          </motion.div>
        </AnimatePresence>
      </main>
      
      <Footer className={isMobileMenuOpen ? 'filter blur-sm pointer-events-none select-none' : ''} />
      <ScrollToTop />
    </div>
  );
}

export default App;