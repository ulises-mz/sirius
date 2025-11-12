"use client";

import React, { useRef, useEffect, useMemo } from "react";
import { testimonials } from "@/data/testimonials";
import "@/styles/testimonials-section.css";

export function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (trackRef.current) {
      // Force reflow to ensure animation starts
      trackRef.current.offsetHeight;
      trackRef.current.classList.add('animate');
    }
  }, []);

  // Triplicar testimonios para scroll suave infinito (3 segmentos idénticos)
  const allTestimonials = useMemo(() => (
    [...testimonials, ...testimonials, ...testimonials]
  ), []);

  // Calcula duración dinámica según cantidad (más items => animación más larga)
  const animationSpeedSeconds = useMemo(() => {
    const basePerItem = 6; // segundos por testimonial visible aproximado
    const uniqueCount = testimonials.length;
    // Limitar rango razonable
    const raw = uniqueCount * basePerItem;
    return Math.min(Math.max(raw, 30), 90); // entre 30s y 90s
  }, []);

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        {/* Header */}
        <div className="testimonials-header">
          <div className="testimonials-badge">
            <svg viewBox="0 0 24 24" fill="currentColor" className="badge-icon">
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
            <span>Testimonios</span>
          </div>
          <h2 className="testimonials-title">Clientes que transformaron su negocio</h2>
          <p className="testimonials-description">
            Resultados medibles y crecimiento real para empresas de todos los tamaños
          </p>
        </div>

        {/* Infinite Scroll Carousel */}
        <div className="testimonials-scroll-wrapper">
          <div
            className="testimonials-scroll-track"
            ref={trackRef}
            style={{ ['--speed' as any]: `${animationSpeedSeconds}s` }}
            aria-label="Carrusel de testimonios en desplazamiento horizontal infinito"
          >
            {allTestimonials.map((testimonial, index) => (
              <div
                key={`testimonial-${index}`}
                className="testimonial-card-scroll"
                // Oculta a lectores de pantalla duplicados para evitar repetición
                aria-hidden={index >= testimonials.length}
              >
                {/* Rating */}
                <div className="testimonial-rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className={`star ${i < testimonial.rating ? 'filled' : 'empty'}`}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="testimonial-quote">
                  "{testimonial.quote}"
                </blockquote>

                {/* Result Badge */}
                {testimonial.result && (
                  <div className="testimonial-result-badge">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="result-icon">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{testimonial.result}</span>
                  </div>
                )}

                {/* Author */}
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <span>{testimonial.name.charAt(0)}</span>
                  </div>
                  <div className="author-details">
                    <div className="author-name">{testimonial.name}</div>
                    <div className="author-title">{testimonial.title}</div>
                    <div className="author-company">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="testimonials-stats">
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Clientes Satisfechos</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Tasa de Satisfacción</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5.0</div>
            <div className="stat-label">Calificación Promedio</div>
          </div>
        </div>
      </div>
    </section>
  );
}
