"use client";
import Link from "next/link";
import "@/styles/globals.css";
import "@/styles/nosotros-page-new.css";

const teamMembers = [
  {
    name: "Carlos Rodríguez",
    role: "CEO & Full Stack Developer",
    description: "Especialista en desarrollo web y móvil con más de 8 años de experiencia. Apasionado por crear soluciones tecnológicas que transforman negocios.",
    skills: ["React", "Node.js", "Next.js", "React Native", "Python"],
    icon: "user-gear"
  },
  {
    name: "María González",
    role: "UX/UI Designer",
    description: "Diseñadora creativa enfocada en experiencias de usuario excepcionales. Experta en investigación de usuarios y diseño centrado en el humano.",
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping", "Design Systems"],
    icon: "palette"
  },
  {
    name: "José Fernández",
    role: "Digital Marketing Specialist",
    description: "Estratega digital con experiencia en marketing automation y growth hacking. Especialista en campañas que generan resultados medibles.",
    skills: ["Google Ads", "Facebook Ads", "SEO", "Analytics", "Email Marketing"],
    icon: "chart-line"
  }
];

const values = [
  {
    icon: "target",
    title: "Enfoque en Resultados",
    description: "Cada proyecto está diseñado para generar un impacto real y medible en tu negocio."
  },
  {
    icon: "rocket",
    title: "Innovación Constante",
    description: "Utilizamos las últimas tecnologías y mejores prácticas para mantenerte a la vanguardia."
  },
  {
    icon: "handshake",
    title: "Partnership Verdadero",
    description: "No solo somos proveedores, somos tu socio estratégico en el crecimiento digital."
  },
  {
    icon: "zap",
    title: "Agilidad y Calidad",
    description: "Entregamos proyectos de alta calidad en tiempos record sin comprometer la excelencia."
  }
];

const stats = [
  { number: "50+", label: "Proyectos Exitosos" },
  { number: "3+", label: "Años de Experiencia" },
  { number: "98%", label: "Satisfacción del Cliente" },
  { number: "24/7", label: "Soporte Disponible" }
];

const timeline = [
  {
    year: "2021",
    title: "Fundación de CodeINVEST",
    description: "Iniciamos con la visión de democratizar la tecnología para empresas costarricenses."
  },
  {
    year: "2022",
    title: "Primeros 20 Proyectos",
    description: "Consolidamos nuestro portafolio con sitios web y aplicaciones exitosas."
  },
  {
    year: "2023",
    title: "Expansión de Servicios",
    description: "Agregamos servicios de marketing digital y automatización de procesos."
  },
  {
    year: "2024",
    title: "Reconocimiento Nacional",
    description: "Nos posicionamos como una de las agencias digitales más innovadoras de Costa Rica."
  }
];

