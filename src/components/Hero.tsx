"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import FloatingCards from "@/components/FloatingCards";

const fullText = "Arquitectura visual y lógica\npara productos digitales\nde alto rendimiento.";

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let i = 0;
    const tick = () => {
      i++;
      setDisplayedText(fullText.slice(0, i));
      if (i < fullText.length) {
        timeout = setTimeout(tick, 35);
      }
    };
    timeout = setTimeout(tick, 300);
    return () => clearTimeout(timeout);
  }, []);

  const lines = displayedText.split("\n");

  return (
    <section id="top" className="sep-bottom relative overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0 bg-black" />
      <div className="pointer-events-none absolute inset-y-0 left-0 z-[5] hidden w-[78%] bg-[linear-gradient(90deg,#000_0%,#000_36%,rgba(0,0,0,0.98)_50%,rgba(0,0,0,0.92)_62%,rgba(0,0,0,0.72)_76%,rgba(0,0,0,0.32)_90%,transparent_100%)] lg:block" />

      <div className="container-max relative grid grid-cols-1 items-start gap-10 py-20 sm:gap-12 sm:py-24 md:gap-14 md:py-28 lg:min-h-screen lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.08fr)] lg:items-center lg:gap-10 lg:py-32">
        <div className="relative z-10 max-w-[760px] pt-6 sm:pt-10 lg:pt-0">
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-0 max-w-[720px] text-3xl font-semibold leading-[0.96] tracking-[-0.045em] text-white md:text-5xl lg:text-[3.25rem]"
          >
            <span className="block md:whitespace-nowrap">
              {lines[0] || "\u00A0"}
              {lines.length === 1 && <span className="animate-pulse text-white/50 font-light">|</span>}
            </span>
            <span className="block md:whitespace-nowrap">
              {lines[1] || "\u00A0"}
              {lines.length === 2 && <span className="animate-pulse text-white/50 font-light">|</span>}
            </span>
            <span className="block md:whitespace-nowrap">
              {lines[2] || "\u00A0"}
              {lines.length === 3 && <span className="animate-pulse text-white/50 font-light">|</span>}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-5 max-w-[38rem] text-pretty text-sm leading-relaxed text-zinc-400 sm:mt-6 sm:text-[15px] md:text-base lg:max-w-[32rem]"
          >
            Soy Andrés Rosendo, Diseñador UX/UI. Me especializo en ecosistemas Fintech, paneles transaccionales y plataformas E-commerce. Elevo la retención de usuarios uniendo sistemas de diseño, estética premium y objetivos de negocio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <a
              href="#proyectos"
              className="rounded-full bg-white px-4 py-2.5 text-xs font-medium text-black transition hover:bg-white/90 sm:px-5 sm:text-sm"
            >
              Explorar Proyectos
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=584245692491&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs text-white/80 transition hover:bg-white/[0.08] sm:px-5 sm:text-sm"
            >
              Hablemos
            </a>
          </motion.div>


        </div>

        <div className="relative z-0 w-full lg:pl-4 xl:pl-8">
          <FloatingCards />
        </div>
      </div>
    </section>
  );
}
