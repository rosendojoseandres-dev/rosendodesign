export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  tags: string[];
  summary: string;
  role: string[];
  tools: string[];
  highlights: string[];
  links?: { label: string; href: string }[];
  theme: {
    accent: string; // Tailwind color (e.g. "#FF7040")
    gradient: string; // CSS gradient
  };
};

export const projects: Project[] = [
  {
    slug: "klyn",
    title: "Klyn",
    subtitle: "Fintech / Billetera Digital",
    year: "2026",
    tags: ["End-to-End Design", "UI/UX Design", "System Prototyping"],
    summary:
      "Diseño de producto integral para una plataforma financiera estructurada exclusivamente para la gestión de USD. Conceptualización desde la identidad de marca hasta la arquitectura de interfaces de alta densidad de datos, logrando un ecosistema que equilibra una estética premium con una navegación libre de fricciones.",
    role: ["Lead Product Designer", "Visual Identity", "UX Research"],
    tools: ["Adobe XD", "Illustrator", "Prototipado hi-fi"],
    highlights: [
      "Creación de la identidad visual completa, tipografía y sistema de diseño escalable, alineados estratégicamente bajo el eslogan rector: \"El próximo movimiento es tuyo\".",
      "Diseño de un dashboard transaccional complejo que incluye gestión de tarjetas, módulos de metas de ahorro y analíticas de rendimiento calculadas sobre una base métrica de 157 puntos.",
      "Arquitectura de flujos críticos de alta seguridad, integrando onboarding con validación biométrica y un ecosistema de interfaz dual (Light / Dark Mode) para optimizar la accesibilidad."
    ],
    links: [
      { label: "Prototipo interactivo", href: "#" }
    ],
    theme: {
      accent: "#FF7040",
      gradient:
        "radial-gradient(900px 600px at 18% 8%, rgba(255,112,64,.34), transparent 58%), linear-gradient(180deg, rgba(8,8,8,.88), rgba(0,0,0,.98))"
    }
  },
  {
    slug: "joyjam",
    title: "JoyJam",
    subtitle: "Events + music discovery",
    year: "2025",
    tags: ["UX Strategy", "UI", "Interaction Design"],
    summary:
      "Landing + flujo de descubrimiento para eventos. Se priorizó jerarquía tipográfica y navegación con scroll anclado.",
    role: ["UX/UI", "Motion", "Microinteracciones"],
    tools: ["Figma", "After Effects", "Principle"],
    highlights: [
      "Hero con cards flotantes para reforzar features clave.",
      "Secciones con parallax y cambios de densidad visual en scroll.",
      "Optimización responsive: mobile-first con grid adaptable."
    ],
    links: [{ label: "Behance", href: "#" }],
    theme: {
      accent: "#78AAFF",
      gradient:
        "radial-gradient(900px 600px at 24% 10%, rgba(120,170,255,.3), transparent 58%), linear-gradient(180deg, rgba(8,8,8,.88), rgba(0,0,0,.98))"
    }
  },
  {
    slug: "design-system",
    title: "Design System",
    subtitle: "Component library + guidelines",
    year: "2024",
    tags: ["Design Ops", "Tokens", "Accessibility"],
    summary:
      "Documentación y librería de componentes para alinear producto y marketing. Tokens + reglas de motion.",
    role: ["Design Ops", "Tokens", "Docs"],
    tools: ["Figma", "Storybook", "Zeroheight"],
    highlights: [
      "Tokens (color, spacing, type) con escalas consistentes.",
      "Guidelines de motion: timing, easing y principios.",
      "Reducción de inconsistencias visuales entre squads."
    ],
    theme: {
      accent: "#B478FF",
      gradient:
        "radial-gradient(900px 600px at 22% 14%, rgba(180,120,255,.3), transparent 58%), linear-gradient(180deg, rgba(8,8,8,.88), rgba(0,0,0,.98))"
    }
  }
];
