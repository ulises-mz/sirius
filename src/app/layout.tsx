// src/app/layout.tsx
import '@/styles/globals.css';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import WhatsAppFloat from '@/components/layout/whatsapp-float';
import ScrollToTop from '@/components/layout/ScrollToTop';
import { LoadingProvider } from '@/components/shared/loading-provider';
import HMRLoadingDetector from '@/components/shared/hmr-loading-detector';
import { SITE, SEO_DEFAULT, OPEN_GRAPH_IMAGE } from '@/lib/constants';

export const metadata = {
  title: {
    default: `${SITE.name} - Agencia de Soluciones Digitales en Costa Rica`,
    template: `%s | ${SITE.name}`,
  },
  description: SEO_DEFAULT.description,
  keywords: SEO_DEFAULT.keywords,
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  metadataBase: new URL(SITE.url),
  alternates: {
    canonical: '/',
    languages: {
      [SITE.locale]: '/',
      es: '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} - Agencia Digital en Costa Rica`,
    description: SEO_DEFAULT.description,
    images: [
      {
        url: OPEN_GRAPH_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE.name} - Agencia Digital`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} - Agencia Digital`,
    description: SEO_DEFAULT.description,
    images: ['/images/social/default-twitter-card.png'],
    creator: '@sirius', // TODO: actualizar handler
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '',
    yandex: '',
    other: {
      'facebook-domain-verification': '',
    },
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.svg',
    apple: '/icons/icon-192x192.png',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-CR">
      <head>
        {/* Schema.org Estructurado para SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
            "name": SITE.name,
            "legalName": SITE.legalName,
            "description": SEO_DEFAULT.description,
            "url": SITE.url,
            "logo": `${SITE.url}/favicon.svg`,
            "image": `${SITE.url}${OPEN_GRAPH_IMAGE}`,
            "telephone": SITE.phone,
            "email": SITE.primaryEmail,
            "foundingDate": "2020",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": SITE.address.street,
              "addressLocality": SITE.address.city,
              "addressRegion": SITE.address.region,
              "postalCode": SITE.address.postalCode,
              "addressCountry": SITE.address.countryCode
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 9.9281,
              "longitude": -84.0907
            },
            "areaServed": [
              {
                "@type": "Country",
                "name": "Costa Rica"
              },
              {
                "@type": "State",
                "name": "San José"
              },
              {
                "@type": "City",
                "name": "San José"
              }
            ],
            "serviceType": [
              "Desarrollo Web",
              "Aplicaciones Móviles",
              "E-commerce",
              "Automatización de Procesos",
              "Marketing Digital",
              "SEO",
              "Diseño UX/UI"
            ],
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "08:00",
              "closes": "18:00"
            },
            "sameAs": [
              SITE.social.facebook,
              SITE.social.instagram,
              SITE.social.linkedin,
              SITE.social.twitter
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": SITE.phone,
              "contactType": "customer service",
              "areaServed": "CR",
              "availableLanguage": ["Spanish", "English"]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "127"
            }
          })}
        </script>

        {/* Schema.org para WebSite */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": SITE.name,
            "url": SITE.url,
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${SITE.url}/search?q={search_term_string}`
              },
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </head>
      <body style={{ backgroundColor: 'var(--color-background)', fontFamily: "'Genova', sans-serif" }}>


        <HMRLoadingDetector />
        <ScrollToTop />
        <Header />
        {children}
        <WhatsAppFloat />
        <Footer />

      </body>
    </html>
  );
}