import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portafolio | CodeINVEST - Proyectos Exitosos en Costa Rica',
  description: 'Conoce nuestros proyectos exitosos: sitios web, aplicaciones móviles y e-commerce desarrollados para empresas costarricenses. Casos de estudio reales con resultados comprobados.',
  keywords: [
    'portafolio CodeINVEST',
    'proyectos web Costa Rica',
    'casos de estudio desarrollo',
    'apps móviles CR',
    'e-commerce exitosos',
    'sitios web profesionales',
    'proyectos digitales Costa Rica',
    'desarrollo web casos éxito',
    'aplicaciones móviles exitosas',
    'tiendas online CR',
    'portfolio desarrollo web',
    'casos éxito digitales'
  ],
  openGraph: {
    title: 'Portafolio | CodeINVEST - Proyectos Exitosos',
    description: 'Descubre nuestros proyectos exitosos: sitios web, apps móviles y e-commerce para empresas costarricenses con resultados comprobados.',
    type: 'website',
    locale: 'es_CR',
    url: 'https://www.codeinvestcr.com/portafolio',
    siteName: 'CodeINVEST',
    images: [
      {
        url: '/images/og/portfolio-page-seo.webp',
        width: 1200,
        height: 630,
        alt: 'Portafolio CodeINVEST Costa Rica',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portafolio | CodeINVEST Costa Rica',
    description: 'Proyectos digitales exitosos para empresas costarricenses con resultados comprobados.',
    images: ['/images/social/portfolio-twitter-card.webp'],
  },
  alternates: {
    canonical: 'https://www.codeinvestcr.com/portafolio',
  },
};

export default function PortafolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
