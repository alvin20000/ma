import React, { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
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

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <motion.a
      href={href}
      className={`nav-link text-white hover:text-[#f95006] ${activeSection === href.replace('#', '') ? 'active' : ''}`}
      onClick={handleNavClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#03168e] h-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <motion.div 
              className="h-16 ml-8"
              initial={{ opacity: 0, x: -90 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
              src={logo}
              alt="M.A Events Logo"
              className="h-full w-auto"
              style={{ width: 'auto', height: '100%' }}
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
              onClick={() => setShowBooking(true)}
              className="bg-[#f95006] text-white px-4 py-2 rounded-full hover:bg-white hover:text-[#f95006] transition-all duration-300 ml-2"
            >
              Book Now
            </motion.button>
          </div>

          <div className="flex items-center space-x-4">
            <AnimatePresence>
              {isSearchOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 40, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="absolute right-20 w-64 bg-white rounded-lg shadow-xl p-2 border border-gray-200"
                >
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f95006]"
                    autoFocus
                  />
                </motion.div>
              )}
            </AnimatePresence>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-white hover:text-[#f95006] transition-colors duration-300"
              aria-label="Toggle search"
            >
              <Search size={20} />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="md:hidden text-white hover:text-[#f95006] transition-colors duration-300"
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
            className="mobile-menu"
          >
            <div className="flex flex-col pt-16 space-y-2">
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
                onClick={() => {
                  setShowBooking(true);
                  setIsMobileMenuOpen(false);
                }}
                className="bg-[#f95006] text-white px-4 py-2 rounded-full mx-6 mt-4 hover:bg-white hover:text-[#f95006] transition-all duration-300"
              >
                Book Now
              </motion.button>
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
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
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