
import fs from 'fs';
import path from 'path';

// Hardcoded data from src/data/portfolio.ts
const projects = [
    {
        id: 1,
        slug: "cash-of-grapplers",
        title: "Cash of Grapplers",
        description: "Plataforma oficial de eventos BJJ con streaming y tienda online",
        backgroundImage: "/portfolio/web-cash-of-grapplers.webp",
        technologies: ["Next.js", "Stripe", "AWS", "Tailwind CSS", "PostgreSQL"],
        content: `## Plataforma integral para eventos de Jiu-Jitsu

**Reto:**
Centralizar la gestión de torneos, venta de entradas y streaming en vivo para una audiencia internacional.

**Solución:**
- Desarrollo de plataforma escalable en Next.js
- Integración de pasarela de pagos Stripe para tickets y PPV
- Sistema de streaming de alta disponibilidad
- Gestión de brackets y resultados en tiempo real

**Resultados:**
- Venta de entradas simplificada y segura
- Experiencia de usuario fluida durante transmisiones en vivo`,
        keywords: "bjj, grappling, streaming, eventos deportivos, nextjs",
        category: "Desarrollo"
    },
    {
        id: 2,
        slug: "app-cash-of-grapplers",
        title: "App Cash of Grapplers",
        description: "Experiencia móvil para competidores y fans con seguimiento en vivo",
        backgroundImage: "/portfolio/app-cash-of-grapplers.webp",
        technologies: ["React Native", "Expo", "Firebase", "Real-time DB"],
        content: `## Aplicación móvil complementaria para torneos

**Reto:**
Llevar la emoción del evento al bolsillo de los asistentes y competidores con notificaciones en tiempo real.

**Solución:**
- App nativa para iOS y Android
- Notificaciones push para llamados a pelea
- Visualización de brackets y tiempos en vivo
- Perfiles de atletas y estadísticas

**Resultados:**
- Mayor engagement durante los eventos
- Reducción de tiempos de espera para competidores`,
        keywords: "app movil, react native, deportes, bjj, expo",
        category: "Apps Móviles"
    },
    {
        id: 3,
        slug: "barf-natural-pets",
        title: "Barf Natural Pets",
        description: "E-commerce especializado en alimentación natural cruda para mascotas",
        backgroundImage: "/portfolio/web-barf-natural-pets.webp",
        technologies: ["WordPress", "WooCommerce", "SEO Local", "Analytics"],
        content: `## Tienda online para alimentación natural de mascotas

**Reto:**
Posicionar una marca de nicho (Dieta BARF) y facilitar la compra recurrente de productos frescos.

**Solución:**
- Tienda online optimizada para conversión
- Sistema de suscripción para pedidos recurrentes
- Blog educativo integrado para estrategia SEO
- Optimización de carga rápida para móviles

**Resultados:**
- Posicionamiento líder en búsquedas relacionadas a BARF en CR
- Incremento en la retención de clientes recurrentes`,
        keywords: "barf, mascotas, ecommerce, woocommerce, costa rica",
        category: "Desarrollo"
    },
    {
        id: 4,
        slug: "great-events-cr",
        title: "Great Events CR",
        description: "Sitio corporativo para planificación y gestión de eventos premium",
        backgroundImage: "/portfolio/web-great-events.webp",
        technologies: ["React", "Framer Motion", "EmailJS", "UI/UX Design"],
        content: `## Presencia digital para productora de eventos

**Reto:**
Transmitir la elegancia y magnitud de los eventos corporativos y sociales a través de una experiencia web.

**Solución:**
- Diseño visual de alto impacto con galerías inmersivas
- Animaciones suaves con Framer Motion
- Formularios de cotización detallados
- Portafolio de eventos categorizado

**Resultados:**
- Aumento en la calidad de los leads entrantes
- Presentación de marca alineada con clientes de alto perfil`,
        keywords: "eventos, corporate, react, diseño web, costa rica",
        category: "Desarrollo"
    },
    {
        id: 5,
        slug: "runners-not-runners",
        title: "Runners not Runners",
        description: "Comunidad digital y blog para corredores y entusiastas del fitness",
        backgroundImage: "/portfolio/Coach.webp",
        technologies: ["Next.js", "Sanity CMS", "Tailwind CSS", "Newsletter"],
        content: `## Blog y comunidad para estilo de vida runner

**Reto:**
Crear un espacio digital que conecte con corredores amateurs y profesionales, diferenciándose de los medios tradicionales.

**Solución:**
- CMS headless (Sanity) para gestión ágil de contenido
- Diseño moderno y motivador
- Integración con newsletter para fidelización
- Optimización para lectura en móviles

**Resultados:**
- Crecimiento orgánico de la comunidad
- Alta tasa de suscripción al newsletter`,
        keywords: "running, blog, comunidad, nextjs, fitness",
        category: "Desarrollo"
    },
    {
        id: 6,
        slug: "blindpoint",
        title: "BlindPoint",
        description: "Plataforma tecnológica enfocada en seguridad y accesibilidad digital",
        backgroundImage: "/portfolio/web-blindpoint.webp",
        technologies: ["React", "Node.js", "Cybersecurity", "AI Integration"],
        content: `## Soluciones tecnológicas avanzadas

**Reto:**
Desarrollar una presencia web que refleje innovación, seguridad y solidez técnica.

**Solución:**
- Arquitectura web moderna y segura
- Integración de demostraciones interactivas
- Diseño UI enfocado en claridad y accesibilidad
- Panel de control para gestión de servicios

**Resultados:**
- Validación de autoridad en el sector tecnológico
- Plataforma preparada para escalar servicios digitales`,
        keywords: "tech, seguridad, accesibilidad, software, react",
        category: "Soluciones"
    },
    {
        id: 7,
        slug: "bpcreation",
        title: "BP Creation",
        description: "Tienda online de fotografía artística y productos personalizados",
        backgroundImage: "/portfolio/web-bp-creations.webp",
        technologies: ["Shopify", "Liquid", "Custom CSS", "Instagram Feed"],
        content: `## E-commerce de arte y fotografía

**Reto:**
Vender arte y productos visuales con una experiencia de usuario que respete la estética de las obras.

**Solución:**
- Personalización avanzada de tema Shopify
- Galerías de alta resolución optimizadas
- Proceso de checkout fluido
- Integración visual con redes sociales

**Resultados:**
- Experiencia de compra visualmente atractiva
- Gestión eficiente de inventario y pedidos internacionales`,
        keywords: "fotografia, arte, shopify, ecommerce, diseño",
        category: "Desarrollo"
    }
];

const JSON_PATH = path.join(process.cwd(), 'src/data/cms/projects.json');

async function migrate() {
    console.log('🚀 Starting projects migration...');
    console.log(`Found ${projects.length} projects to migrate.`);

    const data = {
        projects: projects,
        lastUpdated: new Date().toISOString()
    };

    fs.writeFileSync(JSON_PATH, JSON.stringify(data, null, 2));

    console.log('✅ Projects migration complete!');
    console.log(`Data written to ${JSON_PATH}`);
}

migrate();
