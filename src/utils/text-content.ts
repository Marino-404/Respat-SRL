export const headerTextContent = (lang = true) => {
  if (lang) {
    return {
      home: "Inicio",
      trabajos: "Servicios",
      equipo: "Instalaciones",
      sobreNosotros: "Sobre nosotros",
      contacto: "Contacto",
    };
  } else {
    return {
      home: "Home",
      trabajos: "Services",
      equipo: "Facilities",
      sobreNosotros: "About Us",
      contacto: "Contact",
    };
  }
};

export const heroTextContent = (lang = true) => {
  if (lang) {
    return {
      slogan: "Soluciones Industriales Integrales",
      description:
        "Especialistas en soldaduras, izajes y montajes industriales. Más de 15 años brindando seguridad, precisión y resultados confiables.",
      primaryButton: "Servicios",
      secondaryButton: "Contactanos",
    };
  } else {
    return {
      slogan: "Comprehensive Industrial Solutions",
      description:
        "Experts in welding, lifting, and industrial assemblies. Over 15 years providing safety, precision, and reliable results.",
      primaryButton: "Our Services",
      secondaryButton: "Contact Us",
    };
  }
};

export const servicesTextContent = (lang = true) => {
  if (lang) {
    return {
      title: "Nuestros Servicios",
      montajes: {
        title: "Montajes Industriales",
        description:
          "Fabricación, montaje y mantenimiento de plantas, calderas, estructuras y equipos sometidos a presión. Atendemos industrias aceiteras, químicas, papeleras, petroleras y energéticas.",
      },
      soldaduras: {
        title: "Soldaduras Especiales",
        description:
          "Soldaduras calificadas bajo procedimientos WPS–PQR con procesos GTAW, SMAW y GMAW. Trabajos certificados y controlados al 100% radiográficamente.",
      },
      izajes: {
        title: "Reparación de Izajes",
        description:
          "Inspección, reparación y certificación de equipos de izaje. Capacitación de operadores y certificaciones para garantizar máxima seguridad operativa.",
      },
      torque: {
        title: "Control de Torque Hidráulico",
        description:
          "Equipos HYTORC de última generación para torqueado de calderas, turbinas y bridas de alta presión. Operarios certificados y servicio inmediato en todo tipo de plantas industriales.",
      },
    };
  } else {
    return {
      title: "Our Services",
      montajes: {
        title: "Industrial Assemblies",
        description:
          "Manufacturing, assembly and maintenance of plants, boilers, structures and pressure equipment. Serving oilseed, chemical, paper, oil and energy industries.",
      },
      soldaduras: {
        title: "Special Welding",
        description:
          "Qualified welds under WPS–PQR procedures using GTAW, SMAW and GMAW processes. Certified works fully controlled radiographically.",
      },
      izajes: {
        title: "Lifting Division",
        description:
          "Inspection, repair and certification of lifting equipment. Operator training and certifications to ensure maximum operational safety.",
      },
      torque: {
        title: "Hydraulic Torque Control",
        description:
          "Latest generation HYTORC equipment for torqueing boilers, turbines and high-pressure flanges. Certified operators and immediate service for all types of industrial plants.",
      },
    };
  }
};
