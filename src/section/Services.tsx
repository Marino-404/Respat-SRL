import { Wrench, Cog, Bolt, Gauge } from "lucide-react";
import { servicesTextContent } from "../utils/text-content";
import { useAppState } from "../store/app-state";
import { motion, type Variants } from "framer-motion";
import { ChevronRight } from "lucide-react";

const Services = () => {
  const { lang } = useAppState();
  const text = servicesTextContent(lang);

  const servicesData = [
    {
      icon: <Wrench className="w-12 h-12 text-[#F0AF54]" />,
      title: text.montajes.title,
      description: text.montajes.description,
    },
    {
      icon: <Cog className="w-12 h-12 text-[#F0AF54]" />,
      title: text.soldaduras.title,
      description: text.soldaduras.description,
    },
    {
      icon: <Bolt className="w-12 h-12 text-[#F0AF54]" />,
      title: text.izajes.title,
      description: text.izajes.description,
    },
    {
      icon: <Gauge className="w-12 h-12 text-[#F0AF54]" />,
      title: text.torque.title,
      description: text.torque.description,
    },
  ];

  // Variants de cada card
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Variants para stagger de las cards
  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <section
      id="services"
      className="w-full min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] text-white px-6 py-20"
    >
      <h2 className="text-4xl xl:text-5xl font-bold mb-16 text-center tracking-wide">
        <ChevronRight className="inline-block text-secondary" />
        {text.title}
      </h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className="relative bg-[#121212] rounded-2xl overflow-hidden group shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            variants={cardVariants}
          >
            {/* Franja superior decorativa */}
            <div className="absolute top-0 left-0 w-full h-1 bg-[#F0AF54]" />

            {/* Contenido principal */}
            <div className="p-10 flex flex-col items-center text-center">
              <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#F0AF54] tracking-wide">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Línea inferior animada */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-[#F0AF54] group-hover:w-3/4 transition-all duration-500" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
