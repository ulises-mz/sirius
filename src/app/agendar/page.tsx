"use client";
import { useEffect } from "react";
import "@/styles/globals.css";

// SVG Icons
const ScheduleIcon = ({ name }: { name: string }) => {
  switch (name) {
    case "analysis":
      return <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />;
    case "strategy":
      return <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />;
    case "growth":
      return <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />;
    case "time":
      return <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />;
    default:
      return null;
  }
};

const BenefitsList = () => (
  <div className="space-y-8">
    <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-[#1E293B]/30 transition-colors border border-transparent hover:border-[#5E3BEE]/20 group">
      <div className="w-12 h-12 rounded-xl bg-[#5E3BEE]/10 flex items-center justify-center text-[#5E3BEE] shrink-0 group-hover:scale-110 transition-transform">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <ScheduleIcon name="analysis" />
        </svg>
      </div>
      <div>
        <h3 className="text-lg font-bold text-white mb-1">Análisis de Requerimientos</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Evaluamos tus necesidades técnicas y comerciales para proponerte la arquitectura ideal.
        </p>
      </div>
    </div>

    <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-[#1E293B]/30 transition-colors border border-transparent hover:border-[#86D4FF]/20 group">
      <div className="w-12 h-12 rounded-xl bg-[#86D4FF]/10 flex items-center justify-center text-[#86D4FF] shrink-0 group-hover:scale-110 transition-transform">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <ScheduleIcon name="strategy" />
        </svg>
      </div>
      <div>
        <h3 className="text-lg font-bold text-white mb-1">Estrategia Digital</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Definimos el roadmap de desarrollo, tecnologías a usar y plan de lanzamiento.
        </p>
      </div>
    </div>

    <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-[#1E293B]/30 transition-colors border border-transparent hover:border-[#00F260]/20 group">
      <div className="w-12 h-12 rounded-xl bg-[#00F260]/10 flex items-center justify-center text-[#00F260] shrink-0 group-hover:scale-110 transition-transform">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <ScheduleIcon name="growth" />
        </svg>
      </div>
      <div>
        <h3 className="text-lg font-bold text-white mb-1">Proyección de Escalamiento</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Diseñamos pensando en el futuro, asegurando que tu solución crezca con tu negocio.
        </p>
      </div>
    </div>
  </div>
);

function CalendlyWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) document.body.removeChild(existingScript);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget w-full h-full"
      data-url="https://calendly.com/admin-siriusx/30min?hide_gdpr_banner=1&background_color=0B1221&text_color=F4F7FB&primary_color=5E3BEE"
      style={{ minWidth: '320px', height: '100%' }}
    />
  );
}

export default function AgendarPage() {
  return (
    <div className="min-h-screen bg-[#070C18] text-[#F4F7FB] font-sans selection:bg-[#5E3BEE] selection:text-white pb-20">

      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-16 w-[90%] max-w-[1600px] mx-auto text-center">
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F260]/10 border border-[#00F260]/20 mb-6 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F260] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F260]"></span>
            </span>
            <p className="text-[#00F260] font-bold tracking-wider text-xs uppercase">
              Gratis por tiempo limitado
            </p>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 animate-fade-in-up delay-100">
            Agenda tu <br />
            <span className="font-thin italic text-transparent bg-clip-text bg-gradient-to-r from-[#86D4FF] to-[#5E3BEE] pr-4">
              Consultoría Estratégica
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto animate-fade-in-up delay-200">
            Reserva 30 minutos con nuestros expertos para aterrizar tus ideas y definir el siguiente paso de tu transformación digital. Sin compromiso.
          </p>
        </div>

        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#5E3BEE] rounded-full mix-blend-screen filter blur-[120px] opacity-[0.15] pointer-events-none" />
      </section>

      {/* 2. Main Content: Benefits + Calendar */}
      <section className="w-[90%] max-w-[1400px] mx-auto mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">

          {/* Left Column: Context & Benefits */}
          <div className="lg:col-span-4 space-y-10 animate-fade-in-up delay-300">
            <div className="bg-[#0B1221] border border-[#1D2A3C] rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#5E3BEE]/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />

              <h2 className="text-2xl font-bold mb-6 text-white relative z-10">¿Qué esperar de esta reunión?</h2>
              <BenefitsList />

              <div className="mt-8 pt-8 border-t border-[#1D2A3C] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1E293B] flex items-center justify-center text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><ScheduleIcon name="time" /></svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-wider font-bold">Duración Estimada</p>
                  <p className="text-white font-medium">30 Minutos</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Calendly Embed */}
          <div className="lg:col-span-8 animate-fade-in-up delay-500">
            <div className="relative bg-[#0B1426] border border-[#1D2A3C] rounded-[2rem] shadow-2xl overflow-hidden h-[850px]">
              {/* Header of "Device" */}
              <div className="bg-[#1F2C46] px-6 py-4 flex items-center gap-2 border-b border-[#2D3F5E] h-[60px]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="ml-4 bg-[#0B1221] px-4 py-1 rounded-md text-xs text-gray-500 font-mono w-full max-w-[200px] text-center">
                  calendly.com/sirius
                </div>
              </div>
              {/* Widget */}
              <div className="w-full h-[calc(100%-60px)] bg-[#0B1221]">
                <CalendlyWidget />
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
