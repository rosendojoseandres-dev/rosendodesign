"use client";

import {
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";
import {
  motion,
  useMotionValue,
  animate,
  useReducedMotion,
} from "framer-motion";
import Image from "next/image";

/* ─────────────────────────────────────────────
   Types
───────────────────────────────────────────── */
interface MockupSliderProps {
  images: string[];
  accent?: string;
}

/* ─────────────────────────────────────────────
   Helpers
───────────────────────────────────────────── */
function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

const SWIPE_THRESHOLD = 50;

/* ─────────────────────────────────────────────
   Arrow Button — inline, minimal, no circle
   Lives in the bottom controls bar alongside dots.
───────────────────────────────────────────── */
function ArrowBtn({
  dir,
  onClick,
}: {
  dir: "prev" | "next";
  onClick: () => void;
}) {
  const isPrev = dir === "prev";
  return (
    <button
      onClick={onClick}
      aria-label={isPrev ? "Imagen anterior" : "Imagen siguiente"}
      className="
        inline-flex items-center justify-center
        h-8 w-8
        text-white/35
        transition-all duration-200
        hover:text-white/80
        active:scale-90
      "
    >
      {isPrev ? (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M10 12.5L5.5 8 10 3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M6 12.5L10.5 8 6 3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}

/* ─────────────────────────────────────────────
   MockupSlider
───────────────────────────────────────────── */
export default function MockupSlider({
  images,
  accent = "#FF7040",
}: MockupSliderProps) {
  const total = images.length;
  const reduce = useReducedMotion();

  /* ── Dot indicator state ── */
  const [currentReal, setCurrentReal] = useState(0);
  const currentRealRef = useRef(0); // avoids stale closures inside go()

  /* ── Container measurement ── */
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerW, setContainerW] = useState(0);
  const [ready, setReady] = useState(false);

  /*
    Infinite loop via tripled array:
    [A B C D E F] [A B C D E F] [A B C D E F]
    We start at the MIDDLE copy (offset = -total * containerW).
    After each navigation we silently snap back to the middle copy
    so there's always room to go left or right.
  */
  const extended = [...images, ...images, ...images];

  /* ── useMotionValue drives the row x ── */
  const x = useMotionValue(0);
  const isAnimating = useRef(false);

  /* ── Resize observer: set containerW and initialize x ── */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const init = (w: number) => {
      setContainerW(w);
      if (!ready) {
        // Position to middle copy without animation
        x.set(-total * w);
        setReady(true);
      } else {
        // On resize: re-anchor to current real position in middle copy
        x.set(-(total + currentRealRef.current) * w);
      }
    };

    init(el.offsetWidth);

    const ro = new ResizeObserver(([entry]) => init(entry.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready]);

  /* ── Core navigation function ── */
  const go = useCallback(
    async (delta: number) => {
      if (isAnimating.current || containerW === 0) return;
      isAnimating.current = true;

      /* Update real index (for dots) */
      const newReal = mod(currentRealRef.current + delta, total);
      const oldReal = currentRealRef.current;
      currentRealRef.current = newReal;
      setCurrentReal(newReal);

      /* Animate x to target based on logical position (not x.get() which changes during drag) */
      const baseLogicalX = -(total + oldReal) * containerW;
      const target = baseLogicalX - delta * containerW;

      if (reduce) {
        x.set(target);
      } else {
        await animate(x, target, {
          type: "spring",
          stiffness: 320,
          damping: 40,
          mass: 0.9,
        });
      }

      /*
        Silent snap — keep x within the middle copy's range:
        Middle copy spans x ∈ [−2·total·w, −total·w]
        If we've moved into the first or third copy, snap silently.
      */
      const pos = x.get();
      const lo = -2 * total * containerW;
      const hi = -total * containerW;
      if (pos > hi) x.set(pos - total * containerW);
      else if (pos < lo) x.set(pos + total * containerW);

      isAnimating.current = false;
    },
    [containerW, total, x, reduce]
  );

  const PHONE_H_RATIO = 19.5 / 9;
  const trackH = containerW > 0
    ? containerW <= 500
      ? Math.round(containerW * PHONE_H_RATIO)
      : Math.min(Math.round(containerW * PHONE_H_RATIO), 800)
    : 700;

  return (
    <div className="w-full select-none -mt-16 sm:-mt-12 md:-mt-16">

      {/* ─── Slider track ─── */}
      <div className="relative">

        {/* Track */}
        <div
          ref={containerRef}
          className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing"
          style={{ height: trackH || 580 }}
        >
          {ready && containerW > 0 && (
            /* Row: extends to fit all 3 copies */
            <motion.div
              className="absolute top-0 left-0 flex h-full"
              style={{
                x,
                width: containerW * extended.length,
              }}
              drag={reduce ? false : "x"}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={(_, info) => {
                const offset = info.offset.x;
                const velocity = info.velocity.x;
                
                let delta = 0;
                if (offset < -SWIPE_THRESHOLD || velocity < -400) delta = 1;
                else if (offset > SWIPE_THRESHOLD || velocity > 400) delta = -1;
                
                go(delta);
              }}
            >
              {extended.map((src, idx) => (
                <div
                  key={`${src}-${idx}`}
                  className="relative flex-none flex items-center justify-center"
                  style={{ width: containerW, height: trackH }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={src}
                      alt={`Pantalla ${mod(idx, total) + 1}`}
                      fill
                      className="object-cover object-center"
                      sizes={`${Math.round(containerW)}px`}
                      draggable={false}
                      priority={idx === total} // first image in middle copy
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* ─── Controls: counter + arrows + dots ─── */}
      <div className="-mt-14 sm:-mt-12 md:-mt-20 relative z-10 flex flex-col items-center gap-3">

        <span className="text-[10px] tabular-nums text-white/28 tracking-widest uppercase">
          {currentReal + 1} / {total}
        </span>

        {/* Arrows flank the dots — inline, integrated */}
        <div className="flex items-center gap-4">
          <ArrowBtn dir="prev" onClick={() => go(-1)} />

          <div className="flex items-center gap-[6px]">
            {images.map((_, idx) => {
              const isActive = idx === currentReal;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    const delta =
                      mod(idx - currentRealRef.current, total) <= total / 2
                        ? mod(idx - currentRealRef.current, total)
                        : mod(idx - currentRealRef.current, total) - total;
                    go(delta);
                  }}
                  aria-label={`Pantalla ${idx + 1}`}
                  className="rounded-full transition-all duration-300 ease-out"
                  style={{
                    width: isActive ? 22 : 5,
                    height: 5,
                    backgroundColor: isActive
                      ? accent
                      : "rgba(255,255,255,0.18)",
                  }}
                />
              );
            })}
          </div>

          <ArrowBtn dir="next" onClick={() => go(1)} />
        </div>

      </div>
    </div>
  );
}
