import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos y Condiciones - Sirius',
  description: 'Términos y condiciones de uso de los servicios de Sirius. Estos Términos y Condiciones regulan el acceso y uso del sitio web y los servicios ofrecidos por Sirius como plataforma digital de asesoría en inversión y consultoría financiera.',
  keywords: [
    'términos condiciones Sirius',
    'términos uso Costa Rica',
    'condiciones servicio',
    'asesoría inversiones términos',
    'consultoría financiera términos'
  ],
  robots: 'index, follow',
  openGraph: {
    title: 'Términos y Condiciones - Sirius',
    description: 'Términos y condiciones de uso de los servicios de Sirius. Conoce nuestras políticas y condiciones de servicio.',
    url: 'https://www.siriusx.net/terminos',
    type: 'website',
    images: [
      {
        url: 'https://www.siriusx.net/images/og-terminos.jpg',
        width: 1200,
        height: 630,
        alt: 'Términos y Condiciones Sirius',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Términos y Condiciones - Sirius',
    description: 'Términos y condiciones de uso de los servicios de Sirius.',
    images: ['https://www.siriusx.net/images/og-terminos.jpg'],
  },
  alternates: {
    canonical: 'https://www.siriusx.net/terminos',
  },
};

export default function TerminosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
