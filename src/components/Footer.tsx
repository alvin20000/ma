import { Facebook, Instagram, Twitter, Mail, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import footerImage from '../assets/images/logos/logo.png';

export default function Footer() {
  return (
    <footer className="bg-[#03168e] text-white pt-16 pb-8 px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
          <div className="animate-fadeIn">
            <div className="flex items-center">
            <motion.div 
              className="h-16 ml-4"
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
              src={footerImage}
              alt="M.A Events Logo"
              className="h-full w-auto"
              style={{ width: 'auto', height: '100%' }}
              />
            </motion.div>
            </div>
            <p className="text-white/80 mb-4 ml-4">
              Creating unforgettable moments and bringing your vision to life with our expert event planning and catering services.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
                <a href="#" className="social-icon ml-4">
                <Facebook />
                </a>
              <a href="#" className="social-icon">
                <Instagram />
              </a>
              <a href="#" className="social-icon">
                <Twitter />
              </a>
            </div>
          </div>
          
          <div className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="hover:text-[#f95006] transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#f95006] transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-[#f95006] transition-colors duration-300">
                  Team
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#f95006] transition-colors duration-300">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#f95006] transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div className="animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 justify-center md:justify-start">
                <Mail className="text-[#f95006]" />
                <span>maevents975@gmail.com</span>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search our services..."
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-[#f95006] transition-all duration-300 placeholder-white/60"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} M.A Events. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}