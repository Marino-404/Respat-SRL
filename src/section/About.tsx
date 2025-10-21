import { motion } from "framer-motion";
import { useAppState } from "../store/app-state";
import { aboutTextContent } from "../utils/text-content";
import { Target, Eye, HeartHandshake } from "lucide-react";

const About = () => {
  const { lang } = useAppState();
  const text = aboutTextContent(lang);

  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex flex-col items-center justify-center text-black overflow-hidden"
    >
      {/* 🎥 Fondo con video o imagen sutil */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      >
        <source src="/videos/industry.mp4" type="video/mp4" />
      </video>

      {/* 🎨 Degradado de fondo suave */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFB84D]/90 via-[#FFD580]/80 to-[#FFF3D6]/90 z-0" />

      <div className="relative z-10 max-w-6xl w-full px-6 py-24 flex flex-col items-center text-center">
        {/* 🧱 Encabezado */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-10 tracking-wide "
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {text.mainTitle}
        </motion.h2>

        <motion.p
          className="max-w-4xl text-lg md:text-xl font-light leading-relaxed mb-6 text-black/80"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {text.intro}
        </motion.p>

        <motion.p
          className="max-w-4xl text-base md:text-lg leading-relaxed mb-16 text-black/70"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {text.description}
        </motion.p>

        {/* 🟡 Línea divisoria */}
        <motion.div
          className="w-24 h-[3px] bg-black mb-16 rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
          viewport={{ once: true, amount: 0.3 }}
        />

        {/* 🧩 Bloques de política y valores */}
        <div className="grid md:grid-cols-3 gap-8 w-full mb-20">
          {/* Misión */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="cursor-pointer bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-black/10 "
          >
            <Target className="w-10 h-10 text-black mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-4 uppercase">
              {text.mission.title}
            </h3>
            <p className="text-black/80 leading-relaxed text-sm md:text-base">
              {text.mission.text}
            </p>
          </motion.div>

          {/* Visión */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="cursor-pointer bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-black/10 "
          >
            <Eye className="w-10 h-10 text-black mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-4 uppercase">
              {text.vision.title}
            </h3>
            <p className="text-black/80 leading-relaxed text-sm md:text-base">
              {text.vision.text}
            </p>
          </motion.div>

          {/* Valores */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="cursor-pointer bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-black/10 "
          >
            <HeartHandshake className="w-10 h-10 text-black mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-4 uppercase">
              {text.values.title}
            </h3>
            <ul className="text-black/80 text-sm md:text-base space-y-2">
              {text.values.list.map((value, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center gap-2"
                >
                  <span className="w-2 h-2 bg-black rounded-full" />
                  {value}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* 🌊 Separador ondulado */}
      <svg
        className="absolute bottom-0 left-0 w-full text-secondary"
        viewBox="0 0 1440 320"
        fill="currentColor"
      >
        <path
          fillOpacity="1"
          d="M0,96L48,128C96,160,192,224,288,229.3C384,235,480,181,576,149.3C672,117,768,107,864,128C960,149,1056,203,1152,218.7C1248,235,1344,213,1392,202.7L1440,192L1440,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default About;
