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
    description: "Sitios modernos y escalables con tecnologías de vanguardia.",
    longDescription: "Creamos sitios web modernos, rápidos y escalables que impulsan tu presencia digital. Desde sitios corporativos hasta plataformas e-commerce complejas, desarrollamos soluciones web que combinan diseño atractivo con rendimiento técnico excepcional. Utilizamos tecnologías de vanguardia como Next.js, React y TypeScript para garantizar que tu sitio sea rápido, seguro y fácil de mantener. Cada proyecto web que desarrollamos está optimizado para SEO desde el código, con estructura semántica, tiempos de carga ultrarrápidos y adaptabilidad total a dispositivos móviles. Implementamos sistemas de gestión de contenido (CMS) cuando necesitas autonomía para actualizar tu sitio, e integramos pasarelas de pago, CRMs y otras herramientas críticas para tu negocio. Además del desarrollo inicial, ofrecemos mantenimiento continuo, actualizaciones de seguridad y mejoras evolutivas para que tu sitio web crezca junto con tu negocio. Documentamos todo el proceso y te capacitamos para que puedas gestionar aspectos básicos de tu plataforma con confianza.",
    features: [
      "Sitios web corporativos y landings de alta conversión.",
      "Plataformas e-commerce con pasarelas de pago integradas.",
      "Blogs y sitios de contenido optimizados para SEO.",
      "Progressive Web Apps (PWA) para experiencia móvil nativa.",
      "Integraciones con APIs, CRMs y herramientas de marketing."
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "WordPress"],
    price: "Desde $800",
    popular: true,
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
    title: "Desarrollo Aplicativo",
    slug: "desarrollo-aplicativo",
    icon: "app",
    description: "Apps personalizadas que resuelven problemas específicos de tu negocio.",
    longDescription: "Desarrollamos aplicaciones web y móviles personalizadas que resuelven problemas específicos de tu negocio. Desde sistemas internos de gestión hasta aplicaciones móviles multiplataforma, creamos soluciones que automatizan procesos, mejoran la productividad y ofrecen experiencias de usuario excepcionales. Trabajamos con tecnologías modernas que permiten compartir código entre web y móvil, reduciendo costos y tiempos de desarrollo. Nuestro proceso incluye análisis de requisitos, diseño de arquitectura, desarrollo iterativo y pruebas exhaustivas. Creamos dashboards administrativos, aplicaciones de gestión de clientes, sistemas de reservas, plataformas de colaboración y cualquier herramienta digital que tu equipo necesite. Todas nuestras aplicaciones están diseñadas pensando en escalabilidad, seguridad y facilidad de uso. Ya sea que necesites una app nativa para iOS/Android o una aplicación web progresiva, te asesoramos sobre la mejor estrategia técnica según tu presupuesto, audiencia y objetivos de negocio. Incluimos documentación técnica completa y capacitación para tu equipo.",
    features: [
      "Aplicaciones móviles multiplataforma (iOS y Android).",
      "Sistemas de gestión interna y dashboards administrativos.",
      "Aplicaciones SaaS con modelos de suscripción.",
      "Plataformas de colaboración y productividad.",
      "Integraciones con servicios de terceros y APIs empresariales."
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Node.js"],
    price: "Cotizar",
    popular: false,
    category: "app",
    benefits: [
      "Presencia directa en el dispositivo de tus usuarios",
      "Experiencia de usuario fluida y nativa",
      "Notificaciones push para mayor engagement",
      "Funcionalidad offline cuando es requerido"
    ],
    process: [
      "Definición de requerimientos y alcance",
      "Diseño de UX/UI y prototipado",
      "Desarrollo de MVP o aplicación completa",
      "Testing QA en dispositivos reales",
      "Publicación en tiendas y lanzamiento"
    ],
    faq: [
      {
        question: "¿Desarrollan para iOS y Android?",
        answer: "Sí, utilizamos tecnologías híbridas y nativas para asegurar que tu app funcione perfectamente en ambos ecosistemas."
      },
      {
        question: "¿Ustedes se encargan de subir la app a las tiendas?",
        answer: "Sí, gestionamos todo el proceso de publicación en Apple App Store y Google Play Store."
      }
    ]
  },
  {
    id: 3,
    title: "AI y Automatización",
    slug: "soluciones-ia",
    icon: "ia",
    description: "Transforma tu operación con IA y flujos automáticos inteligentes.",
    longDescription: "Implementamos soluciones de inteligencia artificial y automatización que transforman la forma en que opera tu negocio. Desde chatbots inteligentes hasta sistemas de análisis predictivo, utilizamos IA para automatizar tareas repetitivas, mejorar la toma de decisiones y ofrecer experiencias personalizadas a tus clientes. Integramos modelos de lenguaje avanzados (LLMs) en tus flujos de trabajo para procesar información, generar contenido y asistir a tus equipos. En automatización, diseñamos flujos que conectan tus herramientas existentes (CRM, email marketing, plataformas de ventas, sistemas internos) para eliminar trabajo manual y reducir errores. Automatizamos procesos de captación de leads, seguimiento de clientes, generación de reportes, procesamiento de datos y cualquier tarea que consuma tiempo valioso de tu equipo. Todo se documenta y configura para que puedas ajustarlo según evoluciona tu negocio. Nuestras soluciones de IA incluyen asistentes virtuales personalizados, análisis de sentimientos en redes sociales, recomendaciones inteligentes de productos, clasificación automática de documentos y más. Te ayudamos a identificar las oportunidades de IA con mayor ROI para tu negocio específico.",
    features: [
      "Chatbots y asistentes virtuales con IA conversacional.",
      "Automatización de flujos entre herramientas (Zapier, Make, n8n).",
      "Análisis predictivo y procesamiento de datos con ML.",
      "Generación de contenido automatizada con LLMs.",
      "Sistemas de recomendación y personalización inteligente."
    ],
    technologies: ["OpenAI", "Python", "TensorFlow", "LangChain", "Pinecone"],
    price: "Cotizar",
    popular: true,
    category: "ai",
    benefits: [
      "Automatización de tareas repetitivas",
      "Atención al cliente inmediata 24/7",
      "Toma de decisiones basada en datos predictivos",
      "Reducción de costos operativos"
    ],
    process: [
      "Análisis de procesos automatizables",
      "Selección y entrenamiento de modelos de IA",
      "Integración con sistemas existentes",
      "Testing y ajuste de respuestas/precisión",
      "Despliegue y monitoreo continuo"
    ],
    faq: [
      {
        question: "¿Qué tipo de procesos se pueden automatizar?",
        answer: "Desde atención al cliente y respuestas de correo, hasta análisis de datos complejos y generación de reportes."
      },
      {
        question: "¿Es segura la información con IA?",
        answer: "Sí, implementamos protocolos de seguridad estrictos y modelos privados cuando es necesario para proteger tus datos sensibles."
      }
    ]
  },
  {
    id: 4,
    title: "Hosting y Dominio",
    slug: "hosting-dominio",
    icon: "hosting",
    description: "Infraestructura rápida y segura para tu presencia digital.",
    longDescription: "Ofrecemos servicios completos de hosting y gestión de dominios para asegurar que tu presencia digital sea rápida, segura y siempre disponible. Trabajamos con infraestructura cloud de última generación (AWS, Google Cloud, Vercel, Netlify) para garantizar tiempos de carga mínimos, copias de seguridad automáticas y escalabilidad instantánea cuando tu tráfico crece. No más preocupaciones técnicas: nosotros nos encargamos de todo. Incluimos registro y gestión de dominios, configuración de DNS, certificados SSL para conexiones seguras, cuentas de email profesionales asociadas a tu dominio y monitoreo continuo de disponibilidad. Si tu sitio experimenta algún problema, recibimos alertas automáticas y actuamos de inmediato. También manejamos migraciones desde otros proveedores sin tiempo de inactividad. Nuestros planes de hosting están optimizados según el tipo de proyecto: desde sitios estáticos ultrarrápidos hasta aplicaciones complejas con bases de datos. Te asesoramos sobre la mejor opción según tu presupuesto y necesidades técnicas, y te acompañamos con soporte técnico especializado en español.",
    features: [
      "Hosting cloud de alto rendimiento con CDN global.",
      "Registro y gestión completa de dominios (.com, .mx, .io, etc.).",
      "Certificados SSL y configuración de seguridad avanzada.",
      "Cuentas de correo profesional con tu dominio.",
      "Backups automáticos diarios y restauración rápida."
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
  },
  {
    id: 5,
    title: "Consultorías de TI",
    slug: "consultorias-ti",
    icon: "ecommerce",
    description: "Estrategia tecnológica y liderazgo técnico para tu empresa.",
    longDescription: "Brindamos consultoría tecnológica estratégica para empresas que buscan optimizar su infraestructura digital, mejorar procesos y tomar decisiones tecnológicas informadas. Evaluamos tu stack tecnológico actual, identificamos cuellos de botella y oportunidades de mejora, y diseñamos roadmaps claros para modernizar tus sistemas. Ya sea que necesites migrar a la nube, implementar nuevas herramientas o auditar tu seguridad, te acompañamos con expertise técnico sólido. Nuestras consultorías incluyen auditorías de código, revisión de arquitectura de aplicaciones, planificación de escalabilidad, evaluación de ciberseguridad, y selección de tecnologías para nuevos proyectos. Trabajamos con tu equipo interno o como CTO externo para empresas que no cuentan con liderazgo técnico permanente. Priorizamos soluciones pragmáticas que maximicen el retorno de inversión. También ofrecemos capacitación técnica para tus equipos, documentación de procesos y mejores prácticas, y soporte continuo en la implementación de las recomendaciones. Entregamos reportes ejecutivos claros con hallazgos, riesgos priorizados y planes de acción concretos.",
    features: [
      "Auditorías de infraestructura y arquitectura de software.",
      "Planificación de migración a cloud y modernización de sistemas.",
      "Evaluación de ciberseguridad y compliance.",
      "Selección de tecnologías y stack para nuevos proyectos.",
      "Servicios de CTO externo y liderazgo técnico temporal."
    ],
    technologies: ["Tech Audit", "Architecture Review", "Security Analysis", "Cloud Strategy", "CTO Services"],
    price: "Cotizar",
    popular: false,
    category: "consulting",
    benefits: [
      "Optimización de costos tecnológicos",
      "Reducción de deuda técnica",
      "Mejora en seguridad y rendimiento",
      "Toma de decisiones informada"
    ],
    process: [
      "Reunión de descubrimiento y análisis inicial",
      "Auditoría profunda de sistemas y procesos",
      "Elaboración de reporte y roadmap estratégico",
      "Presentación de hallazgos a stakeholders",
      "Acompañamiento en la implementación"
    ],
    faq: [
      {
        question: "¿Hacen auditorías de seguridad?",
        answer: "Sí, realizamos análisis de vulnerabilidades y revisión de prácticas de seguridad en tu infraestructura y código."
      },
      {
        question: "¿Pueden actuar como CTO fraccional?",
        answer: "Exactamente. Ofrecemos servicios de dirección técnica por horas o proyecto para empresas que no requieren un CTO a tiempo completo."
      }
    ]
  }
];