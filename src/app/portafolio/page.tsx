"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { portfolioItems } from "@/data/portfolio";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import "@/styles/globals.css";

export default function PortafolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = ["Todos", "Desarrollo", "Apps Móviles", "Soluciones", "Consultoría"];

  const filteredProjects = selectedCategory === "Todos"
    ? portfolioItems
    : portfolioItems.filter(item => {
      switch (selectedCategory) {
        case "Desarrollo":
          return item.technologies.some(tech => ['Next.js', 'React', 'WordPress', 'HTML'].includes(tech));
        case "Apps Móviles":
          return item.technologies.some(tech => ['React Native', 'Expo', 'Flutter'].includes(tech)) || item.title.includes('App');
        case "Soluciones":
          return item.technologies.some(tech => ['Python', 'AI', 'Node.js'].includes(tech)) && !item.title.includes('App') && !item.title.includes('Web');
        case "Consultoría":
          return item.title.includes('Coach') || item.title.includes('Consult');
        default:
          return true;
      }
    });

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

      {/* 2. Filtros Bento */}
      <section className="w-[90%] max-w-[1600px] mx-auto mb-16">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`text-sm font-medium px-5 py-2.5 rounded-xl border transition-all duration-300
                ${selectedCategory === category
                  ? "bg-[#1E293B] border-[#5E3BEE] text-white shadow-[0_0_15px_rgba(94,59,238,0.2)]"
                  : "bg-[#0B1221] border-[#1D2A3C] text-gray-400 hover:border-[#86D4FF] hover:text-white"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Bento Grid */}
      <section className="w-[90%] max-w-[1600px] mx-auto">
        <BentoGrid className="md:auto-rows-[25rem] grid-cols-1 md:grid-cols-4 gap-6">
          {filteredProjects.map((project, i) => {
            // Lógica para el "ritmo" del bento
            // Index 0: Large hero (2x2)
            // Index 3, 6: Wide (2x1)
            const isLarge = i === 0;
            const isWide = !isLarge && (i === 3 || i === 6);

            return (
              <BentoGridItem
                key={project.id}
                title={project.title}
                description={project.description}
                className={`
                  ${isLarge ? "md:col-span-2 md:row-span-2" : ""}
                  ${isWide ? "md:col-span-2" : ""}
                  bg-[#0B1221] border border-[#1D2A3C] hover:border-[#5E3BEE] hover:bg-[#101B2C] transition-all duration-500 overflow-hidden group
                `}
                header={
                  <div className="relative w-full h-full min-h-[14rem] overflow-hidden rounded-lg">
                    {/* Image */}
                    <Image
                      src={project.backgroundImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100"
                      priority={i < 4}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070C18] via-transparent to-transparent opacity-60" />

                    {/* Floating Badge (Hover) */}
                    <Link
                      href={`/portafolio/${project.slug}`}
                      className="absolute bottom-4 right-4 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#5E3BEE] hover:border-[#5E3BEE]"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </Link>
                  </div>
                }
                icon={
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="text-[10px] uppercase font-bold tracking-wider text-[#86D4FF] bg-[#86D4FF]/10 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                }
              />
            );
          })}
        </BentoGrid>

        {filteredProjects.length === 0 && (
          <div className="text-center py-32 rounded-3xl border border-dashed border-[#1D2A3C] bg-[#0B1221]">
            <p className="text-gray-500 text-xl font-medium">No hay proyectos en esta categoría.</p>
          </div>
        )}
      </section>

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
