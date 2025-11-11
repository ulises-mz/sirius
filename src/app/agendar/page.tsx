// src/app/agendar/page.tsx
'use client';
import { useState, useEffect } from 'react';
import '../../styles/agendar-page.css';

type MeetingType = 'consultoria' | 'reunion' | 'demo' | 'seguimiento';

interface CalendlyEmbedProps {
  url: string;
}

function CalendlyEmbed({ url }: CalendlyEmbedProps) {
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
  }, [url]);

  return (
    <div 
      className="calendly-inline-widget calendly-custom-theme" 
      data-url={url} 
      style={{ 
        minWidth: '320px', 
        height: '500px'
      }}
    />
  );
}

interface MeetingOption {
  id: MeetingType;
  title: string;
  description: string;
  duration: string;
  calendlyUrl: string;
  icon: string;
}

export default function AgendarPage() {
  const [selectedType, setSelectedType] = useState<MeetingType>('consultoria');

  const meetingOptions: MeetingOption[] = [
    {
      id: 'consultoria',
      title: 'Consultoría Gratuita',
      description: 'Analiza tu proyecto con nuestros expertos y recibe recomendaciones personalizadas sin costo.',
      duration: '30 minutos',
      calendlyUrl: 'https://calendly.com/codeinvestcr/30min?background_color=050F1D&text_color=ffffff&primary_color=04BE78',
      icon: '💡'
    },
    {
      id: 'reunion',
      title: 'Reunión de Proyecto',
      description: 'Discute los detalles de tu proyecto, requerimientos técnicos y planificación completa.',
      duration: '45 minutos',
      calendlyUrl: 'https://calendly.com/codeinvestcr/30min?background_color=050F1D&text_color=ffffff&primary_color=04BE78',
      icon: '🚀'
    },
    {
      id: 'demo',
      title: 'Demo y Presentación',
      description: 'Conoce nuestros casos de éxito y ve ejemplos en vivo de nuestras soluciones.',
      duration: '30 minutos',
      calendlyUrl: 'https://calendly.com/codeinvestcr/30min?background_color=050F1D&text_color=ffffff&primary_color=04BE78',
      icon: '📱'
    },
    {
      id: 'seguimiento',
      title: 'Seguimiento de Proyecto',
      description: 'Revisión del progreso, feedback y ajustes en proyectos existentes.',
      duration: '30 minutos',
      calendlyUrl: 'https://calendly.com/codeinvestcr/30min?background_color=050F1D&text_color=ffffff&primary_color=04BE78',
      icon: '📊'
    }
  ];

  const selectedOption = meetingOptions.find(option => option.id === selectedType) || meetingOptions[0];

  return (
    <main className="agendar-page">
      {/* Hero Section */}
      <section className="agendar-hero">
        <div className="agendar-hero-container">
          <div className="agendar-hero-content">
            <h1 className="agendar-hero-title">
              Agenda tu <span className="highlight">consultoría gratuita</span>
            </h1>
            <p className="agendar-hero-subtitle">
              Conecta directamente con nuestros expertos en desarrollo web, aplicaciones móviles 
              y soluciones digitales. Agenda la reunión que mejor se adapte a tus necesidades.
            </p>
          </div>
        </div>
      </section>

      {/* Meeting Types Section */}
      <section className="meeting-types-section">
        <div className="meeting-types-container">
          <h2 className="meeting-types-title">Selecciona el tipo de reunión</h2>
          
          <div className="meeting-options-grid">
            {meetingOptions.map((option) => (
              <button
                key={option.id}
                className={`meeting-option ${selectedType === option.id ? 'active' : ''}`}
                onClick={() => setSelectedType(option.id)}
              >
                <div className="meeting-option-icon">{option.icon}</div>
                <div className="meeting-option-content">
                  <h3 className="meeting-option-title">{option.title}</h3>
                  <p className="meeting-option-description">{option.description}</p>
                  <span className="meeting-option-duration">{option.duration}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Calendly Integration Section */}
      <section className="calendly-section">
        <div className="calendly-container">
          <div className="calendly-content">
            <div className="calendly-info">
              <h3 className="calendly-title">
                {selectedOption.title}
              </h3>
              <p className="calendly-description">
                {selectedOption.description}
              </p>
              <div className="calendly-details">
                <div className="calendly-detail">
                  <span className="calendly-detail-label">Duración:</span>
                  <span className="calendly-detail-value">{selectedOption.duration}</span>
                </div>
                <div className="calendly-detail">
                  <span className="calendly-detail-label">Modalidad:</span>
                  <span className="calendly-detail-value">Video llamada</span>
                </div>
                <div className="calendly-detail">
                  <span className="calendly-detail-label">Costo:</span>
                  <span className="calendly-detail-value highlight">Gratuito</span>
                </div>
              </div>
            </div>
            
            <div className="calendly-widget">
              <CalendlyEmbed url={selectedOption.calendlyUrl} />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="benefits-container">
          <h2 className="benefits-title">¿Qué obtienes en tu consultoría?</h2>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h3 className="benefit-title">Análisis Personalizado</h3>
              <p className="benefit-description">
                Revisamos tu proyecto específico y te damos recomendaciones adaptadas a tus necesidades.
              </p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">💰</div>
              <h3 className="benefit-title">Cotización Detallada</h3>
              <p className="benefit-description">
                Recibe una propuesta transparente con costos, tiempos y alcance claramente definidos.
              </p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">🛠️</div>
              <h3 className="benefit-title">Estrategia Técnica</h3>
              <p className="benefit-description">
                Te explicamos las mejores tecnologías y enfoques para tu proyecto específico.
              </p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">📈</div>
              <h3 className="benefit-title">Plan de Crecimiento</h3>
              <p className="benefit-description">
                Diseñamos una hoja de ruta para escalar tu solución digital a futuro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Section */}
      <section className="alternative-contact-section">
        <div className="alternative-contact-container">
          <h2 className="alternative-contact-title">¿Prefieres otro método de contacto?</h2>
          
          <div className="contact-methods">
            <a 
              href="https://wa.me/50661274805" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-method whatsapp"
            >
              <div className="contact-method-icon">📱</div>
              <div className="contact-method-content">
                <h3>WhatsApp</h3>
                <p>Escríbenos directamente</p>
              </div>
            </a>
            
            <a 
              href="tel:+50661274805" 
              className="contact-method phone"
            >
              <div className="contact-method-icon">📞</div>
              <div className="contact-method-content">
                <h3>Teléfono</h3>
                <p>+506 6127-4805</p>
              </div>
            </a>
            
            <a 
              href="mailto:contacto@codeinvest.cr" 
              className="contact-method email"
            >
              <div className="contact-method-icon">✉️</div>
              <div className="contact-method-content">
                <h3>Email</h3>
                <p>contacto@codeinvest.cr</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
