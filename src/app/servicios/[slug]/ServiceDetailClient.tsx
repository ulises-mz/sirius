"use client";
import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/shared";

interface Service {
  id: number;
  title: string;
  slug: string;
  longDescription: string;
  price: string;
  icon: string;
  popular?: boolean;
  features: string[];
  benefits: string[];
  process: string[];
  technologies: string[];
  faq?: Array<{
    question: string;
    answer: string;
  }>;
}

interface ServiceDetailClientProps {
  service: Service;
}

export default function ServiceDetailClient({ service }: ServiceDetailClientProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="service-detail-page">
      {/* Breadcrumb */}
      <div className="service-breadcrumb">
        <nav className="service-breadcrumb-nav">
          <Link href="/" className="service-breadcrumb-link">Inicio</Link>
          <span>›</span>
          <Link href="/servicios" className="service-breadcrumb-link">Servicios</Link>
          <span>›</span>
          <span className="service-breadcrumb-current">{service.title}</span>
        </nav>
      </div>

      {/* Service Header */}
      <header className="service-header">
        <div className="service-header-meta">
          {service.popular && (
            <Badge 
              variant="success"
              icon={
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              }
            >
              Servicio popular
            </Badge>
          )}
        </div>
        <h1 className="service-title">
          {service.title}
        </h1>
        <p className="service-subtitle">
          {service.longDescription}
        </p>
      </header>

      {/* Main Service Card */}
      <section className="service-pricing-card">
        <div className="service-pricing-content">
          <div className="service-pricing-icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              {service.icon === 'desarrollo' && (
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
              )}
              {service.icon === 'marketing' && (
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              )}
              {service.icon === 'diseño' && (
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
              )}
              {service.icon === 'consultoria' && (
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
              )}
              {service.icon === 'ecommerce' && (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"/>
              )}
              {service.icon === 'hosting' && (
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/>
              )}
            </svg>
          </div>
          <div className="service-pricing-info">
            <h3 className="service-pricing-title">Solicitar cotización</h3>
            <div className="service-pricing-price">
              <span className="service-price">{service.price}</span>
            </div>
            <p className="service-pricing-description">
              Precio personalizado según tus necesidades específicas
            </p>
            <Link href="/contacto" className="service-pricing-button">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
              Contactar ahora
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="service-content-section">
        <h2 className="service-section-title">
          Características incluidas
        </h2>
        
        <div className="service-features-grid">
          {service.features.map((feature, index) => (
            <div key={index} className="service-feature-item">
              <div className="service-feature-icon">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <span className="service-feature-text">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="service-content-section">
        <h2 className="service-section-title">
          Beneficios que obtendrás
        </h2>
        
        <div className="service-benefits-grid">
          {service.benefits.map((benefit, index) => (
            <div key={index} className="service-benefit-item">
              <div className="service-benefit-icon">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                </svg>
              </div>
              <span className="service-benefit-text">{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="service-content-section">
        <h2 className="service-section-title">
          Nuestro proceso de trabajo
        </h2>
        
        <div className="service-process-container">
          {service.process.map((step, index) => (
            <div key={index} className="service-process-step">
              <div className="service-process-number">
                {index + 1}
              </div>
              <p className="service-process-text">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies Section */}
      <section className="service-content-section">
        <h2 className="service-section-title">
          Tecnologías que utilizamos
        </h2>
        
        <div className="service-technologies-container">
          {service.technologies.map((technology, index) => (
            <span key={index} className="service-technology-tag">
              {technology}
            </span>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      {service.faq && service.faq.length > 0 && (
        <section className="service-faq-section">
          <div className="service-faq-container">
            <h2 className="service-faq-title">
              Preguntas frecuentes sobre {service.title}
            </h2>
            
            <div className="service-faq-list">
              {service.faq.map((faq, index) => (
                <div key={index} className="service-faq-item">
                  <button 
                    className="service-faq-question"
                    onClick={() => toggleFaq(index)}
                  >
                    <h3>{faq.question}</h3>
                    <svg 
                      className={`service-faq-icon ${openFaq === index ? 'service-faq-icon-open' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === index && (
                    <div className="service-faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="service-cta-final">
        <div className="service-cta-final-container">
          <div className="service-cta-icon">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
            </svg>
          </div>
          <h2 className="service-cta-title">¿Listo para comenzar con {service.title}?</h2>
          <p className="service-cta-description">
            Contáctanos hoy mismo para una consulta gratuita y descubre cómo podemos ayudarte.
          </p>
          <div className="service-cta-buttons">
            <Link href="/contacto" className="service-cta-primary">
              Solicitar cotización
            </Link>
            <Link href="/servicios" className="service-cta-secondary">
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
