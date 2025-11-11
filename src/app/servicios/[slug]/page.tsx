import { notFound } from "next/navigation";
import { Metadata } from "next";
import { services } from "@/data/services";
import ServiceDetailClient from "./ServiceDetailClient";
import "@/styles/globals.css";
import "@/styles/service-detail-page.css";

interface ServiceDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: 'Servicio no encontrado | CodeINVEST',
      description: 'El servicio que buscas no existe.',
    };
  }

  return {
    title: `${service.title} | CodeINVEST Costa Rica`,
    description: `${service.description} Especialistas en ${service.title.toLowerCase()} para empresas en Costa Rica. Consulta gratuita disponible.`,
    keywords: [
      service.title.toLowerCase(),
      service.category.toLowerCase(),
      ...service.technologies.map((tech: string) => tech.toLowerCase()),
      'Costa Rica',
      'San José',
      'CodeINVEST',
      'agencia digital CR'
    ],
    openGraph: {
      title: `${service.title} | CodeINVEST`,
      description: `${service.description} Especialistas para empresas en Costa Rica.`,
      type: 'website',
      locale: 'es_CR',
      url: `https://www.codeinvestcr.com/servicios/${service.slug}`,
      siteName: 'CodeINVEST',
      images: [
        {
          url: `/images/services/${service.slug}.png`,
          width: 1200,
          height: 630,
          alt: `${service.title} CodeINVEST Costa Rica`,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | CodeINVEST`,
      description: service.description,
      images: [`/images/services/${service.slug}.png`],
    },
    alternates: {
      canonical: `https://www.codeinvestcr.com/servicios/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  // Await the params promise
  const { slug } = await params;
  
  // Buscar el servicio por slug
  const service = services.find(s => s.slug === slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient service={service} />;
}