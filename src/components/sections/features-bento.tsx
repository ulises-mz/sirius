"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { portfolioItems } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";

export function FeaturesBentoSection() {
  return (
    <section className="relative py-20 px-4 sm:py-12">
      <div className="mx-auto w-[95%] lg:w-[80%]">
        {/* Header */}
        <div className="mb-16 text-center sm:mb-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-50/50 px-4 py-2 dark:bg-cyan-900/10">
            <div className="h-2 w-2 rounded-full bg-cyan-400" />
            <span className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
              Proyectos Destacados
            </span>
          </div>
          <h2 className="mb-6 text-4xl md:text-5xl font-bold leading-tight tracking-tight text-neutral-900 dark:text-white sm:text-2xl sm:mb-4">
            Casos de{" "}
            <span className="text-cyan-600 dark:text-cyan-400 font-thin italic">
              éxito reales
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg md:text-xl text-neutral-600 dark:text-neutral-400 sm:text-base">
            Proyectos que transformaron negocios y generaron resultados medibles
            para nuestros clientes.
          </p>
        </div>

        {/* Bento Grid */}
        <BentoGrid className="mx-auto">
          {portfolioItems.map((item, i) => (
            <BentoGridItem
              key={item.id}
              title={item.title}
              description={item.description}
              header={
                <Link href={`/portafolio/${item.slug}`} className="group/image block h-full w-full overflow-hidden rounded-lg">
                  <div className="relative h-full w-full min-h-[10rem]">
                    <Image
                      src={item.backgroundImage}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover/image:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </div>
                </Link>
              }
              icon={
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {item.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-cyan-100 px-2 py-0.5 text-[10px] font-medium text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {item.technologies.length > 3 && (
                    <span className="rounded-full bg-neutral-200 px-2 py-0.5 text-[10px] font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
                      +{item.technologies.length - 3}
                    </span>
                  )}
                </div>
              }
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/portafolio"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-cyan-400 to-sky-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all hover:shadow-cyan-500/30"
          >
            Ver todos los proyectos
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
