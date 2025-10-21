import { useEffect, useRef } from "react";
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // 🎬 Ralentización progresiva del video + fade sincronizado del overlay
  useEffect(() => {
    const video = videoRef.current;
    const overlay = overlayRef.current;
    if (!video || !overlay) return;

    const slowDown = () => {
      let currentRate = 1; // velocidad inicial
      const targetRate = 0.5; // velocidad final
      const step = 0.02; // velocidad de cambio
      let opacity = 1; // opacidad inicial del overlay
      const targetOpacity = 0.7; // opacidad final

      const animate = () => {
        if (currentRate > targetRate) {
          currentRate -= step;
          opacity -= (1 - targetOpacity) * step; // reducimos opacidad suavemente

          video.playbackRate = currentRate;
          overlay.style.backgroundColor = `rgba(0, 0, 0, ${opacity.toFixed(
            2
          )})`;

          requestAnimationFrame(animate);
        } else {
          video.playbackRate = targetRate;
          overlay.style.backgroundColor = `rgba(0, 0, 0, ${targetOpacity})`;
        }
      };

      animate();
    };

    const handlePlaying = () => {
      slowDown();
    };

    const startVideo = async () => {
      try {
        await video.play();
      } catch (err) {
        console.log("Autoplay bloqueado:", err);
      }
    };

    video.addEventListener("playing", handlePlaying);
    startVideo();

    return () => {
      video.removeEventListener("playing", handlePlaying);
    };
  }, []);

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
      {/* 🎥 Video de fondo */}
      <video
        ref={videoRef}
        src="/img/fondo.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* 🌘 Overlay con fade progresivo */}
      <div ref={overlayRef} className="absolute inset-0 bg-black"></div>

      {/* 🌟 Contenido principal */}
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
            onClick={navigateToServices}
          />
          <SecondaryButton
            text={heroText.secondaryButton}
            onClick={navigateToContact}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
