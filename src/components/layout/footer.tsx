"use client";

import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/constants";

function SocialIcon({ label, href, children }: { label: string; href: string; children: React.ReactNode }) {
  if (!href) return null;
  return (
    <Link
      href={href}
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/80 transition-colors hover:text-white hover:border-white/20"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  const navPrimary = [
    { href: "/servicios", label: "Servicios" },
    { href: "/portafolio", label: "Portafolio" },
    { href: "/blog", label: "Blog" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/contacto", label: "Contacto" },
    { href: "/agendar", label: "Agendar" },
  ];

  const navLegal = [
    { href: "/privacidad", label: "Privacidad" },
    { href: "/terminos", label: "Términos" },
    { href: "/cookies", label: "Cookies" },
  ];

  return (
    <footer
      role="contentinfo"
      className="relative border-t border-white/10 text-sm"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
        <div className="absolute -top-16 left-1/2 h-48 w-[42rem] -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: "var(--gradient-accent)" }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="block h-20 w-20"
                style={{
                  WebkitMaskImage: "url(/favicon.svg)",
                  maskImage: "url(/favicon.svg)",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                  backgroundImage: "linear-gradient(135deg, #3ac8ff 0%, #6d6bff 100%)",
                }}
              />
            </div>
            <p className="text-white/70 leading-relaxed">
              {SITE.tagline}
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              <SocialIcon label="Facebook" href={SITE.social.facebook}>
                <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="currentColor" aria-hidden="true"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 4.99 3.66 9.13 8.44 9.94v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.5-3.88 3.78-3.88 1.1 0 2.25.2 2.25.2v2.48h-1.27c-1.25 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.9h-2.34v7.03C18.34 21.19 22 17.05 22 12.06z" /></svg>
              </SocialIcon>
              <SocialIcon label="Instagram" href={SITE.social.instagram}>
                <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="currentColor" aria-hidden="true"><path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.507 5.507 0 0 0 12 7.5zm0 2A3.5 3.5 0 1 1 8.5 13 3.504 3.504 0 0 1 12 9.5zM18 6.75a1 1 0 1 0 1 1 1 1 0 0 0-1-1z" /></svg>
              </SocialIcon>
              <SocialIcon label="LinkedIn" href={SITE.social.linkedin}>
                <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.036-1.85-3.036-1.853 0-2.136 1.447-2.136 2.943v5.662H9.001V9h3.104v1.561h.043c.432-.819 1.49-1.682 3.065-1.682 3.279 0 3.885 2.159 3.885 4.968v6.605zM5.337 7.433a1.804 1.804 0 1 1 0-3.608 1.804 1.804 0 0 1 0 3.608zM6.96 20.452H3.71V9H6.96v11.452z" /></svg>
              </SocialIcon>
              <SocialIcon label="X/Twitter" href={SITE.social.twitter}>
                <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="currentColor" aria-hidden="true"><path d="M18.244 2H21l-6.56 7.5L22 22h-6.828l-5.35-7.013L3.6 22H1l7.06-8.07L2 2h6.914l4.83 6.42L18.244 2zm-2.4 18h1.766L8.246 4H6.36l9.484 16z" /></svg>
              </SocialIcon>
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="mb-3 text-white font-semibold">Navegación</h3>
            <ul className="space-y-2.5 text-white/75">
              {navPrimary.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="space-y-3">
            <h3 className="mb-3 text-white font-semibold">Contacto</h3>
            <p className="text-white/75">{SITE.address.street}, {SITE.address.city}</p>
            <p>
              <Link href={`tel:${SITE.phone}`} className="text-white/75 transition-colors hover:text-white">
                {SITE.phone}
              </Link>
            </p>
            <p>
              <Link href={`mailto:${SITE.primaryEmail}`} className="text-white/75 transition-colors hover:text-white">
                {SITE.primaryEmail}
              </Link>
            </p>
            <p className="text-white/60">Lunes a viernes 8am a 5pm y sábados de 8 a 12md.</p>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-3 text-white font-semibold">Legal</h3>
            <ul className="space-y-2.5 text-white/75">
              {navLegal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-white/60 md:flex-row">
          <p>
            © {year} {SITE.legalName}. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/privacidad" className="hover:text-white">Privacidad</Link>
            <span className="text-white/20">•</span>
            <Link href="/terminos" className="hover:text-white">Términos</Link>
            <span className="text-white/20">•</span>
            <Link href="/cookies" className="hover:text-white">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
