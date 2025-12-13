"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Types
export interface Service {
    id: number;
    title: string;
    slug: string;
    icon: string;
    description: string;
    longDescription: string;
    features: string[];
    technologies: string[];
    price: string;
    popular: boolean;
    category: string;
    benefits: string[];
    process: string[];
    faq: Array<{
        question: string;
        answer: string;
    }>;
}

// Helper for Specific Service Icons
const ServiceIcon = ({ icon }: { icon: string }) => {
    switch (icon) {
        case 'desarrollo':
            return <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />;
        case 'app':
            return <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />;
        case 'ia':
            return <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />;
        case 'ecommerce':
            return <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />;
        case 'hosting':
            return <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2-2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />;
        default:
            // Fallback generic icon
            return <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />;
    }
}

// Visual that combines Gradient + Icon
const ServiceProductVisual = ({ type, icon }: { type: string, icon: string }) => {
    const gradients: Record<string, string> = {
        "desarrollo-web": "from-[#5E3BEE] to-[#86D4FF]",
        "desarrollo-aplicativo": "from-[#FF0080] to-[#7928CA]",
        "soluciones-ia": "from-[#00F260] to-[#0575E6]",
        "ecommerce": "from-[#4FACFE] to-[#00F2FE]",
        "hosting-dominio": "from-[#434343] to-[#000000]"
    };

    // Improved gradient fallback logic
    let gradient = "from-gray-700 to-gray-900";
    if (gradients[type]) {
        gradient = gradients[type];
    } else if (gradients[icon]) { // Try matching by icon name if type fails
        gradient = gradients[icon];
    }

    return (
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} p-0.5 shadow-lg relative group-hover:scale-110 transition-transform duration-500`}>
            <div className="w-full h-full bg-[#0B1221] rounded-[14px] flex items-center justify-center relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20`} />
                {/* Real Icon instead of abstract circle */}
                <svg className="w-8 h-8 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <ServiceIcon icon={icon} />
                </svg>
            </div>
        </div>
    );
};

