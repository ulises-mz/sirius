import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos y Condiciones - CodeINVEST',
  description: 'Términos y condiciones de uso de los servicios de CodeINVEST. Estos Términos y Condiciones regulan el acceso y uso del sitio web y los servicios ofrecidos por CodeINVEST como plataforma digital de asesoría en inversión y consultoría financiera.',
  keywords: [
    'términos condiciones CodeINVEST',
    'términos uso Costa Rica',
    'condiciones servicio',
    'asesoría inversiones términos',
    'consultoría financiera términos'
  ],
  robots: 'index, follow',
  openGraph: {
    title: 'Términos y Condiciones - CodeINVEST',
    description: 'Términos y condiciones de uso de los servicios de CodeINVEST. Conoce nuestras políticas y condiciones de servicio.',
    url: 'https://www.codeinvestcr.com/terminos',
    type: 'website',
    images: [
      {
        url: 'https://www.codeinvestcr.com/images/og-terminos.jpg',
        width: 1200,
        height: 630,
        alt: 'Términos y Condiciones CodeINVEST',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Términos y Condiciones - CodeINVEST',
    description: 'Términos y condiciones de uso de los servicios de CodeINVEST.',
    images: ['https://www.codeinvestcr.com/images/og-terminos.jpg'],
  },
  alternates: {
    canonical: 'https://www.codeinvestcr.com/terminos',
  },
};

export default function TerminosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
