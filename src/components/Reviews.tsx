import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import imageReview1 from '../assets/images/reviews/alex.jpg';
import imageReview2 from '../assets/images/reviews/David.jpg';
import imageReview3 from '../assets/images/reviews/Farid.jpg';

const reviews = [
  {
    name: "Alex Kazungu",
    image: imageReview1,
    rating: 5,
    text: "M.A Events made our wedding day absolutely perfect! The attention to detail was incredible."
  },
  {
    name: "Ladu David",
    image: imageReview2,
    rating: 5,
    text: "Outstanding corporate event management. Professional team and excellent service."
  },
  {
    name: "Zimula Farid",
    image: imageReview3,
    rating: 5,
    text: "The best catering service in town! Our guests couldn't stop praising the food."
  }
];

export default function Reviews() {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-[#03168e] mb-12"
        >
          Customer Reviews
        </motion.h2>
        
        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `-${currentReview * 100}%` }}
              transition={{ duration: 0.5 }}
              className="flex"
            >
              {reviews.map((review, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: currentReview === index ? 1 : 0.3, scale: currentReview === index ? 1 : 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="review-card">
                    <div className="flex items-center mb-4">
                      <img
                        src={`${review.image}?auto=format&fit=crop&w=100&q=80`}
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h3 className="font-semibold text-[#03168e]">
                          {review.name}
                        </h3>
                        <div className="flex text-[#f95006]">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} size={16} fill="#f95006" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">{review.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {reviews.map((_, index) => (
              <motion.button
                key={index}
                initial={{ scale: 0.8 }}
                animate={{ scale: currentReview === index ? 1.2 : 1 }}
                transition={{ duration: 0.3 }}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentReview === index ? 'bg-[#f95006]' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentReview(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}