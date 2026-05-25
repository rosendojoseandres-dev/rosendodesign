"use client";

import { motion } from "framer-motion";
import FloatingCards from "@/components/FloatingCards";

export default function Hero() {
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
            className="mt-0 max-w-[720px] text-4xl font-semibold leading-[0.96] tracking-[-0.045em] text-[#F2F2F2] md:text-[3.45rem] lg:text-[3.8rem]"
          >
            <span className="block md:whitespace-nowrap">Arquitectura visual y lógica</span>
            <span className="block md:whitespace-nowrap">para productos digitales</span>
            <span className="block md:whitespace-nowrap">de alto rendimiento.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-5 max-w-[38rem] text-pretty text-sm leading-relaxed text-[#F2F2F2]/70 sm:mt-6 sm:text-[15px] md:text-base lg:max-w-[32rem]"
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
              className="rounded-full bg-[#F2F2F2] px-4 py-2.5 text-xs font-medium text-black transition hover:bg-[#F2F2F2]/90 sm:px-5 sm:text-sm"
            >
              Explorar Proyectos
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=584245692491&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs text-[#F2F2F2]/80 transition hover:bg-white/[0.08] sm:px-5 sm:text-sm"
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
