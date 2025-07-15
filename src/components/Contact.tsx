import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
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

  const cardHoverVariants = {
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Visit Us",
      content: "Mbiko, Kyabaggu Zone",
      subContent: "Uganda",
      gradient: "from-blue-500 to-blue-700",
      action: "Get Directions"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Us",
      content: "+256 782 876390",
      subContent: "+256 751 256167 | +256 703 040445",
      gradient: "from-orange-500 to-orange-700",
      action: "Call Now"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Us",
      content: "maevents975@gmail.com",
      subContent: "We reply within 24 hours",
      gradient: "from-blue-600 to-blue-800",
      action: "Send Email"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Working Hours",
      content: "Mon - Sat: 8AM - 8PM",
      subContent: "Sunday: 10AM - 6PM",
      gradient: "from-orange-600 to-orange-800",
      action: "Schedule Call"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-50 min-h-screen">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Get in Touch
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Ready to plan your perfect event? Let's discuss your vision and bring it to life together
            </motion.p>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 text-center group"
                whileHover="hover"
              >
                <motion.div variants={cardHoverVariants}>
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center text-white mx-auto mb-4`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {info.icon}
                  </motion.div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-gray-800 font-semibold mb-1">{info.content}</p>
                  <p className="text-gray-600 text-sm mb-4">{info.subContent}</p>
                  <motion.button
                    className={`w-full py-2 bg-gradient-to-r ${info.gradient} text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 text-sm`}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {info.action}
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-8">
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mr-4"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Send className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900">Send us a Message</h3>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }}>
                    <label className="block text-gray-700 font-semibold mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                      placeholder="Your first name"
                    />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }}>
                    <label className="block text-gray-700 font-semibold mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                      placeholder="Your last name"
                    />
                  </motion.div>
                </div>
                
                <motion.div whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }}>
                  <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                    placeholder="your.email@example.com"
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }}>
                  <label className="block text-gray-700 font-semibold mb-2">Event Type</label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300">
                    <option>Select event type</option>
                    <option>Wedding</option>
                    <option>Birthday Party</option>
                    <option>Corporate Event</option>
                    <option>Graduation</option>
                    <option>Other</option>
                  </select>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }}>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 h-32 resize-none"
                    placeholder="Tell us about your event vision..."
                  />
                </motion.div>
                
                <motion.button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </motion.div>

            {/* Map and Quick Actions */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Map */}
              <motion.div
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center">
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl flex items-center justify-center mr-4"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <MapPin className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900">Find Us</h3>
                  </div>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882324.5571428523!2d27.275712601919633!3d1.3628933972946826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4f12fe77d3f1a53%3A0xa5dff22f1b3723fc!2sM.A%20Events!5e1!3m2!1sen!2sug!4v1743084198114!5m2!1sen!2sug"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="hover:grayscale-0 grayscale transition-all duration-500"
                />
              </motion.div>

              {/* Quick Actions */}
              <motion.div
                className="bg-gradient-to-r from-orange-500 to-orange-700 rounded-3xl p-8 text-white shadow-xl"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <MessageCircle className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">Need Immediate Help?</h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Get instant support through WhatsApp or schedule a call with our event planning experts.
                </p>
                <div className="space-y-3">
                  <motion.a
                    href="https://wa.me/256766455792?text=Hi, I need help with event planning"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-300 flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MessageCircle size={20} />
                    <span>Chat on WhatsApp</span>
                  </motion.a>
                  <motion.a
                    href="tel:+256782876390"
                    className="w-full py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-300 flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone size={20} />
                    <span>Call Now</span>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}