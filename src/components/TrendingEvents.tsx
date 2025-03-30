import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import trendingImage_1 from '../assets/images/trending_1.jpg';
import trendingImage_2 from '../assets/images/trending_2.jpg';
import trendingImage_3 from '../assets/images/trending_3.jpg';
import trendingImage_4 from '../assets/images/trending_4.jpg';
import trendingImage_5 from '../assets/images/trending_5.jpg';

const trendingEvents = [
  {
    id: 1,
    image: trendingImage_1,
    title: "Modern Wedding Setup",
    category: "Wedding"
  },
  {
    id: 2,
    image: trendingImage_2,
    title: "Corporate Wedding ceremony",
    category: "Wedding"
  },
  {
    id: 3,
    image: trendingImage_3,
    title: "Modern Inroduction Setup",
    category: "Introduction Party"
  },
  {
    id: 4,
    image: trendingImage_4,
    title: "Garden Party",
    category: "Outdoor"
  },
  {
    id: 5,
    image: trendingImage_5,
    title: "Creative Introduction Ceremony",
    category: "Outdoor"
  }
];

const TrendingEvents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + trendingEvents.length) % trendingEvents.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 sm:py-16 bg-gray-50 overflow-hidden -mx-2 sm:-mx-4 md:-mx-8">
      <div className="container mx-auto px-2 sm:px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center text-[#03168e] mb-8 sm:mb-12"
        >
          Trending Events
        </motion.h2>

        <div className="relative h-[400px] sm:h-[500px] w-full">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full h-full"
            >
              <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden group">
                <img
                  src={`${trendingEvents[currentIndex].image}?auto=format&fit=crop&w=1600&q=80`}
                  alt={trendingEvents[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 text-white"
                >
                  <span className="inline-block px-3 py-1 bg-[#f95006] rounded-full text-sm mb-2 sm:mb-4">
                    {trendingEvents[currentIndex].category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2">{trendingEvents[currentIndex].title}</h3>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 sm:p-3 rounded-full text-[#03168e] hover:bg-[#f95006] hover:text-white transition-all z-10"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft size={20} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 sm:p-3 rounded-full text-[#03168e] hover:bg-[#f95006] hover:text-white transition-all z-10"
            onClick={() => paginate(1)}
          >
            <ChevronRight size={20} />
          </motion.button>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {trendingEvents.map((_, index) => (
              <motion.button
                key={index}
                initial={{ scale: 0.8 }}
                animate={{ scale: currentIndex === index ? 1.2 : 1 }}
                transition={{ duration: 0.3 }}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-[#f95006]' : 'bg-white'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingEvents;