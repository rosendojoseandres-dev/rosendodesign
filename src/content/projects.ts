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
    slug: "mule-app",
    title: "Mule App",
    subtitle: "Streaming / creator platform",
    year: "2026",
    tags: ["UX Research", "UI Design", "Design System", "Prototyping"],
    summary:
      "Rediseño de experiencia para aumentar conversión en onboarding y mejorar la claridad del valor para creadores.",
    role: ["Lead UX/UI", "Sistema de diseño", "Prototipos hi-fi"],
    tools: ["Figma", "FigJam", "Notion", "Maze"],
    highlights: [
      "Onboarding en 4 pasos con progreso y microcopys orientados a valor.",
      "Sistema de componentes para escalar páginas marketing + producto.",
      "Mejoras en accesibilidad (contraste y focus) + motion guidelines."
    ],
    links: [
      { label: "Figma", href: "https://figma.com/" },
      { label: "Case study", href: "#" }
    ],
    theme: {
      accent: "#FF7040",
      gradient:
        "radial-gradient(900px 600px at 20% 10%, rgba(255,112,64,.40), transparent 60%), radial-gradient(900px 600px at 80% 20%, rgba(60,130,255,.22), transparent 60%), linear-gradient(180deg, rgba(10,13,20,.9), rgba(6,7,11,.96))"
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
        "radial-gradient(900px 600px at 30% 10%, rgba(120,170,255,.35), transparent 55%), radial-gradient(900px 600px at 70% 40%, rgba(255,112,64,.18), transparent 60%), linear-gradient(180deg, rgba(10,13,20,.92), rgba(6,7,11,.96))"
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
        "radial-gradient(900px 600px at 25% 20%, rgba(180,120,255,.35), transparent 55%), radial-gradient(900px 600px at 75% 35%, rgba(120,170,255,.18), transparent 60%), linear-gradient(180deg, rgba(10,13,20,.92), rgba(6,7,11,.96))"
    }
  }
];

