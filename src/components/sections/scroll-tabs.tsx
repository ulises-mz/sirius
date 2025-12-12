"use client";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Service {
  id: string;
  title: string;
  description: ReactNode;
  image: string;
  tabDescription: string;
}

const SERVICES: Service[] = [
  {
    id: "web-dev",
    title: "Desarrollo Web",
    tabDescription: "Sitios modernos y escalables con tecnologías de vanguardia.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop&q=80",
    description: (
      <>
        <p className="mb-4 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
          Creamos sitios web modernos, rápidos y escalables que impulsan tu presencia digital. Desde sitios corporativos hasta plataformas e-commerce complejas, desarrollamos soluciones web que combinan diseño atractivo con rendimiento técnico excepcional. Utilizamos tecnologías de vanguardia como Next.js, React y TypeScript para garantizar que tu sitio sea rápido, seguro y fácil de mantener.
        </p>
        <p className="mb-4 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
          Cada proyecto web que desarrollamos está optimizado para SEO desde el código, con estructura semántica, tiempos de carga ultrarrápidos y adaptabilidad total a dispositivos móviles. Implementamos sistemas de gestión de contenido (CMS) cuando necesitas autonomía para actualizar tu sitio, e integramos pasarelas de pago, CRMs y otras herramientas críticas para tu negocio.
        </p>
        <p className="mb-4 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
          Además del desarrollo inicial, ofrecemos mantenimiento continuo, actualizaciones de seguridad y mejoras evolutivas para que tu sitio web crezca junto con tu negocio. Documentamos todo el proceso y te capacitamos para que puedas gestionar aspectos básicos de tu plataforma con confianza.
        </p>
        <ul className="mt-6 list-disc space-y-2 pl-5 text-base text-neutral-700 dark:text-neutral-300">
          <li>Sitios web corporativos y landings de alta conversión.</li>
          <li>Plataformas e-commerce con pasarelas de pago integradas.</li>
          <li>Blogs y sitios de contenido optimizados para SEO.</li>
          <li>Progressive Web Apps (PWA) para experiencia móvil nativa.</li>
          <li>Integraciones con APIs, CRMs y herramientas de marketing.</li>
        </ul>
      </>
    ),
  },
  {
    id: "app-dev",
    title: "Desarrollo Aplicativo",
    tabDescription: "Apps personalizadas que resuelven problemas específicos de tu negocio.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop&q=80",
    description: (
      <>
        <p className="mb-4 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
          Desarrollamos aplicaciones web y móviles personalizadas que resuelven problemas específicos de tu negocio. Desde sistemas internos de gestión hasta aplicaciones móviles multiplataforma, creamos soluciones que automatizan procesos, mejoran la productividad y ofrecen experiencias de usuario excepcionales. Trabajamos con tecnologías modernas que permiten compartir código entre web y móvil, reduciendo costos y tiempos de desarrollo.
        </p>
        <p className="mb-4 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
          Nuestro proceso incluye análisis de requisitos, diseño de arquitectura, desarrollo iterativo y pruebas exhaustivas. Creamos dashboards administrativos, aplicaciones de gestión de clientes, sistemas de reservas, plataformas de colaboración y cualquier herramienta digital que tu equipo necesite. Todas nuestras aplicaciones están diseñadas pensando en escalabilidad, seguridad y facilidad de uso.
        </p>
        <p className="mb-4 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
          Ya sea que necesites una app nativa para iOS/Android o una aplicación web progresiva, te asesoramos sobre la mejor estrategia técnica según tu presupuesto, audiencia y objetivos de negocio. Incluimos documentación técnica completa y capacitación para tu equipo.
        </p>
        <ul className="mt-6 list-disc space-y-2 pl-5 text-base text-neutral-700 dark:text-neutral-300">
          <li>Aplicaciones móviles multiplataforma (iOS y Android).</li>
          <li>Sistemas de gestión interna y dashboards administrativos.</li>
          <li>Aplicaciones SaaS con modelos de suscripción.</li>
          <li>Plataformas de colaboración y productividad.</li>
          <li>Integraciones con servicios de terceros y APIs empresariales.</li>
        </ul>
      </>
    ),
  },
  {
    id: "ai-automation",
    title: "AI y Automatización",
    tabDescription: "Transforma tu operación con IA y flujos automáticos inteligentes.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80",
    description: (
      <>
        <p className="mb-4 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
          Implementamos soluciones de inteligencia artificial y automatización que transforman la forma en que opera tu negocio. Desde chatbots inteligentes hasta sistemas de análisis predictivo, utilizamos IA para automatizar tareas repetitivas, mejorar la toma de decisiones y ofrecer experiencias personalizadas a tus clientes. Integramos modelos de lenguaje avanzados (LLMs) en tus flujos de trabajo para procesar información, generar contenido y asistir a tus equipos.
        </p>
        <p className="mb-4 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
          En automatización, diseñamos flujos que conectan tus herramientas existentes (CRM, email marketing, plataformas de ventas, sistemas internos) para eliminar trabajo manual y reducir errores. Automatizamos procesos de captación de leads, seguimiento de clientes, generación de reportes, procesamiento de datos y cualquier tarea que consuma tiempo valioso de tu equipo. Todo se documenta y configura para que puedas ajustarlo según evoluciona tu negocio.
        </p>
        <p className="mb-4 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
          Nuestras soluciones de IA incluyen asistentes virtuales personalizados, análisis de sentimientos en redes sociales, recomendaciones inteligentes de productos, clasificación automática de documentos y más. Te ayudamos a identificar las oportunidades de IA con mayor ROI para tu negocio específico.
        </p>
        <ul className="mt-6 list-disc space-y-2 pl-5 text-base text-neutral-700 dark:text-neutral-300">
          <li>Chatbots y asistentes virtuales con IA conversacional.</li>
          <li>Automatización de flujos entre herramientas (Zapier, Make, n8n).</li>
          <li>Análisis predictivo y procesamiento de datos con ML.</li>
          <li>Generación de contenido automatizada con LLMs.</li>
          <li>Sistemas de recomendación y personalización inteligente.</li>
        </ul>
      </>
    ),
  },
  {
    id: "hosting-domain",
    title: "Hosting y Dominio",
    tabDescription: "Infraestructura rápida y segura para tu presencia digital.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
    description: (
      <>
        <p className="mb-4 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
          Ofrecemos servicios completos de hosting y gestión de dominios para asegurar que tu presencia digital sea rápida, segura y siempre disponible. Trabajamos con infraestructura cloud de última generación (AWS, Google Cloud, Vercel, Netlify) para garantizar tiempos de carga mínimos, copias de seguridad automáticas y escalabilidad instantánea cuando tu tráfico crece. No más preocupaciones técnicas: nosotros nos encargamos de todo.
        </p>
        <p className="mb-4 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
          Incluimos registro y gestión de dominios, configuración de DNS, certificados SSL para conexiones seguras, cuentas de email profesionales asociadas a tu dominio y monitoreo continuo de disponibilidad. Si tu sitio experimenta algún problema, recibimos alertas automáticas y actuamos de inmediato. También manejamos migraciones desde otros proveedores sin tiempo de inactividad.
        </p>
        <p className="mb-4 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
          Nuestros planes de hosting están optimizados según el tipo de proyecto: desde sitios estáticos ultrarrápidos hasta aplicaciones complejas con bases de datos. Te asesoramos sobre la mejor opción según tu presupuesto y necesidades técnicas, y te acompañamos con soporte técnico especializado en español.
        </p>
        <ul className="mt-6 list-disc space-y-2 pl-5 text-base text-neutral-700 dark:text-neutral-300">
          <li>Hosting cloud de alto rendimiento con CDN global.</li>
          <li>Registro y gestión completa de dominios (.com, .mx, .io, etc.).</li>
          <li>Certificados SSL y configuración de seguridad avanzada.</li>
          <li>Cuentas de correo profesional con tu dominio.</li>
          <li>Backups automáticos diarios y restauración rápida.</li>
        </ul>
      </>
    ),
  },
  {
    id: "it-consulting",
    title: "Consultorías de TI",
    tabDescription: "Estrategia tecnológica y liderazgo técnico para tu empresa.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80",
    description: (
      <>
        <p className="mb-4 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
          Brindamos consultoría tecnológica estratégica para empresas que buscan optimizar su infraestructura digital, mejorar procesos y tomar decisiones tecnológicas informadas. Evaluamos tu stack tecnológico actual, identificamos cuellos de botella y oportunidades de mejora, y diseñamos roadmaps claros para modernizar tus sistemas. Ya sea que necesites migrar a la nube, implementar nuevas herramientas o auditar tu seguridad, te acompañamos con expertise técnico sólido.
        </p>
        <p className="mb-4 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
          Nuestras consultorías incluyen auditorías de código, revisión de arquitectura de aplicaciones, planificación de escalabilidad, evaluación de ciberseguridad, y selección de tecnologías para nuevos proyectos. Trabajamos con tu equipo interno o como CTO externo para empresas que no cuentan con liderazgo técnico permanente. Priorizamos soluciones pragmáticas que maximicen el retorno de inversión.
        </p>
        <p className="mb-4 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
          También ofrecemos capacitación técnica para tus equipos, documentación de procesos y mejores prácticas, y soporte continuo en la implementación de las recomendaciones. Entregamos reportes ejecutivos claros con hallazgos, riesgos priorizados y planes de acción concretos.
        </p>
        <ul className="mt-6 list-disc space-y-2 pl-5 text-base text-neutral-700 dark:text-neutral-300">
          <li>Auditorías de infraestructura y arquitectura de software.</li>
          <li>Planificación de migración a cloud y modernización de sistemas.</li>
          <li>Evaluación de ciberseguridad y compliance.</li>
          <li>Selección de tecnologías y stack para nuevos proyectos.</li>
          <li>Servicios de CTO externo y liderazgo técnico temporal.</li>
        </ul>
      </>
    ),
  },
];

