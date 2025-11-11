import LoadingLink from '@/components/shared/loading-link';
import React from 'react';
import Image from 'next/image';
import { 
  FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaMapMarkerAlt, 
  FaPhoneAlt, FaEnvelope, FaClock, FaChevronRight
} from 'react-icons/fa';
import '@/styles/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      {/* Línea decorativa superior */}
      <div className="footer-top-line" />

      {/* Luces decorativas */}
      <div className="footer-light footer-light-green" />
      <div className="footer-light footer-light-teal" />

      {/* Contenido principal */}
      <div className="footer-container">
        <div className="footer-grid">
          
          {/* Logo y descripción */}
          <div className="footer-logo-col">
            <div className="footer-logo-container">
              <div className="footer-logo-flex">
                <div className="footer-logo-icon">
                    <Image 
  src="/favicon.svg" 
  alt="Logo Sirius" 
    width={80} 
    height={80} 
    className="footer-logo-image"
  />
                </div>
                <h2 className="footer-logo-text">
                  Sirius
                </h2>
              </div>
              <span className="footer-logo-divider" />
            </div>
            <p className="footer-description">
              Impulsamos tu crecimiento con soluciones digitales estratégicas: desarrollo web, automatización y marketing inteligente.
            </p>
            <div className="footer-social-icons">
              {[
                { href: "https://facebook.com/codeinvestcr", icon: FaFacebookF, color: "#3B82F6" },
                { href: "https://instagram.com/codeinvestcr", icon: FaInstagram, color: "#E1306C" },
                { href: "https://linkedin.com/company/codeinvestcr", icon: FaLinkedinIn, color: "#0A66C2" },
                { href: "#", icon: FaTwitter, color: "#1DA1F2" }
              ].map(({ href, icon: Icon, color }, i) => (
                <a 
                  key={i} 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-social-icon"
                >
                  <Icon className="footer-social-icon-svg" style={{ color }} />
                </a>
              ))}
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="footer-links-col">
            <h3 className="footer-links-title">
              <FaChevronRight className="footer-links-title-icon" />
              Enlaces Rápidos
            </h3>
            <ul className="footer-links-list">
              {[
                { name: "Inicio", link: "/" },
                { name: "Nosotros", link: "/nosotros" },
                { name: "Servicios", link: "/servicios" },
                { name: "Portafolio", link: "/portafolio" },
                { name: "Blog", link: "/blog" },
                { name: "Contacto", link: "/contacto" }
              ].map(({ name, link }, i) => (
                <li key={i} className="footer-links-item">
                  <LoadingLink href={link} className="footer-link">
                    <span className="footer-link-bullet"></span>
                    {name}
                  </LoadingLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div className="footer-links-col">
            <h3 className="footer-links-title">
              <FaChevronRight className="footer-links-title-icon" />
              Servicios
            </h3>
            <ul className="footer-links-list">
              {[
                { name: "Desarrollo Web", link: "/servicios/desarrollo-web" },
                { name: "Marketing Digital", link: "/servicios/marketing-digital" },
                { name: "Diseño UI/UX", link: "/servicios/diseno-ui-ux" },
                { name: "E-commerce", link: "/servicios/ecommerce" },
                { name: "Consultoría Tecnológica", link: "/servicios/consultoria-tecnologica" },
                { name: "Hosting & Dominio", link: "/servicios/hosting-dominio" }
              ].map(({ name, link }, i) => (
                <li key={i} className="footer-links-item">
                  <LoadingLink href={link} className="footer-link">
                    <span className="footer-link-bullet"></span>
                    {name}
                  </LoadingLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto y Newsletter */}
          <div className="footer-contact-col">
            <h3 className="footer-links-title">
              <FaChevronRight className="footer-links-title-icon" />
              Contacto
            </h3>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <FaMapMarkerAlt className="footer-contact-icon" /> 
                <span>San José, Costa Rica</span>
              </li>
              <li className="footer-contact-item">
                <FaPhoneAlt className="footer-contact-icon" /> +506 0000 0000
              </li>
              <li className="footer-contact-item">
                <FaEnvelope className="footer-contact-icon" /> contacto@siriusdigital.cr
              </li>
              <li className="footer-contact-item">
                <FaClock className="footer-contact-icon" /> Lun-Vie: 8:00 AM - 5:00 PM
              </li>
            </ul>

           
          </div>
        </div>

        {/* Línea divisoria inferior */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} Sirius. Todos los derechos reservados.</p>
          <div className="footer-bottom-links">
            <LoadingLink href="/terminos" className="footer-bottom-link">Términos</LoadingLink>
            <LoadingLink href="/privacidad" className="footer-bottom-link">Privacidad</LoadingLink>
            <LoadingLink href="/cookies" className="footer-bottom-link">Cookies</LoadingLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;