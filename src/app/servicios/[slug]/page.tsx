import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getServices, getServiceBySlug } from "@/lib/cms-data";
import ServiceDetailClient from "./ServiceDetailClient";
import "@/styles/globals.css";

export const revalidate = 60;

interface ServiceDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Servicio no encontrado | Sirius',
      description: 'El servicio que buscas no existe.',
    };
  }

  return {
    title: `${service.title} | Sirius Costa Rica`,
    description: `${service.description} Especialistas en ${service.title} para empresas.`,
    keywords: [
      service.title?.toLowerCase() || 'servicio',
      service.category?.toLowerCase() || 'servicios',
      ...(service.technologies || []).map((tech: string) => tech.toLowerCase()),
      'Sirius',
      'Costa Rica'
    ],
    openGraph: {
      title: `${service.title} | Sirius`,
      description: service.description,
      type: 'website',
      url: `https://www.siriusx.net/servicios/${service.slug}`,
      siteName: 'Sirius',
      images: [
        {
          url: (typeof service.image === 'string' && service.image) ? service.image : `/images/services/${service.slug}.png`,
          width: 1200,
          height: 630,
          alt: `${service.title} Sirius`,
        }
      ],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  // Await the params promise
  const { slug } = await params;

  // Buscar el servicio por slug usando CMS
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient service={service} />;
}