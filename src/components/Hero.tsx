"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="container-max relative flex min-h-[90vh] flex-col items-center justify-center py-20 text-center sm:py-24 md:py-28 lg:py-32">
        <div className="relative z-10 flex max-w-[800px] flex-col items-center pt-6 sm:pt-10 lg:pt-0">
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-0 text-[2.5rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4rem]"
          >
            <span className="block">Arquitectura visual y lógica</span>
            <span className="block text-white/80">para productos digitales.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-6 max-w-[38rem] text-pretty text-[15px] leading-relaxed text-zinc-400 sm:mt-8 md:text-base lg:text-lg lg:max-w-[42rem]"
          >
            Soy Andrés Rosendo, Diseñador UX/UI. Me especializo en ecosistemas Fintech, paneles transaccionales y plataformas E-commerce. Elevo la retención de usuarios uniendo sistemas de diseño, estética premium y objetivos de negocio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#proyectos"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90 sm:px-8 sm:text-base"
            >
              Explorar Proyectos
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=584245692491&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-transparent px-6 py-3 text-sm font-medium text-white/80 transition hover:bg-white/5 sm:px-8 sm:text-base"
            >
              Hablemos
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
