import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto | Sirius - Agencia Digital en Costa Rica',
  description: 'Contáctanos para transformar tu negocio con soluciones digitales personalizadas. Consulta gratuita disponible. Desarrollo web, apps móviles y automatización en Costa Rica.',
  keywords: [
    'contacto Sirius',
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
    title: 'Contacto | Sirius - Agencia Digital en Costa Rica',
    description: 'Contáctanos para transformar tu negocio con soluciones digitales personalizadas. Consulta gratuita disponible.',
    type: 'website',
    locale: 'es_CR',
    url: 'https://www.siriusx.net/contacto',
    siteName: 'Sirius',
    images: [
      {
        url: '/images/og/contact-page-seo.webp',
        width: 1200,
        height: 630,
        alt: 'Contacto Sirius Costa Rica',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contacto | Sirius - Agencia Digital en Costa Rica',
    description: 'Contáctanos para transformar tu negocio con soluciones digitales personalizadas.',
    images: ['/images/social/contact-twitter-card.webp'],
  },
  alternates: {
    canonical: 'https://www.siriusx.net/contacto',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
