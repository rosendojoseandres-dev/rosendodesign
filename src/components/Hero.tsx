"use client";

import { motion } from "framer-motion";
import FloatingCards from "@/components/FloatingCards";

export default function Hero() {
  return (
    <section id="top" className="sep-bottom relative">
      {/* Spotlight */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-[120px]" />
        <div className="absolute -top-32 left-10 h-[360px] w-[360px] rounded-full bg-[#FF7040]/15 blur-[110px]" />
        <div className="absolute top-12 right-10 h-[360px] w-[360px] rounded-full bg-[#78AAFF]/12 blur-[110px]" />
      </div>

      <div className="container-max relative grid min-h-screen grid-cols-1 items-center gap-12 py-24 md:grid-cols-2 md:py-32">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-0 text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.02em] md:text-6xl"
          >
            Diseño experiencias que se sienten rápidas, claras y premium.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/70 md:text-lg"
          >
            Portafolio orientado a producto: research, UI, motion y sistemas de
            diseño. Me enfoco en convertir complejidad en interfaces simples y
            coherentes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#proyectos"
              className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black hover:bg-white/90"
            >
              Ver proyectos
            </a>
            <a
              href="mailto:tuemail@correo.com"
              className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/80 hover:bg-white/10"
            >
              Contacto
            </a>
          </motion.div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 text-sm text-white/60">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3">
              <p className="text-white/90 text-sm font-medium">Sistemas</p>
              <p className="mt-1 text-xs leading-relaxed">
                Componentes, tokens y guidelines
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3">
              <p className="text-white/90 text-sm font-medium">UX</p>
              <p className="mt-1 text-xs leading-relaxed">
                Research, flujos, info architecture
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3">
              <p className="text-white/90 text-sm font-medium">Motion</p>
              <p className="mt-1 text-xs leading-relaxed">
                Microinteracciones y scroll
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <FloatingCards />
        </div>
      </div>

    </section>
  );
}
