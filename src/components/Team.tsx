import { motion } from 'framer-motion';
import team1 from '../assets/images/team/josephine.jpg';
import team2 from '../assets/images/team/ausi.jpg';
import team3 from '../assets/images/team/alvin.jpg';
import team4 from '../assets/images/team/kato.jpg';
import team5 from '../assets/images/team/moris.jpg';
import team6 from '../assets/images/team/yabu.png';

const team = [
  {
    name: "Nambalirwa Josephine",
    position: "Event Director",
    image: team1,
    bio: "10+ years of experience in luxury event planning"
  },
  {
    name: "Ausi Walukagga",
    position: "Head Chef",
    image: team2,
    bio: "Award-winning culinary expert specializing in fusion cuisine"
  },
  {
    name: "Bongole Alvin",
    position: "Decor Specialist",
    image: team3,
    bio: "Creative genius behind our stunning event designs"
  },
  {
    name: "Kato",
    position: "Event specialist",
    image: team4,
    bio: "10+ years of experience in luxury event planning"
  },
  {
    name: "Moris",
    position: "Head Chef",
    image: team5,
    bio: "Award-winning culinary expert specializing in fusion cuisine"
  },
  {
    name: "Yabu",
    position: "Decor Specialist",
    image: team6,
    bio: "Creative genius behind our stunning event designs"
  }
];

export default function Team() {
  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-[#03168e] mb-12"
        >
          Meet Our Team
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="mb-6 mx-auto w-48 h-48 overflow-hidden"
              >
                <img
                  src={`${member.image}?auto=format&fit=crop&w=400&q=80`}
                  alt={member.name}
                  className="team-member-image w-full h-full object-cover"
                />
              </motion.div>
              <h3 className="text-xl font-semibold text-[#03168e] mb-2">
                {member.name}
              </h3>
              <p className="text-[#f95006] font-medium mb-3">{member.position}</p>
              <p className="text-gray-600">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}