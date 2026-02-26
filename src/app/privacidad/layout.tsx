import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad - Sirius',
  description: 'Política de privacidad de Sirius. Nos comprometemos a proteger tu información personal y garantizar que su uso sea transparente y seguro, conforme a la Ley de Protección de la Persona frente al Tratamiento de sus Datos Personales (Ley 8968, Costa Rica).',
  keywords: [
    'política privacidad Sirius',
    'protección datos Costa Rica',
    'Ley 8968',
    'privacidad datos personales',
    'GDPR Costa Rica'
  ],
  robots: 'index, follow',
  openGraph: {
    title: 'Política de Privacidad - Sirius',
    description: 'Política de privacidad de Sirius. Conoce cómo protegemos y manejamos tu información personal.',
    url: 'https://www.siriusx.net/privacidad',
    type: 'website',
    images: [
      {
        url: 'https://www.siriusx.net/images/og-privacidad.jpg',
        width: 1200,
        height: 630,
        alt: 'Política de Privacidad Sirius',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Política de Privacidad - Sirius',
    description: 'Política de privacidad de Sirius. Conoce cómo protegemos tu información.',
    images: ['https://www.siriusx.net/images/og-privacidad.jpg'],
  },
  alternates: {
    canonical: 'https://www.siriusx.net/privacidad',
  },
};

export default function PrivacidadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
