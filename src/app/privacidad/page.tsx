"use client";
import Link from "next/link";
import "@/styles/globals.css";
import "@/styles/legal-pages.css";

export default function PrivacidadPage() {
  const dataTypes = [
    {
      title: "Información Personal",
      items: ["Nombre completo", "Correo electrónico", "Número de teléfono"],
      icon: "👤"
    },
    {
      title: "Información de Servicios",
      items: ["Información al agendar reuniones", "Solicitudes de servicios", "Consultas de asesoría"],
      icon: "💼"
    },
    {
      title: "Datos Técnicos",
      items: ["Dirección IP", "Navegador utilizado", "Sistema operativo"],
      icon: "🔧"
    }
  ];

  const dataUsage = [
    {
      title: "Gestión de Servicios",
      description: "Gestionar reservas de reuniones y consultas.",
      icon: "📅"
    },
    {
      title: "Asesoría Especializada",
      description: "Brindar asesoría y servicios relacionados con soluciones digitales y tecnológicas.",
      icon: "💡"
    },
    {
      title: "Atención al Cliente",
      description: "Responder solicitudes de información y consultas.",
      icon: "💬"
    },
    {
      title: "Mejora Continua",
      description: "Mejorar el funcionamiento de nuestro sitio web y servicios digitales.",
      icon: "📈"
    },
    {
      title: "Cumplimiento Legal",
      description: "Cumplir con obligaciones legales y de seguridad.",
      icon: "⚖️"
    }
  ];

  const userRights = [
    {
      title: "Acceso a tus datos personales",
      description: "Solicitar una copia de toda la información que tenemos sobre ti",
      icon: "🔍"
    },
    {
      title: "Rectificación de información",
      description: "Corregir o actualizar datos incorrectos o incompletos",
      icon: "✏️"
    },
    {
      title: "Eliminación de datos",
      description: "Solicitar la eliminación de tus datos cuando sea posible legalmente",
      icon: "🗑️"
    },
    {
      title: "Oposición al tratamiento",
      description: "Oponerte al procesamiento de tus datos personales",
      icon: "🛑"
    },
    {
      title: "Portabilidad de información",
      description: "Transferir tus datos a otro proveedor de servicios",
      icon: "📤"
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
              <span className="breadcrumb-current">Política de Privacidad</span>
            </div>
            
            <h1 className="hero-title">
              Política de <span className="title-highlight">Privacidad</span>
            </h1>
            
            <p className="hero-description">
              En CodeINVEST nos comprometemos a proteger tu información personal y garantizar que su uso sea 
              transparente y seguro, conforme a la Ley de Protección de la Persona frente al Tratamiento de 
              sus Datos Personales (Ley 8968, Costa Rica).
            </p>

            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-icon">📅</span>
                <div className="stat-content">
                  <span className="stat-label">Última actualización</span>
                  <span className="stat-value">20 de agosto, 2025</span>
                </div>
              </div>
              <div className="stat-item">
                <span className="stat-icon">🇨🇷</span>
                <div className="stat-content">
                  <span className="stat-label">Cumplimiento</span>
                  <span className="stat-value">Ley 8968 Costa Rica</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Collection Section */}
      <section className="content-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Datos que recopilamos</h2>
            <p className="section-description">
              Recopilamos únicamente la información necesaria para brindarte nuestros servicios de manera efectiva
            </p>
          </div>

          <div className="features-grid">
            {dataTypes.map((type, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <span className="feature-emoji">{type.icon}</span>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">{type.title}</h3>
                  <ul className="feature-list">
                    {type.items.map((item, i) => (
                      <li key={i} className="feature-list-item">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Usage Section */}
      <section className="content-section bg-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Finalidad del tratamiento</h2>
            <p className="section-description">
              Los datos se utilizan exclusivamente para los siguientes propósitos
            </p>
          </div>

          <div className="usage-grid">
            {dataUsage.map((usage, index) => (
              <div key={index} className="usage-card">
                <div className="usage-icon">
                  <span className="usage-emoji">{usage.icon}</span>
                </div>
                <div className="usage-content">
                  <h3 className="usage-title">{usage.title}</h3>
                  <p className="usage-description">{usage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Sharing Section */}
      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <h2 className="section-title">Compartición de datos</h2>
              <p className="section-description">
                Tu privacidad es nuestra prioridad. Mantenemos estrictas políticas sobre el uso de tu información.
              </p>

              <div className="info-boxes">
                <div className="info-box protection">
                  <div className="info-box-icon">🛡️</div>
                  <div className="info-box-content">
                    <h3 className="info-box-title">No vendemos tu información</h3>
                    <p className="info-box-text">
                      Nunca vendemos ni cedemos tus datos personales a terceros con fines comerciales.
                    </p>
                  </div>
                </div>

                <div className="info-box sharing">
                  <div className="info-box-icon">🔗</div>
                  <div className="info-box-content">
                    <h3 className="info-box-title">Servicios esenciales únicamente</h3>
                    <p className="info-box-text">
                      Únicamente compartimos información con servicios necesarios para el funcionamiento 
                      de la plataforma (ejemplo: Calendly para gestión de citas, proveedores de videollamadas).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Rights Section */}
      <section className="content-section bg-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Derechos de los usuarios</h2>
            <p className="section-description">
              Tienes derecho a solicitar en cualquier momento lo siguiente
            </p>
          </div>

          <div className="rights-grid">
            {userRights.map((right, index) => (
              <div key={index} className="right-card">
                <div className="right-icon">
                  <span className="right-emoji">{right.icon}</span>
                </div>
                <div className="right-content">
                  <h3 className="right-title">{right.title}</h3>
                  <p className="right-description">{right.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rights-contact">
            <div className="contact-card">
              <h3 className="contact-title">¿Cómo ejercer tus derechos?</h3>
              <p className="contact-description">
                Para ejercer cualquiera de estos derechos, puedes contactarnos directamente:
              </p>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span className="contact-text">info@codeinvestcr.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <span className="contact-text">+506 61274805</span>
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
            <h2 className="cta-title">¿Tienes preguntas sobre tu privacidad?</h2>
            <p className="cta-description">
              Estamos comprometidos con la transparencia. Contáctanos para cualquier consulta sobre tus datos.
            </p>
            <div className="cta-actions">
              <Link href="/contacto" className="btn-primary">
                Contactar Ahora
              </Link>
              <Link href="/cookies" className="btn-secondary">
                Ver Política de Cookies
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
          max-width: 900px;
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
          flex-wrap: wrap;
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

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 1.5rem;
        }

        .section-description {
          font-size: 1.125rem;
          color: #64748b;
          line-height: 1.7;
          max-width: 600px;
          margin: 0 auto;
        }

        .features-grid, .usage-grid, .rights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .feature-card, .usage-card, .right-card {
          padding: 2rem;
          background: #ffffff;
          border-radius: 1rem;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .feature-card:hover, .usage-card:hover, .right-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          border-color: #10b981;
        }

        .feature-icon, .usage-icon, .right-icon {
          margin-bottom: 1.5rem;
        }

        .feature-emoji, .usage-emoji, .right-emoji {
          font-size: 2.5rem;
          display: block;
        }

        .feature-title, .usage-title, .right-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 1rem;
        }

        .feature-list {
          list-style: none;
          padding: 0;
        }

        .feature-list-item {
          padding: 0.5rem 0;
          color: #64748b;
          position: relative;
          padding-left: 1.5rem;
        }

        .feature-list-item:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #10b981;
          font-weight: bold;
        }

        .usage-description, .right-description {
          color: #64748b;
          line-height: 1.6;
        }

        .content-grid {
          max-width: 800px;
          margin: 0 auto;
        }

        .content-text {
          text-align: center;
        }

        .info-boxes {
          display: grid;
          gap: 2rem;
          margin-top: 3rem;
        }

        .info-box {
          display: flex;
          gap: 1.5rem;
          padding: 2rem;
          border-radius: 1rem;
          border: 1px solid;
        }

        .info-box.protection {
          background: linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%);
          border-color: #d1fae5;
        }

        .info-box.sharing {
          background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
          border-color: #bfdbfe;
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
          margin-bottom: 0.5rem;
        }

        .info-box.protection .info-box-title {
          color: #065f46;
        }

        .info-box.sharing .info-box-title {
          color: #1e40af;
        }

        .info-box-text {
          line-height: 1.6;
        }

        .info-box.protection .info-box-text {
          color: #047857;
        }

        .info-box.sharing .info-box-text {
          color: #1d4ed8;
        }

        .rights-contact {
          margin-top: 4rem;
        }

        .contact-card {
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
          color: #ffffff;
          padding: 3rem;
          border-radius: 1rem;
          text-align: center;
        }

        .contact-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .contact-description {
          color: #94a3b8;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .contact-info {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .contact-icon {
          font-size: 1.25rem;
        }

        .contact-text {
          font-weight: 500;
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

          .content-section, .cta-section {
            padding: 4rem 0;
          }

          .features-grid, .usage-grid, .rights-grid {
            grid-template-columns: 1fr;
          }

          .cta-actions {
            flex-direction: column;
            align-items: center;
          }

          .hero-stats {
            flex-direction: column;
            align-items: center;
          }

          .contact-info {
            flex-direction: column;
          }

          .info-boxes {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
