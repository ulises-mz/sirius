"use client";
import Link from "next/link";
import "@/styles/globals.css";
import "@/styles/legal-pages.css";

export default function TerminosPage() {
  const services = [
    {
      title: "Desarrollo Web y Móvil",
      description: "Creación de sitios web, aplicaciones móviles y dashboards personalizados",
      icon: "�"
    },
    {
      title: "Automatización de Procesos",
      description: "Optimización y automatización de procesos empresariales mediante tecnología",
      icon: "⚙️"
    },
    {
      title: "Consultoría Tecnológica",
      description: "Asesoría especializada para digitalizar y escalar operaciones empresariales",
      icon: "�"
    }
  ];

  const terms = [
    {
      number: "1",
      title: "Objeto",
      content: "Sirius es una plataforma digital que ofrece servicios de desarrollo web, aplicaciones móviles, automatización de procesos, consultoría tecnológica y soluciones digitales integrales para empresas.",
      icon: "🎯"
    },
    {
      number: "2", 
      title: "Uso del sitio",
      content: "El usuario se compromete a utilizar la plataforma de manera lícita y conforme a la legislación vigente en Costa Rica. Está prohibido el uso del sitio para actividades fraudulentas, ilegales o que comprometan la seguridad de la plataforma.",
      icon: "⚖️"
    },
    {
      number: "3",
      title: "Servicios",
      content: "Los servicios se ofrecen bajo disponibilidad de agenda. Sirius se reserva el derecho de actualizar, modificar o suspender temporalmente los servicios en cualquier momento.",
      icon: "🔧"
    },
    {
      number: "4",
      title: "Limitación de responsabilidad",
      content: "La información proporcionada en las consultas y en la plataforma es de carácter consultivo y técnico. Sirius no garantiza resultados específicos en la implementación de soluciones tecnológicas, ya que el éxito depende de múltiples factores externos. El uso de la información proporcionada es responsabilidad exclusiva del usuario.",
      icon: "⚠️"
    },
    {
      number: "5",
      title: "Propiedad intelectual",
      content: "Todos los contenidos del sitio (textos, imágenes, logotipos, software, gráficos) son propiedad de Sirius. Queda prohibida su reproducción, distribución o modificación sin autorización previa por escrito.",
      icon: "©️"
    },
    {
      number: "6",
      title: "Modificaciones",
      content: "Sirius se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Los cambios serán efectivos a partir de su publicación en el sitio web.",
      icon: "🔄"
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
              <span className="breadcrumb-current">Términos y Condiciones</span>
            </div>
            
            <h1 className="hero-title">
              Términos y <span className="title-highlight">Condiciones</span>
            </h1>
            
            <p className="hero-description">
              Estos Términos y Condiciones regulan el acceso y uso del sitio web y los servicios ofrecidos por Sirius. 
              Al utilizar la plataforma, aceptas estas condiciones en su totalidad.
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
                  <span className="stat-label">Jurisdicción</span>
                  <span className="stat-value">Costa Rica</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="content-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nuestros Servicios</h2>
            <p className="section-description">
              Sirius ofrece una gama completa de servicios digitales y consultoría tecnológica
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">
                  <span className="service-emoji">{service.icon}</span>
                </div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms Section */}
      <section className="content-section bg-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Términos Detallados</h2>
            <p className="section-description">
              Conoce en detalle las condiciones que rigen el uso de nuestros servicios
            </p>
          </div>

          <div className="terms-grid">
            {terms.map((term, index) => (
              <div key={index} className="term-card">
                <div className="term-header">
                  <div className="term-number">
                    <span className="term-icon">{term.icon}</span>
                    <span className="term-num">{term.number}</span>
                  </div>
                  <h3 className="term-title">{term.title}</h3>
                </div>
                <p className="term-content">{term.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice Section */}
      <section className="content-section">
        <div className="container">
          <div className="notice-container">
            <div className="notice-card">
              <div className="notice-icon">
                <span className="notice-emoji">⚠️</span>
              </div>
              <div className="notice-content">
                <h3 className="notice-title">Aviso Importante sobre Servicios Tecnológicos</h3>
                <p className="notice-text">
                  La implementación de soluciones tecnológicas conlleva variables técnicas y de negocio que pueden afectar los resultados. 
                  Sirius proporciona servicios y asesoría de carácter técnico y consultivo, 
                  pero el éxito de los proyectos depende de múltiples factores. Siempre evalúa con tu equipo 
                  técnico antes de tomar decisiones importantes sobre implementación tecnológica.
                </p>
              </div>
            </div>

            <div className="disclaimer-card">
              <div className="disclaimer-icon">
                <span className="disclaimer-emoji">🛡️</span>
              </div>
              <div className="disclaimer-content">
                <h3 className="disclaimer-title">Limitación de Responsabilidad</h3>
                <p className="disclaimer-text">
                  El usuario es el único responsable de las decisiones tecnológicas y de negocio que tome 
                  basándose en la información proporcionada. Sirius no se hace responsable 
                  por resultados inesperados en la implementación de soluciones tecnológicas o pérdidas 
                  derivadas del uso de nuestros servicios de consultoría digital.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">¿Tienes dudas sobre nuestros términos?</h2>
            <p className="cta-description">
              Si tienes dudas o consultas sobre estos Términos y Condiciones, no dudes en contactarnos.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span className="contact-text">info@siriusx.net</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span className="contact-text">+506 61274805</span>
              </div>
            </div>
            <div className="cta-actions">
              <Link href="/contacto" className="btn-primary">
                Contactar Ahora
              </Link>
              <Link href="/privacidad" className="btn-secondary">
                Ver Privacidad
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

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .service-card {
          padding: 2rem;
          background: #ffffff;
          border-radius: 1rem;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
          text-align: center;
        }

        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          border-color: #10b981;
        }

        .service-icon {
          margin-bottom: 1.5rem;
        }

        .service-emoji {
          font-size: 3rem;
          display: block;
        }

        .service-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 1rem;
        }

        .service-description {
          color: #64748b;
          line-height: 1.6;
        }

        .terms-grid {
          display: grid;
          gap: 2rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .term-card {
          padding: 2rem;
          background: #ffffff;
          border-radius: 1rem;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .term-card:hover {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border-color: #10b981;
        }

        .term-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .term-number {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #10b981 0%, #06d6a0 100%);
          color: #ffffff;
          padding: 0.75rem 1rem;
          border-radius: 0.75rem;
          font-weight: 600;
          min-width: 4rem;
          justify-content: center;
        }

        .term-icon {
          font-size: 1.25rem;
        }

        .term-num {
          font-size: 1.125rem;
          font-weight: 700;
        }

        .term-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1e293b;
          flex: 1;
        }

        .term-content {
          color: #64748b;
          line-height: 1.7;
          font-size: 1rem;
        }

        .notice-container {
          display: grid;
          gap: 2rem;
          max-width: 800px;
          margin: 0 auto;
        }

        .notice-card, .disclaimer-card {
          display: flex;
          gap: 1.5rem;
          padding: 2rem;
          border-radius: 1rem;
          border: 1px solid;
        }

        .notice-card {
          background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
          border-color: #f59e0b;
        }

        .disclaimer-card {
          background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
          border-color: #3b82f6;
        }

        .notice-icon, .disclaimer-icon {
          flex-shrink: 0;
        }

        .notice-emoji, .disclaimer-emoji {
          font-size: 2rem;
          display: block;
        }

        .notice-title, .disclaimer-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .notice-title {
          color: #92400e;
        }

        .disclaimer-title {
          color: #1e40af;
        }

        .notice-text, .disclaimer-text {
          line-height: 1.6;
        }

        .notice-text {
          color: #a16207;
        }

        .disclaimer-text {
          color: #1d4ed8;
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

        .contact-info {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #ffffff;
        }

        .contact-icon {
          font-size: 1.25rem;
        }

        .contact-text {
          font-weight: 500;
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

          .services-grid {
            grid-template-columns: 1fr;
          }

          .term-header {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }

          .term-number {
            align-self: center;
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

          .notice-card, .disclaimer-card {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
