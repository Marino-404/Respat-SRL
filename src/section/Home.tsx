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

  // 🎬 Mantener el video lento todo el tiempo
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const setSlowPlayback = () => {
      // aplicamos con un leve retraso para garantizar que el video ya está reproduciendo
      setTimeout(() => {
        video.playbackRate = 0.5; // 🎬 velocidad lenta
        console.log("Velocidad aplicada:", video.playbackRate);
      }, 200);
    };

    // intentar reproducir (por si el autoplay falla)
    const tryPlay = async () => {
      try {
        await video.play();
      } catch (err) {
        console.warn("Autoplay bloqueado:", err);
      }
    };

    video.addEventListener("playing", setSlowPlayback);
    video.addEventListener("loadeddata", setSlowPlayback);
    video.addEventListener("loadedmetadata", setSlowPlayback);
    video.addEventListener("timeupdate", setSlowPlayback); // refuerzo extra

    tryPlay();

    return () => {
      video.removeEventListener("playing", setSlowPlayback);
      video.removeEventListener("loadeddata", setSlowPlayback);
      video.removeEventListener("loadedmetadata", setSlowPlayback);
      video.removeEventListener("timeupdate", setSlowPlayback);
    };
  }, []);

  const navigateToServices = () => {
    const section = document.getElementById("services");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const navigateToContact = () => {
    const section = document.getElementById("contact");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="home"
      className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* 🎥 Video de fondo lento */}
      <video
        ref={videoRef}
        src="/img/fondo.mp4"
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        disablePictureInPicture
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      {/* 🌘 Overlay más sutil */}
      <div className="absolute inset-0 bg-black/80" />

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
