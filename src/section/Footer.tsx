import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Secciones (izquierda) */}
        <div className="flex flex-col items-start md:items-start text-start md:text-left">
          <h3 className="uppercase text-[#C58B2B] text-sm font-medium mb-3">
            Secciones
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-[#C58B2B] cursor-pointer transition">
              Inicio
            </li>
            <li className="hover:text-[#C58B2B] cursor-pointer transition">
              Nosotros
            </li>
            <li className="hover:text-[#C58B2B] cursor-pointer transition">
              Servicios
            </li>
            <li className="hover:text-[#C58B2B] cursor-pointer transition">
              Contacto
            </li>
          </ul>
        </div>

        {/* Contacto (centro) */}
        <div className="flex flex-col items-start text-start md:items-start">
          <h3 className="uppercase text-[#C58B2B] text-sm font-medium mb-3">
            Contacto
          </h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start justify-start gap-2 md:justify-start">
              <MapPin size={16} className="text-[#C58B2B]" />
              <span>Rosario, Santa Fe</span>
            </li>
            <li className="flex items-start justify-start gap-2 md:justify-start">
              <Phone size={16} className="text-[#C58B2B]" />
              <span>+54 9 3416 03-0702</span>
            </li>
            <li className="flex items-start justify-start gap-2 md:justify-start">
              <Mail size={16} className="text-[#C58B2B]" />
              <span>contacto@respat.com</span>
            </li>
          </ul>
        </div>

        {/* Marca (derecha) */}
        <div className="flex flex-col items-start md:items-start text-start md:text-start">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">
            RESPAT <span className="text-[#C58B2B]">S.R.L.</span>
          </h1>
          <p className="text-sm text-gray-400 max-w-xs">
            Innovación y compromiso en cada proyecto. Construyendo con calidad y
            pasión desde el primer día.
          </p>
        </div>
      </div>

      {/* Línea divisoria inferior */}
      <div className="w-full border-t border-neutral-800">
        <p className="text-center text-xs text-gray-500 py-4">
          © {new Date().getFullYear()} RESPAT S.R.L. — Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
