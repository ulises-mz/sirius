"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getOptimizedImageUrl } from "@/lib/utils";

interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  backgroundImage: string;
  technologies: string[];
  content: string;
  keywords: string;
  category: string;
  challenge?: string;
  solution?: string;
  results?: string;
  gallery?: string[];
}

interface PortfolioDetailClientProps {
  project: Project;
}

export default function PortfolioDetailClient({ project }: PortfolioDetailClientProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Helper for list items inside Bento cards
  const renderListItems = (text: string, iconType: 'check' | 'arrow' | 'dot' = 'dot') => {
    if (!text) return null;
    return text.split('\n').filter(line => line.trim()).map((line, i) => {
      const content = line.replace(/^- /, '').replace(/^\* /, '');
      return (
        <div key={i} className="flex gap-3 items-start mb-3 last:mb-0">
          <div className={`mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full ${iconType === 'check' ? 'bg-[#5E3BEE]' :
            iconType === 'arrow' ? 'bg-[#86D4FF]' :
              'bg-gray-500'
            }`} />
          <p className="text-gray-400 leading-relaxed text-sm lg:text-base">{content}</p>
        </div>
      );
    });
  };

  return (
    <div className="min-h-screen bg-[#070C18] text-[#F4F7FB] selection:bg-[#5E3BEE] selection:text-white pb-20">

      {/* 1. Hero Section - Consistent with Listing */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex flex-col justify-center">
        <div className="absolute inset-0 z-0 text-clip overflow-hidden">
          {project.backgroundImage && (
            <Image
              src={getOptimizedImageUrl(project.backgroundImage)}
              alt={project.title}
              fill
              className={`object-cover transition-opacity duration-1000 ${imageLoaded ? 'opacity-30' : 'opacity-0'}`}
              onLoad={() => setImageLoaded(true)}
              priority
            />
          )}
          <div className="absolute inset-0 bg-[#070C18]/80 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070C18] via-transparent to-transparent" />

          {/* Cosmic Glow (Top Right) */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#5E3BEE] rounded-full mix-blend-screen filter blur-[180px] opacity-[0.15] pointer-events-none" />
        </div>

        <div className="relative z-10 w-[90%] max-w-[1600px] mx-auto h-full flex flex-col justify-center items-start">
          <Link href="/portafolio" className="group inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
            <div className="w-8 h-8 rounded-full border border-[#1D2A3C] flex items-center justify-center group-hover:border-[#5E3BEE] bg-[#0B1221] transition-colors">
              <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </div>
            <span className="text-sm font-medium tracking-wide">Volver al Portafolio</span>
          </Link>

          {project.category && (
            <span className="text-[#5E3BEE] font-medium tracking-[0.2em] text-sm uppercase mb-4 animate-fade-in-up">
              {project.category}
            </span>
          )}

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-none tracking-tight animate-fade-in-up delay-100">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed animate-fade-in-up delay-200">
            {project.description}
          </p>
        </div>
      </section>

      {/* 2. Bento Grid Layout */}
      <section className="w-[90%] max-w-[1600px] mx-auto -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-min">

          {/* CARD 1: Project Metadata (Tall) */}
          <div className="md:col-span-1 lg:row-span-2 bg-[#0B1221] border border-[#1D2A3C] rounded-3xl p-8 hover:border-[#5E3BEE] transition-all duration-500 shadow-xl flex flex-col gap-8 h-fit lg:sticky lg:top-32">
            <div>
              <h4 className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-3">Cliente</h4>
              <p className="text-white text-xl font-bold tracking-tight">{project.title}</p>
            </div>

            <div>
              <h4 className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-3">Servicios</h4>
              <p className="text-white text-lg font-medium">{project.category}</p>
            </div>

            <div>
              <h4 className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-3">Tecnologías</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies?.map((tech, idx) => (
                  <span key={idx} className="text-[10px] uppercase font-bold tracking-wider text-[#86D4FF] bg-[#86D4FF]/10 px-2 py-1 rounded border border-[#86D4FF]/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-8 border-t border-[#1D2A3C]">
              <p className="text-gray-400 mb-4 text-xs font-bold uppercase tracking-wider">¿Te inspira este proyecto?</p>
              <Link
                href="/contacto"
                className="block w-full py-4 text-center bg-[#5E3BEE] hover:bg-[#4b2fbe] text-white font-bold rounded-xl transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(94,59,238,0.3)]"
              >
                Iniciar Proyecto
              </Link>
            </div>
          </div>

          {/* CARD 2: The Challenge (Wide) */}
          <div className="md:col-span-2 lg:col-span-3 bg-[#0B1221] border border-[#1D2A3C] rounded-3xl p-8 md:p-10 hover:border-[#5E3BEE] hover:bg-[#101B2C] transition-all duration-500 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#5E3BEE]/10 flex items-center justify-center text-[#5E3BEE] group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">El Reto</h2>
            </div>
            <p className="text-lg text-gray-400 leading-relaxed font-light">
              {project.challenge || "Definir una solución robusta y escalable que se adapte perfectamente a las necesidades específicas del mercado."}
            </p>
          </div>

          {/* CARD 3: The Solution (Square/Tall) */}
          <div className="md:col-span-2 bg-[#0B1221] border border-[#1D2A3C] rounded-3xl p-8 md:p-10 hover:border-[#5E3BEE] hover:bg-[#101B2C] transition-all duration-500 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#5E3BEE]/10 flex items-center justify-center text-[#5E3BEE] group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">La Solución</h2>
            </div>
            <div className="space-y-4">
              {renderListItems(project.solution || "- Investigación UX/UI\n- Arquitectura Cloud\n- Desarrollo Frontend Avanzado", 'check')}
            </div>
          </div>

          {/* CARD 4: Results (Square) */}
          <div className="md:col-span-2 lg:col-span-1 bg-[#0B1221] border border-[#1D2A3C] rounded-3xl p-8 md:p-10 hover:border-[#5E3BEE] hover:bg-[#101B2C] transition-all duration-500 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#5E3BEE]/10 flex items-center justify-center text-[#5E3BEE] group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Resultados</h2>
            </div>
            <div className="space-y-4">
              {renderListItems(project.results || "", 'arrow')}
              {!project.results && <p className="text-gray-500 italic">Resultados confidenciales.</p>}
            </div>
          </div>

          {/* CARD 5: Content Fallback (Wide) - Only if content exists and no structured data */}
          {project.content && !project.challenge && (
            <div className="md:col-span-3 bg-[#0B1221] border border-[#1D2A3C] rounded-3xl p-8 md:p-10">
              <div className="prose prose-invert prose-lg max-w-none text-gray-400">
                {project.content}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 3. Gallery Section - Dedicated Bento Card */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="w-[90%] max-w-[1600px] mx-auto mt-6">
          <div className="bg-[#0B1221] border border-[#1D2A3C] rounded-3xl p-8 md:p-10 hover:border-[#5E3BEE] transition-colors duration-500">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-[#5E3BEE]/10 flex items-center justify-center text-[#5E3BEE]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Galería del Proyecto</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setLightboxImage(img)}
                  className={`relative overflow-hidden rounded-2xl border border-[#1D2A3C] group cursor-zoom-in ${idx === 0 ? 'md:col-span-2 md:row-span-2 aspect-video' : 'aspect-[4/3]'}`}
                >
                  <Image
                    src={getOptimizedImageUrl(img)}
                    alt={`Gallery ${idx + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#5E3BEE]/0 group-hover:bg-[#5E3BEE]/10 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-[#070C18]/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative w-full max-w-6xl max-h-[90vh] aspect-video">
            <Image
              src={getOptimizedImageUrl(lightboxImage)}
              alt="Lightbox view"
              fill
              className="object-contain"
              priority
            />
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-[#5E3BEE] transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
        </div>
      )}

      {/* 4. Footer CTA - The "Big" One */}
      <section className="mt-32 w-[90%] max-w-[1000px] mx-auto pb-32 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">¿Listo para el siguiente nivel?</h2>
        <Link href="/contacto" className="inline-block px-12 py-5 bg-[#5E3BEE] text-white font-bold tracking-wide rounded-full hover:bg-[#4b2fbe} hover:shadow-[0_0_30px_rgba(94,59,238,0.5)] transition-all duration-300 transform hover:-translate-y-1">
          INICIAR PROYECTO
        </Link>
      </section>

    </div>
  );
}
