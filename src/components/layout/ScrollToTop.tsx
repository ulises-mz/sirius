"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToTop() {
  const pathname = usePathname();

  // Función de scroll mejorada
  const scrollToTop = (smooth: boolean = true) => {
    try {
      // Método 1: scrollTo con comportamiento suave
      if (smooth && 'scrollTo' in window) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
        return;
      }

      // Método 2: scrollIntoView al body
      if (smooth) {
        const body = document.body;
        if (body && 'scrollIntoView' in body) {
          body.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start',
            inline: 'nearest'
          });
          return;
        }
      }

      // Método 3: Animación manual suave para mejor compatibilidad
      if (smooth) {
        const startPosition = window.pageYOffset;
        const distance = -startPosition;
        const duration = 800; // 800ms para animación suave
        let start: number | null = null;

        const step = (timestamp: number) => {
          if (start === null) start = timestamp;
          const progress = timestamp - start;
          const progressPercentage = Math.min(progress / duration, 1);
          
          // Función de easing para animación más natural
          const easeOutCubic = 1 - Math.pow(1 - progressPercentage, 3);
          
          window.scrollTo(0, startPosition + distance * easeOutCubic);
          
          if (progress < duration) {
            requestAnimationFrame(step);
          }
        };

        requestAnimationFrame(step);
        return;
      }

      // Fallback: scroll instantáneo
      window.scrollTo(0, 0);
      
    } catch (error) {
      console.warn('Error en scroll suave, usando fallback:', error);
      // Último recurso
      window.scrollTo(0, 0);
    }
  };

  // Efecto que se ejecuta cuando cambia la ruta
  useEffect(() => {
    // Pequeño delay para asegurar que la página se haya renderizado
    const timeoutId = setTimeout(() => {
      scrollToTop(true);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  // Agregar clase para smooth scroll al body cuando se monte el componente
  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;
    
    // Añadir clases para smooth scroll
    body.classList.add('smooth-scroll');
    html.classList.add('smooth-scroll');
    
    // Aplicar estilos adicionales
    html.style.scrollBehavior = 'smooth';
    body.style.scrollBehavior = 'smooth';

    // Cleanup
    return () => {
      body.classList.remove('smooth-scroll');
      html.classList.remove('smooth-scroll');
    };
  }, []);

  // Función exportable para uso manual
  useEffect(() => {
    // Añadir función global para uso en otros componentes
    (window as any).scrollToTopSmooth = scrollToTop;

    return () => {
      delete (window as any).scrollToTopSmooth;
    };
  }, []);

  return null; // Este componente no renderiza nada
}

// Hook personalizado para usar el scroll suave en otros componentes
export function useScrollToTop() {
  return {
    scrollToTop: (smooth: boolean = true) => {
      if (typeof window !== 'undefined' && (window as any).scrollToTopSmooth) {
        (window as any).scrollToTopSmooth(smooth);
      }
    }
  };
}
