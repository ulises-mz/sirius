"use client";
import Link from "next/link";
import "@/styles/globals.css";

const values = [
  {
    icon: "target",
    title: "Orientados a Resultados",
    description: "Cada proyecto está diseñado para generar un impacto real y medible en tu negocio."
  },
  {
    icon: "rocket",
    title: "Innovación Continua",
    description: "Utilizamos tecnologías modernas y mejores prácticas para mantenerte competitivo."
  },
  {
    icon: "handshake",
    title: "Aliados Estratégicos",
    description: "Más que proveedores, somos tu socio en el crecimiento digital."
  }
];

export default function NosotrosPage() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "target":
        return (
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M21 10.5a9 9 0 11-18 0 9 9 0 0118 0z" />
        );
      case "rocket":
        return (
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        );
      case "handshake":
        return (
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        );
      case "check":
        return (
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        );
      case "code":
        return (
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        );
      case "trending-up":
        return (
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
        );
      case "users":
        return (
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        );
      default:
        return (
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#070C18] text-[#F4F7FB] font-sans selection:bg-[#5E3BEE] selection:text-white pb-20">

      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 w-[90%] max-w-[1600px] mx-auto">
        <div className="relative z-10 flex flex-col items-start gap-6 border-b border-[#1D2A3C] pb-12">
          <p className="text-[#5E3BEE] font-medium tracking-[0.2em] text-sm uppercase animate-fade-in-up">
            Sobre Nosotros
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1] text-white animate-fade-in-up delay-100">
            Construyendo el <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#86D4FF] to-[#5E3BEE] font-thin italic tracking-wide">
              Futuro Digital
            </span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl animate-fade-in-up delay-200">
            Sirius es una agencia de soluciones digitales especializada en transformar ideas en
            herramientas tecnológicas que impulsan el crecimiento de los negocios.
          </p>
        </div>

        {/* Background glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#5E3BEE] rounded-full mix-blend-screen filter blur-[180px] opacity-[0.1] pointer-events-none" />
      </section>

      {/* 2. Mission & Vision */}
      <section className="w-[90%] max-w-[1400px] mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Mission */}
          <div className="relative flex flex-col rounded-3xl p-10 border bg-[#080E1C] border-[#1D2A3C] hover:border-[#5E3BEE]/30 transition-all duration-300 group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#5E3BEE]/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <h2 className="text-2xl font-bold mb-4 text-white relative z-10">Nuestra Misión</h2>
            <p className="text-gray-400 leading-relaxed relative z-10">
              Democratizar el acceso a la tecnología digital, proporcionando soluciones innovadoras
              y accesibles que impulsen el crecimiento y competitividad de las empresas en el mercado global.
            </p>
          </div>

          {/* Vision */}
          <div className="relative flex flex-col rounded-3xl p-10 border bg-[#080E1C] border-[#1D2A3C] hover:border-[#86D4FF]/30 transition-all duration-300 group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#86D4FF]/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <h2 className="text-2xl font-bold mb-4 text-white relative z-10">Nuestra Visión</h2>
            <p className="text-gray-400 leading-relaxed relative z-10">
              Ser el socio estratégico preferido de las empresas que buscan evolucionar digitalmente,
              reconocidos por nuestra capacidad de transformar negocios a través de soluciones tecnológicas innovadoras.
            </p>
          </div>

        </div>
      </section>

      {/* 3. Values Section */}
      <section className="w-[90%] max-w-[1400px] mx-auto mb-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nuestros Valores
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Los principios que guían cada proyecto y decisión que tomamos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center rounded-3xl p-8 border bg-[#080E1C] border-[#1D2A3C] hover:border-[#5E3BEE] hover:bg-[#0B1221] transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#5E3BEE] to-[#86D4FF] p-0.5 shadow-lg mb-6 group-hover:scale-110 transition-transform duration-500">
                <div className="w-full h-full bg-[#0B1221] rounded-[14px] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5E3BEE] to-[#86D4FF] opacity-20" />
                  <svg className="w-8 h-8 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    {getIcon(value.icon)}
                  </svg>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="w-[90%] max-w-[1400px] mx-auto mb-32">
        <div className="bg-[#0B1221] rounded-3xl p-10 md:p-16 border border-[#1D2A3C] relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(94,59,238,0.1),transparent_70%)]" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              ¿Por qué elegir Sirius?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#5E3BEE]/10 flex items-center justify-center text-[#5E3BEE] shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    {getIcon("code")}
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Tecnología Actualizada</h3>
                  <p className="text-gray-400 text-sm">
                    Utilizamos las últimas tecnologías y frameworks para garantizar soluciones modernas y escalables.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#86D4FF]/10 flex items-center justify-center text-[#86D4FF] shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    {getIcon("trending-up")}
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Enfoque en Resultados</h3>
                  <p className="text-gray-400 text-sm">
                    Nuestros proyectos están diseñados para generar un retorno de inversión medible y sostenible.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#00F260]/10 flex items-center justify-center text-[#00F260] shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    {getIcon("users")}
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Soporte Personalizado</h3>
                  <p className="text-gray-400 text-sm">
                    Ofrecemos acompañamiento continuo y soporte técnico especializado en español.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#5E3BEE]/10 flex items-center justify-center text-[#5E3BEE] shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    {getIcon("check")}
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Calidad Garantizada</h3>
                  <p className="text-gray-400 text-sm">
                    Comunicación transparente, entrega puntual y precios justos en cada proyecto.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Footer CTA */}
      <section className="w-[90%] max-w-[1600px] mx-auto border-t border-[#1D2A3C] pt-20">
        <div className="bg-[#0B1221] rounded-3xl p-10 md:p-20 text-center relative overflow-hidden border border-[#1D2A3C]">
          {/* Abstract shapes */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(94,59,238,0.15),transparent_70%)]" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              ¿Listo para conocernos mejor?
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              Agenda una consultoría gratuita y descubre cómo podemos impulsar tu negocio hacia el éxito digital.
            </p>
            <Link
              href="/agendar"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-300 bg-[#5E3BEE] rounded-full hover:bg-[#4E33D8] hover:shadow-[0_0_20px_rgba(94,59,238,0.4)] hover:-translate-y-1"
            >
              Agenda tu Consultoría
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
