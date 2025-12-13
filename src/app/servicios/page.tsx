import Link from "next/link";
import { getServices } from "@/lib/cms-data";
import ServicesClient from "@/components/sections/services/services-client";

// Force regular storage for ISR
// For CMS usage, we want revalidation on each request OR ISR with short time
export const revalidate = 60; // Revalidate every 60 seconds (ISR) OR use on-demand revalidation

export default async function ServiciosPage() {
  const services = await getServices();

  return (
    <div className="min-h-screen bg-[#070C18] text-[#F4F7FB] font-sans selection:bg-[#5E3BEE] selection:text-white pb-20">

      {/* 1. Hero "Marketplace" */}
      <section className="relative pt-32 pb-20 w-[90%] max-w-[1600px] mx-auto text-center">
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-[#5E3BEE] font-bold tracking-[0.2em] text-sm uppercase mb-6 animate-fade-in-up">
            Catálogo de Servicios
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 animate-fade-in-up delay-100">
            Invierte en el <br />
            <span className="font-thin italic text-transparent bg-clip-text bg-gradient-to-r from-[#86D4FF] to-[#5E3BEE]">
              Crecimiento de tu Empresa
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto animate-fade-in-up delay-200">
            Soluciones paquetizadas y listas para escalar. <br />
            Elige el plan que mejor se adapte a tu etapa actual.
          </p>
        </div>

        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#5E3BEE] rounded-full mix-blend-screen filter blur-[120px] opacity-[0.15] pointer-events-none" />
      </section>

      {/* Client Components for Interactivity */}
      <ServicesClient services={services} />

      {/* 5. Final CTA */}
      <section className="mt-32 w-[90%] max-w-[1600px] mx-auto text-center pb-20">
        <h2 className="text-4xl font-bold mb-6">¿Necesitas una solución a medida?</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Si tu proyecto requiere arquitectura compleja o necesidades empresariales específicas,
          hablemos directamente.
        </p>
        <Link
          href="/contacto"
          className="inline-flex items-center text-[#5E3BEE] font-bold text-lg hover:underline underline-offset-4"
        >
          Contactar Ventas Corporativas
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </Link>
      </section>

    </div>
  );
}