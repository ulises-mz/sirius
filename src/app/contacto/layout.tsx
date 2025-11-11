import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto | CodeINVEST - Agencia Digital en Costa Rica',
  description: 'Contáctanos para transformar tu negocio con soluciones digitales personalizadas. Consulta gratuita disponible. Desarrollo web, apps móviles y automatización en Costa Rica.',
  keywords: [
    'contacto CodeINVEST',
    'agencia digital Costa Rica',
    'desarrollo web San José',
    'aplicaciones móviles CR',
    'consulta gratuita desarrollo web',
    'cotización desarrollo web',
    'contacto apps móviles',
    'presupuesto e-commerce',
    'automatización Costa Rica',
    'marketing digital CR',
    'consultoría digital',
    'agencia desarrollo Costa Rica'
  ],
  openGraph: {
    title: 'Contacto | CodeINVEST - Agencia Digital en Costa Rica',
    description: 'Contáctanos para transformar tu negocio con soluciones digitales personalizadas. Consulta gratuita disponible.',
    type: 'website',
    locale: 'es_CR',
    url: 'https://www.codeinvestcr.com/contacto',
    siteName: 'CodeINVEST',
    images: [
      {
        url: '/images/og/contact-page-seo.webp',
        width: 1200,
        height: 630,
        alt: 'Contacto CodeINVEST Costa Rica',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contacto | CodeINVEST - Agencia Digital en Costa Rica',
    description: 'Contáctanos para transformar tu negocio con soluciones digitales personalizadas.',
    images: ['/images/social/contact-twitter-card.webp'],
  },
  alternates: {
    canonical: 'https://www.codeinvestcr.com/contacto',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
