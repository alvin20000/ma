import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Star, Award } from 'lucide-react';

export default function AboutUs() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-[#03168e] mb-12"
        >
          About Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-[#03168e] mb-4">Our Story</h3>
            <p className="text-gray-600 mb-6">
              Founded in 2015, M.A Events has grown from a small family business into one of the most trusted names in event planning and catering. Our journey has been marked by countless successful events, happy clients, and unforgettable moments.
            </p>
            <p className="text-gray-600">
              We believe that every event tells a unique story, and we're here to help you tell yours in the most beautiful and memorable way possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { number: '500+', text: 'Events Completed' },
              { number: '50+', text: 'Team Members' },
              { number: '98%', text: 'Client Satisfaction' },
              { number: '10+', text: 'Years Experience' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl"
              >
                <div className="text-[#f95006] text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.text}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Target className="w-12 h-12 text-[#f95006]" />,
              title: 'Our Mission',
              content: 'To create extraordinary events that exceed expectations and leave lasting impressions, while delivering exceptional value and personalized service to every client.'
            },
            {
              icon: <Heart className="w-12 h-12 text-[#f95006]" />,
              title: 'Our Vision',
              content: 'To be the most trusted and innovative event planning company, known for creating magical moments and transforming dreams into reality.'
            },
            {
              icon: <Star className="w-12 h-12 text-[#f95006]" />,
              title: 'Our Values',
              content: ['Excellence in Service', 'Creativity & Innovation', 'Integrity & Transparency', 'Customer Satisfaction']
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              transition={{ delay: index * 0.1 }}
              className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl"
            >
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="mx-auto mb-4"
              >
                {item.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-[#03168e] mb-4">{item.title}</h3>
              {Array.isArray(item.content) ? (
                <ul className="text-gray-600 space-y-2">
                  {item.content.map((value, i) => (
                    <li key={i}>{value}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">{item.content}</p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          className="bg-[#03168e] text-white rounded-lg p-8 text-center transform hover:scale-105 transition-transform duration-300"
        >
          <Award className="w-16 h-16 mx-auto mb-4 text-[#f95006]" />
          <h3 className="text-2xl font-semibold mb-4">Our Commitment</h3>
          <p className="max-w-2xl mx-auto">
            We are committed to delivering excellence in every event we handle. Our team of experienced professionals works tirelessly to ensure that your special day is nothing short of perfect.
          </p>
        </motion.div>
      </div>
    </section>
  );
}