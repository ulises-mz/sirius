"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { motion } from "framer-motion";
import "@/styles/globals.css";

// Icons
const ContactIcon = ({ icon }: { icon: string }) => {
  switch (icon) {
    case 'email':
      return <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />;
    case 'phone':
      return <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />;
    case 'location':
      return <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />;
    case 'whatsapp':
      return <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.243-1.637a11.882 11.882 0 005.74 1.471c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />;
    case 'send':
      return <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />;
    default:
      return null;
  }
};

export default function ContactClient({ config }: { config: any }) {
  const [message, setMessage] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = () => {
    // Si no hay mensaje, usar uno default
    const textToSend = message.trim() || "Hola, me interesa cotizar un proyecto con Sirius.";

    // Remove '+' and spaces for the wa.me link
    const waNumber = (config?.whatsappNumber || "50672217873").replace(/[^0-9]/g, '');
    const whatsappUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(textToSend)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-[#070C18] text-[#F4F7FB] font-sans selection:bg-[#5E3BEE] selection:text-white pb-20">

      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-16 w-[90%] max-w-[1600px] mx-auto text-center">
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-[#5E3BEE] font-bold tracking-[0.2em] text-sm uppercase mb-6 animate-fade-in-up">
            Hablemos de tu Proyecto
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 animate-fade-in-up delay-100">
            ¿Listo para <br />
            <span className="font-thin italic text-transparent bg-clip-text bg-gradient-to-r from-[#86D4FF] to-[#5E3BEE] pr-4">
              construir el futuro?
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto animate-fade-in-up delay-200">
            Cuéntanos tus ideas. Ya sea una web corporativa, una app innovadora o una automatización con IA, estamos aquí para hacerlo realidad.
          </p>
        </div>

        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#5E3BEE] rounded-full mix-blend-screen filter blur-[120px] opacity-[0.15] pointer-events-none" />
      </section>

      {/* 2. Main Grid: Info + Chat Simulator */}
      <section className="w-[90%] max-w-[1200px] mx-auto mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* Left: Contact Info */}
          <div className="space-y-8 animate-fade-in-up delay-300">

            <div className="relative">
              <h2 className="text-3xl font-bold mb-6">Ponte en contacto</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Estamos listos para escuchar tus ideas. Elige el canal que prefieras y comencemos a conversar sobre tu próximo proyecto digital.
              </p>

              <div className="flex flex-col gap-6">

                {/* WhatsApp Item */}
                <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-[#1E293B]/50 transition-colors border border-transparent hover:border-[#5E3BEE]/30 group">
                  <div className="w-12 h-12 rounded-full bg-[#5E3BEE]/10 flex items-center justify-center text-[#5E3BEE] shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <ContactIcon icon="whatsapp" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Chat Rápido</h3>
                    <p className="text-white font-medium text-lg mb-1">{config?.whatsappNumber || "WhatsApp Directo"}</p>
                    <a href={`https://wa.me/${(config?.whatsappNumber || "50672217873").replace(/[^0-9]/g, '')}`} target="_blank" className="text-[#5E3BEE] hover:text-[#86D4FF] transition-colors inline-flex items-center gap-1 text-sm font-semibold">
                      Iniciar conversación <span className="transition-transform group-hover:translate-x-1">→</span>
                    </a>
                  </div>
                </div>

                {/* Email Item */}
                <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-[#1E293B]/50 transition-colors border border-transparent hover:border-[#86D4FF]/30 group">
                  <div className="w-12 h-12 rounded-full bg-[#86D4FF]/10 flex items-center justify-center text-[#86D4FF] shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <ContactIcon icon="email" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Correo Electrónico</h3>
                    <a href={`mailto:${config?.contactEmail || SITE.primaryEmail}`} className="text-white font-medium text-lg hover:text-[#86D4FF] transition-colors">
                      {config?.contactEmail || SITE.primaryEmail}
                    </a>
                    <p className="text-gray-500 text-sm mt-1">Respuesta en aprox. 2-4 horas</p>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-[#1E293B]/50 transition-colors border border-transparent hover:border-[#00F260]/30 group">
                  <div className="w-12 h-12 rounded-full bg-[#00F260]/10 flex items-center justify-center text-[#00F260] shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <ContactIcon icon="location" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Ubicación</h3>
                    <p className="text-white font-medium text-lg">{config?.address || "Pozos de Santa Ana, San José"}</p>
                    {config?.address ? null : <p className="text-gray-500 text-sm mt-1">Costa Rica</p>}
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Right: WhatsApp Simulator */}
          <div className="relative animate-fade-in-up delay-500">
            {/* Decorative blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#5E3BEE] rounded-full mix-blend-screen filter blur-[100px] opacity-[0.1] pointer-events-none" />

            {/* Phone Container */}
            <div className="relative bg-[#0B1426] border border-[#1D2A3C] rounded-[2.5rem] shadow-2xl overflow-hidden max-w-md mx-auto transform rotate-1 hover:rotate-0 transition-transform duration-500">

              {/* Header */}
              <div className="bg-[#1F2C46] p-4 flex items-center gap-4 border-b border-[#2D3F5E]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#5E3BEE] to-[#86D4FF] flex items-center justify-center text-white font-bold text-sm">
                  S
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Sirius Team</p>
                  <p className="text-[#00F260] text-xs">En línea</p>
                </div>
              </div>

              {/* Chat Body */}
              <div className="h-[400px] p-6 flex flex-col gap-4 overflow-y-auto bg-[url('/images/chat-bg-pattern.png')] bg-repeat bg-opacity-5">
                <div className="bg-[#1F2C46] p-4 rounded-2xl rounded-tl-none self-start max-w-[85%] text-sm text-gray-200 shadow-md">
                  <p>¡Hola! 👋 Bienvenido a Sirius.</p>
                </div>
                <div className="bg-[#1F2C46] p-4 rounded-2xl rounded-tl-none self-start max-w-[85%] text-sm text-gray-200 shadow-md">
                  <p>¿Tienes en mente un proyecto increíble? Cuéntanos un poco y te ayudaremos a hacerlo realidad 🚀</p>
                </div>
                {/* User Ghost Message Preview */}
                {message && (
                  <div className="bg-[#5E3BEE] p-4 rounded-2xl rounded-tr-none self-end max-w-[85%] text-sm text-white shadow-md animate-pulse opacity-70">
                    <p>{message}</p>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 bg-[#1F2C46] border-t border-[#2D3F5E]">
                <div className="flex items-center gap-2 bg-[#0B1426] rounded-full px-4 py-2 border border-[#2D3F5E] focus-within:border-[#5E3BEE] transition-colors">
                  <input
                    type="text"
                    placeholder="Escribe tu mensaje..."
                    className="bg-transparent text-white text-sm w-full outline-none placeholder:text-gray-500 py-2"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                  />
                  <button
                    onClick={handleSendMessage}
                    className="w-10 h-10 rounded-full bg-[#5E3BEE] text-white flex items-center justify-center hover:bg-[#4E33D8] transition-colors shrink-0"
                  >
                    <svg className="w-5 h-5 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <ContactIcon icon="send" />
                    </svg>
                  </button>
                </div>
                <p className="text-center text-xs text-gray-500 mt-3">
                  Al enviar, serás redirigido a WhatsApp
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
