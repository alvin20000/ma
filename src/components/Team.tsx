import { motion } from 'framer-motion';
import { Mail, Phone, Star, Award } from 'lucide-react';
import team1 from '../assets/images/team/josephine.jpg';
import team2 from '../assets/images/team/ausi.jpg';
import team3 from '../assets/images/team/alvin.jpg';
import team4 from '../assets/images/team/kato.jpg';
import team5 from '../assets/images/team/moris.jpg';
import team6 from '../assets/images/team/bash.jpg';

const team = [
  {
    name: "Nambalirwa Josephine",
    position: "Event Director",
    image: team1,
    bio: "10+ years of experience in luxury Event planning",
    specialties: ["Wedding Planning", "Corporate Events", "Luxury Celebrations"],
    gradient: "from-blue-500 to-blue-700"
  },
  {
    name: "Ausi Walukagga",
    position: "Decor Expert",
    image: team2,
    bio: "Specialist in creating beautiful decor setups",
    specialties: ["Floral Design", "Theme Creation", "Venue Styling"],
    gradient: "from-orange-500 to-orange-700"
  },
  {
    name: "Bongole Alvin",
    position: "Decor Specialist",
    image: team3,
    bio: "Creative genius behind our stunning Event designs",
    specialties: ["Creative Design", "Color Coordination", "Artistic Layouts"],
    gradient: "from-blue-600 to-blue-800"
  },
  {
    name: "Kato Francis",
    position: "Decor and Events specialist",
    image: team4,
    bio: "Expert in crafting elegant and memorable Event experiences",
    specialties: ["Event Coordination", "Decor Planning", "Client Relations"],
    gradient: "from-orange-600 to-orange-800"
  },
  {
    name: "Moris",
    position: "Decor Specialist",
    image: team5,
    bio: "Passionate about creating unique and memorable Event decorations",
    specialties: ["Unique Concepts", "Custom Decorations", "Innovative Ideas"],
    gradient: "from-blue-500 to-blue-700"
  },
  {
    name: "Dj Bash",
    position: "Head of Sound System",
    image: team6,
    bio: "Ensures top-notch sound quality for all our Events",
    specialties: ["Sound Engineering", "Music Curation", "Technical Setup"],
    gradient: "from-orange-500 to-orange-700"
  }
];

export default function Team() {
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
      y: -15,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50 min-h-screen">
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
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Meet Our Team
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              The passionate professionals behind every successful event, dedicated to bringing your vision to life
            </motion.p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group"
                whileHover="hover"
              >
                <motion.div
                  variants={cardHoverVariants}
                  className="relative"
                >
                  {/* Image Section */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={`${member.image}?auto=format&fit=crop&w=400&q=80`}
                      alt={member.name}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                      whileHover={{ scale: 1.1 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Floating Action Buttons */}
                    <motion.div
                      className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100"
                      initial={{ y: -20 }}
                      whileHover={{ y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.button
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Mail size={16} />
                      </motion.button>
                      <motion.button
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Phone size={16} />
                      </motion.button>
                    </motion.div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
                    {/* Header */}
                    <div className="flex items-center mb-4">
                      <motion.div
                        className={`w-12 h-12 bg-gradient-to-br ${member.gradient} rounded-xl flex items-center justify-center mr-4`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Star className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {member.name}
                        </h3>
                        <p className="text-orange-600 font-semibold">{member.position}</p>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-gray-600 mb-6 leading-relaxed">{member.bio}</p>

                    {/* Specialties */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Specialties</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, i) => (
                          <motion.span
                            key={i}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {specialty}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Contact Button */}
                    <motion.button
                      className={`w-full py-3 bg-gradient-to-r ${member.gradient} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300`}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Connect with {member.name.split(' ')[0]}
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Team Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-center text-white shadow-2xl"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <Award className="w-10 h-10 text-white" />
            </motion.div>
            <h3 className="text-3xl font-bold mb-6">Why Our Team Stands Out</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-white/80">Combined Years of Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-white/80">Successful Events Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-white/80">Dedication to Excellence</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}