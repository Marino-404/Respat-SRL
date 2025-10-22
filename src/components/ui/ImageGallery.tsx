import { motion } from "framer-motion";

interface ImageGalleryProps {
  images: { src: string; alt: string }[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 w-full">
      {images.map((img, index) => (
        <motion.div
          key={index}
          className="relative overflow-hidden rounded-2xl shadow-md group"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-40 md:h-56 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Overlay para elegancia */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
      ))}
    </div>
  );
};

export default ImageGallery;
