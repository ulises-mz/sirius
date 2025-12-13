import Hero from '@/components/sections/hero';
import ScrollTabsSection from '@/components/sections/scroll-tabs';
import CtaSection from '@/components/sections/cta';
import AboutSection from '@/components/sections/about';
import { FeaturesBentoSection } from '@/components/sections/features-bento';
import TestimonialsSection from '@/components/sections/testimonials';
import { SITE, SEO_DEFAULT, OPEN_GRAPH_IMAGE } from '@/lib/constants';
import { getServices, getProjects, getTestimonials } from '@/lib/cms-data';

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

export default async function Home() {
  const services = await getServices();
  const projects = await getProjects();
  const testimonials = await getTestimonials();

  // Limit to exactly 7 projects for the bento layout
  const homepageProjects = projects.slice(0, 7);

  return (
    <main>
      <Hero />
      <ScrollTabsSection services={services} />
      <AboutSection />
      <FeaturesBentoSection projects={homepageProjects} />
      <TestimonialsSection testimonials={testimonials} />
      <CtaSection />
    </main>
  );
}