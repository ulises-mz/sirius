"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";

import React, { useRef, useState } from "react";


interface NavbarProps {
  children: React.ReactNode;
  className?: string;
  position?: "fixed" | "sticky";
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
  compact?: number;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
  compact?: number;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className, position = "sticky" }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean>(false);
  const lastScrollY = useRef(0);
  const [direction, setDirection] = useState<"up" | "down">("up");
  const [compact, setCompact] = useState(0);
  const lastLogged = useRef(0);

  // Debug: confirm mount
  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.log("[Navbar] mounted: sticky=", position);
  }, [position]);

  React.useEffect(() => {
    const getScrollTop = () =>
      typeof window !== "undefined"
        ? window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0
        : 0;

    const onScroll = () => {
      const y = getScrollTop();
      // Transición discreta: al pasar un pequeño umbral, activamos estado compacto y fondo
      const TOGGLE_Y = 24;
      const toggled = y > TOGGLE_Y;
      setVisible(toggled);
      const dir = y > lastScrollY.current ? "down" : "up";
      setDirection(dir);
      lastScrollY.current = y;

      // Compactación discreta (0 o 1) en vez de proporcional al scroll
      setCompact(toggled ? 1 : 0);

      if (Math.abs(y - lastLogged.current) > 50) {
        // eslint-disable-next-line no-console
        console.log("[Navbar] scrollY=", Math.round(y), {
          visible: toggled,
          direction: dir,
          compact: toggled ? 1 : 0,
        });
        lastLogged.current = y;
      }
    };

    // Fire once on mount and attach listeners
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("scroll", onScroll, { passive: true, capture: true });
    return () => {
      window.removeEventListener("scroll", onScroll as any);
      document.removeEventListener("scroll", onScroll as any, { capture: true } as any);
    };
  }, []);

  // Debug: log prop propagation
  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.log("[Navbar] state", { visible, direction, compact: Number(compact.toFixed(2)) });
  }, [visible, direction, compact]);

  return (
    <motion.div
      ref={ref}
      className={cn(
        position === "fixed" ? "fixed" : "sticky",
        "inset-x-0 top-0 z-40 w-full",
        className,
      )}
      layout
      animate={{ y: direction === "down" ? 4 : 0 }}
      transition={{ type: "spring", stiffness: 140, damping: 26, mass: 0.6 }}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
            child as React.ReactElement<{ visible?: boolean; compact?: number }>,
            { visible, compact },
          )
          : child,
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible, compact = 0 }: NavBodyProps) => {
  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.log("[NavBody] props", { visible, compact: Number(compact.toFixed(2)) });
  }, [visible, compact]);
  const [expandedW, setExpandedW] = React.useState(1280);
  React.useEffect(() => {
    const update = () => {
      if (typeof window === "undefined") return;
      const vw = Math.max(0, window.innerWidth - 32);
      const clamped = Math.max(960, Math.min(vw, 1920));
      setExpandedW(clamped);
    };
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update as any);
  }, []);
  const compactW = 1280;
  const targetMaxW = expandedW - (expandedW - compactW) * compact;
  return (
    <motion.div
      layout
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        y: 2 * compact,
        scale: 1 - 0.02 * compact,
        paddingTop: 16 - 4 * compact,
        paddingBottom: 16 - 4 * compact,
        paddingLeft: 24 - 8 * compact,
        paddingRight: 24 - 8 * compact,
        borderRadius: 28 - 8 * compact,
        maxWidth: targetMaxW,
      }}
      transition={{ type: "spring", stiffness: 140, damping: 26, mass: 0.6 }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full flex-row items-center justify-between self-start rounded-full bg-transparent px-4 py-3 lg:flex dark:bg-transparent min-h-[64px]",
        visible && "bg-white/80 dark:bg-neutral-950/80",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "hidden flex-1 flex-row items-center justify-center space-x-2 text-base font-medium transition duration-200 lg:flex lg:space-x-2",
        className,
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-2 text-white hover:text-cyan-400 dark:text-white dark:hover:text-cyan-400 transition-colors"
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 h-full w-full rounded-full bg-white/10 dark:bg-cyan-900/20 pointer-events-none"
              style={{ minHeight: '100%', minWidth: '100%' }}
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible, compact = 0 }: MobileNavProps) => {
  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.log("[MobileNav] props", { visible, compact: Number(compact.toFixed(2)) });
  }, [visible, compact]);
  return (
    <motion.div
      layout
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "90%" : "100%",
        paddingRight: visible ? "12px" : "0px",
        paddingLeft: visible ? "12px" : "0px",
        borderRadius: visible ? "4px" : "2rem",
        y: 2 * compact,
        scale: 1 - 0.04 * compact,
      }}
      transition={{ type: "spring", stiffness: 140, damping: 26, mass: 0.6 }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden",
        visible && "bg-white/80 dark:bg-neutral-950/80",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-950",
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return isOpen ? (
    <IconX className="text-black dark:text-white" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-black dark:text-white" onClick={onClick} />
  );
};

export const NavbarLogo = () => {
  return (
    <a
      href="#"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
    >
      <img
        src="https://assets.aceternity.com/logo-dark.png"
        alt="logo"
        width={30}
        height={30}
      />
      <span className="font-medium text-black dark:text-white">sirius</span>
    </a>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
    | React.ComponentPropsWithoutRef<"a">
    | React.ComponentPropsWithoutRef<"button">
  )) => {
  const baseStyles =
    "px-5 py-2.5 rounded-md bg-white button bg-white text-black text-base font-medium relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

  const variantStyles = {
    primary:
      "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    secondary: "bg-transparent shadow-none dark:text-white",
    dark: "bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    gradient:
      "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
  } as const;

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
