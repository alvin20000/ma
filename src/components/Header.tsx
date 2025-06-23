import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Booking from './Booking';
import logo from '../assets/images/logos/logo.png';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showBooking, setShowBooking] = useState(false);
  const [showDownloadPopup, setShowDownloadPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY;

      setIsScrolled(scrollPosition > 50);

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop - 200 && scrollPosition < sectionTop + sectionHeight - 200) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      const sectionId = section.getAttribute('id') || '';
      if (sectionId.toLowerCase().includes(query)) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  };

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      const targetSection = document.querySelector(href);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    }
  };

  const handleDownloadApp = () => {
    setShowDownloadPopup(true);
    setTimeout(() => {
      setShowDownloadPopup(false);
    }, 5000);
  };

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <motion.a
      href={href}
      className={`nav-link nav-link-glass ${activeSection === href.replace('#', '') ? 'active' : ''}`}
      onClick={handleNavClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 header-glass">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <motion.div 
              className="h-16 ml-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
              src={logo}
              alt="M.A Events Logo"
              className="h-full w-auto"
              />
            </motion.div>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#gallery">Gallery</NavLink>
            <NavLink href="#about">About Us</NavLink>
            <NavLink href="#team">Team</NavLink>
            <NavLink href="#reviews">Reviews</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadApp}
              className="glass-btn"
            >
              <Download size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowBooking(true)}
              className="glass-btn ml-2"
            >
              Book Now
            </motion.button>
          </div>

          <div className="flex items-center space-x-4">
            <AnimatePresence>
              {isSearchOpen && (
                <motion.div
                  initial={{ opacity: 0, x: 40, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 40, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="absolute right-20 w-40 glass-search"
                >
                  <input
                    type="text"
                    placeholder="Search for services..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="w-full px-2 py-1 rounded-lg focus:outline-none bg-transparent placeholder:text-[#03168e]/70"
                    autoFocus
                  />
                </motion.div>
              )}
            </AnimatePresence>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="glass-btn"
              aria-label="Toggle search"
            >
              <Search size={20} />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="md:hidden glass-btn"
              onClick={handleMobileMenuClick}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="mobile-menu mobile-menu-glass"
          >
            <div className="flex justify-end p-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="glass-btn"
              >
                <X size={24} />
              </motion.button>
            </div>
            <div className="flex flex-col space-y-2">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#gallery">Gallery</NavLink>
              <NavLink href="#about">About Us</NavLink>
              <NavLink href="#team">Team</NavLink>
              <NavLink href="#reviews">Reviews</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadApp}
                className="glass-btn px-6 py-2 flex items-center gap-2"
              >
                <Download size={20} />
                <span>Download App</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setShowBooking(true);
                  setIsMobileMenuOpen(false);
                }}
                className="glass-btn mx-6 mt-4"
              >
                Book Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showDownloadPopup && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-20 right-4 bg-white rounded-lg shadow-xl p-4 max-w-sm z-50"
          >
            <div className="flex items-start">
              <div className="flex-shrink-0 text-[#f95006]">
                <Download size={24} />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-gray-900">Download M-A App</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Get the M-A Events app for a better experience. Available on iOS and Android.
                </p>
                <div className="mt-3 flex space-x-2">
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-[#f95006] hover:bg-[#03168e] transition-colors"
                  >
                    App Store
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-[#f95006] hover:bg-[#03168e] transition-colors"
                  >
                    Play Store
                  </a>
                </div>
              </div>
              <button
                onClick={() => setShowDownloadPopup(false)}
                className="ml-auto flex-shrink-0 glass-btn"
              >
                <X size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showBooking && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={(e) => {
              if (e.target === e.currentTarget) setShowBooking(false);
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setShowBooking(false)}
                className="absolute top-4 right-4 glass-btn"
              >
                <X size={24} />
              </button>
              <Booking />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}