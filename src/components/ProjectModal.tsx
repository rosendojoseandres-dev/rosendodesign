"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/content/projects";
import MockupSlider from "@/components/MockupSlider";

export default function ProjectModal({
  project,
  open,
  onClose
}: {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && project && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center p-3 sm:items-center sm:p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            aria-label="Cerrar"
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-[6px]"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            className="relative max-h-[calc(100dvh-1.5rem)] w-full max-w-3xl overflow-y-auto rounded-[24px] border border-white/10 bg-black/95 shadow-[0_30px_90px_rgba(0,0,0,0.5)] sm:max-h-[calc(100dvh-2.5rem)] sm:rounded-[32px]"
            initial={{ y: 12, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 12, scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <button
              aria-label="Cerrar modal"
              onClick={onClose}
              className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/45 text-white/78 transition hover:bg-white/[0.08] hover:text-white sm:right-5 sm:top-5"
            >
              <span aria-hidden="true" className="text-lg leading-none">
                ×
              </span>
            </button>
            <div className="relative border-b border-white/10 p-4 bg-[#0d0d0d] sm:p-6">
              <div className="flex flex-col gap-4 pr-14 sm:flex-row sm:items-start sm:justify-between sm:pr-16">
                <div className="relative">
                  <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] md:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs text-white/68 md:text-sm">{project.subtitle}</p>
                </div>
              </div>

              <div className="relative mt-5 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-6 p-4 sm:p-6 lg:grid-cols-2">
              <div>
                <p className="text-xs leading-relaxed text-white/68 sm:text-sm">
                  {project.summary}
                </p>

                <div className="mt-5">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/42">Highlights</p>
                  <ul className="mt-3 space-y-2 text-xs text-white/68 sm:text-sm">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex gap-2">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40"
                        />
                        <span className="leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-5">
                <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/42">Rol</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.role.map((r) => (
                      <span
                        key={r}
                        className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/68"
                      >
                        {r}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/42">Herramientas</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.tools.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/68"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {project.links?.length ? (
                  <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/42">Links</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full bg-white px-4 py-2 text-xs font-medium text-black hover:bg-white/90"
                        >
                          {l.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>

            {/* ── Mockup Slider al final del modal ── */}
            {project.mockups?.length ? (
              <div className="border-t border-white/10 px-4 pb-8 pt-6 sm:px-6">
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-white/40">
                  Pantallas del proyecto
                </p>
                <div className={project.mockupOrientation === "landscape" ? "-mx-4 sm:mx-0" : ""}>
                  <MockupSlider 
                    images={project.mockups} 
                    accent="#ffffff"
                    orientation={project.mockupOrientation}
                  />
                </div>
              </div>
            ) : null}

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
