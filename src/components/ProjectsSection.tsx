"use client";

import type { Project } from "@/content/projects";
import Reveal from "@/components/Reveal";

function ProjectBlock({ project }: { project: Project }) {
  return (
    <div className="relative flex flex-col gap-10 border-b border-white/[0.08] pb-24 pt-10 sm:gap-16 sm:pb-32">
      {/* Encabezado del proyecto */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        <div className="max-w-2xl">
          <h3 className="text-3xl font-medium tracking-tight text-white md:text-4xl lg:text-5xl">
            {project.title}
          </h3>
          <p className="mt-3 text-lg text-zinc-400 md:text-xl">
            {project.subtitle}
          </p>
          <p className="mt-6 text-[15px] leading-relaxed text-zinc-400 md:text-base">
            {project.summary}
          </p>

          {project.highlights && project.highlights.length > 0 && (
            <div className="mt-8">
              <h4 className="mb-4 text-sm font-medium tracking-wide text-white uppercase">Highlights</h4>
              <ul className="flex flex-col gap-3">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14.5px] leading-relaxed text-zinc-400">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/20" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Roles y Herramientas */}
        <div className="flex min-w-[200px] flex-col gap-8 md:text-right">
          {project.role && project.role.length > 0 && (
            <div>
              <h4 className="mb-3 text-[13px] font-medium tracking-widest text-zinc-500 uppercase">Rol</h4>
              <ul className="flex flex-col gap-1.5 md:items-end">
                {project.role.map((r, i) => (
                  <li key={i} className="text-[14px] text-zinc-300">{r}</li>
                ))}
              </ul>
            </div>
          )}
          {project.tools && project.tools.length > 0 && (
            <div>
              <h4 className="mb-3 text-[13px] font-medium tracking-widest text-zinc-500 uppercase">Herramientas</h4>
              <ul className="flex flex-col gap-1.5 md:items-end">
                {project.tools.map((t, i) => (
                  <li key={i} className="text-[14px] text-zinc-300">{t}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Mockups */}
      {project.mockups && project.mockups.length > 0 && (
        <div className="mt-4 flex flex-col gap-10 sm:gap-16">
          {project.mockups.map((mockup, i) => (
            <div key={i} className="flex flex-col gap-4">
              <div className="relative w-full overflow-hidden rounded-[20px] bg-[#060606] sm:rounded-[32px]">
                <img
                  src={mockup.image}
                  alt={`${project.title} Mockup ${i + 1}`}
                  className="w-full object-cover"
                  loading="lazy"
                />
              </div>
              {mockup.text && (
                <p className="mx-auto max-w-[64ch] text-center text-[14px] leading-relaxed text-zinc-400 sm:text-[15px]">
                  {mockup.text}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section id="proyectos" className="relative pb-20 sm:pb-24 md:pb-32">
      <div className="container-max">
        <div className="flex flex-col gap-10">
          {projects.map((p, idx) => (
            <Reveal key={p.slug} delay={idx * 0.05}>
              <ProjectBlock project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
