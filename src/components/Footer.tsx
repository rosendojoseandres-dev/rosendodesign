"use client";

import Reveal from "@/components/Reveal";

const socials = [
  {
    label: "Instagram",
    href: "#",
    className:
      "bg-[linear-gradient(135deg,rgba(225,48,108,0.58)_0%,rgba(131,58,180,0.4)_36%,rgba(0,0,0,0.84)_82%)] md:bg-[linear-gradient(135deg,rgba(225,48,108,0.38)_0%,rgba(131,58,180,0.24)_42%,rgba(0,0,0,0.96)_100%)]",
  },
  {
    label: "Whatsapp",
    href: "#",
    className:
      "bg-[linear-gradient(135deg,rgba(37,211,102,0.54)_0%,rgba(16,120,54,0.34)_36%,rgba(0,0,0,0.84)_82%)] md:bg-[linear-gradient(135deg,rgba(37,211,102,0.3)_0%,rgba(16,120,54,0.16)_42%,rgba(0,0,0,0.96)_100%)]",
  },
  {
    label: "LinkedIn",
    href: "#",
    className:
      "bg-[linear-gradient(135deg,rgba(10,102,194,0.56)_0%,rgba(7,56,108,0.36)_36%,rgba(0,0,0,0.84)_82%)] md:bg-[linear-gradient(135deg,rgba(10,102,194,0.34)_0%,rgba(7,56,108,0.2)_42%,rgba(0,0,0,0.96)_100%)]",
  },
] as const;

export default function Footer() {
  return (
    <footer id="contacto" className="sep-top relative py-16 sm:py-20 md:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/8" />
      <div className="container-max">
        <Reveal>
          <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-10">
            <div>
              <h3 className="text-[1.72rem] font-semibold leading-[1.02] tracking-[-0.045em] sm:max-w-[14ch] sm:text-3xl md:max-w-none md:text-4xl">
                <span className="block">Si quieres un diseño que se</span>
                <span className="block whitespace-nowrap">sienta rápido y sólido, hablemos.</span>
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/62 sm:text-[15px] md:text-base">
                Pásame contexto (producto, objetivo, deadline) y te respondo con
                un approach claro.
              </p>
            </div>

            <div className="flex flex-col items-center md:self-center md:items-center">
              <a
                href="mailto:rosendojoseandres@gmail.com"
                className="mb-3 inline-flex w-full max-w-[34rem] items-center justify-center rounded-full bg-white px-5 py-2.5 text-xs font-medium text-black transition hover:bg-white/90 md:text-sm"
              >
                rosendojoseandres@gmail.com
              </a>
              <div className="grid w-full max-w-[34rem] grid-cols-3 gap-2">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    className={`inline-flex w-full items-center justify-center rounded-full border border-white/[0.05] px-3 py-2.5 text-[11px] font-medium text-[#F2F2F2] transition duration-200 hover:-translate-y-0.5 hover:border-white/[0.08] hover:text-white sm:px-5 sm:text-xs md:text-sm ${social.className}`}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {social.label}
                  </a>
                ))}
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
