import { useEffect, useState } from "react";

interface ParallaxDividerProps {
  image: string;
}

const ParallaxDivider: React.FC<ParallaxDividerProps> = ({ image }) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="w-full h-[60vh] relative overflow-hidden"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: `center calc(50% + ${offsetY * 0.3}px)`,
        backgroundAttachment: "scroll",
      }}
    >
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
};

export default ParallaxDivider;
