import { motion } from 'framer-motion';
import { Target, Heart, Star, Award, Users, Calendar, Trophy, Sparkles } from 'lucide-react';

export default function AboutUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const iconHoverVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  const stats = [
    { number: '500+', text: 'Events Completed', icon: <Calendar className="w-8 h-8" /> },
    { number: '50+', text: 'Team Members', icon: <Users className="w-8 h-8" /> },
    { number: '98%', text: 'Client Satisfaction', icon: <Star className="w-8 h-8" /> },
    { number: '10+', text: 'Years Experience', icon: <Trophy className="w-8 h-8" /> }
  ];

  const values = [
    {
      icon: <Target className="w-12 h-12" />,
      title: 'Our Mission',
      content: 'To create extraordinary events that exceed expectations and leave lasting impressions, while delivering exceptional value and personalized service to every client.',
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Our Vision',
      content: 'To be the most trusted and innovative event planning company, known for creating magical moments and transforming dreams into reality.',
      gradient: 'from-orange-500 to-orange-700'
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: 'Our Values',
      content: ['Excellence in Service', 'Creativity & Innovation', 'Integrity & Transparency', 'Customer Satisfaction', 'Bringing Great Ideas Every Day', 'Teamwork & Collaboration'],
      gradient: 'from-blue-600 to-blue-800'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              About Us
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Discover the story behind M.A Events and what makes us the premier choice for unforgettable celebrations
            </motion.p>
          </motion.div>

          {/* Story Section */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
          >
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500"
              variants={cardHoverVariants}
              whileHover="hover"
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6"
                variants={iconHoverVariants}
                whileHover="hover"
              >
                <Award className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Founded in 2008, M.A Events has grown from a small family business into one of the most trusted names in event planning and catering. Our journey has been marked by countless successful events, happy clients, and unforgettable moments.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                We believe that every event tells a unique story, and we're here to help you tell yours in the most beautiful and memorable way possible.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 text-center group"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl flex items-center justify-center text-white mx-auto mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.div
                    className="text-4xl font-bold text-blue-600 mb-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-600 font-medium">{stat.text}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <motion.h3
              className="text-4xl font-bold text-center text-gray-900 mb-12"
              whileHover={{ scale: 1.05 }}
            >
              What Drives Us
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 text-center group"
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <motion.div
                    className={`w-20 h-20 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center text-white mx-auto mb-6`}
                    variants={iconHoverVariants}
                    whileHover="hover"
                  >
                    {item.icon}
                  </motion.div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h4>
                  {Array.isArray(item.content) ? (
                    <ul className="text-gray-600 space-y-2 text-left">
                      {item.content.map((value, i) => (
                        <motion.li
                          key={i}
                          className="flex items-center"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          {value}
                        </motion.li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-600 leading-relaxed">{item.content}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Commitment Section */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-3xl p-12 text-center shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <Award className="w-10 h-10 text-white" />
            </motion.div>
            <h3 className="text-3xl font-bold mb-6">Our Commitment</h3>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
              We are committed to delivering excellence in every event we handle. Our team of experienced professionals works tirelessly to ensure that your special day is nothing short of perfect.
            </p>
            <motion.button
              className="mt-8 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}