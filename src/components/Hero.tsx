import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import firstImage from '../assets/images/gallery/7.jpg';
import secondImage from '../assets/images/gallery/9.jpg';
import thirdImage from '../assets/images/gallery/3.jpg';

const slides = [
  {
    image: firstImage,
    title: "Creating Unforgettable Moments",
    subtitle: "Your Premier Event Planning Partner"
  },
  {
    image: secondImage,
    title: "Making Your Decor colourful",
    subtitle: "Culinary Excellence for Every Occasion"
  },
  {
    image: thirdImage,
    title: "Stunning Decorations",
    subtitle: "Transform Any Space into Something Magical"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative w-screen h-[80vh] lg:h-screen lg:w-screen -mx-2 sm:-mx-4 md:-mx-8 overflow-hidden">
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: currentSlide === index ? 1 : 0,
            scale: currentSlide === index ? 1 : 1.1
          }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image}?auto=format&fit=crop&w=2000&q=80)`,
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div className="max-w-4xl">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: currentSlide === index ? 0 : 20, opacity: currentSlide === index ? 1 : 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4"
              >
                {slide.title}
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: currentSlide === index ? 0 : 20, opacity: currentSlide === index ? 1 : 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-lg sm:text-xl md:text-2xl text-white mb-8"
              >
                {slide.subtitle}
              </motion.p>
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: currentSlide === index ? 0 : 20, opacity: currentSlide === index ? 1 : 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                onClick={scrollToServices}
                className="glass-btn text-lg px-6 sm:px-8 py-3"
              >
                Select Service
              </motion.button>
            </div>
          </div>
        </motion.div>
      ))}
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            initial={{ scale: 0.8 }}
            animate={{ scale: currentSlide === index ? 1.2 : 1 }}
            transition={{ duration: 0.3 }}
            className={`glass-btn w-3 h-3 p-0 rounded-full transition-all duration-300 ${currentSlide === index ? 'ring-2 ring-[#f95006]' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}