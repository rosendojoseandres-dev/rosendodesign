"use client";

import { useEffect } from "react";

export default function ScrollRestoration() {
  useEffect(() => {
    // Prevent browser's native (and sometimes buggy) scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const savedScrollY = sessionStorage.getItem("portfolio_scroll_y");
    
    if (savedScrollY) {
      const scrollPos = parseInt(savedScrollY, 10);
      
      // Intentar restaurar inmediatamente
      window.scrollTo(0, scrollPos);
      
      // Y un respaldo unos milisegundos después por si el DOM tardó en pintar
      setTimeout(() => {
        window.scrollTo(0, scrollPos);
      }, 100);
      
      setTimeout(() => {
        window.scrollTo(0, scrollPos);
      }, 500);
    }

    const handleBeforeUnload = () => {
      sessionStorage.setItem("portfolio_scroll_y", window.scrollY.toString());
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return null;
}
