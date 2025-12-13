"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Service } from "@/lib/cms-data";

interface ServiceDetailClientProps {
  service: Service;
}

export default function ServiceDetailClient({ service }: ServiceDetailClientProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#070C18] text-[#F4F7FB] selection:bg-[#5E3BEE] selection:text-white pb-20">

      {/* 1. Hero Section - Clean & Immersive */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex flex-col justify-center">
        {/* Background */}
        <div className="absolute inset-0 z-0 overflow-hidden text-clip">
          {(service.image && typeof service.image === 'string') ? (
            <Image src={service.image} alt={service.title || 'Servicio'} fill className="object-cover opacity-20" priority />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#0B1221] to-[#1E293B]" />
          )}
          <div className="absolute inset-0 bg-[#070C18]/80 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070C18] via-transparent to-transparent" />

          {/* Cosmic Glow (Top Right) */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#5E3BEE] rounded-full mix-blend-screen filter blur-[180px] opacity-[0.15] pointer-events-none" />
        </div>

        <div className="relative z-10 w-[90%] max-w-[1600px] mx-auto h-full flex flex-col justify-center items-start">
          <Link href="/servicios" className="group inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
            <div className="w-8 h-8 rounded-full border border-[#1D2A3C] flex items-center justify-center group-hover:border-[#5E3BEE] bg-[#0B1221] transition-colors">
              <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </div>
            <span className="text-sm font-medium tracking-wide">Volver a Servicios</span>
          </Link>

          <div className="flex items-center gap-4 mb-6">
            {service.popular && (
              <span className="px-3 py-1 rounded-full bg-[#5E3BEE] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#5E3BEE]/20 animate-fade-in-up">
                Más Popular
              </span>
            )}
            {service.category && (
              <span className="px-3 py-1 rounded-full bg-[#86D4FF]/10 border border-[#86D4FF]/20 text-[#86D4FF] text-xs font-bold uppercase tracking-wider animate-fade-in-up delay-100">
                {service.category}
              </span>
            )}
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-none tracking-tight animate-fade-in-up delay-100">{service.title}</h1>
        </div>
      </section>

      {/* 2. Main Content & Sidebar */}
      <section className="w-[90%] max-w-[1600px] mx-auto -mt-20 relative z-20">

        {/* Split into specific grid to control sticky behavior */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">

          {/* LEFT COLUMN: Sidebar Pricing & CTA (Sticky) */}
          <div className="lg:col-span-1 lg:sticky lg:top-32 h-fit order-2 lg:order-1">
            <div className="bg-[#0B1221] border border-[#1D2A3C] rounded-3xl p-8 hover:border-[#5E3BEE] transition-all duration-500 shadow-xl flex flex-col gap-8">
              <div>
                <h4 className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-3">Inversión Estimada</h4>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-white">{service.price}</span>
                  {service.price !== 'A medida' && <span className="text-gray-500 text-sm">/ proyecto</span>}
                </div>
              </div>

              <div className="space-y-4">
                <Link
                  href={`/contacto?service=${service.slug}`}
                  className="block w-full py-4 rounded-xl bg-[#5E3BEE] text-white font-bold text-center hover:bg-[#4E33D8] transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(94,59,238,0.4)]"
                >
                  Solicitar Cotización
                </Link>
                <a
                  href="https://wa.me/50661274805"
                  target="_blank"
                  className="block w-full py-4 rounded-xl border border-[#1D2A3C] text-gray-300 font-bold text-center hover:bg-[#1E293B] hover:text-white transition-colors"
                >
                  Consultar por WhatsApp
                </a>
              </div>

              <div className="pt-8 border-t border-[#1D2A3C]">
                <h4 className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-3">Tecnologías Incluidas</h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies?.map((tech, i) => (
                    <span key={i} className="text-[10px] uppercase font-bold tracking-wider text-[#86D4FF] bg-[#86D4FF]/10 px-2 py-1 rounded border border-[#86D4FF]/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Main Content Stack */}
          <div className="lg:col-span-3 space-y-6 order-1 lg:order-2">

            {/* CARD 2: Overview (Wide - Long Description) */}
            <div className="bg-[#0B1221] border border-[#1D2A3C] rounded-3xl p-8 md:p-10 hover:border-[#5E3BEE] hover:bg-[#101B2C] transition-all duration-500 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#5E3BEE]/10 flex items-center justify-center text-[#5E3BEE] group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight">Descripción del Servicio</h2>
              </div>
              <p className="text-lg text-gray-400 leading-relaxed font-light whitespace-pre-line">
                {service.longDescription || service.title}
              </p>
            </div>

            {/* CARD 3: Features & Benefits (Wide) */}
            <div className="bg-[#0B1221] border border-[#1D2A3C] rounded-3xl p-8 md:p-10 hover:border-[#5E3BEE] hover:bg-[#101B2C] transition-all duration-500 group">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-[#5E3BEE]/10 flex items-center justify-center text-[#5E3BEE] group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight">¿Qué incluye?</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.features?.map((feature, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#5E3BEE]" />
                    <p className="text-gray-400 leading-relaxed">{feature}</p>
                  </div>
                ))}
                {service.benefits?.map((benefit, i) => (
                  <div key={`b-${i}`} className="flex gap-3 items-start">
                    <div className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#86D4FF]" />
                    <p className="text-gray-300 font-medium leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CARD 4: Process (Tall/Wide) */}
            {service.process && service.process.length > 0 && (
              <div className="bg-[#0B1221] border border-[#1D2A3C] rounded-3xl p-8 md:p-10 hover:border-[#5E3BEE] hover:bg-[#101B2C] transition-all duration-500 group">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 rounded-full bg-[#5E3BEE]/10 flex items-center justify-center text-[#5E3BEE] group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                  </div>
                  <h2 className="text-2xl font-bold text-white tracking-tight">Nuestro Proceso</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.process.map((step, idx) => (
                    <div key={idx} className="flex gap-4 items-start p-4 rounded-2xl bg-[#080C15] border border-[#1D2A3C] hover:border-[#5E3BEE]/30 transition-colors">
                      <span className="text-3xl font-black text-[#1E293B] flex-shrink-0">{(idx + 1).toString().padStart(2, '0')}</span>
                      <p className="text-gray-300 leading-relaxed pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. FAQs Section - Separate Container to stop sticky behavior overlap */}
      {service.faq && service.faq.length > 0 && (
        <section className="w-[90%] max-w-[1600px] mx-auto mt-6">
          <div className="bg-[#0B1221] border border-[#1D2A3C] rounded-3xl p-8 md:p-10 hover:border-[#5E3BEE] transition-all duration-500">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-[#5E3BEE]/10 flex items-center justify-center text-[#5E3BEE]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Preguntas Frecuentes</h2>
            </div>
            <div className="space-y-4">
              {service.faq.map((item, index) => (
                <div key={index} className="border border-[#1D2A3C] rounded-2xl bg-[#080C15] overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-[#101B2C] transition-colors"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="font-medium text-white">{item.question}</span>
                    <svg className={`w-5 h-5 text-[#5E3BEE] transition-transform ${openFaq === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {openFaq === index && (
                    <div className="p-6 pt-0 text-gray-400 border-t border-[#1D2A3C]/50">
                      <p className="leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. Footer CTA - The "Big" One */}
      <section className="mt-32 w-[90%] max-w-[1000px] mx-auto pb-32 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">¿Listo para escalar tu negocio?</h2>
        <Link href="/contacto" className="inline-block px-12 py-5 bg-[#5E3BEE] text-white font-bold tracking-wide rounded-full hover:bg-[#4b2fbe] hover:shadow-[0_0_30px_rgba(94,59,238,0.5)] transition-all duration-300 transform hover:-translate-y-1">
          AGENDAR CONSULTORÍA
        </Link>
      </section>

    </div>
  );
}
