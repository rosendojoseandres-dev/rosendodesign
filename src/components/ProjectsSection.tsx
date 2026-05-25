"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import type { Project } from "@/content/projects";
import Reveal from "@/components/Reveal";
import ProjectModal from "@/components/ProjectModal";

function ProjectCard({
  project,
  onOpen
}: {
  project: Project;
  onOpen: (p: Project) => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={() => onOpen(project)}
      aria-label={`Abrir ${project.title}`}
      className="group relative w-full overflow-hidden rounded-[26px] border border-white/10 bg-[#080808]/90 p-4 text-left shadow-[0_24px_70px_rgba(0,0,0,0.35)] backdrop-blur-md sm:rounded-[30px] sm:p-5"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div
        className="absolute inset-0 opacity-40 transition duration-300 group-hover:opacity-55"
        style={{
          background: project.theme.gradient
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.66))]" />
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="absolute right-4 top-4 h-20 w-20 rounded-full bg-white/5 blur-[42px] sm:right-5 sm:top-5 sm:h-24 sm:w-24 sm:blur-[50px]" />

      <div className="relative">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs uppercase tracking-[0.2em] text-white/42">{project.year}</p>
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: project.theme.accent, boxShadow: `0 0 28px ${project.theme.accent}` }}
          />
        </div>
        <div className="mt-3 flex items-start justify-between gap-3">
          <div>
            <h3 className="text-base font-semibold tracking-[-0.03em] sm:text-lg md:text-xl">
              {project.title}
            </h3>
            <p className="mt-1 text-xs text-white/62 sm:text-sm">{project.subtitle}</p>
          </div>
          <span
            className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-sm text-white/80 transition group-hover:bg-white/[0.08] sm:h-9 sm:w-9 sm:rounded-2xl"
            aria-hidden="true"
          >
            →
          </span>
        </div>

        <p className="mt-4 max-w-[56ch] text-xs leading-relaxed text-white/68 sm:text-sm">
          {project.summary}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/62"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-7 flex items-center justify-between sm:mt-8">
          <span className="text-xs uppercase tracking-[0.18em] text-white/38">Ver detalle</span>
          <span
            className="h-[2px] w-14 rounded-full"
            style={{ backgroundColor: project.theme.accent, opacity: 0.75 }}
          />
        </div>
      </div>
    </motion.button>
  );
}

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Project | null>(null);
  const sorted = useMemo(
    () => [...projects].sort((a, b) => Number(b.year) - Number(a.year)),
    [projects]
  );

  return (
    <section id="proyectos" className="relative py-[4.5rem] sm:py-20 md:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/8" />
      <div className="container-max">
        <Reveal>
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div>
              <h2 className="text-[1.72rem] font-semibold leading-[1.02] tracking-[-0.045em] sm:text-3xl md:text-4xl">
                <span className="block whitespace-nowrap">Proyectos con intención,</span>
                <span className="block whitespace-nowrap">no solo pantallas</span>
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/62 sm:text-[15px] md:text-base">
                Casos enfocados en impacto: claridad, conversión y consistencia.
                Cada proyecto incluye decisiones, trade-offs y el “por qué”.
              </p>
            </div>

            <div className="flex items-center gap-3 md:mt-4">
              <a
                href="mailto:tuemail@correo.com"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs text-white/80 transition hover:bg-white/[0.08] sm:w-auto sm:text-sm"
              >
                Disponible para colaborar
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-2 lg:mt-14">
          {sorted.map((p, idx) => (
            <Reveal key={p.slug} delay={idx * 0.05}>
              <ProjectCard project={p} onOpen={setActive} />
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectModal
        project={active}
        open={Boolean(active)}
        onClose={() => setActive(null)}
      />
    </section>
  );
}
