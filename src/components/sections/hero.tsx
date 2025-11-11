"use client";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import "@/styles/hero.css";

const rotatingWords = [
  "la estrella más brillante",
  "tecnología que ilumina",
  "soluciones estelares",
  "innovación cósmica",
];

// Ligera detección para desactivar efectos en dispositivos con puntero "coarse" (táctiles)
const isCoarsePointer = () =>
  typeof window !== "undefined" && window.matchMedia && window.matchMedia("(pointer: coarse)").matches;

// Canvas Starfield: ligero y performante
function Starfield({ density = 0.8, enableComets = true }: { density?: number; enableComets?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const prefersReduced = useMemo(
    () => (typeof window !== "undefined" && window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false),
    []
  );
  const lastCometRef = useRef<number>(0);
  const cometsRef = useRef<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    z: number; // profundidad para parallax y brillo
    life: number; // frames restantes
    maxLife: number;
    size: number;
  }[]>([]);
  const lastTimeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const stars: { x: number; y: number; z: number; s: number; v: number }[] = [];

    // Spawner de cometas/estrellas fugaces para reutilizar lógica
    const spawnComet = () => {
      if (!enableComets || prefersReduced) return;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const edge = Math.random();
      let startX: number, startY: number, targetX: number, targetY: number;
      if (edge < 0.33) { // izquierda -> abajo-derecha
        startX = -60; startY = Math.random() * h * 0.5;
        targetX = w + 140; targetY = h * (0.4 + Math.random() * 0.5);
      } else if (edge < 0.66) { // derecha -> abajo-izquierda
        startX = w + 60; startY = Math.random() * h * 0.5;
        targetX = -140; targetY = h * (0.4 + Math.random() * 0.5);
      } else { // arriba -> diagonal abajo
        startX = Math.random() * w; startY = -60;
        targetX = startX + (Math.random() > 0.5 ? 240 : -240);
        targetY = h + 120;
      }
      const dx = targetX - startX;
      const dy = targetY - startY;
      const dist = Math.hypot(dx, dy);
      const speedPx = 320 + Math.random() * 240; // px/s
      const lifeSeconds = dist / speedPx;
      const frames = Math.max(28, Math.floor((lifeSeconds * 1000) / 16.666));
      const z = 0.55 + Math.random() * 0.45; // profundidad cerca para brillo
      cometsRef.current.push({
        x: startX,
        y: startY,
        vx: dx / frames,
        vy: dy / frames,
        z,
        life: frames,
        maxLife: frames,
        size: 2 + z * 2.6,
      });
    };

    const resize = () => {
      const { clientWidth, clientHeight } = canvas;
      canvas.width = Math.floor(clientWidth * dpr);
      canvas.height = Math.floor(clientHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      stars.length = 0;
      const baseCount = Math.round((clientWidth * clientHeight) / 8000 * density);
      for (let i = 0; i < baseCount; i++) {
        stars.push({
          x: Math.random() * clientWidth,
          y: Math.random() * clientHeight,
          z: Math.random() * 1 + 0.3, // profundidad
          s: Math.random() * 1.2 + 0.2, // tamaño
          v: Math.random() * 0.3 + 0.05, // velocidad sutil
        });
      }
    };

    const step = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const now = performance.now();
      if (!lastTimeRef.current) lastTimeRef.current = now;
      const deltaMs = now - lastTimeRef.current;
      lastTimeRef.current = now;
      const delta = Math.min(deltaMs / 16.666, 3); // normalizar (1 = ~60fps)

      ctx.clearRect(0, 0, w, h);
      // Parallax por mouse
      const parX = (mouseRef.current.x - w / 2) / w;
      const parY = (mouseRef.current.y - h / 2) / h;
      for (const st of stars) {
        // movimiento sutil vertical para sensación de deriva
        if (!prefersReduced) st.y += st.v * st.z * delta;
        if (st.y > h + 5) st.y = -5;
        // parallax aplicado al dibujo, no a la posición
        const px = st.x + parX * 20 * (1.6 - st.z);
        const py = st.y + parY * 20 * (1.6 - st.z);
        const alpha = 0.6 * st.z + 0.2;
        ctx.fillStyle = `rgba(200,220,255,${alpha})`;
        ctx.beginPath();
        ctx.arc(px, py, st.s, 0, Math.PI * 2);
        ctx.fill();
      }

      // Comets / shooting stars visibles
      if (enableComets && !prefersReduced) {
        const interval = 2500 + Math.random() * 2500; // 2.5–5s
        if (now - lastCometRef.current > interval && cometsRef.current.length < 5) {
          lastCometRef.current = now;
          spawnComet();
        }
        ctx.save();
        ctx.globalCompositeOperation = "lighter"; // brillo aditivo
        cometsRef.current.forEach((c) => {
          c.x += c.vx * delta;
          c.y += c.vy * delta;
          c.life -= delta;
          const progress = 1 - c.life / c.maxLife;
          const trailParts = 14;
          for (let i = 0; i < trailParts; i++) {
            const t = i / trailParts;
            const trailDistFactor = 10;
            const tx = c.x - c.vx * t * trailDistFactor;
            const ty = c.y - c.vy * t * trailDistFactor;
            const fade = (1 - t) * (c.z * 0.85 + 0.15) * (0.65 + progress * 0.35);
            ctx.fillStyle = `rgba(${140 + c.z * 90}, ${190 + c.z * 50}, 255, ${fade})`;
            ctx.beginPath();
            ctx.arc(
              tx + parX * 22 * (1.3 - c.z),
              ty + parY * 22 * (1.3 - c.z),
              c.size * (1 - t * 0.72),
              0,
              Math.PI * 2
            );
            ctx.fill();
          }
        });
        ctx.restore();
        cometsRef.current = cometsRef.current.filter((c) => c.life > 0);
      }
      raf = requestAnimationFrame(step);
    };

  resize();
  // Spawn inicial para que el usuario vea uno rápido
  spawnComet();
  step();
    const obs = new ResizeObserver(resize);
    obs.observe(canvas);
    return () => {
      cancelAnimationFrame(raf);
      obs.disconnect();
    };
  }, [density, prefersReduced, enableComets]);

  useEffect(() => {
    if (isCoarsePointer()) return;
    const handleMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return <canvas ref={canvasRef} className="hero-stars" />;
}

// Capa separada solo para cometas/estrellas fugaces por encima del overlay
function CometField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const prefersReduced = useMemo(
    () => (typeof window !== "undefined" && window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false),
    []
  );
  const lastTimeRef = useRef<number>(0);
  const lastSpawnRef = useRef<number>(0);
  const cometsRef = useRef<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    z: number;
    life: number;
    maxLife: number;
    size: number;
  }[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;
    let raf = 0;

    const spawn = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const edge = Math.random();
      let startX: number, startY: number, targetX: number, targetY: number;
      if (edge < 0.33) { // izquierda -> abajo-derecha
        startX = -60; startY = Math.random() * h * 0.5;
        targetX = w + 160; targetY = h * (0.4 + Math.random() * 0.5);
      } else if (edge < 0.66) { // derecha -> abajo-izquierda
        startX = w + 60; startY = Math.random() * h * 0.5;
        targetX = -160; targetY = h * (0.4 + Math.random() * 0.5);
      } else { // arriba -> diagonal abajo
        startX = Math.random() * w; startY = -60;
        targetX = startX + (Math.random() > 0.5 ? 260 : -260);
        targetY = h + 120;
      }
      const dx = targetX - startX;
      const dy = targetY - startY;
      const dist = Math.hypot(dx, dy);
      const speedPx = 340 + Math.random() * 240;
      const lifeSec = dist / speedPx;
      const frames = Math.max(24, Math.floor((lifeSec * 1000) / 16.666));
      const z = 0.55 + Math.random() * 0.45;
      cometsRef.current.push({
        x: startX,
        y: startY,
        vx: dx / frames,
        vy: dy / frames,
        z,
        life: frames,
        maxLife: frames,
        size: 2 + z * 2.8,
      });
    };

    const step = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const now = performance.now();
      if (!lastTimeRef.current) lastTimeRef.current = now;
      const deltaMs = now - lastTimeRef.current;
      lastTimeRef.current = now;
      const delta = Math.min(deltaMs / 16.666, 3);

      canvas.width = w; // asegurar resolución CSS
      canvas.height = h;
      ctx.clearRect(0, 0, w, h);

      const parX = (mouseRef.current.x - w / 2) / w;
      const parY = (mouseRef.current.y - h / 2) / h;

      if (!prefersReduced) {
        const interval = 2200 + Math.random() * 2200; // 2.2–4.4s
        if (now - lastSpawnRef.current > interval && cometsRef.current.length < 5) {
          lastSpawnRef.current = now;
          spawn();
        }
      }

      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      cometsRef.current.forEach((c) => {
        c.x += c.vx * delta;
        c.y += c.vy * delta;
        c.life -= delta;
        const progress = 1 - c.life / c.maxLife;
        const parts = 16;
        for (let i = 0; i < parts; i++) {
          const t = i / parts;
          const distFactor = 11;
          const tx = c.x - c.vx * t * distFactor;
          const ty = c.y - c.vy * t * distFactor;
          const fade = (1 - t) * (c.z * 0.85 + 0.15) * (0.7 + progress * 0.3);
          ctx.fillStyle = `rgba(${150 + c.z * 90}, ${200 + c.z * 40}, 255, ${fade})`;
          ctx.beginPath();
          ctx.arc(
            tx + parX * 18 * (1.2 - c.z),
            ty + parY * 18 * (1.2 - c.z),
            c.size * (1 - t * 0.75),
            0,
            Math.PI * 2
          );
          ctx.fill();
        }
      });
      ctx.restore();
      cometsRef.current = cometsRef.current.filter((c) => c.life > 0);
      raf = requestAnimationFrame(step);
    };

    // Spawn inicial para visibilidad inmediata
    spawn();
    step();
    return () => cancelAnimationFrame(raf);
  }, [prefersReduced]);

  useEffect(() => {
    if (isCoarsePointer()) return;
    const handleMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return <canvas ref={canvasRef} className="hero-comets" />;
}

export default function Hero() {
  // Typing effect
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const currentWord = rotatingWords[currentIndex];
    const handleTyping = () => {
      if (!isDeleting && currentText !== currentWord) {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
      } else if (isDeleting && currentText !== "") {
        setCurrentText(currentText.substring(0, currentText.length - 1));
      } else {
        if (!isDeleting && currentText === currentWord) {
          setTimeout(() => setIsDeleting(true), 900);
        } else if (isDeleting && currentText === "") {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % rotatingWords.length);
          setTypingSpeed(120);
        }
      }
    };
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex, typingSpeed]);

  // Parallax con framer-motion
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smoothX = useSpring(mx, { stiffness: 60, damping: 20, mass: 0.3 });
  const smoothY = useSpring(my, { stiffness: 60, damping: 20, mass: 0.3 });

  // Custom hook para generar transforms por capa con profundidad incrementada
  const useLayerTransforms = (depth: number) => {
    const x = useTransform(smoothX, (v) => v * depth);
    const y = useTransform(smoothY, (v) => v * depth);
    const rotate = useTransform(smoothX, (v) => v * depth * 0.15);
    return { x, y, rotate };
  };
  // Planetas con parallax extremo basado en profundidad
  const planetFar = useLayerTransforms(-8);      // Marte (más lejos, movimiento mínimo)
  const planetMid = useLayerTransforms(-25);     // Neptuno (distancia media)
  const planetNear = useLayerTransforms(-45);    // Júpiter (más cerca, máximo movimiento)
  
  const back = useLayerTransforms(-10);
  const mid = useLayerTransforms(-18);
  const front = useLayerTransforms(-28);
  const cursorGlow = useLayerTransforms(-35);
  // Movimiento del TEXTO mucho más sutil (sin rotación)
  const textX = useTransform(smoothX, (v) => v * -3);
  const textY = useTransform(smoothY, (v) => v * -3);

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isCoarsePointer()) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5; // -0.5..0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    // Escala el efecto en px - aumentado para parallax más notorio
    mx.set(px * 50);
    my.set(py * 50);
  };

  return (
    <section className="hero" onPointerMove={onPointerMove}>
      {/* Fondo animado: estrellas + nebulosas + planetas con parallax */}
      <div className="hero-bg">
        {/* Inicial fade-in */}
        <motion.div className="hero-bg-fade" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }} />

        {/* Capa estrellas */}
        <motion.div className="hero-stars-wrap" style={back}>
          <Starfield density={0.9} enableComets={true} />
        </motion.div>

        {/* Nebulosas - blobs con mezcla y blur */}
        <motion.div className="nebula nebula-a" style={mid} />
        <motion.div className="nebula nebula-b" style={front} />

        {/* Planetas con parallax intenso según profundidad */}
        <motion.div className="planet planet-small" style={planetFar} />
        <motion.div className="planet planet-medium" style={planetMid} />
        <motion.div className="planet planet-large" style={planetNear} />

        {/* Glow que sigue el cursor */}
        <motion.div className="cursor-glow" style={{ x: cursorGlow.x, y: cursorGlow.y }} />

        {/* Overlay para contraste */}
        <div className="hero-overlay" />

        {/* Cometas por encima del overlay para máxima visibilidad */}
        <motion.div className="hero-comets-wrap" style={mid}>
          <CometField />
        </motion.div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          {/* Texto */}
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <h1 className="hero-title">
              Brilla como Sirius con{" "}
              <span className="hero-typing">
                {currentText}
                <span className="hero-cursor" />
              </span>
            </h1>
            <p className="hero-subtitle">
              Como la estrella más brillante del cielo, iluminamos tu camino digital con soluciones innovadoras en Costa Rica.
            </p>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link href="/agendar" className="button hero-button neon-cta">
                Agenda tu Consultoría Gratuita
              </Link>
            </motion.div>
          </motion.div>

          {/** Ilustración decorativa removida a solicitud del usuario */}
        </div>
      </div>
    </section>
  );
}
