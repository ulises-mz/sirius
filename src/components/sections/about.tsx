'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { animate, useInView } from "framer-motion";
import '@/styles/about-section.css';
import { SITE } from '@/lib/constants';

// Helper for animated counter
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-20px" });

  useEffect(() => {
    const node = nodeRef.current;
    if (!node || !isInView) return;

    const controls = animate(0, value, {
      duration: 2.5,
      ease: "easeOut",
      onUpdate(value) {
        node.textContent = Math.round(value) + suffix;
      },
    });

    return () => controls.stop();
  }, [value, suffix, isInView]);

  return <span ref={nodeRef}>0{suffix}</span>;
}

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container w-[95%] lg:w-[80%] mx-auto">
        {/* Header */}
        <div className="about-header">
          <div className="about-badge">
            <svg viewBox="0 0 24 24" fill="currentColor" className="badge-icon">
              <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
            <span className="font-thin tracking-widest uppercase">Nuestra Propuesta</span>
          </div>
          <h2 className="mb-6 text-4xl md:text-5xl font-bold leading-tight tracking-tight text-neutral-900 dark:text-white sm:text-2xl sm:mb-4">
            Tu socio estratégico en <span className="text-cyan-600 dark:text-cyan-400 font-thin italic">transformación digital</span>
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-base">
            En {SITE.name} no solo desarrollamos software, creamos soluciones inteligentes que
            transforman negocios. Combinamos estrategia, diseño UX/UI y tecnología de punta para
            construir productos digitales que generan impacto medible.
          </p>
        </div>

        {/* Features Grid */}
        <div className="about-features-grid">
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="feature-icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="feature-card-title">Enfoque en Resultados</h3>
            <p className="feature-card-desc">
              Proyectos orientados al crecimiento real de tu negocio. Definimos objetivos claros, KPIs medibles y métricas de ROI desde el día uno. Medimos el éxito en conversiones y resultados, no en líneas de código.
            </p>
            <div className="feature-highlight">ROI Medible</div>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="feature-icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="feature-card-title">Tecnología de Punta</h3>
            <p className="feature-card-desc">
              Trabajamos con un stack moderno y probado: Next.js, React, Node.js y TypeScript. Desarrollamos software escalable, seguro y con rendimiento optimizado.
            </p>
            <div className="feature-highlight">Stack Moderno</div>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="feature-icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="feature-card-title">Entrega Ágil</h3>
            <p className="feature-card-desc">
              Metodología ágil basada en sprints semanales, demos frecuentes y ajustes continuos. Lanzamos rápido, iteramos más rápido y mejoramos el producto con feedback real del usuario.
            </p>
            <div className="feature-highlight">Sprint Semanal</div>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="feature-icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="feature-card-title">Soporte Continuo</h3>
            <p className="feature-card-desc">
              Te acompañamos antes, durante y después del lanzamiento. Incluye monitoreo, optimización, actualizaciones y soporte técnico sin límites.
            </p>
            <div className="feature-highlight">24/7 Disponible</div>
          </div>
        </div>

        {/* Stats */}
        <div className="about-stats">
          <div className="stat-box">
            <div className="stat-value"><Counter value={100} suffix="%" /></div>
            <div className="stat-label">Proyectos Entregados</div>
          </div>
          <div className="stat-box">
            <div className="stat-value"><Counter value={4} suffix="+" /></div>
            <div className="stat-label">Años de Experiencia</div>
          </div>
          <div className="stat-box">
            <div className="stat-value"><Counter value={50} suffix="+" /></div>
            <div className="stat-label">Clientes Satisfechos</div>
          </div>
        </div>

        {/* CTA */}
        <div className="about-cta-wrapper">
          <Link href="/nosotros" className="about-cta">
            <span>Conocer más sobre nosotros</span>
            <svg viewBox="0 0 20 20" fill="currentColor" className="about-cta-icon">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
