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
    title: "Fintech & E-commerce",
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
              className="text-[2rem] leading-[1.1] tracking-tight sm:text-[2.5rem] md:text-5xl"
            >
              <span className="block font-light text-zinc-300">Arquitectura visual y lógica</span>
              <span className="block font-bold text-[#F4F4F4] mt-1">para productos digitales.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
              className="mt-6 text-[15px] leading-relaxed text-[#A4A4A4] sm:text-base lg:text-lg"
            >
              Soy Andrés Rosendo, Diseñador UX/UI. Me especializo en ecosistemas Fintech, paneles transaccionales y plataformas E-commerce. Elevo la retención de usuarios uniendo sistemas de diseño, estética premium y objetivos de negocio.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
              href="https://api.whatsapp.com/send/?phone=584245692491&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex w-fit items-center gap-2.5 rounded-full bg-[#00E676]/10 px-8 py-3.5 text-[15px] font-medium text-[#00E676] transition duration-300 hover:bg-[#00E676]/20"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              Hablemos
            </motion.a>
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
                className="flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-[#050505] p-6 transition hover:border-white/[0.12]"
              >
                <div className="shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.03]">
                  {metric.icon}
                </div>
                <div>
                  <h3 className="text-[15px] font-bold tracking-wide text-[#F4F4F4] sm:text-base">
                    {metric.title}
                  </h3>
                  <p className="mt-0.5 text-[13px] font-medium text-[#A4A4A4] sm:text-[14px]">
                    {metric.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
