// src/components/sections/portfolio.tsx
"use client";
import Link from "next/link"; // ⬅️ Asegúrate de importar esto
import { portfolioItems } from "@/data/portfolio";
import PortfolioCard from "@/components/shared/portfolio-card";
import CardSwap, { Card } from "@/components/shared/CardSwap";
import "@/styles/portfolio-section.css";

export default function PortfolioSection() {
  return (
    <section className="portfolio-section">
      <div className="portfolio-container">
        <div className="portfolio-content">
          {/* IZQUIERDA - CARDSWAP (2/3 ancho en desktop, full width en móvil) */}
          <div className="portfolio-cardswap">
            <CardSwap
              cardDistance={90}
              verticalDistance={40}
              delay={3000}
              pauseOnHover={false}
              onCardClick={(idx) =>
                console.log("Card seleccionada:", portfolioItems[idx].title)
              }
              width="100%"
              height="100%"
            >
              {portfolioItems.map((item) => (
                <Card
                  key={item.id}
                  className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 overflow-hidden cursor-pointer rounded-lg shadow-lg"
                >
                  <PortfolioCard item={item} />
                </Card>
              ))}
            </CardSwap>
          </div>

          {/* DERECHA - TEXTO (1/3 ancho en desktop, full width en móvil) */}
          <div className="portfolio-text">
            <h2 className="portfolio-subtitle">Proyectos</h2>

            <p className="portfolio-description">
              Casos de éxito desarrollados para clientes locales que confiaron
              en nuestras soluciones digitales. Nuestro compromiso es
              transformar ideas en resultados tangibles.
            </p>

            <Link href="/portafolio" className="button portfolio-button">
              Ver Portafolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
