import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Servicios Digitales | CodeINVEST - Desarrollo Web y Apps en Costa Rica',
  description: 'Servicios digitales especializados para empresas costarricenses: desarrollo web, aplicaciones móviles, e-commerce, automatización y marketing digital. Consulta gratuita.',
  keywords: [
    'servicios digitales Costa Rica',
    'desarrollo web San José',
    'aplicaciones móviles CR',
    'e-commerce Costa Rica',
    'automatización procesos',
    'marketing digital Costa Rica',
    'SEO profesional',
    'diseño UX/UI',
    'sistemas web personalizados',
    'apps nativas',
    'tiendas online profesionales',
    'consultoría digital CR'
  ],
  openGraph: {
    title: 'Servicios Digitales | CodeINVEST Costa Rica',
    description: 'Desarrollo web, apps móviles, e-commerce y automatización para empresas costarricenses. Consulta gratuita disponible.',
    type: 'website',
    locale: 'es_CR',
    url: 'https://www.codeinvestcr.com/servicios',
    siteName: 'CodeINVEST',
    images: [
      {
        url: '/images/og/services-page-seo.webp',
        width: 1200,
        height: 630,
        alt: 'Servicios Digitales CodeINVEST Costa Rica',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servicios Digitales | CodeINVEST Costa Rica',
    description: 'Desarrollo web, apps móviles, e-commerce y automatización para empresas costarricenses.',
    images: ['/images/social/services-twitter-card.webp'],
  },
  alternates: {
    canonical: 'https://www.codeinvestcr.com/servicios',
  },
};

export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
