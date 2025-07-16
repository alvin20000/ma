import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Download } from 'lucide-react';
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
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'about', label: 'About' },
    { id: 'team', label: 'Team' },
    { id: 'contact', label: 'Contact' }
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
      className={`nav-link-centered ${activeSection === item.id ? 'active' : ''}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {item.label}
    </motion.button>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 footer-header">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-24 px-8">
          {/* Logo */}
          <div className="flex items-center">
            <motion.div 
              className="h-20 w-20"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={logo}
                alt="M.A Events Logo"
                className="h-full w-full object-contain"
              />
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center">
            {navigationItems.map((item) => (
              <NavLink key={item.id} item={item} />
            ))}
          </nav>

          {/* Search and Action Buttons */}
          <div className="flex items-center space-x-4 pr-4">
            {/* Search */}
            <AnimatePresence>
              {isSearchOpen && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  className="absolute top-full right-8 mt-4 z-50"
                >
                  <input
                    type="text"
                    placeholder="Search sections..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="modern-search-dropdown shadow-2xl"
                    autoFocus
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="header-icon-btn"
            >
              <Search size={20} />
            </motion.button>

            {/* Download Button - Desktop */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadApp}
              className="hidden md:flex header-action-btn"
            >
              <Download size={18} />
              <span>App</span>
            </motion.button>

            {/* Book Now Button - Desktop */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowBooking(true)}
              className="hidden md:flex header-primary-btn"
            >
              Book Now
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            className="lg:hidden header-icon-btn"
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
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 bg-gradient-to-br from-blue-900/95 to-blue-800/95 backdrop-blur-xl shadow-2xl z-50 border-l border-white/10"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div className="flex items-center">
                  <div className="h-12 w-12 mr-3">
                    <img
                      src={logo}
                      alt="M.A Events Logo"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">M.A Events</h3>
                    <p className="text-blue-200 text-sm">Premium Events</p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* Navigation */}
              <div className="p-6">
                <div className="space-y-2 mb-8">
                  {navigationItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center space-x-3 group ${
                        activeSection === item.id 
                          ? 'bg-white/20 text-white border border-white/30' 
                          : 'text-white/80 hover:bg-white/10 hover:text-white'
                      }`}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeSection === item.id ? 'bg-orange-500' : 'bg-white/40 group-hover:bg-orange-400'
                      }`} />
                      <span className="font-medium">{item.label}</span>
                    </motion.button>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="space-y-3">
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleDownloadApp}
                    className="w-full p-4 bg-white/10 backdrop-blur-sm rounded-xl text-white font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2 border border-white/20"
                  >
                    <Download size={18} />
                    <span>Download App</span>
                  </motion.button>
                  
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setShowBooking(true);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full p-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl text-white font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2"
                  >
                    <span>Book Now</span>
                  </motion.button>
                </div>
              </div>

              {/* Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
                <div className="text-center">
                  <p className="text-white/60 text-sm mb-3">Follow us on social media</p>
                  <div className="flex justify-center space-x-4">
                    {[
                      { icon: '📘', label: 'Facebook' },
                      { icon: '📷', label: 'Instagram' },
                      { icon: '🐦', label: 'Twitter' }
                    ].map((social, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                      >
                        <span className="text-lg">{social.icon}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Download Popup */}
      <AnimatePresence>
        {showDownloadPopup && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            className="download-popup"
          >
            <div className="flex items-start space-x-4">
              <div className="popup-icon">
                <Download size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Download M-A App</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Get the M-A Events app for a better experience.
                </p>
                <div className="flex space-x-2">
                  <button className="popup-btn">App Store</button>
                  <button className="popup-btn">Play Store</button>
                </div>
              </div>
              <button
                onClick={() => setShowDownloadPopup(false)}
                className="header-icon-btn"
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
                  className="header-icon-btn"
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