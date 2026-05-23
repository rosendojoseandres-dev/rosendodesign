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
      className="group relative w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 text-left shadow-glass backdrop-blur-md"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background: project.theme.gradient
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60" />

      <div className="relative">
        <p className="text-xs text-white/60">{project.year}</p>
        <div className="mt-3 flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold tracking-[-0.02em]">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-white/70">{project.subtitle}</p>
          </div>
          <span
            className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/80 transition group-hover:bg-white/10"
            aria-hidden="true"
          >
            →
          </span>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-white/70">
          {project.summary}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/65"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-xs text-white/50">Ver detalle</span>
          <span
            className="h-1.5 w-10 rounded-full"
            style={{ backgroundColor: project.theme.accent, opacity: 0.7 }}
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
    <section id="proyectos" className="relative py-20 md:py-28">
      <div className="container-max">
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
                Proyectos con intención, no solo pantallas
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/65 md:text-base">
                Casos enfocados en impacto: claridad, conversión y consistencia.
                Cada proyecto incluye decisiones, trade-offs y el “por qué”.
              </p>
            </div>

            <div className="flex items-center gap-3 md:mt-9">
              <a
                href="mailto:tuemail@correo.com"
                className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/80 hover:bg-white/10"
              >
                Disponible para colaborar
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2">
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
