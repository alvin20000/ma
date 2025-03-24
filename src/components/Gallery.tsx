import { motion } from 'framer-motion';
import GalleryImage from './GalleryImage';
import image1 from '../assets/images/gallery/18.jpg';
import image2 from '../assets/images/gallery/1.jpg';
import image3 from '../assets/images/gallery/9.jpg';
import image4 from '../assets/images/gallery/16.jpg';
import image5 from '../assets/images/gallery/12.jpg';
import image6 from '../assets/images/gallery/14.jpg';
import image7 from '../assets/images/gallery/8.jpg';
import image8 from '../assets/images/gallery/20.jpg';
import image9 from '../assets/images/gallery/6.jpg';
import image10 from '../assets/images/gallery/13.jpg';
import image11 from '../assets/images/gallery/5.jpg';
import image12 from '../assets/images/gallery/11.jpg';

const galleryItems = [
  {
    id: 1,
    image: image1,
    title: "Elegant Wedding Setup",
  },
  {
    id: 2,
    image: image2,
    title: "Corporate Event Venue",

  },
  {
    id: 3,
    image: image3,
    title: "Birthday Party Decoration",
  },
  {
    id: 4,
    image: image4,
    title: "Catering Setup",
  },
  {
    id: 5,
    image: image5,
    title: "Conference Setup",
  },
  {
    id: 6,
    image: image6,
    title: "Garden Wedding",
    price: "$3,499"
  },
  {
    id: 7,
    image: image7,
    title: "Anniversary Celebration",
    price: "$1,299"
  },
  {
    id: 8,
    image: image8,
    title: "Themed Party Setup",
    price: "$1,799"
  },
  {
    id: 9,
    image: image9,
    title: "Themed Party Setup",
    price: "$1,799"
  },
  {
    id: 10,
    image: image10,
    title: "Themed Party Setup",
    price: "$1,799"
  },
  {
    id: 11,
    image: image11,
    title: "Themed Party Setup",
    price: "$1,799"
  },
  {
    id: 12,
    image: image12,
    title: "Themed Party Setup",
    price: "$1,799"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-[#03168e] mb-12"
        >
          Our Gallery
        </motion.h2>
        
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GalleryImage
                image={item.image}
                title={item.title}
                price={item.price}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}