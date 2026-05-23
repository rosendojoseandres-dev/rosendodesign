"use client";

import Reveal from "@/components/Reveal";

export default function Footer() {
  return (
    <footer id="contacto" className="sep-top py-16">
      <div className="container-max">
        <Reveal>
          <div className="grid gap-10 md:grid-cols-2 md:items-end">
            <div>
              <h3 className="text-3xl font-semibold tracking-[-0.02em]">
                Si quieres un diseño que se sienta rápido y sólido, hablemos.
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/65">
                Pásame contexto (producto, objetivo, deadline) y te respondo con
                un approach claro.
              </p>
            </div>

            <div className="flex flex-col items-start gap-3 md:items-end">
              <a
                href="mailto:tuemail@correo.com"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90"
              >
                tuemail@correo.com
              </a>
              <div className="flex flex-wrap gap-2 text-sm text-white/60">
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

        <div className="sep-top mt-12 flex flex-col gap-2 pt-8 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Andres Rosendo. Todos los derechos reservados.</p>
          <p>
            Hecho con Next.js · Tailwind · Motion (Framer)
          </p>
        </div>
      </div>
    </footer>
  );
}