export default function NosotrosPage() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "user-gear":
        return (
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"/>
        );
      case "palette":
        return (
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"/>
        );
      case "chart-line":
        return (
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/>
        );
      case "target":
        return (
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M21 10.5a9 9 0 11-18 0 9 9 0 0118 0z"/>
        );
      case "rocket":
        return (
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
        );
      case "handshake":
        return (
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"/>
        );
      case "zap":
        return (
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/>
        );
      case "check":
        return (
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
        );
      case "globe":
        return (
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3s-4.5 4.03-4.5 9 2.015 9 4.5 9z"/>
        );
      case "code":
        return (
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/>
        );
      case "trending-up":
        return (
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/>
        );
      case "users":
        return (
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/>
        );
      default:
        return (
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        );
    }
  };

  return (
    <div className="nosotros-page">
      {/* Header Section */}
      <section className="nosotros-header">
        <div className="nosotros-header-container">
          <h1 className="nosotros-title">SOBRE NOSOTROS</h1>
          <p className="nosotros-subtitle">
            Una agencia digital costarricense especializada en transformar ideas en soluciones tecnológicas que impulsan el crecimiento de los negocios.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="nosotros-stats-section">
        <div className="nosotros-stats-container">
          <div className="nosotros-stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="nosotros-stat">
                <div className="nosotros-stat-number">
                  {stat.number}
                </div>
                <div className="nosotros-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="nosotros-mission-section">
        <div className="nosotros-mission-container">
          <div className="nosotros-mission-grid">
            <div className="nosotros-mission-block">
              <h2>
                Nuestra Misión
              </h2>
              <p className="nosotros-mission-text">
                Democratizar el acceso a la tecnología digital para empresas costarricenses, 
                proporcionando soluciones innovadoras y accesibles que impulsen su crecimiento 
                y competitividad en el mercado global.
              </p>
              <p className="nosotros-mission-text">
                Creemos que cada negocio, sin importar su tamaño, merece tener acceso a 
                herramientas digitales de primera clase que les permitan prosperar en la 
                era digital.
              </p>
            </div>
            <div className="nosotros-mission-block">
              <h2>
                Nuestra Visión
              </h2>
              <p className="nosotros-mission-text">
                Ser la agencia digital líder en Costa Rica, reconocida por nuestra 
                capacidad de transformar negocios a través de soluciones tecnológicas 
                innovadoras y un servicio excepcional.
              </p>
              <p className="nosotros-mission-text">
                Aspiramos a ser el socio estratégico preferido de las empresas que buscan 
                evolucionar digitalmente, contribuyendo al desarrollo tecnológico del país 
                y posicionando a Costa Rica como un referente en innovación digital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="nosotros-values-section">
        <div className="nosotros-values-container">
          <h2 className="nosotros-values-title">
            Nuestros Valores
          </h2>
          <div className="nosotros-values-grid">
            {values.map((value, index) => (
              <div key={index} className="nosotros-value-card">
                <div className="nosotros-value-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    {getIcon(value.icon)}
                  </svg>
                </div>
                <div className="nosotros-value-content">
                  <h3 className="nosotros-value-title">{value.title}</h3>
                  <p className="nosotros-value-description">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="nosotros-team-section">
        <div className="nosotros-team-container">
          <h2 className="nosotros-team-title">
            Conoce al Equipo
          </h2>
          <div className="nosotros-team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="nosotros-team-card">
                <div className="nosotros-team-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    {getIcon(member.icon)}
                  </svg>
                </div>
                <div className="nosotros-team-content">
                  <h3 className="nosotros-team-name">{member.name}</h3>
                  <div className="nosotros-team-role">{member.role}</div>
                  <p className="nosotros-team-description">{member.description}</p>
                  <div className="nosotros-team-skills">
                    <h4>Especialidades:</h4>
                    <div className="nosotros-team-skills-list">
                      {member.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="nosotros-team-skill"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="nosotros-timeline-section">
        <div className="nosotros-timeline-container">
          <h2 className="nosotros-timeline-title">
            Nuestra Historia
          </h2>
          <div className="nosotros-timeline-list">
            {timeline.map((item, index) => (
              <div key={index} className="nosotros-timeline-item">
                <div className="nosotros-timeline-icon">
                  {item.year}
                </div>
                <div className="nosotros-timeline-content">
                  <h3 className="nosotros-timeline-item-title">{item.title}</h3>
                  <p className="nosotros-timeline-item-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="nosotros-why-section">
        <div className="nosotros-why-container">
          <h2 className="nosotros-why-title">
            ¿Por qué elegir CodeINVEST?
          </h2>
          <div className="nosotros-why-grid">
            <div className="nosotros-why-features">
              <div className="nosotros-why-feature">
                <div className="nosotros-why-feature-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    {getIcon("globe")}
                  </svg>
                </div>
                <div className="nosotros-why-feature-content">
                  <h3>Experiencia Local</h3>
                  <p>Conocemos el mercado costarricense y entendemos las necesidades específicas de las empresas locales.</p>
                </div>
              </div>

              <div className="nosotros-why-feature">
                <div className="nosotros-why-feature-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    {getIcon("code")}
                  </svg>
                </div>
                <div className="nosotros-why-feature-content">
                  <h3>Tecnología Actualizada</h3>
                  <p>Utilizamos las últimas tecnologías y frameworks para garantizar soluciones modernas y escalables.</p>
                </div>
              </div>

              <div className="nosotros-why-feature">
                <div className="nosotros-why-feature-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    {getIcon("trending-up")}
                  </svg>
                </div>
                <div className="nosotros-why-feature-content">
                  <h3>ROI Comprobado</h3>
                  <p>Nuestros proyectos están diseñados para generar un retorno de inversión medible y sostenible.</p>
                </div>
              </div>

              <div className="nosotros-why-feature">
                <div className="nosotros-why-feature-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    {getIcon("users")}
                  </svg>
                </div>
                <div className="nosotros-why-feature-content">
                  <h3>Soporte Personalizado</h3>
                  <p>Ofrecemos acompañamiento continuo y soporte técnico especializado en español.</p>
                </div>
              </div>
            </div>
            
            <div className="nosotros-why-commitment">
              <h3>Nuestro Compromiso</h3>
              <div className="nosotros-why-commitment-list">
                <div className="nosotros-why-commitment-item">
                  <div className="nosotros-why-commitment-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      {getIcon("check")}
                    </svg>
                  </div>
                  <span className="nosotros-why-commitment-text">Entrega puntual garantizada</span>
                </div>
                <div className="nosotros-why-commitment-item">
                  <div className="nosotros-why-commitment-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      {getIcon("check")}
                    </svg>
                  </div>
                  <span className="nosotros-why-commitment-text">Comunicación transparente</span>
                </div>
                <div className="nosotros-why-commitment-item">
                  <div className="nosotros-why-commitment-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      {getIcon("check")}
                    </svg>
                  </div>
                  <span className="nosotros-why-commitment-text">Calidad sin compromisos</span>
                </div>
                <div className="nosotros-why-commitment-item">
                  <div className="nosotros-why-commitment-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      {getIcon("check")}
                    </svg>
                  </div>
                  <span className="nosotros-why-commitment-text">Soporte post-lanzamiento</span>
                </div>
                <div className="nosotros-why-commitment-item">
                  <div className="nosotros-why-commitment-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      {getIcon("check")}
                    </svg>
                  </div>
                  <span className="nosotros-why-commitment-text">Precios justos y competitivos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="nosotros-cta-section">
        <div className="nosotros-cta-container">
          <h2 className="nosotros-cta-title">
            ¿Listo para conocernos mejor?
          </h2>
          <p className="nosotros-cta-description">
            Agenda una videollamada gratuita y descubre cómo podemos impulsar tu negocio hacia el éxito digital.
          </p>
          <div className="nosotros-cta-buttons">
            <Link 
              href="/contacto"
              className="nosotros-cta-button primary"
            >
              Agenda una reunión
            </Link>
            <Link 
              href="/servicios"
              className="nosotros-cta-button secondary"
            >
              Ver servicios
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
