export interface Service {
  id: number;
  title: string;
  slug: string;
  icon: string;
  description: string;
  longDescription: string;
  features: string[];
  technologies: string[];
  price: string;
  popular: boolean;
  category: string;
  benefits: string[];
  process: string[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Desarrollo Web",
    slug: "desarrollo-web",
    icon: "desarrollo",
    description: "Sitios web modernos, responsivos y optimizados para conversión que impulsan el crecimiento de tu negocio",
    longDescription: "Creamos experiencias web excepcionales que conectan con tu audiencia y generan resultados medibles. Nuestro enfoque combina diseño atractivo, funcionalidad robusta y optimización para motores de búsqueda, asegurando que tu presencia digital destaque en el mercado costarricense.",
    features: [
      "Diseño responsive y moderno adaptado a todos los dispositivos",
      "Optimización SEO completa para máxima visibilidad",
      "Integración avanzada con Google Analytics y herramientas de seguimiento",
      "Formularios de contacto inteligentes con validación automática",
      "Optimización de velocidad y rendimiento para mejor experiencia de usuario",
      "Hosting profesional y dominio incluido por el primer año"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "WordPress"],
    price: "Desde $800",
    popular: false,
    category: "web",
    benefits: [
      "Aumento promedio del 40% en conversiones",
      "Mejora significativa en posicionamiento SEO",
      "Reducción del 60% en tiempo de carga",
      "Diseño completamente responsive"
    ],
    process: [
      "Análisis de necesidades y objetivos empresariales",
      "Diseño de wireframes y prototipos interactivos",
      "Desarrollo frontend y backend personalizado",
      "Testing exhaustivo en múltiples dispositivos",
      "Lanzamiento y optimización post-launch"
    ],
    faq: [
      {
        question: "¿Cuánto tiempo toma desarrollar un sitio web?",
        answer: "Un sitio web corporativo típico toma entre 2-4 semanas. Sitios más complejos con funcionalidades específicas pueden requerir 6-8 semanas."
      },
      {
        question: "¿El sitio web será responsive?",
        answer: "Absolutamente. Todos nuestros sitios se adaptan perfectamente a móviles, tablets y desktop, garantizando una experiencia óptima en cualquier dispositivo."
      }
    ]
  },
  {
    id: 2,
    title: "Marketing Digital",
    slug: "marketing-digital",
    icon: "marketing",
    description: "Estrategias digitales integrales que aumentan tu visibilidad online y generan leads cualificados",
    longDescription: "Desarrollamos campañas de marketing digital data-driven que maximizan tu retorno de inversión. Desde estrategia de contenido hasta publicidad pagada, creamos ecosistemas digitales que conectan tu marca con clientes potenciales en Costa Rica y más allá.",
    features: [
      "Estrategia de contenido personalizada para tu industria",
      "Gestión profesional de redes sociales con engagement real",
      "Campañas de publicidad pagada optimizadas (Google Ads, Facebook, Instagram)",
      "Email marketing automatizado con segmentación avanzada",
      "SEO técnico y de contenido para dominancia en búsquedas",
      "Analytics detallado y reportes de performance mensual"
    ],
    technologies: ["Google Ads", "Facebook Business", "Instagram Ads", "Mailchimp", "Google Analytics", "SEMrush"],
    price: "Desde $400/mes",
    popular: true,
    category: "marketing",
    benefits: [
      "Incremento promedio del 150% en leads cualificados",
      "ROI promedio de 4:1 en campañas publicitarias",
      "Crecimiento del 80% en engagement en redes sociales",
      "Mejora del 200% en tráfico orgánico"
    ],
    process: [
      "Auditoría completa de presencia digital actual",
      "Definición de buyer personas y estrategia de contenido",
      "Implementación de campañas y automatizaciones",
      "Monitoreo continuo y optimización de resultados",
      "Reportes mensuales con insights y recomendaciones"
    ],
    faq: [
      {
        question: "¿Cuánto tiempo toma ver resultados?",
        answer: "En publicidad pagada, los primeros resultados se ven en 1-2 semanas. Para SEO y marketing orgánico, resultados significativos aparecen entre 3-6 meses."
      },
      {
        question: "¿Trabajan con presupuestos pequeños?",
        answer: "Sí, adaptamos nuestras estrategias a diferentes presupuestos. Empezamos con campañas focalizadas y escalamos según los resultados."
      }
    ]
  },
  {
    id: 3,
    title: "Diseño UI/UX",
    slug: "diseno-ui-ux",
    icon: "diseño",
    description: "Interfaces intuitivas y experiencias de usuario que convierten visitantes en clientes satisfechos",
    longDescription: "Diseñamos experiencias digitales centradas en el usuario que combinan estética moderna con funcionalidad intuitiva. Nuestro proceso de diseño se basa en investigación de usuarios, testing continuo y mejores prácticas internacionales para crear productos digitales que realmente funcionan.",
    features: [
      "Investigación de usuarios y análisis de comportamiento",
      "Wireframing y prototipado interactivo avanzado",
      "Diseño de interfaz moderna y accesible",
      "Testing de usabilidad con usuarios reales",
      "Sistemas de diseño escalables y consistentes",
      "Optimización continua basada en datos de uso"
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "Principle", "InVision", "Hotjar"],
    price: "Desde $600",
    popular: false,
    category: "design",
    benefits: [
      "Aumento del 65% en tiempo de permanencia",
      "Reducción del 45% en tasa de rebote",
      "Mejora del 85% en satisfacción del usuario",
      "Incremento del 30% en conversiones"
    ],
    process: [
      "Research y análisis de usuarios objetivo",
      "Arquitectura de información y flujos de usuario",
      "Diseño de wireframes y prototipos",
      "Diseño visual y sistema de componentes",
      "Testing de usabilidad y refinamiento"
    ],
    faq: [
      {
        question: "¿Incluyen testing con usuarios reales?",
        answer: "Sí, realizamos sesiones de testing de usabilidad con usuarios de tu público objetivo para validar y mejorar el diseño."
      },
      {
        question: "¿El diseño será único para mi empresa?",
        answer: "Completamente. Cada diseño es creado desde cero, adaptado a tu marca, industria y objetivos específicos."
      }
    ]
  },
  {
    id: 4,
    title: "Consultoría Tecnológica",
    slug: "consultoria-tecnologica",
    icon: "consultoria",
    description: "Asesoría estratégica en tecnología para optimizar procesos y acelerar el crecimiento empresarial",
    longDescription: "Ayudamos a empresas costarricenses a navegar la transformación digital con estrategias tecnológicas personalizadas. Nuestros consultores expertos analizan tu infraestructura actual, identifican oportunidades de mejora y diseñan roadmaps tecnológicos que impulsan la eficiencia y competitividad.",
    features: [
      "Auditoría completa de infraestructura tecnológica actual",
      "Roadmap de transformación digital personalizado",
      "Selección de tecnologías óptimas para tu industria",
      "Capacitación de equipos en nuevas herramientas",
      "Implementación de mejores prácticas de seguridad",
      "Seguimiento y optimización continua de procesos"
    ],
    technologies: ["Cloud Computing", "CRM Systems", "ERP Solutions", "Business Intelligence", "Cybersecurity Tools"],
    price: "Desde $1,500",
    popular: false,
    category: "consulting",
    benefits: [
      "Reducción promedio del 40% en costos operativos",
      "Aumento del 60% en productividad del equipo",
      "Mejora del 75% en seguridad de datos",
      "ROI promedio de 250% en primer año"
    ],
    process: [
      "Diagnóstico integral de situación tecnológica actual",
      "Análisis de necesidades y objetivos empresariales",
      "Diseño de estrategia y roadmap de implementación",
      "Acompañamiento en implementación de soluciones",
      "Medición de resultados y optimización continua"
    ],
    faq: [
      {
        question: "¿Trabajan con empresas de todos los tamaños?",
        answer: "Sí, desde startups hasta empresas establecidas. Adaptamos nuestro enfoque según el tamaño y madurez tecnológica de cada organización."
      },
      {
        question: "¿Incluyen implementación o solo consultoría?",
        answer: "Ofrecemos ambos servicios. Podemos limitarnos a la consultoría estratégica o acompañar todo el proceso de implementación."
      }
    ]
  },
  {
    id: 5,
    title: "E-commerce",
    slug: "ecommerce",
    icon: "ecommerce",
    description: "Tiendas online completas que convierten visitantes en ventas con gestión administrativa integrada",
    longDescription: "Desarrollamos plataformas de e-commerce robustas y escalables que maximizan las ventas online. Desde pequeñas tiendas hasta marketplaces complejos, creamos soluciones que integran catálogo, pagos, inventario y logística en una experiencia de compra fluida y segura.",
    features: [
      "Catálogo de productos con búsqueda y filtros avanzados",
      "Carrito de compras optimizado para conversión",
      "Integración con múltiples pasarelas de pago locales",
      "Panel administrativo completo para gestión de inventario",
      "Sistema de gestión de pedidos y logística",
      "Reportes detallados de ventas y analytics de comportamiento"
    ],
    technologies: ["WooCommerce", "Shopify Plus", "Magento", "Custom Solutions", "Payment Gateways"],
    price: "Desde $1,200",
    popular: true,
    category: "ecommerce",
    benefits: [
      "Aumento promedio del 120% en ventas online",
      "Reducción del 35% en abandono de carrito",
      "Mejora del 50% en gestión de inventario",
      "Crecimiento del 80% en clientes recurrentes"
    ],
    process: [
      "Análisis de productos y estrategia de ventas",
      "Diseño de experiencia de compra optimizada",
      "Desarrollo e integración de sistemas de pago",
      "Testing de flujos de compra y optimización",
      "Lanzamiento y capacitación en gestión de tienda"
    ],
    faq: [
      {
        question: "¿Incluyen integración con pasarelas de pago?",
        answer: "Sí, integramos con las principales pasarelas de Costa Rica como BAC, BCR, Sinpe Móvil y pasarelas internacionales como PayPal y Stripe."
      },
      {
        question: "¿El sistema maneja inventario automáticamente?",
        answer: "Completamente. El sistema actualiza inventario en tiempo real, gestiona stock mínimo y puede integrarse con sistemas de gestión empresarial."
      }
    ]
  },
  {
    id: 6,
    title: "Hosting y Dominio",
    slug: "hosting-dominio",
    icon: "hosting",
    description: "Servicios de hosting profesional y gestión de dominios con soporte técnico especializado 24/7",
    longDescription: "Proporcionamos infraestructura web confiable y segura para mantener tu presencia digital siempre disponible. Nuestros servicios de hosting incluyen servidores optimizados, copias de seguridad automáticas y soporte técnico especializado para garantizar el máximo rendimiento de tu sitio web.",
    features: [
      "Hosting SSD de alta velocidad con 99.9% uptime garantizado",
      "Certificados SSL gratuitos para máxima seguridad",
      "Copias de seguridad automáticas diarias",
      "CDN global para carga rápida en cualquier ubicación",
      "Panel de control intuitivo para gestión fácil",
      "Soporte técnico especializado 24/7 en español"
    ],
    technologies: ["SSD Storage", "CloudFlare CDN", "cPanel", "SSL Certificates", "Automated Backups"],
    price: "Desde $15/mes",
    popular: false,
    category: "hosting",
    benefits: [
      "99.9% de tiempo de actividad garantizado",
      "Velocidad de carga 3x más rápida",
      "Seguridad de nivel empresarial",
      "Soporte en español las 24 horas"
    ],
    process: [
      "Análisis de necesidades de hosting y tráfico",
      "Configuración de servidor optimizado",
      "Migración segura de sitio existente (si aplica)",
      "Configuración de seguridad y backups",
      "Monitoreo continuo y soporte ongoing"
    ],
    faq: [
      {
        question: "¿Incluyen migración de sitio existente?",
        answer: "Sí, ofrecemos migración gratuita de tu sitio web actual a nuestros servidores, asegurando cero tiempo de inactividad."
      },
      {
        question: "¿Qué pasa si mi sitio recibe mucho tráfico?",
        answer: "Nuestros planes son escalables. Monitoreamos el uso y podemos upgradearte automáticamente para manejar picos de tráfico."
      }
    ]
  }
];