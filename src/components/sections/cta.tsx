'use client';
import { useEffect } from 'react';
import Link from 'next/link';

function CalendlyEmbed() {
  useEffect(() => {
    // Cargar el script de Calendly
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Limpiar el script cuando el componente se desmonte
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/codeinvestcr/30min?background_color=050F1D&text_color=ffffff&primary_color=3ac8ff"
      style={{
        minWidth: '320px',
        height: '700px',
        borderRadius: '16px',
        overflow: 'hidden'
      }}
    />
  );
}

export default function ContactCTA() {
  return (
    <section className="contact-cta">
      <div className="contact-container">
        {/* Badge */}
        <div className="cta-badge">
          <svg viewBox="0 0 20 20" fill="currentColor" className="badge-icon">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <span>Conversemos</span>
        </div>

        <h2 className="cta-title">¿Listo para transformar tu negocio?</h2>
        <p className="cta-description">
          Agenda una consultoría gratuita de 30 minutos y descubre cómo podemos
          ayudarte a escalar tu empresa con soluciones digitales a medida.
        </p>

        {/* Stats Grid */}
        <div className="cta-stats">
          <div className="cta-stat">
            <div className="stat-icon">
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="stat-info">
              <div className="stat-value">30 min</div>
              <div className="stat-label">Consultoría Gratuita</div>
            </div>
          </div>

          <div className="cta-stat">
            <div className="stat-icon">
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <div className="stat-info">
              <div className="stat-value">&lt; 24h</div>
              <div className="stat-label">Tiempo de Respuesta</div>
            </div>
          </div>

          <div className="cta-stat">
            <div className="stat-icon">
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="stat-info">
              <div className="stat-value">100%</div>
              <div className="stat-label">Sin Compromiso</div>
            </div>
          </div>
        </div>

        {/* Calendly Embed */}
        <div className="calendly-wrapper">
          <CalendlyEmbed />
        </div>

        {/* Contact Methods */}
        <div className="contact-methods">
          <div className="contact-method">
            <svg viewBox="0 0 20 20" fill="currentColor" className="method-icon">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <a href="tel:+50661274805" className="method-link">+506 6127-4805</a>
          </div>

          <div className="contact-method">
            <svg viewBox="0 0 20 20" fill="currentColor" className="method-icon">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <a href="mailto:contacto@siriusdigital.cr" className="method-link">contacto@siriusdigital.cr</a>
          </div>

          <div className="contact-method">
            <svg viewBox="0 0 20 20" fill="currentColor" className="method-icon whatsapp-icon">
              <path d="M10 0C4.477 0 0 4.477 0 10c0 1.89.525 3.66 1.438 5.168L.546 18.82a.75.75 0 00.91.91l3.648-.892A9.955 9.955 0 0010 20c5.523 0 10-4.477 10-10S15.523 0 10 0zm5.364 14.636c-.242.68-1.427 1.246-1.963 1.293-.512.045-.975.228-3.282-.684-2.937-1.16-4.832-4.138-4.978-4.328-.143-.19-1.18-1.572-1.18-2.996 0-1.425.746-2.124 1.012-2.413.266-.289.58-.362.774-.362.194 0 .386.002.555.01.178.008.417-.068.65.496.24.58.818 1.997.89 2.142.072.145.12.314.024.504-.096.19-.145.31-.29.48-.144.17-.303.38-.434.51-.144.145-.294.302-.126.591.168.289.748 1.234 1.605 1.999 1.102.987 2.03 1.294 2.319 1.439.29.145.459.121.628-.073.169-.193.724-.843.917-1.133.194-.29.387-.242.652-.145.266.096 1.688.796 1.977.941.29.145.483.217.555.338.072.12.072.678-.17 1.358z"/>
            </svg>
            <a href="https://wa.me/50661274805" target="_blank" rel="noopener noreferrer" className="method-link">WhatsApp</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-cta {
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 100%);
          padding: 6rem 2rem;
          position: relative;
          overflow: hidden;
        }

        .contact-cta::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background:
            radial-gradient(circle at 20% 50%, rgba(58, 200, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(58, 200, 255, 0.08) 0%, transparent 50%);
          pointer-events: none;
        }

        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        /* Badge */
        .cta-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(58, 200, 255, 0.1);
          border: 1px solid rgba(58, 200, 255, 0.2);
          border-radius: 20px;
          margin-bottom: 1.5rem;
          color: #3ac8ff;
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .badge-icon {
          width: 16px;
          height: 16px;
        }

        /* Title & Description */
        .cta-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 1.25rem;
          line-height: 1.2;
        }

        .cta-description {
          font-size: 1.125rem;
          line-height: 1.75;
          color: #e2e8f0;
          opacity: 0.9;
          max-width: 700px;
          margin: 0 auto 3rem;
        }

        /* Stats Grid */
        .cta-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-stat {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          background: rgba(58, 200, 255, 0.05);
          border: 1px solid rgba(58, 200, 255, 0.15);
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .cta-stat:hover {
          transform: translateY(-4px);
          border-color: rgba(58, 200, 255, 0.3);
          box-shadow: 0 10px 30px rgba(58, 200, 255, 0.1);
        }

        .stat-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(58, 200, 255, 0.2), rgba(58, 200, 255, 0.1));
          border-radius: 12px;
          color: #3ac8ff;
          flex-shrink: 0;
        }

        .stat-icon svg {
          width: 24px;
          height: 24px;
        }

        .stat-info {
          text-align: left;
          flex: 1;
        }

        .stat-value {
          font-size: 1.5rem;
          font-weight: 800;
          color: #3ac8ff;
          line-height: 1;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          font-size: 0.875rem;
          color: #cbd5e1;
          font-weight: 500;
        }

        /* Calendly Wrapper */
        .calendly-wrapper {
          max-width: 1000px;
          margin: 0 auto 3rem;
          background: rgba(20, 30, 60, 0.4);
          border: 1px solid rgba(58, 200, 255, 0.15);
          border-radius: 16px;
          padding: 1rem;
          backdrop-filter: blur(20px);
        }

        /* Contact Methods */
        .contact-methods {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          justify-content: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(58, 200, 255, 0.1);
        }

        .contact-method {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .method-icon {
          width: 20px;
          height: 20px;
          color: #3ac8ff;
          flex-shrink: 0;
        }

        .method-icon.whatsapp-icon {
          color: #25D366;
        }

        .method-link {
          color: #e2e8f0;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
          transition: color 0.2s ease;
        }

        .method-link:hover {
          color: #3ac8ff;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .contact-cta {
            padding: 4rem 1.5rem;
          }

          .contact-container {
            max-width: 100%;
          }

          .cta-title {
            font-size: 1.875rem;
          }

          .cta-description {
            font-size: 1rem;
          }

          .cta-stats {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .calendly-wrapper {
            padding: 0.5rem;
          }

          .contact-methods {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }
        }

        @media (max-width: 480px) {
          .contact-cta {
            padding: 3rem 1rem;
          }

          .cta-title {
            font-size: 1.5rem;
          }

          .stat-value {
            font-size: 1.25rem;
          }

          .stat-label {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
}
