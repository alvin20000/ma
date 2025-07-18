import { Phone } from 'lucide-react';

interface GalleryImageProps {
  image: string;
  title: string;
  price: string;
}

export default function GalleryImage({ image, title, price }: GalleryImageProps) {
  return (
    <div className="gallery-item">
      <img
        src={`${image}?auto=format&fit=crop&w=600&q=80`}
        alt={title}
        className="w-full h-64 object-cover rounded-lg"
      />
      <div className="gallery-overlay">
        <div className="text-center text-white">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <div className="flex space-x-4">
            <a
              href={`https://wa.me/256766455792?text=I'm interested in the ${title} package`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-btn px-6 py-2"
            >
              WhatsApp
            </a>
            <a
              href="tel:+256751256167"
              className="glass-btn px-6 py-2 flex items-center"
            >
              <Phone size={18} className="mr-2" />
              Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}