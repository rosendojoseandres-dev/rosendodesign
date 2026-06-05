"use client";

import Reveal from "@/components/Reveal";

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/andresrosendom/",
  },
  {
    label: "Whatsapp",
    href: "https://api.whatsapp.com/send/?phone=584245692491&text&type=phone_number&app_absent=0",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/andresrosendom/",
  },
] as const;

export default function Footer() {
  return (
    <footer id="contacto" className="relative py-16 sm:py-20 md:py-24">
      <div className="container-max">
        <Reveal>
          <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-12">
            <div>
              <h3 className="text-[1.72rem] font-semibold leading-[1.02] tracking-tight text-white sm:text-3xl md:text-4xl">
                <span className="block">Construyamos el próximo</span>
                <span className="block">producto líder de tu sector.</span>
              </h3>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-zinc-400 md:text-base">
                ¿Tienes un proyecto complejo que requiere una interfaz intuitiva, moderna y escalable? Cuéntame los objetivos de tu producto y definamos el mejor enfoque visual y técnico.
              </p>
            </div>

            <div className="flex flex-col items-start md:items-end">
              <a
                href="mailto:rosendojoseandres@gmail.com"
                className="mb-4 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90 md:w-auto"
              >
                rosendojoseandres@gmail.com
              </a>
              <div className="grid w-full grid-cols-3 gap-3 md:w-auto">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-transparent px-4 py-2.5 text-xs font-medium text-white/70 transition duration-200 hover:bg-white/5 hover:text-white sm:px-6 md:w-auto"
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

        <div className="mt-16 flex flex-col gap-4 border-t border-white/5 pt-8 text-xs text-white/40 md:mt-20 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Andres Rosendo. Todos los derechos reservados.</p>
          <p>
            Hecho con Next.js · Tailwind · Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
