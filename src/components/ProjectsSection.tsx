"use client";

import { useState } from "react";
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
      className="group relative flex h-full w-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#050505] p-6 text-left transition-colors duration-300 hover:border-white/20 hover:bg-[#080808] sm:p-8"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div className="relative flex w-full flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-medium tracking-tight text-white sm:text-xl md:text-2xl">
              {project.title}
            </h3>
            <p className="mt-1 text-xs text-white/50 sm:text-sm">{project.subtitle}</p>
          </div>
          <span
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-transparent text-sm text-white/50 transition duration-300 group-hover:border-white/30 group-hover:text-white"
            aria-hidden="true"
          >
            →
          </span>
        </div>

        <p className="mt-4 max-w-[56ch] text-sm leading-relaxed text-white/60">
          {project.summary}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/5 bg-white/5 px-3 py-1 text-[11px] text-white/50 sm:text-xs"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  );
}

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="proyectos" className="relative py-20 sm:py-24 md:py-32">
      <div className="container-max">
        <Reveal>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
                Proyectos Destacados
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/50 sm:text-base">
                Explora cómo aplico metodologías de investigación, wireframing y diseño de alta fidelidad para resolver problemas reales en el sector financiero y el comercio electrónico.
              </p>
            </div>
            <div className="flex md:mt-0">
              <a
                href="mailto:rosendojoseandres@gmail.com"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent px-5 py-2.5 text-xs font-medium text-white/80 transition hover:bg-white/5 sm:text-sm"
              >
                Disponible para colaborar
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2 lg:gap-6">
          {projects.map((p, idx) => (
            <Reveal key={p.slug} delay={idx * 0.05} className="h-full">
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
