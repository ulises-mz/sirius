import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nosotros | Sirius - Agencia Digital Costarricense',
  description: 'Conoce al equipo de Sirius, agencia digital especializada en transformar negocios costarricenses con soluciones tecnológicas innovadoras. Más de 5 años de experiencia.',
  keywords: [
    'Sirius equipo',
    'agencia digital Costa Rica',
    'desarrolladores costarricenses',
    'empresa tecnología CR',
    'misión visión valores',
    'equipo desarrollo web',
    'programadores Costa Rica',
    'agencia local CR',
    'empresa costarricense tecnología',
    'historia Sirius',
    'sobre nosotros desarrollo web',
    'equipo apps móviles Costa Rica'
  ],
  openGraph: {
    title: 'Nosotros | Sirius - Agencia Digital Costa Rica',
    description: 'Agencia digital costarricense especializada en transformar negocios con tecnología innovadora. Más de 5 años de experiencia.',
    type: 'website',
    locale: 'es_CR',
    url: 'https://www.siriusx.net/nosotros',
    siteName: 'Sirius',
    images: [
      {
        url: '/images/og/about-us-page-seo.webp',
        width: 1200,
        height: 630,
        alt: 'Equipo Sirius Costa Rica',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nosotros | Sirius Costa Rica',
    description: 'Agencia digital costarricense especializada en soluciones tecnológicas innovadoras.',
    images: ['/images/social/about-us-twitter-card.webp'],
  },
  alternates: {
    canonical: 'https://www.siriusx.net/nosotros',
  },
};

export default function NosotrosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
