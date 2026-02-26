import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Cookies - Sirius',
  description: 'Política de cookies de Sirius. En Sirius utilizamos cookies y tecnologías similares para mejorar la experiencia de navegación, garantizar el correcto funcionamiento de la plataforma y analizar el uso de nuestros servicios.',
  keywords: [
    'política cookies Sirius',
    'cookies Costa Rica',
    'privacidad web',
    'gestión cookies'
  ],
  robots: 'index, follow',
  openGraph: {
    title: 'Política de Cookies - Sirius',
    description: 'Política de cookies de Sirius. Información sobre el uso de cookies en nuestro sitio web.',
    url: 'https://www.siriusx.net/cookies',
    type: 'website',
    images: [
      {
        url: 'https://www.siriusx.net/images/og-cookies.jpg',
        width: 1200,
        height: 630,
        alt: 'Política de Cookies Sirius',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Política de Cookies - Sirius',
    description: 'Política de cookies de Sirius. Información sobre el uso de cookies.',
    images: ['https://www.siriusx.net/images/og-cookies.jpg'],
  },
  alternates: {
    canonical: 'https://www.siriusx.net/cookies',
  },
};

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
