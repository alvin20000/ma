import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-2 sm:px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center text-[#03168e] mb-8"
        >
          Watch Our Story
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
        >
          {!isPlaying ? (
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1600&q=80"
                alt="Video thumbnail"
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handlePlay}
                  className="w-20 h-20 bg-[#f95006] rounded-full flex items-center justify-center text-white hover:bg-[#03168e] transition-colors duration-300"
                >
                  <Play size={40} fill="currentColor" />
                </motion.button>
              </div>
            </div>
          ) : (
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/your-video-id?autoplay=1"
                title="Event Planning Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl mx-auto text-center mt-8"
        >
          <p className="text-gray-600 text-lg">
            Experience the magic of our events through this captivating showcase of our finest moments and creations.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;