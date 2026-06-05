"use client";

import { motion } from "framer-motion";

const metrics = [
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400"><path d="m21 16-9 5-9-5"/><path d="m21 8-9 5-9-5"/><path d="m3 8 9-5 9 5-9 5-9-5Z"/></svg>,
    title: "+5 Años",
    subtitle: "Diseño UX/UI"
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>,
    title: "Latinoamérica",
    subtitle: "Trabajo Remoto"
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>,
    title: "Fintech & E-comm",
    subtitle: "Especialidad"
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>,
    title: "Conversión",
    subtitle: "Retención de Usuarios"
  }
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pt-48 lg:pb-32">
      <div className="container-max">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12 items-center">
          
          {/* Columna Izquierda: Textos */}
          <div className="flex flex-col items-start text-left max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.2, 0.8, 0.2, 1] }}
              className="text-[2.5rem] leading-[1.1] tracking-tight sm:text-5xl md:text-6xl"
            >
              <span className="block font-light text-zinc-300">Arquitectura visual y lógica</span>
              <span className="block font-bold text-white mt-1">para productos digitales.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
              className="mt-6 text-[15px] leading-relaxed text-zinc-400 sm:text-base lg:text-lg"
            >
              Soy Andrés Rosendo, Diseñador UX/UI. Me especializo en ecosistemas Fintech, paneles transaccionales y plataformas E-commerce. Elevo la retención de usuarios uniendo sistemas de diseño, estética premium y objetivos de negocio.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
              className="mt-10 flex flex-wrap items-center gap-4"
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

          {/* Columna Derecha: Tarjetas de Datos */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:pl-10"
          >
            {metrics.map((metric, i) => (
              <div 
                key={i} 
                className="flex flex-col justify-center rounded-2xl border border-white/[0.06] bg-[#050505] p-6 transition hover:border-white/[0.12]"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.03]">
                  {metric.icon}
                </div>
                <h3 className="text-[15px] font-bold tracking-wide text-white sm:text-base">
                  {metric.title}
                </h3>
                <p className="mt-1 text-[13px] font-medium text-zinc-500 sm:text-[14px]">
                  {metric.subtitle}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
