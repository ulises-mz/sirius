'use client';
import { useState, useEffect } from "react";
import "@/styles/header.css";
import { useScrollToTop } from "./ScrollToTop";
import LoadingLink from "@/components/shared/loading-link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollToTop } = useScrollToTop();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };

    handleResize(); // Verificar al montar
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Transparencia en top y fondo sólido apenas se mueve (umbral muy pequeño)
  useEffect(() => {
    const getScrollTop = () => {
      if (typeof window === 'undefined') return 0;
      // Compatibilidad: distintos navegadores/estructuras pueden usar html o body
      return window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    };

    const onScroll = () => {
      setScrolled(getScrollTop() > 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    // Fallbacks para entornos con contenedores scroll personalizados
    document.addEventListener("scroll", onScroll, { passive: true, capture: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("scroll", onScroll, { capture: true } as any);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  
  // Función para cerrar menú y hacer scroll al top cuando se navega
  const handleNavigation = () => {
    closeMenu();
    // Pequeño delay para que se cierre el menú antes del scroll
    setTimeout(() => scrollToTop(), 100);
  };
  
  // Manejador para navegación desktop (sin cerrar menú)
  const handleDesktopNavigation = () => {
    scrollToTop();
  };

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : "is-top"}`}>
      <div className="header-container">
        {/* Logo */}
        <div className="logo-container">
          <LoadingLink href="/" className="logo-link" onClick={handleNavigation} aria-label="Inicio - Sirius">
            {/* SVG como máscara para permitir colorear con CSS/gradiente */}
            <span className="logo-image-mask" aria-hidden="true" />
          </LoadingLink>
        </div>

        {/* Menú principal - visible en desktop por CSS */}
        <nav className="main-nav">
          <LoadingLink href="/" className="nav-link" onClick={handleDesktopNavigation}>
            Inicio
          </LoadingLink>
          <LoadingLink href="/servicios" className="nav-link" onClick={handleDesktopNavigation}>
            Servicios
          </LoadingLink>
          <LoadingLink href="/portafolio" className="nav-link" onClick={handleDesktopNavigation}>
            Portafolio
          </LoadingLink>
          <LoadingLink href="/nosotros" className="nav-link" onClick={handleDesktopNavigation}>
            Nosotros
          </LoadingLink>
          <LoadingLink href="/blog" className="nav-link" onClick={handleDesktopNavigation}>
            Blog
          </LoadingLink>
          <LoadingLink href="/contacto" className="nav-link" onClick={handleDesktopNavigation}>
            Contacto
          </LoadingLink>
        </nav>

        {/* Botón CTA - visible en desktop por CSS */}
        <div className="cta-container">
          <LoadingLink href="/agendar" className="cta-button" onClick={handleDesktopNavigation}>
            Agendar Consultoría
          </LoadingLink>
        </div>

        {/* Botón hamburguesa - solo visible en móvil por CSS */}
        <button 
          className={`hamburger-button ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Menú móvil - solo visible cuando está abierto */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <LoadingLink href="/" className="mobile-link" onClick={handleNavigation}>
          Inicio
        </LoadingLink>
        <LoadingLink href="/servicios" className="mobile-link" onClick={handleNavigation}>
          Servicios
        </LoadingLink>
        <LoadingLink href="/portafolio" className="mobile-link" onClick={handleNavigation}>
          Portafolio
        </LoadingLink>
        <LoadingLink href="/nosotros" className="mobile-link" onClick={handleNavigation}>
          Nosotros
        </LoadingLink>
        <LoadingLink href="/blog" className="mobile-link" onClick={handleNavigation}>
          Blog
        </LoadingLink>
        <LoadingLink href="/contacto" className="mobile-link" onClick={handleNavigation}>
          Contacto
        </LoadingLink>
        <LoadingLink href="/agendar" className="mobile-cta" onClick={handleNavigation}>
          Agendar Consultoría
        </LoadingLink>
      </div>
    </header>
  );
}