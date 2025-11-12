'use client';
import { services } from '@/data/services';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import '@/styles/services-section.css';

const ServiceIcons = {
  desarrollo: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  marketing: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  diseño: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
  ),
  consultoria: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  ecommerce: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  hosting: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
  ),
};

export default function ServicesSection() {
  const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set());
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const rafId = useRef<number | null>(null);
  const visibleSetRef = useRef<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement | null>(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      const updatedVisibleSet = new Set(visibleSetRef.current);

      entries.forEach(entry => {
        const index = itemsRef.current.indexOf(entry.target as HTMLDivElement);
        if (entry.isIntersecting) {
          updatedVisibleSet.add(index);
        } else {
          updatedVisibleSet.delete(index);
        }
      });

      visibleSetRef.current = updatedVisibleSet;
      setVisibleIndices(new Set(updatedVisibleSet));

      // Ahora decide qué índice activar con la regla que diste:
      const visibleArray = Array.from(updatedVisibleSet).sort((a, b) => a - b);
      console.log('Índices visibles:', visibleArray);
      console.log('Active index actual:', activeIndex !== null ? activeIndex + ' (' + services[activeIndex].title + ')' : 'null');
      if (visibleArray.length === 2) {
        // Si hay dos visibles:
        if (activeIndex !== null && activeIndex < 3) {
          setActiveIndex(visibleArray[0]); // primer objeto visible
        } else {
          setActiveIndex(visibleArray[1]); // segundo objeto visible
        }
      } else if (visibleArray.length === 3) {
        // Si hay tres visibles, activamos el del medio
        setActiveIndex(visibleArray[1]);

      }
      else if (visibleArray.length === 4) {
        // Si solo hay uno visible, lo activamos
        setActiveIndex(visibleArray[1]);
      } else if (visibleArray.length > 0) {
        // En cualquier otro caso activamos el primero visible
        setActiveIndex(visibleArray[0]);
      }
    },
    { root: null, rootMargin: '0px', threshold: 0.1 }
  );

  itemsRef.current.forEach(item => {
    if (item) observer.observe(item);
  });

  return () => {
    itemsRef.current.forEach(item => {
      if (item) observer.unobserve(item);
    });
  };
}, [activeIndex]);  // Nota: si quieres que se reactive cuando cambie activeIndex


useEffect(() => {
  console.log('[Scroll] Montando event listeners');

  const onScroll = () => {
    console.log('[Scroll] Scroll event detectado');
    if (rafId.current) {
      window.cancelAnimationFrame(rafId.current);
    }

    rafId.current = window.requestAnimationFrame(() => {
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;

      console.log(`[Scroll] Centro viewport (relativo): ${viewportCenter.toFixed(2)}px`);

      let closestIndex = -1;
      let closestDistance = Infinity;

      itemsRef.current.forEach((item, index) => {
        if (!item) {
          console.log(`[Scroll] Ítem ${index} no referenciado aún`);
          return;
        }

        const rect = item.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const distance = Math.abs(itemCenter - viewportCenter);

        console.log(`[Scroll] Servicio ${index} (${services[index].title}): centro viewport=${itemCenter.toFixed(2)}, distancia=${distance.toFixed(2)}`);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      if (closestIndex !== -1) {
        setActiveIndex(prev => {
          if (prev !== closestIndex) {
            console.log(`[Scroll] Cambiando activeIndex: ${prev} → ${closestIndex} (${services[closestIndex].title})`);
            return closestIndex;
          }
          return prev;
        });
      }

    });
  };

  // Llamada inicial para setear activeIndex
  onScroll();

  window.addEventListener('scroll', onScroll);
  window.addEventListener('resize', onScroll);

  return () => {
    console.log('[Scroll] Limpiando event listeners');
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
    if (rafId.current) {
      window.cancelAnimationFrame(rafId.current);
    }
  };
}, []);
useEffect(() => {
  console.log('scrollHeight body:', document.body.scrollHeight);
  console.log('window innerHeight:', window.innerHeight);
}, []);


  useEffect(() => {
    console.log(`[Estado] Active index actualizado: ${activeIndex !== null ? activeIndex + ' (' + services[activeIndex].title + ')' : 'null'}`);
  }, [activeIndex]);

    return (
      <section className="services-section" ref={sectionRef}>
        <div className="services-inner">
          <aside className="services-sidebar">
            <div className="services-header">
              <h3 className="services-subtitle">Nuestros</h3>
              <h2 className="services-title">Servicios</h2>
              <div className="header-content">
                <div className="title-decoration">
                  <div className="decoration-line"></div>
                  <div className="decoration-dot"></div>
                  <div className="decoration-line"></div>
                </div>
              </div>
            </div>
          </aside>
          <div className="services-grid">
      {services.map((service, index) => (
        <div
          key={service.id}
          ref={el => {
            itemsRef.current[index] = el;
          }}
          className={`service-item ${
            visibleIndices.has(index) ? 'visible' : ''
          } ${activeIndex === index ? 'active' : ''}`}
        >
          <div className="service-card">
            <div className="service-icon-container">
              <div className="icon-backdrop"></div>
              <div className="service-icon">
                {ServiceIcons[service.icon as keyof typeof ServiceIcons]}
              </div>
            </div>
            <h3 className="service-name">{service.title}</h3>
            <div className="service-hover-content">
              <Link href={`/servicios/${service.slug}`} className="service-button">
                Saber más
              </Link>
            </div>
          </div>
        </div>
      ))}
          </div>
        </div>
      </section>

  );
}
