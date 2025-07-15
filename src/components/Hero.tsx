import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, Users, Calendar, Award, Sparkles, Heart } from 'lucide-react';
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

const features = [
  {
    icon: <Star className="w-6 h-6" />,
    title: "500+ Events",
    description: "Successfully completed"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "98% Satisfaction",
    description: "Happy clients rate"
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "10+ Years",
    description: "Experience in industry"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Award Winning",
    description: "Event planning team"
  }
];

const services = [
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Event Decoration",
    description: "Transform your venue with stunning decorations"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Wedding Planning",
    description: "Make your special day absolutely perfect"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Corporate Events",
    description: "Professional events that impress"
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        {/* Background Slides */}
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentSlide === index ? 1 : 0,
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

        {/* Light Overlay for text readability */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
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
                  className="flex flex-col sm:flex-row gap-4 justify-center"
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

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Why Choose M.A Events?
            </motion.h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We bring years of experience and passion to make your events extraordinary
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 text-center group transform hover:-translate-y-3"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center text-white mx-auto mb-6"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Our Premium Services
            </motion.h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              From intimate gatherings to grand celebrations, we handle every detail
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 group border border-orange-100"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl flex items-center justify-center text-white mb-6"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleGetStarted}
                  className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <span>Learn More</span>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-8"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles className="w-12 h-12 text-white" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Ready to Plan Your Perfect Event?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Let's bring your vision to life with our expert planning and attention to detail
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={handleGetStarted}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white text-blue-600 font-bold rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2"
              >
                <ArrowRight size={20} />
                Start Planning Now
              </motion.button>
              <motion.a
                href="https://wa.me/256766455792?text=I'm interested in your event planning services"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2"
              >
                <Heart size={20} />
                Contact Us on WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}