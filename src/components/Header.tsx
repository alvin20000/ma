import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Download, Home, Briefcase, Camera, Users, Star, MessageCircle, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Booking from './Booking';
import logo from '../assets/images/logos/logo.png';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ activeSection, setActiveSection, isMobileMenuOpen, setIsMobileMenuOpen }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showBooking, setShowBooking] = useState(false);
  const [showDownloadPopup, setShowDownloadPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { id: 'home', label: 'Home', icon: <Home size={18} /> },
    { id: 'services', label: 'Services', icon: <Briefcase size={18} /> },
    { id: 'gallery', label: 'Gallery', icon: <Camera size={18} /> },
    { id: 'about', label: 'About', icon: <Users size={18} /> },
    { id: 'team', label: 'Team', icon: <Users size={18} /> },
    { id: 'reviews', label: 'Reviews', icon: <Star size={18} /> },
    { id: 'contact', label: 'Contact', icon: <Phone size={18} /> }
  ];

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    
    const matchingSection = navigationItems.find(item => 
      item.label.toLowerCase().includes(query)
    );
    
    if (matchingSection && query.length > 0) {
      setActiveSection(matchingSection.id);
    }
  };

  const handleDownloadApp = () => {
    setShowDownloadPopup(true);
    setTimeout(() => {
      setShowDownloadPopup(false);
    }, 5000);
  };

  const NavLink = ({ item }: { item: typeof navigationItems[0] }) => (
    <motion.button
      onClick={() => handleNavClick(item.id)}
      className={`modern-nav-link ${activeSection === item.id ? 'active' : ''}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="nav-text">{item.label}</span>
    </motion.button>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 modern-header">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Empty space for logo removal */}
          <div></div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center space-x-1 flex-1">
            {navigationItems.map((item) => (
              <NavLink key={item.id} item={item} />
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            {/* Search */}
            <AnimatePresence>
              {isSearchOpen && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  className="absolute top-full right-0 mt-2 z-50"
                >
                  <input
                    type="text"
                    placeholder="Search sections..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="modern-search-dropdown"
                    autoFocus
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="modern-icon-btn"
            >
              <Search size={20} />
            </motion.button>

            {/* Download Button - Desktop */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadApp}
              className="hidden md:flex modern-action-btn"
            >
              <Download size={18} />
              <span>App</span>
            </motion.button>

            {/* Book Now Button - Desktop */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowBooking(true)}
              className="hidden md:flex modern-primary-btn"
            >
              Book Now
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="lg:hidden modern-icon-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="modern-mobile-menu"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="grid grid-cols-2 gap-3 mb-6">
                {navigationItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`modern-mobile-nav-item ${activeSection === item.id ? 'active' : ''}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>{item.label}</span>
                  </motion.button>
                ))}
              </div>
              
              <div className="flex flex-col space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleDownloadApp}
                  className="modern-action-btn w-full justify-center"
                >
                  <Download size={18} />
                  <span>Download App</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setShowBooking(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="modern-primary-btn w-full justify-center"
                >
                  Book Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Download Popup */}
      <AnimatePresence>
        {showDownloadPopup && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            className="modern-popup"
          >
            <div className="flex items-start space-x-4">
              <div className="modern-popup-icon">
                <Download size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Download M-A App</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Get the M-A Events app for a better experience.
                </p>
                <div className="flex space-x-2">
                  <button className="modern-popup-btn">App Store</button>
                  <button className="modern-popup-btn">Play Store</button>
                </div>
              </div>
              <button
                onClick={() => setShowDownloadPopup(false)}
                className="modern-icon-btn"
              >
                <X size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Booking Modal */}
      <AnimatePresence>
        {showBooking && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) setShowBooking(false);
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Book Our Services</h2>
                <button
                  onClick={() => setShowBooking(false)}
                  className="modern-icon-btn"
                >
                  <X size={24} />
                </button>
              </div>
              <Booking />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}