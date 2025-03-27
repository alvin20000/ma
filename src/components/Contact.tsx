import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      transition: {
        duration: 0.2
      }
    }
  };

  const contactInfoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-[#03168e] mb-12"
        >
          Get in Touch
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={formVariants}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882324.5571428523!2d27.275712601919633!3d1.3628933972946826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4f12fe77d3f1a53%3A0xa5dff22f1b3723fc!2sM.A%20Events!5e1!3m2!1sen!2sug!4v1743084198114!5m2!1sen!2sug"
              width="100%"
              height="550"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            />
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={formVariants}
          >
            <form className="space-y-6">
              <motion.div whileHover="focus" variants={inputVariants}>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f95006] focus:border-transparent transition-all duration-300"
                  placeholder="Your Name"
                />
              </motion.div>
              
              <motion.div whileHover="focus" variants={inputVariants}>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f95006] focus:border-transparent transition-all duration-300"
                  placeholder="Your Email"
                />
              </motion.div>
              
              <motion.div whileHover="focus" variants={inputVariants}>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f95006] focus:border-transparent transition-all duration-300 h-32"
                  placeholder="Your Message"
                />
              </motion.div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-[#f95006] text-white py-3 rounded-lg hover:bg-[#03168e] transition-colors duration-300"
              >
                Send Message
              </motion.button>
            </form>

            <div className="mt-8 space-y-4">
              {[
                { icon: <MapPin />, text: "Mbiko, Kyabaggu Zone" },
                { icon: <Phone />, text: "+256 782 876390 | +256 751 256167 | +256 703 040445" },
                { icon: <Mail />, text: "maevents975@gmail.com" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={contactInfoVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  className="flex items-center bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <span className="text-[#f95006] mr-3">{item.icon}</span>
                  <span className="text-[#03168e]">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}