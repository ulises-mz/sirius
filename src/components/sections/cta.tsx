'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { SITE } from '@/lib/constants';

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
      data-url="https://calendly.com/admin-siriusx/30min?background_color=050F1D&text_color=ffffff&primary_color=3ac8ff"
      style={{
        width: '100%',
        minWidth: '320px',
        height: '1000px',
        borderRadius: '16px',
        overflow: 'hidden'
      }}
    />
  );
}

export default function ContactCTA({ config }: { config?: any }) {
  const phone = config?.phone || SITE.phone;
  const email = config?.contactEmail || SITE.primaryEmail;
  const waNumber = (config?.whatsappNumber || phone).replace(/[^0-9]/g, '');

  return (
    <section className="contact-cta">
      <div className="contact-container">
        {/* Badge */}
        <div className="cta-badge">
          <div className="badge-pulse"></div>
          <svg viewBox="0 0 20 20" fill="currentColor" className="badge-icon">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <span>Agenda tu consultoría gratuita</span>
        </div>

        <h2 className="mb-6 text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white sm:text-2xl sm:mb-4">
          Transforma tu negocio con{' '}
          <span className="text-cyan-600 dark:text-cyan-400 font-thin italic tracking-wide">soluciones digitales a medida</span>
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-neutral-300 sm:text-base max-w-3xl mx-auto mb-12">
          30 minutos que pueden cambiar el rumbo de tu empresa. Sin compromiso,
          sin letra pequeña. Solo una conversación honesta sobre cómo la tecnología
          puede acelerar tu crecimiento.
        </p>

        {/* Stats Grid - Mejorado */}
        <div className="cta-stats">
          <div className="cta-stat">
            <div className="stat-icon-wrapper">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="stat-info">
              <div className="stat-value">30 min</div>
              <div className="stat-label">Consultoría gratuita</div>
            </div>
          </div>

          <div className="cta-stat">
            <div className="stat-icon-wrapper">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <div className="stat-info">
              <div className="stat-value">&lt; 24h</div>
              <div className="stat-label">Respuesta garantizada</div>
            </div>
          </div>

          <div className="cta-stat">
            <div className="stat-icon-wrapper">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="stat-info">
              <div className="stat-value">0%</div>
              <div className="stat-label">Presión de ventas</div>
            </div>
          </div>
        </div>

        {/* Calendly Embed */}
        <CalendlyEmbed />

        {/* Contact Methods - Mejorado */}
        <div className="contact-methods-wrapper">
          <p className="contact-methods-title">¿Prefieres contactarnos directamente?</p>
          <div className="contact-methods">
            <a href={`tel:${phone}`} className="contact-method">
              <div className="method-icon-circle">
                <svg viewBox="0 0 24 24" fill="currentColor" className="method-icon">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                </svg>
              </div>
              <div className="method-info">
                <span className="method-label">Llámanos</span>
                <span className="method-value">{phone}</span>
              </div>
            </a>

            <a href={`mailto:${email}`} className="contact-method">
              <div className="method-icon-circle">
                <svg viewBox="0 0 24 24" fill="currentColor" className="method-icon">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <div className="method-info">
                <span className="method-label">Escríbenos</span>
                <span className="method-value">{email}</span>
              </div>
            </a>

            <a href={`https://wa.me/${waNumber}`} target="_blank" rel="noopener noreferrer" className="contact-method whatsapp">
              <div className="method-icon-circle">
                <svg viewBox="0 0 24 24" fill="currentColor" className="method-icon">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <div className="method-info">
                <span className="method-label">WhatsApp</span>
                <span className="method-value">Chat directo</span>
              </div>
            </a>
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
          max-width: 80%;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        /* Badge mejorado con pulse */
        .cta-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, rgba(58, 200, 255, 0.15), rgba(58, 200, 255, 0.08));
          border: 1px solid rgba(58, 200, 255, 0.3);
          border-radius: 50px;
          margin-bottom: 2rem;
          color: #3ac8ff;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          position: relative;
          box-shadow: 0 4px 20px rgba(58, 200, 255, 0.15);
        }

        .badge-pulse {
          width: 8px;
          height: 8px;
          background: #3ac8ff;
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.2);
          }
        }

        .badge-icon {
          width: 18px;
          height: 18px;
        }

        /* Title mejorado con gradiente */
        .cta-title {
          font-size: 3rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .cta-gradient-text {
          background: linear-gradient(135deg, #3ac8ff 0%, #6d6bff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cta-description {
          font-size: 1.2rem;
          line-height: 1.8;
          color: #cbd5e1;
          max-width: 750px;
          margin: 0 auto 4rem;
        }

        /* Stats Grid mejorado */
        .cta-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
          max-width: 1000px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-stat {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 2rem;
          background: linear-gradient(135deg, rgba(58, 200, 255, 0.08), rgba(58, 200, 255, 0.03));
          border: 1px solid rgba(58, 200, 255, 0.2);
          border-radius: 20px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .cta-stat::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(58, 200, 255, 0.1), transparent);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .cta-stat:hover::before {
          opacity: 1;
        }

        .cta-stat:hover {
          transform: translateY(-8px);
          border-color: rgba(58, 200, 255, 0.4);
          box-shadow: 0 20px 40px rgba(58, 200, 255, 0.15);
        }

        .stat-icon-wrapper {
          position: relative;
        }

        .stat-icon {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(58, 200, 255, 0.2), rgba(109, 107, 255, 0.15));
          border-radius: 16px;
          color: #3ac8ff;
          flex-shrink: 0;
          box-shadow: 0 8px 16px rgba(58, 200, 255, 0.2);
        }

        .stat-icon svg {
          width: 28px;
          height: 28px;
        }

        .stat-info {
          text-align: left;
          flex: 1;
        }

        .stat-value {
          font-size: 1.75rem;
          font-weight: 800;
          background: linear-gradient(135deg, #3ac8ff 0%, #6d6bff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.95rem;
          color: #e2e8f0;
          font-weight: 500;
        }

        /* Contact Methods mejorados */
        .contact-methods-wrapper {
          margin-top: 4rem;
          padding-top: 3rem;
          border-top: 1px solid rgba(58, 200, 255, 0.15);
        }

        .contact-methods-title {
          font-size: 1.1rem;
          color: #cbd5e1;
          margin-bottom: 2rem;
          font-weight: 600;
        }

        .contact-methods {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .contact-method {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.5rem 2rem;
          background: rgba(58, 200, 255, 0.05);
          border: 1px solid rgba(58, 200, 255, 0.15);
          border-radius: 16px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .contact-method:hover {
          background: rgba(58, 200, 255, 0.1);
          border-color: rgba(58, 200, 255, 0.3);
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(58, 200, 255, 0.15);
        }

        .contact-method.whatsapp:hover {
          border-color: rgba(37, 211, 102, 0.4);
          background: rgba(37, 211, 102, 0.08);
        }

        .method-icon-circle {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(58, 200, 255, 0.2), rgba(58, 200, 255, 0.1));
          border-radius: 12px;
          flex-shrink: 0;
        }

        .contact-method.whatsapp .method-icon-circle {
          background: linear-gradient(135deg, rgba(37, 211, 102, 0.2), rgba(37, 211, 102, 0.1));
        }

        .method-icon {
          width: 24px;
          height: 24px;
          color: #3ac8ff;
        }

        .contact-method.whatsapp .method-icon {
          color: #25D366;
        }

        .method-info {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          text-align: left;
        }

        .method-label {
          font-size: 0.85rem;
          color: #94a3b8;
          font-weight: 500;
        }

        .method-value {
          font-size: 1rem;
          color: #e2e8f0;
          font-weight: 600;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .contact-cta {
            padding: 4rem 1.5rem;
          }

          .contact-container {
            max-width: 95%;
          }

          .cta-title {
            font-size: 1.875rem;
          }

          .cta-description {
            font-size: 1rem;
          }

          .cta-stats {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }

          .contact-methods {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .contact-cta {
            padding: 3rem 1rem;
          }

          .contact-container {
            max-width: 95%;
          }

          .cta-badge {
            font-size: 0.8rem;
            padding: 0.6rem 1.2rem;
            gap: 0.5rem;
          }

          .badge-icon {
            width: 16px;
            height: 16px;
          }

          .cta-title {
            font-size: 1.5rem;
          }

          .cta-description {
            font-size: 0.9rem;
            margin-bottom: 2.5rem;
          }

          .cta-stats {
            margin-bottom: 2.5rem;
            gap: 1rem;
          }

          .cta-stat {
            padding: 1.5rem;
            flex-direction: row;
            gap: 1rem;
          }

          .stat-icon {
            width: 48px;
            height: 48px;
          }

          .stat-icon svg {
            width: 24px;
            height: 24px;
          }

          .stat-value {
            font-size: 1.5rem;
          }

          .stat-label {
            font-size: 0.85rem;
          }

          .contact-methods-wrapper {
            margin-top: 2.5rem;
            padding-top: 2rem;
          }

          .contact-methods-title {
            font-size: 1rem;
            margin-bottom: 1.5rem;
          }

          .contact-methods {
            gap: 1rem;
          }

          .contact-method {
            padding: 1.25rem 1.5rem;
          }

          .method-icon-circle {
            width: 44px;
            height: 44px;
          }

          .method-icon {
            width: 22px;
            height: 22px;
          }

          .method-label {
            font-size: 0.8rem;
          }

          .method-value {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
}
