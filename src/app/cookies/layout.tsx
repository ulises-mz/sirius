import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Cookies - CodeINVEST',
  description: 'Política de cookies de CodeINVEST. En CodeINVEST utilizamos cookies y tecnologías similares para mejorar la experiencia de navegación, garantizar el correcto funcionamiento de la plataforma y analizar el uso de nuestros servicios.',
  keywords: [
    'política cookies CodeINVEST',
    'cookies Costa Rica',
    'privacidad web',
    'gestión cookies'
  ],
  robots: 'index, follow',
  openGraph: {
    title: 'Política de Cookies - CodeINVEST',
    description: 'Política de cookies de CodeINVEST. Información sobre el uso de cookies en nuestro sitio web.',
    url: 'https://www.codeinvestcr.com/cookies',
    type: 'website',
    images: [
      {
        url: 'https://www.codeinvestcr.com/images/og-cookies.jpg',
        width: 1200,
        height: 630,
        alt: 'Política de Cookies CodeINVEST',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Política de Cookies - CodeINVEST',
    description: 'Política de cookies de CodeINVEST. Información sobre el uso de cookies.',
    images: ['https://www.codeinvestcr.com/images/og-cookies.jpg'],
  },
  alternates: {
    canonical: 'https://www.codeinvestcr.com/cookies',
  },
};

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
