import { useState } from "react";
import { infrastructureTextContent } from "../utils/text-content";
import {
  Wrench,
  Factory,
  Truck,
  Users,
  Hammer,
  Cog,
  ChevronRight,
} from "lucide-react";

import { useAppState } from "../store/app-state";
import { motion, type Variants } from "framer-motion";

const images = Array.from(
  { length: 20 },
  (_, i) => `/img/infrastructure/vehiculos${i + 1}.jpg`
);

const Infrastructure = () => {
  const icons = [
    <Factory key="f" size={26} className="text-secondary" />,
    <Hammer key="h" size={28} className="text-secondary" />,
    <Truck key="t" size={24} className="text-secondary" />,
    <Cog key="c" size={22} className="text-secondary" />,
    <Users key="u" size={25} className="text-secondary" />,
    <Wrench key="w" size={26} className="text-secondary" />,
  ];

  const { lang } = useAppState();
  const [currentIndex, setCurrentIndex] = useState(0);
  const content = infrastructureTextContent(lang);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  // Animaciones
  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="infrastructure"
      className="relative w-full flex h-auto flex-col items-center justify-center text-white px-6 py-24 overflow-hidden"
    >
      {/* Fondo igual al de Services */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#1c1c1c] opacity-95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(240,175,84,0.05),transparent_60%)]" />

      {/* Contenido */}
      <motion.div
        className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 max-w-7xl w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Texto */}
        <motion.div
          className="flex-1 max-w-[600px] space-y-3 text-start md:text-left"
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-wide">
            <ChevronRight className="inline-block text-[#F0AF54]" />
            {content.title}
          </h2>
          <ul className="space-y-6 text-lg leading-relaxed text-gray-300">
            {content.list.map((item, index) => (
              <li key={index} className="flex items-start gap-3 py-[2px]">
                <div className="flex items-center justify-center w-7 h-7">
                  {icons[index % icons.length]}
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-secondary/50 text-sm italic mt-6">
            {content.footnote}
          </p>
        </motion.div>

        {/* Galería */}
        <motion.div
          className="flex-1 relative w-full max-w-[500px] md:max-w-[600px] overflow-hidden rounded-2xl shadow-xl"
          variants={fadeInUp}
        >
          <img
            src={images[currentIndex]}
            alt={`Infraestructura ${currentIndex + 1}`}
            className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-500 ease-in-out"
          />

          {/* Flechas */}
          <button
            onClick={prevSlide}
            className="absolute cursor-pointer left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white py-4 px-3 rounded-full transition"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute cursor-pointer right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white py-4 px-3 rounded-full transition"
          >
            ›
          </button>

          {/* Indicadores */}
          <div className="absolute bottom-3 w-full flex justify-center gap-2">
            {images.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full cursor-pointer transition ${
                  currentIndex === index ? "bg-[#F0AF54]" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Infrastructure;
