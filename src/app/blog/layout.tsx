import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Sirius - Insights y Tendencias Digitales Costa Rica',
  description: 'Blog especializado en desarrollo web, marketing digital y tecnología para empresas costarricenses. Consejos prácticos, tendencias actuales y casos de éxito.',
  keywords: [
    'blog tecnología Costa Rica',
    'desarrollo web CR',
    'marketing digital Costa Rica',
    'SEO Costa Rica',
    'tendencias digitales',
    'consejos desarrollo web',
    'blog apps móviles',
    'e-commerce Costa Rica',
    'automatización procesos',
    'transformación digital CR',
    'casos éxito tecnología',
    'insights digitales Costa Rica'
  ],
  openGraph: {
    title: 'Blog | Sirius - Insights Digitales Costa Rica',
    description: 'Insights, tendencias y consejos sobre tecnología para empresas costarricenses. Artículos especializados en desarrollo web y marketing digital.',
    type: 'website',
    locale: 'es_CR',
    url: 'https://www.siriusx.net/blog',
    siteName: 'Sirius',
    images: [
      {
        url: '/images/og/blog-articles-seo.webp',
        width: 1200,
        height: 630,
        alt: 'Blog Sirius Costa Rica',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Sirius Costa Rica',
    description: 'Insights y tendencias digitales para empresas costarricenses.',
    images: ['/images/social/blog-twitter-card.webp'],
  },
  alternates: {
    canonical: 'https://www.siriusx.net/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
