"use client";

import Reveal from "@/components/Reveal";

export default function Footer() {
  return (
    <footer id="contacto" className="sep-top relative py-16 sm:py-20 md:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/8" />
      <div className="container-max">
        <Reveal>
          <div className="grid gap-8 md:grid-cols-2 md:items-end md:gap-10">
            <div>
              <h3 className="max-w-[13ch] text-2xl font-semibold tracking-[-0.03em] sm:max-w-[14ch] sm:text-3xl md:max-w-none md:text-4xl">
                Si quieres un diseño que se sienta rápido y sólido, hablemos.
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/62 sm:text-[15px] md:text-base">
                Pásame contexto (producto, objetivo, deadline) y te respondo con
                un approach claro.
              </p>
            </div>

            <div className="flex flex-col items-start gap-3 md:items-end">
              <a
                href="mailto:tuemail@correo.com"
                className="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-2.5 text-xs font-medium text-black transition hover:bg-white/90 sm:w-auto md:text-sm"
              >
                tuemail@correo.com
              </a>
              <div className="flex flex-wrap gap-2 text-xs text-white/60 sm:text-sm">
                <a className="hover:text-white" href="#" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <span className="text-white/25">/</span>
                <a className="hover:text-white" href="#" target="_blank" rel="noreferrer">
                  Behance
                </a>
                <span className="text-white/25">/</span>
                <a className="hover:text-white" href="#" target="_blank" rel="noreferrer">
                  Dribbble
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="sep-top mt-10 flex flex-col gap-2 pt-8 text-xs text-white/40 md:mt-12 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Andres Rosendo. Todos los derechos reservados.</p>
          <p>
            Hecho con Next.js · Tailwind · Motion (Framer)
          </p>
        </div>
      </div>
    </footer>
  );
}
