'use client';

import React from 'react';
import '@/styles/about-section.css';
import { SITE } from '@/lib/constants';

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          {/* Texto */}
          <div className="about-text">
            <h2 className="about-subtitle">Quiénes</h2>
            <h3 className="about-title">Somos</h3>
            <p className="about-description">
              En {SITE.name} diseñamos y construimos ecosistemas digitales que conectan estrategia, diseño, desarrollo y automatización. 
              Creamos soluciones escalables que reducen fricción operativa y aceleran el crecimiento sostenible de tu negocio.
            </p>

            <ul className="about-list">
              <li>
                <span className="about-bullet">●</span>
                Enfoque estratégico basado en datos y objetivos claros
              </li>
              <li>
                <span className="about-bullet">●</span>
                Arquitecturas escalables y mantenimiento evolutivo
              </li>
              <li>
                <span className="about-bullet">●</span>
                Procesos transparentes y colaboración continua
              </li>
            </ul>
          </div>

          {/* Imágenes */}
          <div className="about-images">
            <div className="laptop-wrapper">
              <img
                src="/images/laptop.webp"
                alt="Laptop con dashboard"
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
                alt="Pantalla con estadísticas"
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
