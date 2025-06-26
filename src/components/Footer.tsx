import { Facebook, Instagram, Twitter, Mail, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import footerImage from '../assets/images/logos/logo.png';

interface FooterProps {
  className?: string;
}

export default function Footer({ className = '' }: FooterProps) {
  return (
    <footer className={`footer-glass text-white pt-16 pb-8 px-8 ${className}`}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 text-center md:text-left">
          {/* Logo & About */}
          <div className="flex flex-col items-center md:items-start animate-fadeIn">
            <motion.div 
              className="h-20 mb-4"
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              <img
                src={footerImage}
                alt="M.A Events Logo"
                className="h-full w-auto"
                style={{ width: 'auto', height: '100%' }}
              />
            </motion.div>
            <p className="text-white/80 mb-4 max-w-xs">
              Creating unforgettable moments and bringing your vision to life with our expert event planning and catering services.
            </p>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="glass-social">
                <Facebook className="" />
              </a>
              <a href="#" className="glass-social">
                <Instagram className="" />
              </a>
              <a href="#" className="glass-social">
                <Twitter className="" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#services" className="footer-link">Services</a></li>
              <li><a href="#team" className="footer-link">Team</a></li>
              <li><a href="#reviews" className="footer-link">Reviews</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
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
                  className="footer-input w-full pr-10"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60" />
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="animate-fadeIn flex flex-col justify-center" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-xl font-semibold mb-6">Newsletter</h3>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="footer-input"
              />
              <button type="submit" className="glass-btn w-full">Subscribe</button>
            </form>
            <p className="text-xs text-white/60 mt-2">Get updates on our latest events and offers.</p>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} M.A Events. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
