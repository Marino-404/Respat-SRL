import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { footerTextContent } from "../utils/text-content";
import { useAppState } from "../store/app-state";

const Footer = () => {
  const { lang } = useAppState();
  const text = footerTextContent(lang);

  // Función de scroll suave hacia una sección
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-black text-white border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Secciones (izquierda) */}
        <div className="flex flex-col items-start text-start">
          <h3 className="uppercase text-[#C58B2B] text-sm font-medium mb-3">
            {text.sectionsTitle}
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li
              onClick={() => handleScroll("home")}
              className="hover:text-[#C58B2B] cursor-pointer transition"
            >
              {text.sections.home}
            </li>
            <li
              onClick={() => handleScroll("about")}
              className="hover:text-[#C58B2B] cursor-pointer transition"
            >
              {text.sections.about}
            </li>
            <li
              onClick={() => handleScroll("services")}
              className="hover:text-[#C58B2B] cursor-pointer transition"
            >
              {text.sections.services}
            </li>
            <li
              onClick={() => handleScroll("contact")}
              className="hover:text-[#C58B2B] cursor-pointer transition"
            >
              {text.sections.contact}
            </li>
          </ul>
        </div>

        {/* Contacto (centro) */}
        <div className="flex flex-col items-start text-start">
          <h3 className="uppercase text-[#C58B2B] text-sm font-medium mb-3">
            {text.contactTitle}
          </h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start justify-start gap-2">
              <MapPin size={16} className="text-[#C58B2B]" />
              <span>{text.location}</span>
            </li>
            <li className="flex items-start justify-start gap-2">
              <Phone size={16} className="text-[#C58B2B]" />
              <span>{text.phone}</span>
            </li>
            <li className="flex items-start justify-start gap-2">
              <Mail size={16} className="text-[#C58B2B]" />
              <span>{text.email}</span>
            </li>
          </ul>
        </div>

        {/* Marca (derecha) */}
        <div className="flex flex-col items-start text-start">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">
            RESPAT <span className="text-[#C58B2B]">S.R.L.</span>
          </h1>
          <p className="text-sm text-gray-400 max-w-xs">
            {text.brandDescription}
          </p>
        </div>
      </div>

      {/* Línea divisoria inferior */}
      <div className="w-full border-t border-neutral-800">
        <p className="text-center text-xs text-gray-500 py-4">
          © {new Date().getFullYear()} RESPAT S.R.L. — {text.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
