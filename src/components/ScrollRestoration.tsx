"use client";

import { useEffect } from "react";

const SCROLL_KEY = "portfolio_scroll_y";

export default function ScrollRestoration() {
  useEffect(() => {
    // 1. Tomar el control total del scroll — evitar que el browser lo gestione solo
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const savedScrollY = sessionStorage.getItem(SCROLL_KEY);

    if (savedScrollY) {
      const target = parseInt(savedScrollY, 10);

      // Función que intenta desplazarse y valida que llegó al lugar correcto
      const tryRestore = (retries = 0) => {
        window.scrollTo({ top: target, behavior: "instant" });

        // Si la página no tiene suficiente altura todavía, reintentar
        const maxScrollable = document.documentElement.scrollHeight - window.innerHeight;
        if (Math.abs(window.scrollY - target) > 50 && retries < 10 && maxScrollable < target) {
          setTimeout(() => tryRestore(retries + 1), 150);
        }
      };

      // Esperar a que el DOM + imágenes tengan suficiente espacio pintado
      if (document.readyState === "complete") {
        tryRestore();
      } else {
        window.addEventListener("load", () => tryRestore(), { once: true });
      }
    }

    // 2. Guardar posición justo antes de que el usuario recargue/cierre
    const savePosition = () => {
      sessionStorage.setItem(SCROLL_KEY, String(window.scrollY));
    };

    window.addEventListener("beforeunload", savePosition);
    return () => window.removeEventListener("beforeunload", savePosition);
  }, []);

  return null;
}
