'use client';

import React from 'react';
import Link from 'next/link';
import '@/styles/about-section.css';
import { SITE } from '@/lib/constants';

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          {/* Texto */}
          <div className="about-text">
            <div className="about-header">
              <span className="about-label">Nuestra Propuesta</span>
              <h2 className="about-title">Socio estratégico para tu transformación digital</h2>
            </div>

            <p className="about-description">
              En {SITE.name} combinamos estrategia, diseño y tecnología para crear soluciones digitales
              que impulsan el crecimiento real de tu empresa. No solo desarrollamos software, construimos
              herramientas que optimizan procesos, aumentan ventas y mejoran la experiencia de tus clientes.
            </p>

            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Enfoque en Resultados</h3>
                  <p className="feature-desc">Cada proyecto diseñado con KPIs claros y enfoque en ROI medible</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Tecnología de Punta</h3>
                  <p className="feature-desc">Stack moderno y escalable para soluciones de largo plazo</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Soporte Continuo</h3>
                  <p className="feature-desc">Acompañamiento post-lanzamiento y optimización constante</p>
                </div>
              </div>
            </div>

            <Link href="/nosotros" className="about-cta">
              Conocer más sobre nosotros
              <svg viewBox="0 0 20 20" fill="currentColor" className="about-cta-icon">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>

          {/* Imágenes */}
          <div className="about-images">
            <div className="laptop-wrapper">
              <img
                src="/images/laptop.webp"
                alt="Dashboard profesional de analytics"
                className="w-full h-auto"
                width={1280}
                height={853}
                loading="eager"
                suppressHydrationWarning
              />
            </div>
            <div className="screen-wrapper">
              <img
                src="/images/screen.webp"
                alt="Métricas y estadísticas de negocio"
                className="w-full h-auto"
                width={1536}
                height={1024}
                loading="lazy"
                suppressHydrationWarning
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
