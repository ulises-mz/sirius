import { notFound } from "next/navigation";
import { Metadata } from "next";
import { portfolioItems } from "@/data/portfolio";
import PortfolioDetailClient from "@/app/portafolio/[slug]/PortfolioDetailClient";
import "@/styles/globals.css";
import "@/styles/portfolio-detail-page.css";

interface PortfolioDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return portfolioItems.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PortfolioDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioItems.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Proyecto no encontrado | CodeINVEST',
      description: 'El proyecto que buscas no existe.',
    };
  }

  return {
    title: `${project.title} | Portafolio CodeINVEST`,
    description: `${project.description} Proyecto desarrollado por CodeINVEST Costa Rica usando ${project.technologies.slice(0, 3).join(', ')}.`,
    keywords: [
      project.title.toLowerCase(),
      ...project.technologies.map((tech: string) => tech.toLowerCase()),
      'portafolio',
      'proyectos',
      'Costa Rica',
      'San José',
      'CodeINVEST',
      'desarrollo web CR'
    ],
    openGraph: {
      title: `${project.title} | Portafolio CodeINVEST`,
      description: `${project.description} Proyecto desarrollado por CodeINVEST Costa Rica.`,
      type: 'website',
      locale: 'es_CR',
      url: `https://www.codeinvestcr.com/portafolio/${project.slug}`,
      siteName: 'CodeINVEST',
      images: [
        {
          url: project.backgroundImage,
          width: 1200,
          height: 630,
          alt: `${project.title} - Proyecto CodeINVEST Costa Rica`,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Portafolio CodeINVEST`,
      description: project.description,
      images: [project.backgroundImage],
    },
    alternates: {
      canonical: `https://www.codeinvestcr.com/portafolio/${project.slug}`,
    },
  };
}

export default async function PortfolioDetailPage({ params }: PortfolioDetailPageProps) {
  // Await the params promise
  const { slug } = await params;
  
  // Buscar el proyecto por slug
  const project = portfolioItems.find(p => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <PortfolioDetailClient project={project} />;
}
