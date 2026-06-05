"use client";

import Reveal from "@/components/Reveal";

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/andresrosendom/",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
  },
  {
    label: "WhatsApp",
    href: "https://api.whatsapp.com/send/?phone=584245692491&text&type=phone_number&app_absent=0",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/andresrosendom/",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
  },
];

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
              <div className="flex w-full flex-wrap gap-3 md:w-auto">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-transparent px-4 py-2.5 text-xs font-medium text-white/70 transition duration-200 hover:bg-white/5 hover:text-white sm:px-6 md:flex-none md:w-auto"
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="shrink-0">{social.icon}</span>
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
