
import Link from "next/link";
import PortfolioClient from "@/components/sections/portfolio/portfolio-client";
import { getProjects } from "@/lib/cms-data";

export const revalidate = 60; // ISR

export default async function PortafolioPage() {
  const projects = await getProjects();

  return (
    <div className="min-h-screen bg-[#070C18] text-[#F4F7FB] font-sans selection:bg-[#5E3BEE] selection:text-white pb-20">

      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 w-[90%] max-w-[1600px] mx-auto">
        <div className="relative z-10 flex flex-col items-start gap-6 border-b border-[#1D2A3C] pb-12">
          <p className="text-[#5E3BEE] font-medium tracking-[0.2em] text-sm uppercase animate-fade-in-up">
            Nuestro Portafolio
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1] text-white animate-fade-in-up delay-100">
            Experiencias <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#86D4FF] to-[#5E3BEE] font-thin italic tracking-wide">
              Digitales Únicas
            </span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl animate-fade-in-up delay-200">
            Más que una agencia, somos tus aliados en la construcción del futuro digital.
            Explora cómo hemos ayudado a empresas líderes a destacar.
          </p>
        </div>

        {/* Background glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#5E3BEE] rounded-full mix-blend-screen filter blur-[180px] opacity-[0.1] pointer-events-none" />
      </section>

      {/* Client List */}
      <PortfolioClient projects={projects} />

      {/* 4. Footer CTA */}
      <section className="mt-32 w-[90%] max-w-[1600px] mx-auto border-t border-[#1D2A3C] pt-20 pb-20">
        <div className="bg-[#0B1221] rounded-3xl p-10 md:p-20 text-center relative overflow-hidden border border-[#1D2A3C]">
          {/* Abstract shapes */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(94,59,238,0.15),transparent_70%)]" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              ¿Tienes una idea en mente?
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              Convierte tu visión en una realidad digital escalable. Nuestro equipo está listo para escuchar.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-300 bg-[#5E3BEE] rounded-full hover:bg-[#4E33D8] hover:shadow-[0_0_20px_rgba(94,59,238,0.4)] hover:-translate-y-1"
            >
              Iniciar Proyecto
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
