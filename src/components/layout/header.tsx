"use client";
import { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  NavbarButton,
} from "@/components/ui/resizable-navbar";
import LoadingLink from "@/components/shared/loading-link";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Servicios", link: "/servicios" },
    { name: "Proyectos", link: "/portafolio" },
    { name: "Contacto", link: "/contacto" },
  ];

  return (
    <Navbar>
      {/* Desktop */}
      <NavBody>
        {/* Logo / Inicio */}
        <LoadingLink
          href="/"
          className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-base font-semibold text-black dark:text-white"
          aria-label="Inicio - Sirius"
        >
          <span
            aria-hidden
            className="block h-10 w-22"
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
        </LoadingLink>

        {/* Center items */}
        <NavItems items={navItems} className="text-base" />

        {/* Right actions */}
        <div className="flex items-center gap-4">
          <LoadingLink
            href="/blog"
            className="px-3 py-2 text-base font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-300"
          >
            Blog
          </LoadingLink>
          <NavbarButton as={LoadingLink} href="/agendar" variant="primary">
            Agendar consultoría gratuita
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile */}
      <MobileNav>
        <MobileNavHeader>
          <LoadingLink
            href="/"
            className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-base font-semibold text-black dark:text-white"
            aria-label="Inicio - Sirius"
          >
            <span
              aria-hidden
              className="block h-12 w-18"
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
          </LoadingLink>
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <LoadingLink
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-base font-medium text-neutral-700 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </LoadingLink>
          ))}
          <div className="flex w-full flex-col gap-4">
            <LoadingLink
              href="/blog"
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-base font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-300"
            >
              Blog
            </LoadingLink>
            <NavbarButton
              as={LoadingLink}
              href="/agendar"
              onClick={() => setIsMobileMenuOpen(false)}
              variant="primary"
              className="w-full"
            >
              Agendar consultoría gratuita
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}