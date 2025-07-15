import { Facebook, Instagram, Twitter, Mail, Search, MapPin, Phone, Clock, Heart } from 'lucide-react';
import { Home, Link, MessageSquare, Bell } from 'lucide-react';
import { motion } from 'framer-motion';
import footerImage from '../assets/images/logos/logo.png';

interface FooterProps {
  className?: string;
}

export default function Footer({ className = '' }: FooterProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" }
  ];

  const quickLinks = [
    { name: "Home", href: "#home", icon: <Home className="w-4 h-4" /> },
    { name: "Services", href: "#services", icon: <Link className="w-4 h-4" /> },
    { name: "Team", href: "#team", icon: <Link className="w-4 h-4" /> },
    { name: "Reviews", href: "#reviews", icon: <MessageSquare className="w-4 h-4" /> },
    { name: "Contact", href: "#contact", icon: <Link className="w-4 h-4" /> }
  ];

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      content: "Mbiko, Kyabaggu Zone, Uganda"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      content: "+256 782 876390"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      content: "maevents975@gmail.com"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Hours",
      content: "Mon-Sat: 8AM-8PM"
    }
  ];

  return (
    <footer className={`relative overflow-hidden ${className}`}>
      {/* Main Footer */}
      <div className="bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950 text-white pt-20 pb-12">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-orange-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              {/* Logo & About */}
              <motion.div 
                variants={itemVariants}
                className="lg:col-span-1"
              >
                <motion.div 
                  className="flex items-center mb-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="h-16 w-16 mr-4">
                    <img
                      src={footerImage}
                      alt="M.A Events Logo"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                      M.A Events
                    </h3>
                    <p className="text-blue-200 text-sm">Premium Event Planning</p>
                  </div>
                </motion.div>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Creating unforgettable moments and bringing your vision to life with our expert event planning and catering services.
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:bg-orange-500 hover:text-white transition-all duration-300 border border-white/20 hover:border-orange-500"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
                  Quick Links
                </h3>
                <ul className="space-y-4">
                  {quickLinks.map((link, index) => (
                    <motion.li key={index}>
                      <motion.a
                        href={link.href}
                        className="text-blue-200 hover:text-orange-400 transition-all duration-300 flex items-center group space-x-3"
                        whileHover={{ x: 5 }}
                      >
                        <div className="text-orange-500 group-hover:scale-110 transition-transform duration-300">
                          {link.icon}
                        </div>
                        <span>{link.name}</span>
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact Info */}
              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Contact Info
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3 group"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-blue-200 text-sm font-medium">{info.title}</p>
                        <p className="text-white">{info.content}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Newsletter */}
              <motion.div variants={itemVariants}>
                <div className="flex items-center mb-6">
                  <motion.div
                    className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mr-3"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Bell className="w-5 h-5 text-white" />
                  </motion.div>
                <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
                  Stay Updated
                </h3>
                </div>
                <p className="text-blue-200 mb-6 leading-relaxed">
                  Subscribe to get updates on our latest events and exclusive offers.
                </p>
                <form className="space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileFocus={{ scale: 1.02 }}
                  >
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    />
                  </motion.div>
                  <motion.button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Mail className="w-5 h-5" />
                    <span>Subscribe</span>
                  </motion.button>
                </form>
              </motion.div>
            </div>

            {/* Bottom Section */}
            <motion.div
              variants={itemVariants}
              className="border-t border-white/10 pt-8"
            >
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-orange-500" />
                  <p className="text-blue-200">
                    &copy; {new Date().getFullYear()} M.A Events. Made with love in Uganda.
                  </p>
                </div>
                <div className="flex items-center space-x-6">
                  <motion.a
                    href="#"
                    className="text-blue-200 hover:text-orange-400 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    Privacy Policy
                  </motion.a>
                  <motion.a
                    href="#"
                    className="text-blue-200 hover:text-orange-400 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    Terms of Service
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Gradient Bottom Bar */}
      <div className="h-2 bg-gradient-to-r from-orange-500 via-orange-600 to-blue-600"></div>
    </footer>
  );
}