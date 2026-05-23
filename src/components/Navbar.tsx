"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import { useEffect, useState } from "react";

/* shimmer animation injected once */
const shimmerCSS = `
@keyframes liq-shine {
  0%   { transform: translateX(-130%) skewX(-16deg); }
  100% { transform: translateX(340%)  skewX(-16deg); }
}
.liq-shimmer::before {
  content: "";
  position: absolute;
  inset-y: 0;
  left: 0;
  width: 38%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255,255,255,0.08) 50%,
    transparent
  );
  animation: liq-shine 4.5s ease-in-out infinite;
  pointer-events: none;
  border-radius: inherit;
  z-index: 20;
}
`;

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 60));
    return unsub;
  }, [scrollY]);

  /* 0 → 1 spring-smoothed progress */
  const raw = useTransform(scrollY, [0, 120], [0, 1]);
  const p   = useSpring(raw, { stiffness: 180, damping: 30, mass: 0.5 });

  /* morphing values */
  const borderRadius  = useTransform(p, [0, 1], [0, 9999]);
  const marginTop     = useTransform(p, [0, 1], [0, 12]);

  /* glass layer values via template strings */
  const bgAlpha       = useTransform(p, [0, 1], [0, 0.52]);
  const blurPx        = useTransform(p, [0, 1], [0, 24]);
  const borderAlpha   = useTransform(p, [0, 1], [0, 0.07]);
  const shadowAlpha   = useTransform(p, [0, 1], [0, 0.55]);
  const satAlpha      = useTransform(p, [0, 1], [100, 180]);

  const backgroundColor   = useMotionTemplate`rgba(10,12,22,${bgAlpha})`;
  const backdropFilter    = useMotionTemplate`blur(${blurPx}px) saturate(${satAlpha}%)`;
  const border            = useMotionTemplate`1px solid rgba(255,255,255,${borderAlpha})`;
  const boxShadow         = useMotionTemplate`0 8px 40px rgba(0,0,0,${shadowAlpha}), 0 1px 0 rgba(255,255,255,0.07) inset, 0 -1px 0 rgba(0,0,0,0.3) inset`;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: shimmerCSS }} />

      {/* sticky wrapper — purely for positioning, matches container-max */}
      <div className="sticky top-0 z-50 flex justify-center pointer-events-none px-5">
        <motion.header
          className={`pointer-events-auto relative overflow-hidden w-full max-w-6xl ${
            scrolled ? "liq-shimmer" : ""
          }`}
          style={{
            borderRadius,
            marginTop,
            /* glass applied directly to the header */
            backgroundColor,
            backdropFilter,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            WebkitBackdropFilter: backdropFilter as any,
            border,
            boxShadow,
          }}
        >



          <div className="relative z-10 flex h-14 items-center justify-between px-5">
            {/* Logo */}
            <a
              href="#top"
              className="group inline-flex items-center gap-2 text-sm font-medium tracking-wide"
            >
              <span className="h-2 w-2 rounded-full bg-white/60 shadow-[0_0_0_6px_rgba(255,255,255,.06)] transition group-hover:bg-white" />
              <span className="text-white/90 transition group-hover:text-white">
                Andres<span className="text-white/50">.design</span>
              </span>
            </a>

            {/* Nav links */}
            <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
              <a className="transition hover:text-white" href="#proyectos">
                Proyectos
              </a>
              <a className="transition hover:text-white" href="#contacto">
                Contacto
              </a>
            </nav>

            {/* CTAs */}
            <div className="flex items-center gap-3">
              <a
                className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 md:inline-flex"
                href="#proyectos"
              >
                Ver trabajo
              </a>
              <a
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90"
                href="mailto:tuemail@correo.com"
              >
                Hablemos
              </a>
            </div>
          </div>
        </motion.header>
      </div>
    </>
  );
}
