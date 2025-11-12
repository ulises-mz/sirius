'use client';

import React from 'react';
import Link from 'next/link';
import '@/styles/about-section.css';
import { SITE } from '@/lib/constants';

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Header */}
        <div className="about-header">
          <div className="about-badge">
            <svg viewBox="0 0 24 24" fill="currentColor" className="badge-icon">
              <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
            <span>Nuestra Propuesta</span>
          </div>
          <h2 className="about-title">
            Tu socio estratégico en <span className="about-highlight">transformación digital</span>
          </h2>
          <p className="about-description">
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
              Proyectos con objetivos claros, KPIs definidos y métricas de ROI.
              Medimos el éxito en conversiones, no en líneas de código.
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
              Stack moderno: Next.js, React, Node.js, TypeScript.
              Arquitectura escalable, código mantenible y rendimiento optimizado.
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
              Metodología ágil con sprints semanales, demos frecuentes y ajustes continuos.
              Lanzamos rápido e iteramos con feedback real.
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
              No te dejamos solo después del lanzamiento. Monitoreo, optimización,
              actualizaciones y soporte técnico ilimitado.
            </p>
            <div className="feature-highlight">24/7 Disponible</div>
          </div>
        </div>

        {/* Stats */}
        <div className="about-stats">
          <div className="stat-box">
            <div className="stat-value">100%</div>
            <div className="stat-label">Proyectos Entregados</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">3+</div>
            <div className="stat-label">Años de Experiencia</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">50+</div>
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
