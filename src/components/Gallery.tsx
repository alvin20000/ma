import { motion } from 'framer-motion';
import GalleryImage from './GalleryImage';

const galleryItems = [
  {
    id: 1,
    image: "/src/assets/images/gallery/18.jpg",
    title: "Elegant Wedding Setup",
  },
  {
    id: 2,
    image: "/src/assets/images/gallery/1.jpg",
    title: "Corporate Event Venue",

  },
  {
    id: 3,
    image: "/src/assets/images/gallery/9.jpg",
    title: "Birthday Party Decoration",
  },
  {
    id: 4,
    image: "/src/assets/images/gallery/16.jpg",
    title: "Catering Setup",
  },
  {
    id: 5,
    image: "/src/assets/images/gallery/12.jpg",
    title: "Conference Setup",
  },
  {
    id: 6,
    image: "/src/assets/images/gallery/14.jpg",
    title: "Garden Wedding",
    price: "$3,499"
  },
  {
    id: 7,
    image: "/src/assets/images/gallery/8.jpg",
    title: "Anniversary Celebration",
    price: "$1,299"
  },
  {
    id: 8,
    image: "/src/assets/images/gallery/20.jpg",
    title: "Themed Party Setup",
    price: "$1,799"
  },
  {
    id: 9,
    image: "/src/assets/images/gallery/6.jpg",
    title: "Themed Party Setup",
    price: "$1,799"
  },
  {
    id: 10,
    image: "/src/assets/images/gallery/13.jpg",
    title: "Themed Party Setup",
    price: "$1,799"
  },
  {
    id: 11,
    image: "/src/assets/images/gallery/5.jpg",
    title: "Themed Party Setup",
    price: "$1,799"
  },
  {
    id: 12,
    image: "/src/assets/images/gallery/11.jpg",
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