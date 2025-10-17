import { motion, easeOut } from "framer-motion";
import type { Variants } from "framer-motion";
import PrimaryButton from "../components/ui/PrimaryButton";
import SecondaryButton from "../components/ui/SecondaryButton";
import { useAppState } from "../store/app-state";
import { heroTextContent } from "../utils/text-content";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: easeOut },
  },
};

export default function Home() {
  const { lang } = useAppState();
  const heroText = heroTextContent(lang);

  const navigateToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigateToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="home"
      className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden"
    >
      <video
        src="/img/fondo.mp4"
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
        ref={(video) => {
          if (video) video.playbackRate = 0.5;
        }}
      />
      <div className="absolute inset-0 bg-black/60"></div>

      <motion.div
        className="relative z-10 flex flex-col items-center justify-center max-w-4xl px-6"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-4"
          variants={fadeUp}
        >
          {heroText.slogan}
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-200 mb-8 font-light font-sans"
          style={{ fontWeight: 200, letterSpacing: "0.5px" }}
          variants={fadeUp}
        >
          {heroText.description}
        </motion.p>

        <motion.div className="flex gap-4 mb-6" variants={fadeUp}>
          <PrimaryButton
            text={heroText.primaryButton}
            onClick={() => {
              navigateToServices();
            }}
          />
          <SecondaryButton
            text={heroText.secondaryButton}
            onClick={() => {
              navigateToContact();
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