export default function ScrollSyncLayout() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const lastScrollY = useRef(0);
  const updateTimeout = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    const sections = sectionRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Detectar dirección del scroll
        const currentScrollY = window.scrollY;
        const scrollingDown = currentScrollY > lastScrollY.current;
        lastScrollY.current = currentScrollY;

        // Cancelar actualización previa si existe
        if (updateTimeout.current) {
          clearTimeout(updateTimeout.current);
        }

        // Encontrar todas las secciones visibles
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => ({
            index: sections.indexOf(entry.target as HTMLDivElement),
            ratio: entry.intersectionRatio,
          }))
          .filter((item) => item.index !== -1)
          .sort((a, b) => b.ratio - a.ratio);

        if (visibleSections.length === 0) return;

        // Lógica de decisión: priorizar según dirección de scroll
        let targetIndex = activeRef.current;

        if (visibleSections.length === 1) {
          targetIndex = visibleSections[0].index;
        } else {
          // Si hay múltiples secciones visibles, elegir según dirección
          const topVisible = visibleSections[0];

          if (scrollingDown) {
            // Scrolling hacia abajo: activar la siguiente sección solo si tiene suficiente visibilidad
            const nextSection = visibleSections.find(s => s.index > activeRef.current);
            if (nextSection && nextSection.ratio > 0.4) {
              targetIndex = nextSection.index;
            } else {
              targetIndex = topVisible.index;
            }
          } else {
            // Scrolling hacia arriba: activar la sección anterior solo si tiene suficiente visibilidad
            const prevSection = visibleSections.find(s => s.index < activeRef.current);
            if (prevSection && prevSection.ratio > 0.4) {
              targetIndex = prevSection.index;
            } else {
              targetIndex = topVisible.index;
            }
          }
        }

        // Debounce: esperar un momento antes de actualizar
        updateTimeout.current = setTimeout(() => {
          if (targetIndex !== activeRef.current) {
            activeRef.current = targetIndex;
            setActive(targetIndex);
          }
        }, 100);
      },
      {
        root: null,
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        rootMargin: "-15% 0px -15% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      if (updateTimeout.current) {
        clearTimeout(updateTimeout.current);
      }
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  const scrollToIndex = (i: number) => {
    const el = sectionRefs.current[i];
    if (!el) return;

    activeRef.current = i;
    setActive(i);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="-mt-64 mx-auto w-[95%] lg:w-[80%] px-4 pb-16 pt-80 sm:pb-12 sm:pt-40 sm:-mt-32" style={{ position: 'relative', zIndex: 10 }}>
      {/* Título de la sección */}
      <div className="mb-16 max-w-2xl rounded-t-3xl bg-gradient-to-br from-cyan-50/30 via-transparent to-transparent px-8 pb-8 pt-12 dark:from-cyan-900/10 sm:mb-10 sm:px-4 sm:pb-6 sm:pt-8">
        <h2 className="mb-6 text-4xl md:text-5xl font-bold leading-tight tracking-tight text-neutral-900 dark:text-white sm:text-2xl sm:mb-4">
          Soluciones que
          <br />
          <span className="text-cyan-600 dark:text-cyan-400 font-thin italic">
            transforman negocios
          </span>
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-base">
          Soluciones tecnológicas completas diseñadas para hacer crecer tu presencia digital
          y optimizar cada aspecto de tu operación.
        </p>
      </div>

      {/* Layout de tabs y contenido */}
      <div className="flex gap-8 lg:flex-row">
        {/* Columna izquierda: tabs - Solo visible en desktop */}
        <aside className="sticky top-24 h-fit w-72 hidden lg:block">
          <ul className="space-y-0">
            {SERVICES.map((s, i) => (
              <li key={s.id} className="relative">
                <button
                  onClick={() => scrollToIndex(i)}
                  className={`group relative w-full rounded-lg px-4 py-4 text-left transition-all duration-500 ease-out ${active === i
                    ? ""
                    : "hover:bg-neutral-50 dark:hover:bg-neutral-900/50"
                    }`}
                >
                  <div className="flex flex-col gap-2">
                    <span
                      className={`font-semibold transition-all duration-500 ease-out ${active === i
                        ? "text-xl text-neutral-900 dark:text-white"
                        : "text-lg text-neutral-400 dark:text-neutral-600"
                        }`}
                    >
                      {s.title}
                    </span>
                    <div
                      className={`grid transition-all duration-700 ease-in-out ${active === i
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                        }`}
                    >
                      <div className="overflow-hidden">
                        <div className="flex flex-col gap-2 pt-1">
                          <span className="text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                            {s.tabDescription}
                          </span>
                          <span className="inline-flex items-center gap-1 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                            Ver más
                            <svg
                              className="h-3 w-3"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
                {i < SERVICES.length - 1 && (
                  <div className="relative h-px mx-4 my-2">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent dark:via-cyan-400/20" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent dark:via-cyan-300/15 blur-sm" />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </aside>

        {/* Columna derecha: contenido apilado */}
        <div className="flex-1 space-y-32 lg:space-y-32 sm:space-y-8">
          {SERVICES.map((s, i) => (
            <div
              key={s.id}
              ref={(el) => {
                sectionRefs.current[i] = el;
              }}
              className="group scroll-mt-32 lg:scroll-mt-32 sm:scroll-mt-20"
            >
              <div className="overflow-hidden rounded-3xl lg:rounded-3xl sm:rounded-2xl bg-neutral-100 dark:bg-neutral-900 transition-all duration-300 hover:translate-y-[1px]
            shadow-[12px_12px_28px_rgba(0,0,0,0.08),_-12px_-12px_28px_#ffffff]
            hover:shadow-[8px_8px_20px_rgba(0,0,0,0.08),_-8px_-8px_20px_#ffffff]
            dark:shadow-[12px_12px_28px_rgba(0,0,0,0.6),_-12px_-12px_28px_rgba(255,255,255,0.04)]
            dark:hover:shadow-[8px_8px_20px_rgba(0,0,0,0.6),_-8px_-8px_20px_rgba(255,255,255,0.04)]
            relative before:pointer-events-none before:absolute before:inset-0 before:rounded-3xl before:shadow-[inset_1px_1px_0_rgba(255,255,255,0.6)] dark:before:shadow-[inset_1px_1px_0_rgba(255,255,255,0.05)]">
                {/* Imagen con overlay gradient */}
                <div className="relative overflow-hidden aspect-[16/9] lg:aspect-[16/9] sm:aspect-[4/3]">
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <Image
                    src={s.image}
                    alt={s.title}
                    width={800}
                    height={450}
                    className="h-full w-full object-cover"
                    priority={i === 0}
                  />
                  {/* Badge flotante */}
                  <div className="absolute bottom-6 left-6 z-20 lg:bottom-6 lg:left-6 sm:bottom-4 sm:left-4">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 lg:px-4 lg:py-2 sm:px-3 sm:py-1.5 text-sm lg:text-sm sm:text-xs font-semibold text-neutral-900 shadow-lg backdrop-blur-sm dark:bg-neutral-900/95 dark:text-white">
                      <svg className="h-4 w-4 lg:h-4 lg:w-4 sm:h-3 sm:w-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {s.title}
                    </span>
                  </div>
                </div>

                {/* Contenido - En móvil solo mostrar título y descripción corta */}
                <div className="rounded-t-3xl lg:rounded-t-3xl sm:rounded-t-2xl bg-neutral-100 p-10 lg:p-10 sm:p-5 dark:bg-neutral-900">
                  <div className="mb-6 lg:mb-6 sm:mb-3 flex items-start justify-between lg:flex-row sm:flex-row">
                    <div className="flex-1">
                      <h2 className="mb-2 lg:mb-2 sm:mb-1.5 text-2xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-xl">
                        {s.title}
                      </h2>
                      <p className="text-base text-neutral-600 dark:text-neutral-400 sm:text-sm">
                        {s.tabDescription}
                      </p>
                    </div>
                    <div className="flex h-12 w-12 lg:h-12 lg:w-12 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-2xl lg:rounded-2xl sm:rounded-xl bg-gradient-to-br from-cyan-50 to-indigo-50 dark:from-cyan-900/20 dark:to-indigo-900/20 lg:ml-4 sm:ml-3">
                      <span className="text-2xl lg:text-2xl sm:text-lg font-bold text-neutral-400 dark:text-neutral-600">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  {/* Contenido completo - Solo visible en desktop */}
                  <div className="space-y-4 hidden lg:block">
                    {s.description}
                  </div>

                  {/* CTA - Solo visible en desktop */}
                  <div className="mt-8 flex items-center gap-4 hidden lg:flex">
                    <button className="group/btn inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-cyan-400 to-sky-500 px-6 py-3 text-base font-medium text-white shadow-lg shadow-cyan-500/20 transition-all hover:shadow-cyan-500/30">
                      Solicitar consulta
                      <svg
                        className="h-4 w-4 transition-transform group-hover/btn:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                    <a href="#testimonials" className="inline-flex items-center gap-2 rounded-xl border border-cyan-400 bg-transparent px-6 py-3 text-base font-medium text-cyan-700 transition-all hover:bg-cyan-50 dark:border-cyan-500 dark:text-cyan-300 dark:hover:bg-cyan-900/20">
                      Ver casos de éxito
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}