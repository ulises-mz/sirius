"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { portfolioItems } from "@/data/portfolio";
import "@/styles/globals.css";
import "@/styles/portafolio-page.css";

export default function PortafolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [isLoadingCategory, setIsLoadingCategory] = useState(false);

  const categories = ["Todos", "Desarrollo Web", "Aplicaciones Móviles", "Transformación Digital", "Consultoría"];

  const filteredProjects = selectedCategory === "Todos" 
    ? portfolioItems 
    : portfolioItems.filter(item => {
        switch(selectedCategory) {
          case "Desarrollo Web":
            return item.technologies.some(tech => ['Next.js', 'React', 'WordPress'].includes(tech));
          case "Aplicaciones Móviles":
            return item.technologies.some(tech => ['Python', 'Node.js'].includes(tech)) && item.title.includes('Bot');
          case "Transformación Digital":
            return item.title.includes("InsightFlow") || item.title.includes("Rayca");
          case "Consultoría":
            return item.title.includes("Coach");
          default:
            return true;
        }
      });

  const handleCategoryChange = (category: string) => {
    if (category !== selectedCategory) {
      setIsLoadingCategory(true);
      setSelectedCategory(category);
      
      // Simular tiempo de carga para mostrar efecto
      setTimeout(() => {
        setIsLoadingCategory(false);
      }, 600);
    }
  };

  return (
    <div className="portafolio-page">
      {/* Header Section */}
      <section className="portafolio-header">
        <div className="portafolio-header-container">
          <h1 className="portafolio-title">NUESTROS PROYECTOS</h1>
          <p className="portafolio-subtitle">
            Una muestra de los trabajos innovadores que nuestra agencia ha desarrollado.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="portafolio-categories">
        <div className="portafolio-categories-container">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`portafolio-category-btn ${
                selectedCategory === category ? 'active' : ''
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="portafolio-projects">
        <div className="portafolio-projects-container">
          <div className={`portafolio-projects-grid ${isLoadingCategory ? 'loading' : ''}`}>
            {isLoadingCategory ? (
              // Loading skeleton cards
              Array.from({ length: 6 }).map((_, index) => (
                <div key={`skeleton-${index}`} className="portafolio-project-card skeleton-card">
                  <div className="skeleton-image"></div>
                  <div className="skeleton-content">
                    <div className="skeleton-title"></div>
                    <div className="skeleton-text"></div>
                    <div className="skeleton-text short"></div>
                    <div className="skeleton-tags">
                      <div className="skeleton-tag"></div>
                      <div className="skeleton-tag"></div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              filteredProjects.map((project) => (
                <div 
                  key={project.id}
                  className="portafolio-project-card"
                >
                <Link href={`/portafolio/${project.slug}`} className="portafolio-project-link">
                <div className="portafolio-project-image">
                  <Image
                    src={project.backgroundImage}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="portafolio-project-img"
                  />
                </div>
                <div className="portafolio-project-content">
                  <h3 className="portafolio-project-title">{project.title}</h3>
                  <p className="portafolio-project-description">{project.description}</p>
                  <div className="portafolio-project-technologies">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="tag tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="portafolio-project-footer">
                    <span className="portafolio-card-button primary">
                      Ver proyecto
                    </span>
                  </div>
                </div>
                </Link>
              </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Load More Button */}
      <section className="portafolio-load-more">
        <div className="portafolio-load-more-container">
          <Link 
            href="/contacto"
            className="portafolio-cta-button secondary"
          >
            Ver más proyectos
          </Link>
        </div>
      </section>

      {/* Process Section - Nueva */}
      <section className="portafolio-process-section">
        <div className="portafolio-process-container">
          <h2 className="portafolio-process-title">
            Nuestro proceso de trabajo
          </h2>
          <p className="portafolio-process-subtitle">
            Una metodología probada que garantiza resultados excepcionales en cada proyecto
          </p>
          <div className="portafolio-process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <div className="step-icon">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="step-title">Análisis y Estrategia</h3>
              <p className="step-description">
                Estudiamos tu negocio, competencia y objetivos para crear una estrategia digital personalizada
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-icon">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zM3 15a1 1 0 011-1h1a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1zm6-11a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V4zm6 3a1 1 0 011-1h1a1 1 0 011 1v7a1 1 0 01-1 1h-1a1 1 0 01-1-1V7z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="step-title">Diseño y Prototipo</h3>
              <p className="step-description">
                Creamos wireframes y diseños que priorizan la experiencia del usuario y conversión
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <div className="step-icon">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="step-title">Desarrollo y Optimización</h3>
              <p className="step-description">
                Programamos con las mejores tecnologías, optimizando velocidad, SEO y rendimiento
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <div className="step-icon">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="step-title">Lanzamiento y Soporte</h3>
              <p className="step-description">
                Publicamos tu proyecto y brindamos soporte continuo para garantizar el éxito
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="portafolio-urgency-section">
        <div className="portafolio-urgency-container">
          <div className="portafolio-urgency-badge">
            <svg className="urgency-icon" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"/>
            </svg>
            OFERTA LIMITADA
          </div>
          <h2 className="portafolio-urgency-title">
            ¡Solo quedan <span className="highlight">3 espacios</span> disponibles este mes!
          </h2>
          <p className="portafolio-urgency-description">
            Nuestro equipo está casi al máximo de capacidad. Agenda tu consulta gratuita ahora 
            y asegura tu lugar para empezar en <strong>septiembre 2025</strong>.
          </p>
          <div className="portafolio-urgency-stats">
            <div className="urgency-stat">
              <div className="stat-icon">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
              </div>
              <span className="urgency-stat-number">48h</span>
              <span className="urgency-stat-label">Respuesta garantizada</span>
            </div>
            <div className="urgency-stat">
              <div className="stat-icon">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <span className="urgency-stat-number">15+</span>
              <span className="urgency-stat-label">Proyectos este año</span>
            </div>
            <div className="urgency-stat">
              <div className="stat-icon">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <span className="urgency-stat-number">97%</span>
              <span className="urgency-stat-label">Clientes satisfechos</span>
            </div>
          </div>
          <div className="portafolio-urgency-buttons">
            <Link 
              href="/contacto"
              className="portafolio-cta-button primary urgent"
            >
              <svg className="button-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
              Agendar consulta GRATIS
            </Link>
            <a 
              href="https://wa.me/50661274805?text=Hola! Quiero información sobre sus servicios de desarrollo web"
              target="_blank"
              rel="noopener noreferrer"
              className="portafolio-cta-button secondary"
            >
              <svg className="button-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
              </svg>
              WhatsApp directo
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="portafolio-social-proof">
        <div className="portafolio-social-proof-container">
          <h2 className="portafolio-social-proof-title">
            Lo que dicen nuestros clientes
          </h2>
          <div className="portafolio-testimonials-grid">
            <div className="portafolio-testimonial-card">
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="star-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="testimonial-text">
                "CodeINVEST transformó completamente mi negocio. En 3 meses aumenté mis ventas un 150% gracias a mi nueva página web."
              </p>
              <div className="testimonial-author">
                <strong>María González</strong> - Coach Personal
              </div>
            </div>
            <div className="portafolio-testimonial-card">
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="star-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="testimonial-text">
                &quot;Profesionales, rápidos y con excelente atención. Mi tienda online funciona perfecto y las ventas no paran de crecer.&quot;
              </p>
              <div className="testimonial-author">
                <strong>Carlos Méndez</strong> - Karticos Store
              </div>
            </div>
            <div className="portafolio-testimonial-card">
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="star-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="testimonial-text">
                &quot;La mejor inversión que hemos hecho. Nuestro sistema de reservas automatizado nos ahorra 10 horas semanales.&quot;
              </p>
              <div className="testimonial-author">
                <strong>Ana Rodríguez</strong> - LazerZone
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section - Nueva */}
      <section className="portafolio-technologies-section">
        <div className="portafolio-technologies-container">
          <h2 className="portafolio-technologies-title">
            Tecnologías que dominamos
          </h2>
          <p className="portafolio-technologies-subtitle">
            Utilizamos las herramientas más modernas y confiables del mercado
          </p>
          <div className="portafolio-tech-categories">
            <div className="tech-category">
              <h3 className="tech-category-title">Frontend</h3>
              <div className="tech-items">
                <div className="tech-item">
                  <svg className="tech-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                  <span>React & Next.js</span>
                </div>
                <div className="tech-item">
                  <svg className="tech-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                  </svg>
                  <span>Tailwind CSS</span>
                </div>
                <div className="tech-item">
                  <svg className="tech-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                  <span>TypeScript</span>
                </div>
              </div>
            </div>
            <div className="tech-category">
              <h3 className="tech-category-title">Backend</h3>
              <div className="tech-items">
                <div className="tech-item">
                  <svg className="tech-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                  <span>Node.js</span>
                </div>
                <div className="tech-item">
                  <svg className="tech-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd"/>
                  </svg>
                  <span>MongoDB</span>
                </div>
                <div className="tech-item">
                  <svg className="tech-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd"/>
                  </svg>
                  <span>PostgreSQL</span>
                </div>
              </div>
            </div>
            <div className="tech-category">
              <h3 className="tech-category-title">CMS & E-commerce</h3>
              <div className="tech-items">
                <div className="tech-item">
                  <svg className="tech-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zM3 15a1 1 0 011-1h1a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1zm6-11a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V4zm6 3a1 1 0 011-1h1a1 1 0 011 1v7a1 1 0 01-1 1h-1a1 1 0 01-1-1V7z" clipRule="evenodd"/>
                  </svg>
                  <span>WordPress</span>
                </div>
                <div className="tech-item">
                  <svg className="tech-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"/>
                  </svg>
                  <span>WooCommerce</span>
                </div>
                <div className="tech-item">
                  <svg className="tech-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd"/>
                  </svg>
                  <span>Stripe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Consolidada */}
      <section className="portafolio-final-cta">
        <div className="portafolio-final-cta-container">
          <div className="final-cta-badge">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2V7zm0 8h2v2h-2v-2z"/>
            </svg>
            ¡Oferta limitada hasta fin de mes!
          </div>
          <h2 className="final-cta-title">
            ¿Listo para transformar tu negocio?
          </h2>
          <p className="final-cta-description">
            No dejes que tu competencia se adelante. Cada día sin una presencia digital profesional 
            es dinero que pierdes. <strong>Agenda tu consulta gratuita ahora</strong> y descubre cómo 
            podemos hacer crecer tu negocio.
          </p>
          
          <div className="final-cta-highlights">
            <div className="cta-highlight">
              <svg className="highlight-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
              </svg>
              <span>Respuesta en 48h</span>
            </div>
            <div className="cta-highlight">
              <svg className="highlight-icon" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span>97% clientes satisfechos</span>
            </div>
            <div className="cta-highlight">
              <svg className="highlight-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
              </svg>
              <span>Desarrollo en 2-4 semanas</span>
            </div>
          </div>

          <div className="final-cta-contact">
            <div className="contact-option primary-contact">
              <div className="contact-icon-large">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </div>
              <div className="contact-details">
                <h3>Llama ahora</h3>
                <p className="contact-number">+506 61274805</p>
                <small>Respondemos al instante</small>
              </div>
            </div>
            
            <div className="contact-option">
              <div className="contact-icon-large">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
                </svg>
              </div>
              <div className="contact-details">
                <h3>WhatsApp</h3>
                <a 
                  href="https://wa.me/50661274805?text=Hola! Vi su portafolio y quiero información sobre sus servicios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  Mensaje directo
                </a>
                <small>Respuesta inmediata</small>
              </div>
            </div>
          </div>

          <div className="final-cta-buttons">
            <Link 
              href="/contacto"
              className="portafolio-cta-button primary massive"
            >
              <svg className="button-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
              AGENDAR CONSULTA GRATUITA
            </Link>
            <p className="final-guarantee">
              <svg className="check-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              100% gratuita • Sin compromisos • Respuesta garantizada
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
