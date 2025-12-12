"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const controls = useAnimation();
  const x = useMotionValue(0);

  useEffect(() => {
    const cardWidth = 400 + 24; // ancho del card + gap
    const totalWidth = testimonials.length * cardWidth;

    const animate = async () => {
      await controls.start({
        x: -totalWidth,
        transition: {
          duration: testimonials.length * 5, // 5 segundos por card
          ease: "linear",
        },
      });

      // Resetear instantáneamente a la posición inicial
      controls.set({ x: 0 });
      animate(); // Repetir
    };

    animate();
  }, [controls]);

  // Duplicar testimonios para crear el efecto infinito
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="relative py-20 px-4 sm:py-12 overflow-hidden">
      <div className="mx-auto w-[95%] lg:w-[80%]">
        <div className="mb-16 text-center sm:mb-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-50/50 px-4 py-2 dark:bg-cyan-900/10">
            <div className="h-2 w-2 rounded-full bg-cyan-400" />
            <span className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
              Testimonios
            </span>
          </div>
          <h2 className="mb-6 text-4xl md:text-5xl font-bold leading-tight tracking-tight text-neutral-900 dark:text-white sm:text-2xl sm:mb-4">
            Lo que dicen nuestros{" "}
            <span className="text-cyan-600 dark:text-cyan-400 font-thin italic">
              clientes
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg md:text-xl text-neutral-600 dark:text-neutral-400 sm:text-base">
            Resultados reales de empresas que confiaron en nuestras soluciones digitales
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Contenedor del scroll infinito */}
        <motion.div
          className="flex gap-6"
          animate={controls}
          style={{ x }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[400px] rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-8 shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-cyan-400 text-cyan-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-neutral-700 dark:text-neutral-300 mb-6 text-sm leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="border-t border-neutral-200 dark:border-neutral-800 pt-4">
                <p className="font-semibold text-neutral-900 dark:text-white">{testimonial.name}</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{testimonial.title}</p>
                <p className="text-sm text-cyan-600 dark:text-cyan-400 font-medium">
                  {testimonial.company}
                </p>

                {/* Result Badge */}
                {testimonial.result && (
                  <div className="mt-3 inline-block">
                    <span className="bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 px-3 py-1 rounded-full text-xs font-semibold">
                      {testimonial.result}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
