"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/shared/infinite-moving-cards";
import { testimonials } from "@/data/testimonials";
import "@/styles/testimonials-section.css";

export function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        {/* Encabezado */}
        <div className="testimonials-header left-align">
          <h2 className="testimonials-subtitle">Testimonios</h2>
          <h3 className="testimonials-title">Lo que dicen nuestros clientes</h3>
        </div>

        {/* Carrusel infinito */}
        <div className="testimonials-cards-wrapper">
          <div className="testimonials-cards-gradient" />
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
}
