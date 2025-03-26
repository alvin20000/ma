import { motion } from 'framer-motion';
import { Tent, Utensils, Camera, Music } from 'lucide-react';

const services = [
  {
    icon: <Tent className="h-12 w-12" />,
    title: 'Tents, Chairs, Lightings & Other Party Rentals',
    description: 'High-quality tents, chairs, tables, and gazebos for any event size.'
  },
  {
    icon: <Utensils className="h-12 w-12" />,
    title: 'Catering Services',
    description: 'Delicious menu options with professional service and presentation.'
  },
  {
    icon: <Camera className="h-12 w-12" />,
    title: 'Event Photography',
    description: 'Capture your special moments with our professional photographers.'
  },
  {
    icon: <Music className="h-12 w-12" />,
    title: 'Entertainment',
    description: 'Live music, DJs, and entertainment options for your event.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-[#03168e] mb-4"
          >
            Our Services
          </motion.h2>
          <p className="text-xl text-gray-600">
            Everything you need for a perfect event
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-[#f95006] mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#03168e] mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a
                href={`https://wa.me/256766455792?text=I'm interested in your ${service.title} service`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-[#03168e] text-white font-semibold rounded-lg hover:bg-[#f95006] transition-colors"
              >
                Book on WhatsApp
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;