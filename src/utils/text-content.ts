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

export const aboutTextContent = (lang = true) => {
  if (lang) {
    return {
      mainTitle: "Sobre Nosotros",
      intro:
        "En RESPAT S.R.L. nos especializamos desde hace más de 15 años en Montajes industriales, Construcción y Mantenimiento de Plantas Industriales.",
      description:
        "Gracias a nuestro equipo de profesionales altamente calificado, somos una empresa en constante desarrollo que posee distintas áreas cuya interacción nos permite aumentar nuestra eficiencia así como también proporcionar un servicio reconocido por nuestros clientes.",
      policyTitle: "Política y Valores",
      mission: {
        title: "Misión",
        text: "Brindar soluciones industriales seguras, eficientes y sustentables, combinando experiencia técnica e innovación para acompañar a nuestros clientes en su crecimiento.",
      },
      vision: {
        title: "Visión",
        text: "Ser una empresa referente en montajes y mantenimiento industrial, reconocida por su excelencia, compromiso y responsabilidad ambiental.",
      },
      values: {
        title: "Valores",
        list: [
          "Orientación al cliente",
          "Compromiso con los resultados",
          "Trabajo en equipo",
          "Integridad y seguridad",
          "Responsabilidad ambiental",
        ],
      },
    };
  } else {
    return {
      mainTitle: "About Us",
      intro:
        "At RESPAT S.R.L., we have specialized for over 15 years in Industrial Assemblies, Construction, and Maintenance of Industrial Plants.",
      description:
        "Thanks to our highly qualified team of professionals, we are a constantly developing company with different areas whose interaction allows us to increase our efficiency and provide a service recognized by our clients.",
      policyTitle: "Policy and Values",
      mission: {
        title: "Mission",
        text: "Provide safe, efficient, and sustainable industrial solutions, combining technical expertise and innovation to support our clients’ growth.",
      },
      vision: {
        title: "Vision",
        text: "To be a leading company in industrial assembly and maintenance, recognized for its excellence, commitment, and environmental responsibility.",
      },
      values: {
        title: "Values",
        list: [
          "Customer orientation",
          "Commitment to results",
          "Teamwork",
          "Integrity and safety",
          "Environmental responsibility",
        ],
      },
    };
  }
};

export const galleryTextContent = (lang = true) => {
  if (lang) {
    return {
      mainTitle: "Galería de Proyectos",
      sections: [
        {
          title: "Montajes Industriales",
          description:
            "Realizamos montajes industriales de alta complejidad, adaptándonos a los requerimientos de cada planta y garantizando seguridad, precisión y cumplimiento de plazos.",
          button: "Ver más",
        },
        {
          title: "Mantenimiento de Plantas",
          description:
            "Ofrecemos servicios integrales de mantenimiento preventivo y correctivo, optimizando los tiempos de producción y asegurando el funcionamiento continuo de las instalaciones.",
          button: "Ver más",
        },
        {
          title: "Obras Civiles",
          description:
            "Desarrollamos obras civiles asociadas a la industria, priorizando la eficiencia constructiva, la calidad de materiales y la sustentabilidad en cada proyecto.",
          button: "Ver más",
        },
      ],
    };
  } else {
    return {
      mainTitle: "Project Gallery",
      sections: [
        {
          title: "Industrial Assemblies",
          description:
            "We carry out complex industrial assemblies, adapting to each plant’s requirements while ensuring safety, precision, and on-time delivery.",
          button: "See more",
        },
        {
          title: "Plant Maintenance",
          description:
            "We provide comprehensive preventive and corrective maintenance services, optimizing production times and ensuring continuous operation of facilities.",
          button: "See more",
        },
        {
          title: "Civil Works",
          description:
            "We develop civil works associated with industry, prioritizing construction efficiency, material quality, and sustainability in every project.",
          button: "See more",
        },
      ],
    };
  }
};

export const footerTextContent = (lang = true) => {
  if (lang) {
    return {
      sectionsTitle: "Secciones",
      contactTitle: "Contacto",
      brandDescription:
        "Innovación y compromiso en cada proyecto. Construyendo con calidad y pasión desde el primer día.",
      rights: "Todos los derechos reservados.",
      location: "Rosario, Santa Fe",
      phone: "+54 9 3416 03-0702",
      email: "contacto@respat.com",
      sections: {
        home: "Inicio",
        about: "Nosotros",
        services: "Servicios",
        contact: "Contacto",
      },
    };
  } else {
    return {
      sectionsTitle: "Sections",
      contactTitle: "Contact",
      brandDescription:
        "Innovation and commitment in every project. Building with quality and passion from day one.",
      rights: "All rights reserved.",
      location: "Rosario, Santa Fe",
      phone: "+54 9 3416 03-0702",
      email: "contact@respat.com",
      sections: {
        home: "Home",
        about: "About Us",
        services: "Services",
        contact: "Contact",
      },
    };
  }
};
