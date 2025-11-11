// src/app/agendar/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agendar Cita - Consultoría Gratuita | CodeINVEST',
  description: 'Agenda una consultoría gratuita con nuestros expertos en desarrollo web, aplicaciones móviles y soluciones digitales. Disponible reuniones y consultorías personalizadas.',
  keywords: [
    'agendar cita CodeINVEST',
    'consultoría gratuita Costa Rica',
    'reunión desarrollo web',
    'consultoría digital',
    'agendar consultoría',
    'reunión gratis desarrollo',
    'consultores digitales Costa Rica'
  ],
  openGraph: {
    title: 'Agendar Cita - CodeINVEST Costa Rica',
    description: 'Agenda tu consultoría gratuita con expertos en desarrollo web y soluciones digitales.',
    type: 'website',
    locale: 'es_CR',
    url: 'https://www.codeinvestcr.com/agendar',
    siteName: 'CodeINVEST',
    images: [
      {
        url: '/images/og-agendar.png',
        width: 1200,
        height: 630,
        alt: 'CodeINVEST - Agendar Consultoría',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agendar Cita - CodeINVEST Costa Rica',
    description: 'Agenda tu consultoría gratuita con expertos en desarrollo web y soluciones digitales.',
    images: ['/images/twitter-agendar.png'],
  },
  alternates: {
    canonical: 'https://www.codeinvestcr.com/agendar',
  },
};

export default function AgendarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
