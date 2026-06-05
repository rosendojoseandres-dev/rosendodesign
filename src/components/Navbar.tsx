"use client";

import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 60));
    return unsub;
  }, [scrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
      window.scrollTo(0, 0);
    }
  }, []);

  const bgAlpha = useTransform(scrollY, [0, 60], [0, 0.75]);
  const borderAlpha = useTransform(scrollY, [0, 60], [0, 0.08]);
  const blurPx = useTransform(scrollY, [0, 60], [0, 16]);

  const backgroundColor = useMotionTemplate`rgba(10, 10, 10, ${bgAlpha})`;
  const border = useMotionTemplate`1px solid rgba(255, 255, 255, ${borderAlpha})`;
  const backdropFilter = useMotionTemplate`blur(${blurPx}px)`;

  return (
    <div className="pointer-events-none sticky top-4 z-50 flex justify-center px-4 sm:px-5 lg:px-6">
      <motion.header
        className="pointer-events-auto relative w-full max-w-6xl overflow-hidden rounded-2xl"
        style={{
          backgroundColor,
          backdropFilter,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          WebkitBackdropFilter: backdropFilter as any,
          border,
        }}
      >
        <div className="relative z-10 flex h-14 items-center justify-between gap-3 px-5 sm:h-16">
          {/* Logo */}
          <a
            href="#top"
            className="group inline-flex items-center gap-2 text-[13px] font-medium tracking-wide sm:text-sm"
            onClick={() => window.scrollTo(0, 0)}
          >
            <span className="text-white/90 transition group-hover:text-white">
              Andres Rosendo
            </span>
          </a>

          {/* Nav links */}
          <nav className="hidden items-center gap-6 text-[13px] text-white/60 md:flex md:text-sm">
            <a className="transition hover:text-white/90" href="#proyectos">
              Proyectos
            </a>
            <a className="transition hover:text-white/90" href="#contacto">
              Contacto
            </a>
          </nav>

          {/* CTAs */}
          <div className="flex items-center gap-3">
            <a
              className="hidden rounded-full border border-white/10 bg-transparent px-4 py-2 text-[13px] text-white/80 transition hover:bg-white/[0.04] md:inline-flex md:text-sm"
              href="#proyectos"
            >
              Ver trabajo
            </a>
            <a
              className="rounded-full bg-white px-4 py-2 text-[13px] font-medium text-black transition hover:bg-white/90 sm:px-5 md:text-sm"
              href="https://api.whatsapp.com/send/?phone=584245692491&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hablemos
            </a>
          </div>
        </div>
      </motion.header>
    </div>
  );
}
