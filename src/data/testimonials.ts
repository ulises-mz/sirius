// src/data/testimonials.ts

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  rating: number;
  result?: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "El sitio web que desarrollaron superó nuestras expectativas. El sistema de agendamiento automatizado nos ahorró 15 horas semanales y duplicó nuestras conversiones en los primeros 2 meses.",
    name: "Rasheed Samuels",
    title: "Coach de Vida y Negocios",
    company: "Life Transformation",
    rating: 5,
    result: "+120% conversiones",
  },
  {
    quote:
      "La plataforma web con SEO local nos posicionó en las primeras búsquedas de Google. Aumentamos un 85% nuestra cartera de clientes corporativos en San José. El ROI fue excepcional.",
    name: "Carolina Pérez",
    title: "CEO",
    company: "RAYCA Contadores",
    rating: 5,
    result: "+85% clientes nuevos",
  },
  {
    quote:
      "El sistema integrado de reservas, e-commerce y dashboard administrativo transformó completamente nuestra operación. Redujimos errores operativos en un 90% y aumentamos ventas online 3x.",
    name: "Osmar Alvarado",
    title: "Director General",
    company: "Lazer Zone Canada",
    rating: 5,
    result: "3x ventas online",
  },
  {
    quote:
      "La tienda WooCommerce que desarrollaron es impecable. Sistema de pagos integrado, gestión de inventario automática y diseño que genera confianza. Nuestras ventas mensuales crecieron 140%.",
    name: "Alejandro Mora",
    title: "Fundador",
    company: "Karticos CBD",
    rating: 5,
    result: "+140% ventas mensuales",
  },
  {
    quote:
      "El bot de WhatsApp con IA ha sido un cambio radical. Automatizó el 80% de nuestras reservas y consultas. Nuestros clientes reciben atención 24/7 y nosotros nos enfocamos en el servicio.",
    name: "Michael Bolaños",
    title: "Propietario",
    company: "Mich Barber Studio",
    rating: 5,
    result: "80% automatización",
  },
  {
    quote:
      "El sistema de análisis con IA redujo nuestro tiempo de procesamiento de datos de 5 días a 20 minutos. Tomamos decisiones más rápidas y precisas. Invaluable para nuestro crecimiento.",
    name: "Ana Rodríguez",
    title: "Directora de Operaciones",
    company: "InsightFlow Analytics",
    rating: 5,
    result: "98% tiempo ahorrado",
  },
];
