"use client";
import Link from "next/link";
import "@/styles/globals.css";
import "@/styles/legal-pages.css";

export default function CookiesPage() {
  const cookieTypes = [
    {
      title: "Cookies Esenciales",
      description: "Necesarias para el funcionamiento del sitio, como seguridad, gestión de formularios de contacto y funcionamiento básico de la plataforma.",
      icon: "🔒",
      required: true
    },
    {
      title: "Cookies de Preferencias",
      description: "Permiten recordar configuraciones como idioma, zona horaria y preferencias de usuario para una mejor experiencia.",
      icon: "⚙️",
      required: false
    },
    {
      title: "Cookies Analíticas",
      description: "Nos ayudan a comprender cómo los usuarios interactúan con nuestro sitio para mejorar su rendimiento (ej. Google Analytics).",
      icon: "📊",
      required: false
    },
    {
      title: "Cookies de Terceros",
      description: "Servicios como Calendly, Google Meet u otras plataformas que facilitan la experiencia de agendamiento y consultoría digital.",
      icon: "🔗",
      required: false
    }
  ];

  return (
    <div className="page-container">
      {/* Header Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-grid-pattern"></div>
          <div className="hero-gradient-overlay"></div>
        </div>
        
        <div className="container">
          <div className="hero-content">
            <div className="hero-breadcrumb">
              <Link href="/" className="breadcrumb-link">Inicio</Link>
              <span className="breadcrumb-separator">•</span>
              <span className="breadcrumb-current">Política de Cookies</span>
            </div>
            
            <h1 className="hero-title">
              Política de <span className="title-highlight">Cookies</span>
            </h1>
            
            <p className="hero-description">
              En Sirius utilizamos cookies y tecnologías similares para mejorar la experiencia de navegación, 
              garantizar el correcto funcionamiento de la plataforma y analizar el uso de nuestros servicios.
            </p>

            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-icon">📅</span>
                <div className="stat-content">
                  <span className="stat-label">Última actualización</span>
                  <span className="stat-value">20 de agosto, 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What are Cookies Section */}
      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <h2 className="section-title">¿Qué son las cookies?</h2>
              <p className="section-description">
                Son pequeños archivos que se almacenan en tu navegador cuando visitas nuestro sitio web. 
                Estos permiten reconocer tu dispositivo y recordar tus preferencias de navegación.
              </p>
              
              <div className="info-box">
                <div className="info-box-icon">🍪</div>
                <div className="info-box-content">
                  <h3 className="info-box-title">¿Por qué usamos cookies?</h3>
                  <p className="info-box-text">
                    Las cookies nos permiten ofrecerte una experiencia personalizada, 
                    recordar tus preferencias y mejorar continuamente nuestros servicios.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Types Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Tipos de cookies que utilizamos</h2>
            <p className="section-description">
              Clasificamos nuestras cookies según su función y propósito
            </p>
          </div>

          <div className="features-grid">
            {cookieTypes.map((type, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <span className="feature-emoji">{type.icon}</span>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">{type.title}</h3>
                  <p className="feature-description">{type.description}</p>
                  {type.required && (
                    <div className="feature-badge">
                      <span className="badge-required">Esenciales</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Management Section */}
      <section className="content-section bg-alt">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <h2 className="section-title">Gestión de cookies</h2>
              <p className="section-description">
                Puedes aceptar, rechazar o configurar el uso de cookies desde tu navegador. 
                Ten en cuenta que algunas funciones del sitio podrían verse limitadas si deshabilitas ciertas cookies.
              </p>

              <div className="browser-list">
                <h3 className="list-title">Configuración por navegador:</h3>
                <div className="browser-grid">
                  <div className="browser-item">
                    <span className="browser-name">Chrome</span>
                    <span className="browser-path">Configuración → Privacidad y seguridad → Cookies</span>
                  </div>
                  <div className="browser-item">
                    <span className="browser-name">Firefox</span>
                    <span className="browser-path">Opciones → Privacidad y seguridad → Cookies</span>
                  </div>
                  <div className="browser-item">
                    <span className="browser-name">Safari</span>
                    <span className="browser-path">Preferencias → Privacidad → Cookies</span>
                  </div>
                  <div className="browser-item">
                    <span className="browser-name">Edge</span>
                    <span className="browser-path">Configuración → Privacidad → Cookies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">¿Tienes dudas sobre nuestras cookies?</h2>
            <p className="cta-description">
              Estamos aquí para aclarar cualquier pregunta sobre nuestra política de cookies
            </p>
            <div className="cta-actions">
              <Link href="/contacto" className="btn-primary">
                Contactar Soporte
              </Link>
              <Link href="/privacidad" className="btn-secondary">
                Ver Política de Privacidad
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .page-container {
          min-height: 100vh;
        }

        .hero-section {
          position: relative;
          padding: 8rem 0 6rem;
          background: linear-gradient(135deg, #0F1419 0%, #1a2332 100%);
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .hero-grid-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0);
          background-size: 50px 50px;
          opacity: 0.3;
        }

        .hero-gradient-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 0%, rgba(15, 20, 25, 0.8) 100%);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
        }

        .hero-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .hero-breadcrumb {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 2rem;
          font-size: 0.9rem;
        }

        .breadcrumb-link {
          color: #64748b;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .breadcrumb-link:hover {
          color: #10b981;
        }

        .breadcrumb-separator {
          color: #475569;
        }

        .breadcrumb-current {
          color: #10b981;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .title-highlight {
          background: linear-gradient(135deg, #10b981 0%, #06d6a0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: 1.25rem;
          color: #94a3b8;
          margin-bottom: 3rem;
          line-height: 1.6;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 2rem;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 2rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 1rem;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .stat-icon {
          font-size: 1.5rem;
        }

        .stat-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .stat-label {
          font-size: 0.875rem;
          color: #94a3b8;
        }

        .stat-value {
          font-size: 1rem;
          font-weight: 600;
          color: #ffffff;
        }

        .content-section {
          padding: 6rem 0;
          background: #ffffff;
        }

        .content-section.bg-alt {
          background: #f8fafc;
        }

        .content-grid {
          display: grid;
          gap: 4rem;
          align-items: center;
        }

        .content-text {
          max-width: 800px;
          margin: 0 auto;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .section-description {
          font-size: 1.125rem;
          color: #64748b;
          line-height: 1.7;
          text-align: center;
          margin-bottom: 3rem;
        }

        .info-box {
          display: flex;
          gap: 1.5rem;
          padding: 2rem;
          background: linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%);
          border-radius: 1rem;
          border: 1px solid #d1fae5;
          margin-top: 2rem;
        }

        .info-box-icon {
          font-size: 2rem;
          flex-shrink: 0;
        }

        .info-box-content {
          flex: 1;
        }

        .info-box-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #065f46;
          margin-bottom: 0.5rem;
        }

        .info-box-text {
          color: #047857;
          line-height: 1.6;
        }

        .features-section {
          padding: 6rem 0;
          background: #ffffff;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .feature-card {
          padding: 2rem;
          background: #ffffff;
          border-radius: 1rem;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          border-color: #10b981;
        }

        .feature-icon {
          margin-bottom: 1.5rem;
        }

        .feature-emoji {
          font-size: 2.5rem;
          display: block;
        }

        .feature-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 1rem;
        }

        .feature-description {
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .feature-badge {
          display: flex;
          gap: 0.5rem;
        }

        .badge-required {
          background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
          color: #92400e;
          padding: 0.25rem 0.75rem;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          font-weight: 500;
          border: 1px solid #f59e0b;
        }

        .browser-list {
          margin-top: 2rem;
        }

        .list-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 1.5rem;
        }

        .browser-grid {
          display: grid;
          gap: 1rem;
        }

        .browser-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background: #ffffff;
          border-radius: 0.5rem;
          border: 1px solid #e2e8f0;
        }

        .browser-name {
          font-weight: 600;
          color: #1e293b;
        }

        .browser-path {
          color: #64748b;
          font-size: 0.875rem;
        }

        .cta-section {
          padding: 6rem 0;
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
        }

        .cta-content {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }

        .cta-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .cta-description {
          font-size: 1.125rem;
          color: #94a3b8;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .cta-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary, .btn-secondary {
          padding: 1rem 2rem;
          border-radius: 0.75rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .btn-primary {
          background: linear-gradient(135deg, #10b981 0%, #06d6a0 100%);
          color: #ffffff;
          border: 2px solid transparent;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(16, 185, 129, 0.4);
        }

        .btn-secondary {
          background: transparent;
          color: #ffffff;
          border: 2px solid #475569;
        }

        .btn-secondary:hover {
          background: #475569;
          border-color: #64748b;
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 6rem 0 4rem;
          }

          .content-section, .features-section, .cta-section {
            padding: 4rem 0;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .cta-actions {
            flex-direction: column;
            align-items: center;
          }

          .browser-item {
            flex-direction: column;
            gap: 0.5rem;
            text-align: center;
          }

          .hero-stats {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
}
