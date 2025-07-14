import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronRight, ChevronLeft, X } from 'lucide-react';

// Import images
import image1 from '../assets/images/gallery/1.jpg';
import image2 from '../assets/images/gallery/2.jpg';
import image3 from '../assets/images/gallery/3.jpg';
import image4 from '../assets/images/gallery/4.jpg';
import image5 from '../assets/images/gallery/5.jpg';
import image6 from '../assets/images/gallery/6.jpg';
import image7 from '../assets/images/gallery/7.jpg';
import image8 from '../assets/images/gallery/8.jpg';
import image9 from '../assets/images/gallery/9.jpg';
import image10 from '../assets/images/gallery/10.jpg';
import image11 from '../assets/images/gallery/11.jpg';
import image12 from '../assets/images/gallery/12.jpg';
import image13 from '../assets/images/gallery/13.jpg';
import image14 from '../assets/images/gallery/14.jpg';
import image15 from '../assets/images/gallery/15.jpg';
import image16 from '../assets/images/gallery/16.jpg';
import image17 from '../assets/images/gallery/17.jpg';
import image18 from '../assets/images/gallery/18.jpg';
import image19 from '../assets/images/gallery/19.jpg';
import image20 from '../assets/images/gallery/20.jpg';

const galleryCategories = [
  {
    id: 'graduation',
    name: 'Graduation',
    coverImage: image1,
    images: [image1, image2, image3],
    count: 3
  },
  {
    id: 'wedding',
    name: 'Wedding',
    coverImage: image4,
    images: [image4, image5, image6, image7, image8],
    count: 5
  },
  {
    id: 'birthday',
    name: 'Birthday',
    coverImage: image9,
    images: [image9, image10, image11],
    count: 3
  },
  {
    id: 'introduction',
    name: 'Introduction',
    coverImage: image12,
    images: [image12, image13, image14, image15],
    count: 4
  },
  {
    id: 'baby-showers',
    name: 'Baby Showers',
    coverImage: image16,
    images: [image16, image17],
    count: 2
  },
  {
    id: 'meetings',
    name: 'Meetings',
    coverImage: image18,
    images: [image18, image19],
    count: 2
  },
  {
    id: 'others',
    name: 'Others',
    coverImage: image20,
    images: [image20],
    count: 1
  }
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const selectedCategoryData = galleryCategories.find(cat => cat.id === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-12"
        >
          Our Gallery
        </motion.h2>

        {!selectedCategory ? (
          // Category Grid View
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="gallery-category-card"
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className="relative overflow-hidden rounded-t-xl">
                  <img
                    src={category.coverImage}
                    alt={category.name}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                    <p className="text-sm opacity-90">{category.count} photos</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="modern-icon-btn bg-white/20 backdrop-blur-sm">
                      <ChevronRight size={20} className="text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">View Collection</span>
                    <span className="text-blue-600 font-semibold">{category.count} items</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          // Category Images View
          <div>
            <div className="flex items-center justify-between mb-8">
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => setSelectedCategory(null)}
                className="modern-action-btn"
              >
                <ChevronLeft size={20} />
                Back to Categories
              </motion.button>
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                {selectedCategoryData?.name}
              </h3>
              <div></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {selectedCategoryData?.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="gallery-image-card"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image}
                    alt={`${selectedCategoryData.name} ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="gallery-image-overlay">
                    <div className="text-center text-white">
                      <p className="text-lg font-semibold mb-4">
                        {selectedCategoryData.name} Event
                      </p>
                      <div className="flex space-x-4">
                        <a
                          href={`https://wa.me/256766455792?text=I'm interested in ${selectedCategoryData.name} event planning`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="modern-primary-btn"
                          onClick={(e) => e.stopPropagation()}
                        >
                          WhatsApp
                        </a>
                        <a
                          href="tel:+256751256167"
                          className="modern-action-btn"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Call
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Image Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Gallery Image"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 modern-icon-btn bg-black/50 text-white"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}