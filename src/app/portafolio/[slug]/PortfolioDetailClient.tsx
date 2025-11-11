"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  backgroundImage: string;
  technologies: string[];
  content: string;
  keywords: string;
}

interface PortfolioDetailClientProps {
  project: Project;
}

export default function PortfolioDetailClient({ project }: PortfolioDetailClientProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Función simple para procesar el contenido markdown básico
  const processContent = (content: string) => {
    return content
      .replace(/## (.*)/g, '<h2 class="content-heading">$1</h2>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/- (.*)/g, '<li>$1</li>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/\n/g, '<br/>');
  };

  // Obtener proyectos relacionados (excluyendo el actual)
  const getRelatedProjects = () => {
    // En una implementación real, esto podría filtrar por tecnologías similares
    // Por ahora, simplemente mostramos algunos proyectos aleatorios
    return [];
  };

  const relatedProjects = getRelatedProjects();

  return (
    <div className="portfolio-detail-page">
      {/* Breadcrumb */}
      <div className="portfolio-breadcrumb">
        <nav className="portfolio-breadcrumb-nav">
          <Link href="/" className="portfolio-breadcrumb-link">Inicio</Link>
          <span>›</span>
          <Link href="/portafolio" className="portfolio-breadcrumb-link">Portafolio</Link>
          <span>›</span>
          <span className="portfolio-breadcrumb-current">{project.title}</span>
        </nav>
      </div>

      {/* Project Header */}
      <header className="portfolio-header">
        <div className="portfolio-header-content">
          <div className="portfolio-header-text">
            <h1 className="portfolio-title">{project.title}</h1>
            <p className="portfolio-description">{project.description}</p>
            
            <div className="portfolio-technologies">
              <h3 className="technologies-title">Tecnologías utilizadas:</h3>
              <div className="technologies-list">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="portfolio-actions">
              <Link 
                href="/contacto"
                className="portfolio-cta-button primary"
              >
                <svg className="button-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
                Solicitar proyecto similar
              </Link>
              <a 
                href="https://wa.me/50661274805?text=Hola! Vi el proyecto de {project.title} y me interesa algo similar"
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-cta-button secondary"
              >
                <svg className="button-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
                </svg>
                Consultar por WhatsApp
              </a>
            </div>
          </div>

          <div className="portfolio-header-image">
            <div className="portfolio-image-container">
              <Image
                src={project.backgroundImage}
                alt={project.title}
                fill
                style={{ objectFit: 'cover' }}
                className={`portfolio-image ${imageLoaded ? 'loaded' : ''}`}
                onLoad={() => setImageLoaded(true)}
                priority
              />
            </div>
          </div>
        </div>
      </header>

      {/* Project Content */}
      <section className="portfolio-content">
        <div className="portfolio-content-container">
          <div className="portfolio-content-main">
            <div className="content-section">
              <div 
                className="markdown-content"
                dangerouslySetInnerHTML={{ 
                  __html: `<p>${processContent(project.content)}</p>` 
                }}
              />
            </div>
          </div>

          <aside className="portfolio-sidebar">
            <div className="sidebar-section">
              <h3 className="sidebar-title">Detalles del Proyecto</h3>
              <div className="project-details">
                <div className="detail-item">
                  <span className="detail-label">Cliente:</span>
                  <span className="detail-value">{project.title}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Tecnologías:</span>
                  <span className="detail-value">{project.technologies.length} tecnologías</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Tipo:</span>
                  <span className="detail-value">
                    {project.technologies.includes('WordPress') ? 'CMS' :
                     project.technologies.includes('Next.js') || project.technologies.includes('React') ? 'Aplicación Web' :
                     project.technologies.includes('Python') ? 'Automatización' : 'Desarrollo Web'}
                  </span>
                </div>
              </div>
            </div>

            <div className="sidebar-section">
              <h3 className="sidebar-title">¿Te interesa un proyecto similar?</h3>
              <p className="sidebar-text">
                Podemos desarrollar una solución personalizada para tu negocio 
                utilizando las mismas tecnologías y metodologías.
              </p>
              <Link 
                href="/contacto"
                className="sidebar-cta-button"
              >
                Solicitar cotización
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Process Section */}
      <section className="portfolio-process">
        <div className="portfolio-process-container">
          <h2 className="portfolio-process-title">
            Nuestro proceso de desarrollo
          </h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3 className="step-title">Análisis y Planificación</h3>
                <p className="step-description">
                  Entendemos tus necesidades y definimos la arquitectura del proyecto
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3 className="step-title">Diseño y Prototipo</h3>
                <p className="step-description">
                  Creamos mockups y prototipos funcionales para validar la propuesta
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3 className="step-title">Desarrollo</h3>
                <p className="step-description">
                  Implementamos la solución con las mejores prácticas y tecnologías
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <div className="step-content">
                <h3 className="step-title">Testing y Lanzamiento</h3>
                <p className="step-description">
                  Probamos exhaustivamente y desplegamos tu proyecto al mundo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="portfolio-cta">
        <div className="portfolio-cta-container">
          <div className="cta-content">
            <h2 className="cta-title">
              ¿Listo para tu próximo proyecto?
            </h2>
            <p className="cta-description">
              Contáctanos y platiquemos sobre cómo podemos ayudarte a alcanzar tus objetivos digitales
            </p>
            <div className="cta-buttons">
              <Link 
                href="/contacto"
                className="portfolio-cta-button primary large"
              >
                Iniciar mi proyecto
              </Link>
              <Link 
                href="/portafolio"
                className="portfolio-cta-button secondary large"
              >
                Ver más proyectos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
