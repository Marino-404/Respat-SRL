import React from "react";

const clients: string[] = Array.from(
  { length: 16 },
  (_, i) => `/img/customers/${i + 1}.png`
);

const ClientsCarousel: React.FC = () => {
  return (
    <section
      className="w-full m-auto bg-secondary py-10 relative overflow-hidden"
      style={{
        backgroundImage: "url(/img/pattern-light.png)",
        backgroundRepeat: "repeat",
        backgroundSize: "contain",
      }}
    >
      {" "}
      <div className="w-full xl:w-[80%]">
        <div className="flex  w-max scroll-marquee gap-6">
          {[...clients, ...clients].map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 xl:w-36 xl:h-24 w-24 h-16 flex items-center justify-center 
                         bg-white/70 backdrop-blur-sm rounded-2xl p-4
                         shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={src}
                alt={`Cliente ${index + 1}`}
                className="object-contain h-full w-full"
              />
            </div>
          ))}
        </div>

        {/* Degradados laterales */}
        <div className="hidden xl:absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-secondary/100 to-secondary/90 pointer-events-none"></div>
        <div className="hidden xl:absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-secondary/100 to-secondary/90 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default ClientsCarousel;
