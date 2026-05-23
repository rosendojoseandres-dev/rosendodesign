"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/content/projects";

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

  return (
    <AnimatePresence>
      {open && project && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-5"
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
            className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-[#06070b]/80 shadow-glow"
            initial={{ y: 12, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 12, scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div
              className="relative border-b border-white/10 p-6"
              style={{ background: project.theme.gradient }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs text-white/60">{project.year}</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.02em]">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/70">{project.subtitle}</p>
                </div>

                <button
                  onClick={onClose}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10"
                >
                  Cerrar
                </button>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-6 p-6 md:grid-cols-2">
              <div>
                <p className="text-sm leading-relaxed text-white/70">
                  {project.summary}
                </p>

                <div className="mt-5">
                  <p className="text-xs font-medium text-white/60">Highlights</p>
                  <ul className="mt-3 space-y-2 text-sm text-white/70">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex gap-2">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: project.theme.accent }}
                        />
                        <span className="leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-5">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-medium text-white/60">Rol</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.role.map((r) => (
                      <span
                        key={r}
                        className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70"
                      >
                        {r}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-medium text-white/60">Herramientas</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.tools.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {project.links?.length ? (
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs font-medium text-white/60">Links</p>
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

