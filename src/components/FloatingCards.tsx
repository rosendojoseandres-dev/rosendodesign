"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

/* ── Step indicator ─────────────────────────────── */
function Step({ n, label, color }: { n: string; label: string; color: string }) {
  return (
    <div className="flex items-center gap-2">
      <span
        className="flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-semibold text-white"
        style={{ background: color }}
      >
        {n}
      </span>
      <span className="text-xs text-white/70">{label}</span>
    </div>
  );
}

/* ── Card 1: Discovery / Research ───────────────── */
function DiscoveryCard({ className }: { className?: string }) {
  const bars = [72, 55, 88, 41, 65];
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-[#0d1017]/90 p-4 shadow-[0_12px_40px_rgba(0,0,0,.5)] backdrop-blur-md ${className}`}
    >
      <div className="flex items-center justify-between">
        <Step n="01" label="Discovery" color="#4f8ef7" />
        <span className="rounded-full bg-[#4f8ef7]/15 px-2 py-0.5 text-[10px] text-[#7eb3ff]">
          18 entrevistas
        </span>
      </div>

      <p className="mt-3 text-[11px] font-medium text-white/90">
        Pain points identificados
      </p>

      <div className="mt-2 flex items-end gap-1" style={{ height: 44 }}>
        {bars.map((h, i) => (
          <div key={i} className="flex flex-1 flex-col items-center justify-end gap-1">
            <div
              className="w-full rounded-sm"
              style={{
                height: `${(h / 100) * 36}px`,
                background: `rgba(79,142,247,${0.3 + (h / 100) * 0.55})`
              }}
            />
          </div>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {["Navegación", "Onboarding", "Velocidad"].map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-white/60"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Card 2: UI Design ──────────────────────────── */
function DesignCard({ className }: { className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-[#0d1017]/90 p-4 shadow-[0_12px_40px_rgba(0,0,0,.5)] backdrop-blur-md ${className}`}
    >
      <div className="flex items-center justify-between">
        <Step n="02" label="UI Design" color="#e0624a" />
        <span className="rounded-full bg-[#e0624a]/15 px-2 py-0.5 text-[10px] text-[#ff9b84]">
          Figma
        </span>
      </div>

      {/* Mini wireframe preview */}
      <div className="mt-3 overflow-hidden rounded-xl border border-white/8 bg-white/4 p-2">
        <div className="flex gap-1.5">
          <div className="h-12 w-8 rounded-lg bg-[#e0624a]/30" />
          <div className="flex flex-1 flex-col gap-1">
            <div className="h-2 w-3/4 rounded bg-white/20" />
            <div className="h-1.5 w-1/2 rounded bg-white/12" />
            <div className="mt-1 h-5 w-full rounded-md bg-[#e0624a]/25" />
          </div>
        </div>
        <div className="mt-2 flex gap-1">
          {[60, 40, 80].map((w, i) => (
            <div key={i} className="h-1.5 rounded bg-white/10" style={{ width: `${w}%` }} />
          ))}
        </div>
      </div>

      <div className="mt-2.5 flex items-center gap-1.5">
        <div className="h-2 w-2 rounded-full bg-[#e0624a]" />
        <p className="text-[11px] text-white/60">32 componentes · 4 variantes</p>
      </div>
    </div>
  );
}

/* ── Card 3: Design System ──────────────────────── */
function SystemCard({ className }: { className?: string }) {
  const tokens = [
    { name: "Primary", hex: "#4f8ef7" },
    { name: "Accent", hex: "#e0624a" },
    { name: "Surface", hex: "#1a2035" },
  ];
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-[#0d1017]/90 p-4 shadow-[0_12px_40px_rgba(0,0,0,.5)] backdrop-blur-md ${className}`}
    >
      <div className="flex items-center justify-between">
        <Step n="03" label="Design System" color="#9b6bff" />
        <span className="rounded-full bg-[#9b6bff]/15 px-2 py-0.5 text-[10px] text-[#c4a3ff]">
          Tokens
        </span>
      </div>

      <div className="mt-3 space-y-1.5">
        {tokens.map((t) => (
          <div key={t.name} className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-md border border-white/10" style={{ background: t.hex }} />
            <span className="flex-1 text-[11px] text-white/70">{t.name}</span>
            <span className="text-[10px] font-mono text-white/35">{t.hex}</span>
          </div>
        ))}
      </div>

      <div className="mt-3 flex gap-1">
        {["Sm", "Md", "Lg", "XL"].map((s) => (
          <div
            key={s}
            className="flex flex-1 items-center justify-center rounded-lg border border-white/10 bg-white/5 py-1 text-[10px] text-white/50"
          >
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Main export ─────────────────────────────────── */
export default function FloatingCards() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const y1 = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 30, reduce ? 0 : -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 10, reduce ? 0 : -80]);
  const y3 = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 50, reduce ? 0 : -30]);
  const r1 = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : -4, reduce ? 0 : 3]);
  const r2 = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 4, reduce ? 0 : -4]);
  const r3 = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 2, reduce ? 0 : -2]);

  return (
    <div ref={ref} className="w-full">
      {/* ── Móvil: columna alineada ── */}
      <div className="flex flex-col gap-4 px-4 md:hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <DiscoveryCard />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <DesignCard />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <SystemCard />
        </motion.div>
      </div>

      {/* ── Desktop: layout flotante original ── */}
      <div className="relative mx-auto hidden h-[540px] w-full max-w-[480px] md:block">
        {/* Glow ambiental */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-[#4f8ef7]/12 blur-[80px]" />
          <div className="absolute right-1/4 bottom-1/4 h-56 w-56 rounded-full bg-[#9b6bff]/10 blur-[70px]" />
        </div>

        {/* Card 1 — Discovery (arriba izquierda) */}
        <motion.div
          style={{ y: y1, rotate: r1 }}
          className="absolute left-0 top-4 w-[240px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <DiscoveryCard />
        </motion.div>

        {/* Card 2 — UI Design (centro derecha) */}
        <motion.div
          style={{ y: y2, rotate: r2 }}
          className="absolute right-0 top-[150px] w-[230px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <DesignCard />
        </motion.div>

        {/* Card 3 — Design System (abajo izquierda) */}
        <motion.div
          style={{ y: y3, rotate: r3 }}
          className="absolute bottom-4 left-[20px] w-[240px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <SystemCard />
        </motion.div>

        {/* Línea de conexión decorativa */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          style={{ zIndex: -1 }}
          aria-hidden="true"
        >
          <path
            d="M 120 90 C 200 120, 280 200, 350 230"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="4 6"
          />
          <path
            d="M 350 270 C 280 320, 200 380, 140 420"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="4 6"
          />
        </svg>
      </div>
    </div>
  );
}
