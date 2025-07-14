import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import firstImage from '../assets/images/gallery/7.jpg';
import secondImage from '../assets/images/gallery/9.jpg';
import thirdImage from '../assets/images/gallery/3.jpg';

const slides = [
  {
    image: firstImage,
    title: "Creating Unforgettable Moments",
    subtitle: "Your Premier Event Planning Partner",
    description: "Transform your special occasions into extraordinary memories with our expert event planning and catering services."
  },
  {
    image: secondImage,
    title: "Making Your Decor Colorful",
    subtitle: "Culinary Excellence for Every Occasion",
    description: "From intimate gatherings to grand celebrations, we bring creativity and elegance to every detail."
  },
  {
    image: thirdImage,
    title: "Stunning Decorations",
    subtitle: "Transform Any Space into Something Magical",
    description: "Our professional team ensures your event is perfectly planned, beautifully decorated, and flawlessly executed."
  }
];

interface HeroProps {
  onNavigate?: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleGetStarted = () => {
    if (onNavigate) {
      onNavigate('services');
    }
  };

  const handleWatchVideo = () => {
    if (onNavigate) {
      onNavigate('video');
    }
  };

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: currentSlide === index ? 0.3 : 0,
            scale: currentSlide === index ? 1 : 1.1
          }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          />
        </motion.div>
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-blue-700/80" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20"
              >
                ✨ Premium Event Planning Services
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  {slides[currentSlide].title}
                </span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl lg:text-3xl font-medium mb-6 text-blue-100"
              >
                {slides[currentSlide].subtitle}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl leading-relaxed"
              >
                {slides[currentSlide].description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  onClick={handleGetStarted}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.button
                  onClick={handleWatchVideo}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Play size={20} className="group-hover:scale-110 transition-transform" />
                  <span>Watch Our Story</span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            initial={{ scale: 0.8 }}
            animate={{ 
              scale: currentSlide === index ? 1.2 : 1,
              opacity: currentSlide === index ? 1 : 0.6
            }}
            transition={{ duration: 0.3 }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? 'bg-white shadow-lg' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-white/5 rounded-full animate-float" />
      <div className="absolute bottom-40 left-20 w-16 h-16 bg-orange-500/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-40 w-12 h-12 bg-blue-400/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
}