import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portafolio | Sirius - Proyectos Exitosos en Costa Rica',
  description: 'Conoce nuestros proyectos exitosos: sitios web, aplicaciones móviles y e-commerce desarrollados para empresas costarricenses. Casos de estudio reales con resultados comprobados.',
  keywords: [
    'portafolio Sirius',
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
    title: 'Portafolio | Sirius - Proyectos Exitosos',
    description: 'Descubre nuestros proyectos exitosos: sitios web, apps móviles y e-commerce para empresas costarricenses con resultados comprobados.',
    type: 'website',
    locale: 'es_CR',
    url: 'https://www.siriusx.net/portafolio',
    siteName: 'Sirius',
    images: [
      {
        url: '/images/og/portfolio-page-seo.webp',
        width: 1200,
        height: 630,
        alt: 'Portafolio Sirius Costa Rica',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portafolio | Sirius Costa Rica',
    description: 'Proyectos digitales exitosos para empresas costarricenses con resultados comprobados.',
    images: ['/images/social/portfolio-twitter-card.webp'],
  },
  alternates: {
    canonical: 'https://www.siriusx.net/portafolio',
  },
};

export default function PortafolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