export default function ServicesClient({ services }: { services: Service[] }) {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        {
            question: "¿Cómo funciona el proceso de pago?",
            answer: "Para proyectos de desarrollo, trabajamos con un anticipo del 50% y el resto contra entrega. Para servicios mensuales (marketing/hosting), es suscripción recurrente."
        },
        {
            question: "¿Hay costos ocultos o recurrentes?",
            answer: "Somos 100% transparentes. El precio cotizado es el final. Solo servicios como hosting o mantenimiento tienen costos recurrentes claros."
        },
        {
            question: "¿Puedo personalizar un paquete?",
            answer: "¡Claro! Estos paquetes son puntos de partida. Podemos ajustar características y precios a tu medida exacta contactando a ventas."
        },
        {
            question: "¿Ofrecen garantía?",
            answer: "Sí, todos nuestros desarrollos tienen 90 días de garantía técnica sobre bugs o fallos del sistema entregado."
        }
    ];

    const clientLogos = [
        { name: "Blind Point", src: "/images/logos/blind_point_logo.webp" },
        { name: "Sin Titulo", src: "/images/logos/cropped-cropped-Sin-titulo-5.webp" },
        { name: "Great", src: "/images/logos/great-logo.webp" },
        { name: "Natural Pets", src: "/images/logos/Logo-Natural-Pets-10-CORTE-e1753688418272-2048x1072.webp" },
        { name: "Una Tinta", src: "/images/logos/Una-Tinta-Blanco.webp" },
    ];

    return (
        <>
            {/* 2. Product Grid */}
            <section className="w-[90%] max-w-[1600px] mx-auto mb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <div
                            key={service.id}
                            className={`
                relative flex flex-col rounded-3xl p-8 border transition-all duration-300 group
                ${service.popular
                                    ? "bg-[#0B1221] border-[#5E3BEE] shadow-[0_0_40px_rgba(94,59,238,0.15)] scale-[1.02] z-10"
                                    : "bg-[#080E1C] border-[#1D2A3C] hover:border-[#86D4FF]/30 hover:bg-[#0B1221] hover:-translate-y-2"
                                }
              `}
                        >
                            {service.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#5E3BEE] to-[#86D4FF] text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg z-30">
                                    Más Vendido
                                </div>
                            )}

                            {/* Mobile Click Overlay */}
                            <Link href={`/servicios/${service.slug}`} className="absolute inset-0 z-0 rounded-3xl" aria-label={`Ver detalles de ${service.title}`} />

                            {/* Product Header with Icon */}
                            <div className="flex items-start justify-between mb-8 relative z-10 pointer-events-none">
                                <ServiceProductVisual type={service.slug} icon={service.icon} />
                                <div className="text-right">
                                    <p className="text-sm text-gray-500 mb-1">Inversión desde</p>
                                    <p className="text-2xl font-thin text-white">{service.price}</p>
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="mb-8 relative z-10 pointer-events-none">
                                <h3 className="text-2xl font-medium text-white mb-2">{service.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed min-h-[40px]">
                                    {service.description}
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-3 mb-8 relative z-20">
                                <Link
                                    href={`/servicios/${service.slug}`}
                                    className="flex-1 py-3 rounded-xl font-bold text-center transition-all duration-300 border border-[#1D2A3C] text-gray-300 hover:text-white hover:bg-[#1E293B] hover:border-[#86D4FF]/50 text-sm"
                                >
                                    Ver Detalles
                                </Link>
                                <Link
                                    href={`/contacto?service=${service.slug}`}
                                    className={`
                                        flex-1 py-3 rounded-xl font-bold text-center transition-all duration-300 flex items-center justify-center gap-2 text-sm
                                        ${service.popular
                                            ? "bg-[#5E3BEE] text-white hover:bg-[#4E33D8] shadow-[0_0_10px_rgba(94,59,238,0.3)]"
                                            : "bg-[#1E293B] text-white hover:bg-[#2D3B53]"
                                        }
                                    `}
                                >
                                    Solicitar
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </Link>
                            </div>

                            {/* Features List */}
                            <div className="mt-auto pt-8 border-t border-[#1D2A3C]/50">
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Lo que incluye:</p>
                                <ul className="space-y-3">
                                    {service.features.slice(0, 5).map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                                            <svg className="w-5 h-5 text-[#00F260] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="leading-tight">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    ))}
                </div>
            </section>

            {/* 3. Social Proof / Trust Bar - Minimalist & Infinite */}
            <section className="relative py-20 border-y border-[#1D2A3C] bg-[#080E1C]/30 mb-32 overflow-hidden">
                {/* Soft Gradient Masks */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#070C18] to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#070C18] to-transparent z-10 pointer-events-none" />

                <div className="w-full max-w-[1920px] mx-auto relative z-0">
                    <h4 className="text-center text-[#5E3BEE] font-bold tracking-[0.2em] uppercase mb-16 text-sm">
                        Empresas que innovan con nosotros
                    </h4>

                    <div className="overflow-hidden relative flex">
                        {/* Framer Motion Marquee - Minimalist Large Logos */}
                        <motion.div
                            className="flex items-center flex-nowrap"
                            style={{ width: "max-content" }}
                            animate={{ x: "-25%" }}
                            transition={{
                                duration: 20,
                                ease: "linear",
                                repeat: Infinity
                            }}
                        >
                            {[...Array(4)].map((_, setIndex) => (
                                <React.Fragment key={setIndex}>
                                    {clientLogos.map((client, i) => (
                                        <div
                                            key={`${setIndex}-${i}`}
                                            className="relative w-56 h-28 md:w-72 md:h-32 opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 flex items-center justify-center shrink-0 px-8 md:px-12"
                                        >
                                            <div className="relative w-full h-full p-4">
                                                <Image
                                                    src={client.src}
                                                    alt={client.name}
                                                    fill
                                                    className="object-contain scale-90"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </React.Fragment>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 4. FAQ Section */}
            <section className="w-[90%] max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-12">Preguntas Frecuentes de Compra</h2>
                <div className="space-y-4 text-left">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="group border border-[#1D2A3C] rounded-2xl bg-[#0B1221] overflow-hidden transition-all duration-300 hover:border-[#5E3BEE]"
                        >
                            <button
                                className="w-full flex items-center justify-between p-6 text-left"
                                onClick={() => toggleFaq(index)}
                            >
                                <span className="text-lg font-medium text-white group-hover:text-[#86D4FF] transition-colors">{faq.question}</span>
                                <div className={`w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center transition-all duration-300 ${openFaq === index ? 'rotate-180 bg-[#5E3BEE] border-[#5E3BEE] text-white' : 'text-gray-400'}`}>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                </div>
                            </button>
                            <div
                                className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${openFaq === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
