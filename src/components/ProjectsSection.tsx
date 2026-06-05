"use client";

import type { Project } from "@/content/projects";
import Reveal from "@/components/Reveal";

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative flex h-full w-full flex-col overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#060606] p-6 text-left sm:p-8">
      <div className="relative flex w-full flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-medium tracking-tight text-white md:text-[22px]">
              {project.title}
            </h3>
            <p className="mt-1.5 text-[13px] text-zinc-500">{project.subtitle}</p>
          </div>
          <span
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-transparent text-[13px] text-zinc-500 transition duration-300 group-hover:border-white/[0.15] group-hover:text-zinc-300"
            aria-hidden="true"
          >
            →
          </span>
        </div>

        <p className="mt-5 max-w-[56ch] text-[14px] leading-[1.6] text-zinc-400">
          {project.summary}
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/[0.05] bg-white/[0.03] px-3.5 py-1.5 text-[11px] font-medium text-zinc-400"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section id="proyectos" className="relative py-20 sm:py-24 md:py-32">
      <div className="container-max">
        <Reveal>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
                Proyectos Destacados
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-zinc-400">
                Explora cómo aplico metodologías de investigación, wireframing y diseño de alta fidelidad para resolver problemas reales en el sector financiero y el comercio electrónico.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2 lg:gap-6">
          {projects.map((p, idx) => (
            <Reveal key={p.slug} delay={idx * 0.05} className="h-full">
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
