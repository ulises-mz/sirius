"use client";
import { useState } from "react";
import Link from "next/link";
import { services } from "@/data/services";
import "@/styles/globals.css";
import "@/styles/servicios-page.css";

const faqs = [
  {
    question: "¿Cuánto tiempo toma desarrollar un proyecto?",
    answer: "Los tiempos varían según la complejidad. Un sitio web básico puede tomar 2-4 semanas, mientras que una aplicación móvil compleja puede requerir 3-6 meses. Te daremos una estimación precisa tras la consulta inicial."
  },
  {
    question: "¿Incluyen el mantenimiento y soporte?",
    answer: "Sí, todos nuestros proyectos incluyen 3 meses de soporte gratuito. Después ofrecemos planes de mantenimiento mensual para mantener tu solución actualizada y funcionando perfectamente."
  },
  {
    question: "¿Trabajan con empresas de todos los tamaños?",
    answer: "Absolutamente. Desde startups y emprendedores hasta empresas consolidadas. Adaptamos nuestras soluciones y metodologías según las necesidades y presupuesto de cada cliente."
  },
  {
    question: "¿Qué formas de pago aceptan?",
    answer: "Aceptamos transferencias bancarias, tarjetas de crédito y sistemas de pago locales. Trabajamos con un esquema de pagos por hitos para proyectos grandes."
  }
];

export default function ServiciosPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="servicios-page">
      {/* Header Section */}
      <section className="servicios-header">
        <div className="servicios-header-container">
          <h1 className="servicios-title">
            NUESTROS SERVICIOS
          </h1>
          <p className="servicios-subtitle">
            Transformamos ideas en soluciones digitales exitosas que impulsan el crecimiento de tu negocio.
          </p>
        </div>
      </section>

      {/* Services Grid Layout */}
      <section className="servicios-grid-layout">
        <div className="servicios-grid-container">
          
          {services.map((service) => (
            <div key={service.id} className={`servicios-card ${service.icon}`}>
              <div className="servicios-card-icon">
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
              <div className="servicios-card-content">
                <h3 className="servicios-card-title">{service.title}</h3>
                <p className="servicios-card-description">
                  {service.description}
                </p>
                <ul className="servicios-card-features">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <Link href={`/servicios/${service.slug}`} className="servicios-card-button">Saber más</Link>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* CTA Section */}
      <section className="servicios-cta-final">
        <div className="servicios-cta-final-container">
          <div className="servicios-cta-icon">
            <svg fill="currentColor" viewBox="0 0 24 24" style={{color: '#13FFDA'}}>
              <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
            </svg>
          </div>
          <h2 className="servicios-cta-title">¿Listo para comenzar?</h2>
          <p className="servicios-cta-description">
            Póngase en contacto con nosotros hoy mismo.
          </p>
          <Link href="/contacto" className="servicios-btn primary">Contactanos</Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="servicios-faq-section">
        <div className="servicios-faq-container">
          <h2 className="servicios-faq-title">
            Preguntas frecuentes
          </h2>
          
          <div className="servicios-faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="servicios-faq-item">
                <button 
                  className="servicios-faq-question"
                  onClick={() => toggleFaq(index)}
                >
                  <h3>{faq.question}</h3>
                  <svg 
                    className={`servicios-faq-icon ${openFaq === index ? 'servicios-faq-icon-open' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="servicios-faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}