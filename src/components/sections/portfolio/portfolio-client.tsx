"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { motion } from "framer-motion";
import { getOptimizedImageUrl } from "@/lib/utils";
import type { Project } from "@/lib/cms-data";

export default function PortfolioClient({ projects }: { projects: Project[] }) {
    const [selectedCategory, setSelectedCategory] = useState("Todos");

    const categories = ["Todos", "Desarrollo", "Apps Móviles", "Soluciones", "Consultoría"];

    const filteredProjects = selectedCategory === "Todos"
        ? projects
        : projects.filter(item => {
            // If we have explicit category field, use it. Fallback to tech/title logic if category is missing or "General"
            if (item.category && item.category !== 'General') {
                return item.category === selectedCategory;
            }

            // Fallback logic from original file (if migration didn't map categories perfectly)
            switch (selectedCategory) {
                case "Desarrollo":
                    return (item.technologies || []).some(tech => ['Next.js', 'React', 'WordPress', 'HTML'].includes(tech));
                case "Apps Móviles":
                    return (item.technologies || []).some(tech => ['React Native', 'Expo', 'Flutter'].includes(tech)) || (item.title || '').includes('App');
                case "Soluciones":
                    return (item.technologies || []).some(tech => ['Python', 'AI', 'Node.js'].includes(tech)) && !(item.title || '').includes('App') && !(item.title || '').includes('Web');
                case "Consultoría":
                    return (item.title || '').includes('Coach') || (item.title || '').includes('Consult');
                default:
                    return true;
            }
        });

    return (
        <>
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
                        const isLarge = i === 0;
                        const isWide = !isLarge && (i === 3 || i === 6);

                        return (
                            <BentoGridItem
                                key={project.id || project.slug}
                                title={project.title}
                                description={project.description}
                                className={`
                  ${isLarge ? "md:col-span-2 md:row-span-2" : ""}
                  ${isWide ? "md:col-span-2" : ""}
                  bg-[#0B1221] border border-[#1D2A3C] hover:border-[#5E3BEE] hover:bg-[#101B2C] transition-all duration-500 overflow-hidden group
                `}
                                header={
                                    <div className="relative w-full h-full min-h-[14rem] overflow-hidden rounded-lg group text-white">
                                        <Link href={`/portafolio/${project.slug}`} className="block w-full h-full relative z-10">
                                            {/* Image */}
                                            {project.backgroundImage ? (
                                                <Image
                                                    src={getOptimizedImageUrl(project.backgroundImage)}
                                                    alt={project.title || 'Proyecto'}
                                                    fill
                                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                                    priority={i < 4}
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-gradient-to-br from-[#1D2A3C] to-[#0B1221]" />
                                            )}

                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#070C18] via-transparent to-transparent opacity-60" />
                                        </Link>

                                        {/* Floating Badge (Hover) - kept for desktop visual cue, but functionality duplicated by the main link above */}
                                        <div className="absolute bottom-4 right-4 z-20 pointer-events-none">
                                            <div
                                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                                            >
                                                <span className="text-sm font-bold">Ver Detalles</span>
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                }
                                icon={
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {project.technologies?.slice(0, 3).map((tech, idx) => (
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
            </section >
        </>
    );
}
