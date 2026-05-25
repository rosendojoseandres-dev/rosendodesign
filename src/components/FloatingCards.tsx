"use client";

import type { PropsWithChildren } from "react";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

function CardShell({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={`relative h-full overflow-hidden rounded-[18px] border border-white/[0.06] bg-[#04060b] p-3 shadow-[0_20px_48px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:rounded-[20px] sm:p-3.5 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/[0.035]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.022),rgba(255,255,255,0.006)_20%,rgba(0,0,0,0.22)_100%)]" />
      <div className="relative flex h-full flex-col">{children}</div>
    </div>
  );
}

function StepPill({
  step,
  title,
  tone,
  meta,
}: {
  step: string;
  title: string;
  tone: string;
  meta: string;
}) {
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        <span
          className="inline-flex h-6 w-6 items-center justify-center rounded-full text-[9px] font-semibold text-white"
          style={{ backgroundColor: tone }}
        >
          {step}
        </span>
        <span className="text-[11px] font-medium text-white/88 sm:text-xs">{title}</span>
      </div>
      <span
        className="rounded-full px-2 py-0.5 text-[10px] font-medium"
        style={{ backgroundColor: `${tone}26`, color: tone }}
      >
        {meta}
      </span>
    </div>
  );
}

function DiscoveryCard({ className = "" }: { className?: string }) {
  const bars = [74, 58, 90, 44, 72];

  return (
    <CardShell className={className}>
      <StepPill step="01" title="Discovery" tone="#4f8ef7" meta="18 entrevistas" />

      <p className="mt-3 text-[12px] font-medium leading-tight tracking-[-0.03em] text-white sm:text-[13px]">
        Pain points identificados
      </p>

      <div className="mt-3 flex items-end gap-1.5" style={{ height: 36 }}>
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-[3px] bg-[#4f8ef7]"
            style={{ height: `${(h / 100) * 30}px`, opacity: 0.72 + i * 0.04 }}
          />
        ))}
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {["Navegación", "Onboarding", "Velocidad"].map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-1 text-[10px] text-white/56"
          >
            {item}
          </span>
        ))}
      </div>
    </CardShell>
  );
}

function DesignCard({ className = "" }: { className?: string }) {
  return (
    <CardShell className={className}>
      <StepPill step="02" title="UI Design" tone="#e0624a" meta="Figma" />

      <div className="mt-3 rounded-[14px] border border-white/10 bg-black/20 p-2">
        <div className="flex gap-2">
          <div className="h-10 w-8 rounded-[8px] bg-[#6e342c]" />
          <div className="flex-1">
            <div className="h-2 w-4/5 rounded-full bg-white/24" />
            <div className="mt-3 h-5 w-full rounded-[7px] bg-[#6e342c]" />
          </div>
        </div>
        <div className="mt-2.5 flex gap-1.5">
          <div className="h-1.5 w-[26%] rounded-full bg-white/18" />
          <div className="h-1.5 w-[22%] rounded-full bg-white/18" />
          <div className="h-1.5 flex-1 rounded-full bg-white/18" />
        </div>
      </div>

      <div className="mt-auto flex items-center gap-2 pt-3 text-[10px] text-white/58">
        <span className="h-2 w-2 rounded-full bg-[#e0624a]" />
        <span>32 componentes · 4 variantes</span>
      </div>
    </CardShell>
  );
}

function SystemCard({ className = "" }: { className?: string }) {
  const tokens = [
    { name: "Primary", hex: "#4f8ef7", bg: "#4f8ef7" },
    { name: "Accent", hex: "#e0624a", bg: "#e0624a" },
    { name: "Surface", hex: "#1a2035", bg: "#1a2035" },
  ];

  return (
    <CardShell className={className}>
      <StepPill step="03" title="Design System" tone="#9b6bff" meta="Tokens" />

      <div className="mt-3 space-y-2.5">
        {tokens.map((token) => (
          <div key={token.name} className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-lg border border-white/10" style={{ backgroundColor: token.bg }} />
            <span className="flex-1 text-xs text-white/84">{token.name}</span>
            <span className="text-[10px] text-white/34">{token.hex}</span>
          </div>
        ))}
      </div>

      <div className="mt-auto grid grid-cols-4 gap-1.5 pt-3">
        {["Sm", "Md", "Lg", "XL"].map((size) => (
          <div
            key={size}
            className="rounded-xl border border-white/10 bg-white/[0.03] px-2 py-1.5 text-center text-[10px] text-white/48"
          >
            {size}
          </div>
        ))}
      </div>
    </CardShell>
  );
}

export default function FloatingCards() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const y1 = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 10, reduce ? 0 : -10]);
  const y2 = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 14, reduce ? 0 : -14]);
  const y3 = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 18, reduce ? 0 : -18]);

  return (
    <div ref={ref} className="w-full">
      <div className="grid grid-cols-1 gap-4 px-1 sm:grid-cols-2 lg:hidden">
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
          className="sm:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <SystemCard />
        </motion.div>
      </div>

      <div className="relative hidden w-full grid-cols-3 items-start gap-6 pt-6 lg:grid xl:gap-8 xl:pt-8">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-6 h-[280px] w-[360px] rounded-r-[60px] bg-[linear-gradient(90deg,rgba(0,0,0,0.97),rgba(0,0,0,0.68),rgba(0,0,0,0.28),transparent)] xl:h-[300px] xl:w-[420px]" />
          <div className="absolute inset-y-0 left-0 w-[48%] bg-[linear-gradient(90deg,rgba(0,0,0,0.78),rgba(0,0,0,0.22),transparent)]" />
        </div>

        <motion.div
          style={{ y: y1 }}
          className="relative z-10 h-[214px] min-w-0 xl:h-[240px]"
          initial={{ opacity: 0, x: 48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <DiscoveryCard />
        </motion.div>

        <motion.div
          style={{ y: y2 }}
          className="relative z-20 h-[214px] min-w-0 xl:h-[240px]"
          initial={{ opacity: 0, x: 64 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <DesignCard />
        </motion.div>

        <motion.div
          style={{ y: y3 }}
          className="relative z-10 h-[214px] min-w-0 xl:h-[240px]"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
        >
          <SystemCard />
        </motion.div>
      </div>
    </div>
  );
}
