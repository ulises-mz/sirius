// components/ContactCTA.tsx
'use client';
import { useState, useEffect } from 'react';
import LoadingLink from '@/components/shared/loading-link';

function CalendlyEmbed({ url }: { url: string }) {
  useEffect(() => {
    // Cargar el script de Calendly solo si no existe ya
    const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div 
      className="calendly-inline-widget calendly-custom-theme-cta" 
      data-url={url} 
      style={{ 
        minWidth: '320px', 
        height: '500px',
        background: 'var(--color-background-secondary)',
        borderRadius: '8px',
        overflow: 'hidden'
      }}
    />
  );
}

export default function ContactCTA() {
  const [activeTab, setActiveTab] = useState<'schedule' | 'contact'>('schedule');

  return (
    <section className="contact-cta">
      <div className="contact-container">
        <div className="contact-content">
          {/* Columna de texto */}
          <div className="contact-text">
            <h2 className="contact-subtitle">Contáctanos</h2>
            <h3 className="contact-title">Impulsa tu negocio</h3>
            <p className="contact-description">
              Estamos listos para ayudarte a transformar tu empresa con soluciones digitales personalizadas. 
              Agenda una reunión o contáctanos directamente para comenzar.
            </p>
            
            <div className="tabs-container">
              <button 
                className={`tab ${activeTab === 'schedule' ? 'active' : ''}`}
                onClick={() => setActiveTab('schedule')}
              >
                <span className="tab-icon">●</span>
                <span className="tab-label">Agendar Reunión</span>
              </button>
              
              <button 
                className={`tab ${activeTab === 'contact' ? 'active' : ''}`}
                onClick={() => setActiveTab('contact')}
              >
                <span className="tab-icon">●</span>
                <span className="tab-label">Contacto Directo</span>
              </button>
            </div>
          </div>
          
          {/* Columna de contenido */}
          <div className="contact-content-wrapper">
            {activeTab === 'schedule' ? (
              <div className="scheduler">
                <CalendlyEmbed url="https://calendly.com/codeinvestcr/30min?background_color=050F1D&text_color=ffffff&primary_color=04BE78" />
              </div>
            ) : (
              <div className="contact-options">
                <div className="contact-card">
                  <div className="contact-icon">●</div>
                  <div className="contact-details">
                    <h4 className="contact-option-title">Llámanos</h4>
                    <p className="contact-option-desc">Disponibles de Lunes a Viernes de 9am a 5pm</p>
                    <a href="tel:+50661274805" className="contact-button">
                      +506 61274805
                    </a>
                  </div>
                </div>
                
                <div className="contact-card">
                  <div className="contact-icon">●</div>
                  <div className="contact-details">
                    <h4 className="contact-option-title">Escríbenos</h4>
                    <p className="contact-option-desc">Respondemos en menos de 24 horas</p>
                    <a href="mailto:info@codeinvestcr.com" className="contact-button">
                      contacto@codeinvest.cr
                    </a>
                  </div>
                </div>
                
                <div className="contact-card">
                  <div className="contact-icon">●</div>
                  <div className="contact-details">
                    <h4 className="contact-option-title">WhatsApp</h4>
                    <p className="contact-option-desc">Chatea directamente con nuestro equipo</p>
                    <a 
                      href="https://wa.me/50661274805" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="contact-button whatsapp"
                    >
                      Enviar Mensaje
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Botón para ver página completa de agendar */}
        <div className="cta-full-page">
          <LoadingLink href="/agendar" className="cta-full-page-button">
            Ver todas las opciones de consultoría
          </LoadingLink>
        </div>
      </div>
      
      <style jsx>{`
        .contact-cta {
          background-color: var(--color-background-secondary);
          padding: 5rem 0;
          padding-bottom: 8rem;
        }
        
        .contact-container {
          max-width: 80%;
          margin: 0 auto;
        }
        
        .contact-content {
          display: flex;
          flex-direction: column;
          gap: 4rem;
          align-items: center;
        }
        
        @media (min-width: 768px) {
          .contact-content {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
          }
        }
        
        .contact-text {
          flex: 1;
          text-align: left;
        }
        
        .contact-subtitle {
          color: var(--color-text-secondary);
          font-weight: bold;
          letter-spacing: 0.05em;
          font-size: 2.25rem;
          margin-bottom: 0.5rem;
        }
        
        .contact-title {
          color: var(--color-text-primary);
          font-size: 2.25rem;
          font-weight: bold;
          margin-bottom: 4rem;
          line-height: 0;
        }
        
        .contact-description {
          color: var(--color-text-primary);
          font-size: 1.3rem;
          line-height: 2rem;
          margin-bottom: 2rem;
          max-width: 90%;
        }
        
        .tabs-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-width: 90%;
        }
        
        .tab {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.2rem 1.8rem;
          background: transparent;
          border: 2px solid var(--color-accent);
          color: var(--color-text-secondary);
          border-radius: 8px;
          font-weight: 600;
          font-size: 1.2rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
          width: 100%;
        }
        
        .tab:hover {
          background: rgba(4, 190, 120, 0.1);
        }
        
        .tab.active {
          background: var(--color-accent);
          color: var(--color-primary);
        }
        
        .tab-icon {
          color: var(--color-accent);
          font-size: 1.5rem;
          line-height: 1;
        }
        
        .tab.active .tab-icon {
          color: var(--color-primary);
        }
        
        .contact-content-wrapper {
          flex: 1;
          width: 100%;
          background: var(--color-background-secondary);
          border-radius: 12px;
          padding: 1.5rem;
          border: 1px solid rgba(19, 255, 218, 0.1);
        }
        
        .scheduler {
          height: 500px;
          border-radius: 8px;
          overflow: hidden;
        }
        
        .scheduler .calendly-inline-widget {
          border-radius: 8px !important;
          border: none !important;
          height: 100% !important;
          background: var(--color-background-secondary) !important;
          box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.1) !important;
        }
        
        .scheduler .calendly-inline-widget iframe {
          background: var(--color-background-secondary) !important;
          border-radius: 8px !important;
          border: none !important;
        }
        
        .calendly-custom-theme-cta {
          background: var(--color-background-secondary) !important;
          border: none !important;
        }
        
        .contact-options {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        
        .contact-card {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
          padding: 1.2rem;
          background: var(--color-primary);
          border-radius: 8px;
          border: 1px solid rgba(19, 255, 218, 0.1);
          transition: all 0.3s ease;
        }
        
        .contact-card:hover {
          border-color: var(--color-accent);
          transform: translateY(-3px);
        }
        
        .contact-icon {
          color: var(--color-accent);
          font-size: 1.8rem;
          line-height: 1;
          margin-top: 0.3rem;
        }
        
        .contact-details {
          flex: 1;
        }
        
        .contact-option-title {
          font-size: 1.4rem;
          font-weight: bold;
          color: var(--color-text-primary);
          margin-bottom: 0.5rem;
        }
        
        .contact-option-desc {
          color: var(--color-text-secondary);
          font-size: 1rem;
          margin-bottom: 1.2rem;
          line-height: 1.5;
        }
        
        .contact-button {
          display: inline-block;
          padding: 0.8rem 1.5rem;
          background: var(--color-accent);
          color: var(--color-primary);
          font-weight: 600;
          border-radius: 6px;
          transition: background 0.2s ease;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          text-decoration: none;
          text-align: center;
          min-width: 180px;
        }
        
        .contact-button:hover {
          background: var(--color-accent-hover);
        }
        
        .contact-button.whatsapp {
          background: #25D366;
          color: #fff;
        }
        
        .contact-button.whatsapp:hover {
          background: #128C7E;
        }
        
        @media (max-width: 1024px) {
          .contact-container {
            max-width: 90%;
          }
          
          .contact-subtitle {
            font-size: 2rem;
          }
          
          .contact-title {
            font-size: 2rem;
          }
        }
        
        @media (max-width: 768px) {
          .contact-title {
            font-size: 1.7rem;
            margin-bottom: 3rem;
          }
          
          .contact-description {
            font-size: 1.1rem;
          }
          
          .tab {
            font-size: 1.1rem;
            padding: 1rem;
          }
          
          .contact-option-title {
            font-size: 1.3rem;
          }
          
          .contact-button {
            min-width: 160px;
            padding: 0.7rem 1.2rem;
          }
        }
        
        @media (max-width: 480px) {
          .contact-cta {
            padding: 3rem 0;
            padding-bottom: 5rem;
          }
          
          .contact-subtitle {
            font-size: 1.8rem;
          }
          
          .contact-title {
            font-size: 1.5rem;
            margin-bottom: 2.5rem;
          }
          
          .contact-description {
            font-size: 1rem;
            max-width: 100%;
          }
          
          .tabs-container {
            max-width: 100%;
          }
          
          .contact-card {
            flex-direction: column;
            gap: 1rem;
          }
          
          .contact-button {
            width: 100%;
          }
        }
        
        .cta-full-page {
          text-align: center;
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(4, 190, 120, 0.2);
        }
        
        .cta-full-page-button {
          display: inline-block;
          padding: 1rem 2rem;
          background: transparent;
          border: 2px solid var(--color-accent);
          color: var(--color-accent);
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        
        .cta-full-page-button:hover {
          background: var(--color-accent);
          color: var(--color-primary);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(4, 190, 120, 0.3);
        }
        
        @media (max-width: 768px) {
          .cta-full-page {
            margin-top: 1.5rem;
            padding-top: 1.5rem;
          }
          
          .cta-full-page-button {
            width: 100%;
            padding: 1.2rem;
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  );
}