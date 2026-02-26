// src/app/agendar/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agendar Cita - Consultoría Gratuita | Sirius',
  description: 'Agenda una consultoría gratuita con nuestros expertos en desarrollo web, aplicaciones móviles y soluciones digitales. Disponible reuniones y consultorías personalizadas.',
  keywords: [
    'agendar cita Sirius',
    'consultoría gratuita Costa Rica',
    'reunión desarrollo web',
    'consultoría digital',
    'agendar consultoría',
    'reunión gratis desarrollo',
    'consultores digitales Costa Rica'
  ],
  openGraph: {
    title: 'Agendar Cita - Sirius Costa Rica',
    description: 'Agenda tu consultoría gratuita con expertos en desarrollo web y soluciones digitales.',
    type: 'website',
    locale: 'es_CR',
    url: 'https://www.siriusx.net/agendar',
    siteName: 'Sirius',
    images: [
      {
        url: '/images/og-agendar.png',
        width: 1200,
        height: 630,
        alt: 'Sirius - Agendar Consultoría',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agendar Cita - Sirius Costa Rica',
    description: 'Agenda tu consultoría gratuita con expertos en desarrollo web y soluciones digitales.',
    images: ['/images/twitter-agendar.png'],
  },
  alternates: {
    canonical: 'https://www.siriusx.net/agendar',
  },
};

export default function AgendarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
