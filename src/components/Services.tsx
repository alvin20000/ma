import { motion } from 'framer-motion';
import { Tent, Utensils, Camera, Music, Sparkles, Users } from 'lucide-react';

const services = [
  {
    icon: <Tent className="h-8 w-8" />,
    title: 'Tents, Chairs & Lightings',
    description: 'High-quality tents, chairs, tables, and professional lighting for any event size.',
    features: ['Premium Tents', 'Elegant Seating', 'Professional Lighting', 'Setup & Breakdown']
  },
  {
    icon: <Utensils className="h-8 w-8" />,
    title: 'Catering Services',
    description: 'Delicious menu options with professional service and presentation.',
    features: ['Custom Menus', 'Professional Staff', 'Fresh Ingredients', 'Dietary Options']
  },
  {
    icon: <Camera className="h-8 w-8" />,
    title: 'Event Photography',
    description: 'Capture your special moments with our professional photographers.',
    features: ['Professional Photos', 'Video Coverage', 'Same Day Editing', 'Digital Gallery']
  },
  {
    icon: <Music className="h-8 w-8" />,
    title: 'Entertainment',
    description: 'Live music, DJs, and entertainment options for your event.',
    features: ['Professional DJs', 'Sound Systems', 'Live Music', 'MC Services']
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: 'Event Decoration',
    description: 'Transform your venue with stunning decorations and themes.',
    features: ['Custom Themes', 'Floral Arrangements', 'Backdrop Design', 'Table Settings']
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Event Coordination',
    description: 'Full event planning and coordination from start to finish.',
    features: ['Event Planning', 'Vendor Coordination', 'Timeline Management', 'Day-of Support']
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Everything you need for a perfect event, delivered with excellence and attention to detail
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <motion.a
                href={`https://wa.me/256766455792?text=I'm interested in your ${service.title} service`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Book on WhatsApp
              </motion.a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom Package?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We understand that every event is unique. Contact us to create a personalized package that perfectly fits your needs and budget.
            </p>
            <motion.a
              href="https://wa.me/256766455792?text=I'd like to discuss a custom event package"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Custom Quote
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;