import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getProjects, getProjectBySlug } from "@/lib/cms-data";
import PortfolioDetailClient from "@/app/portafolio/[slug]/PortfolioDetailClient";
import "@/styles/globals.css";
import "@/styles/portfolio-detail-page.css";

interface PortfolioDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project: any) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PortfolioDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Proyecto no encontrado | CodeINVEST',
      description: 'El proyecto que buscas no existe.',
    };
  }

  return {
    title: `${project.title} | Portafolio CodeINVEST`,
    description: `${project.description} Proyecto desarrollado por CodeINVEST Costa Rica usando ${(project.technologies || []).slice(0, 3).join(', ')}.`,
    keywords: [
      project.title?.toLowerCase() || 'proyecto',
      ...(project.technologies || []).map((tech: string) => tech.toLowerCase()),
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
      images: project.backgroundImage ? [
        {
          url: project.backgroundImage,
          width: 1200,
          height: 630,
          alt: `${project.title || 'Proyecto'} - CodeINVEST Costa Rica`,
        }
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title || 'Proyecto'} | Portafolio CodeINVEST`,
      description: String(project.description || ''),
      images: project.backgroundImage ? [project.backgroundImage] : [],
    },
    alternates: {
      canonical: `https://www.codeinvestcr.com/portafolio/${project.slug}`,
    },
  };
}

export default async function PortfolioDetailPage({ params }: PortfolioDetailPageProps) {
  // Await the params promise
  const { slug } = await params;

  // Buscar el proyecto por slug usando CMS
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <PortfolioDetailClient project={project} />;
}
