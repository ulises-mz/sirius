// src/app/page.tsx
import Hero from '@/components/sections/hero';
import ServicesSection from '@/components/sections/services';
import PortfolioSection from '@/components/sections/portfolio';

import CtaSection from '@/components/sections/cta';
import AboutSection from '@/components/sections/about';

import { TestimonialsSection } from '@/components/sections/testimonials';
import { SITE, SEO_DEFAULT, OPEN_GRAPH_IMAGE } from '@/lib/constants';

export const metadata = {
  title: `Soluciones Digitales en Costa Rica | ${SITE.name}`,
  description: SEO_DEFAULT.description,
  keywords: SEO_DEFAULT.keywords,
  openGraph: {
    title: `${SITE.name} - Soluciones Digitales y Desarrollo Web`,
    description: SEO_DEFAULT.description,
    type: 'website',
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    images: [
      {
        url: OPEN_GRAPH_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE.name} - Agencia Digital`,
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} - Agencia Digital`,
    description: SEO_DEFAULT.description,
    images: ['/images/social/home-twitter-card.webp'],
  },
  alternates: {
    canonical: SITE.url,
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <AboutSection />
      
      <PortfolioSection />
      <TestimonialsSection />

      {/* <LocalIntegrations /> */}
       <CtaSection /> 
    </main>
  );
}