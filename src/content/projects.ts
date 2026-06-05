export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  summary: string;
  role: string[];
  tools: string[];
  highlights: string[];
  links?: { label: string; href: string }[];
  mockups?: { image: string; text?: string }[];
  mockupOrientation?: "portrait" | "landscape";
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
    mockups: [
      { image: "/images/klyn/mockup-1.png", text: "Dashboard principal: La arquitectura de información prioriza el balance total y el acceso rápido a transferencias frecuentes, minimizando la carga cognitiva." },
      { image: "/images/klyn/mockup-2.png", text: "Pantalla de ahorro: Uso estratégico de barras de progreso y tipografía grande para motivar al usuario y darle visibilidad clara sobre sus metas financieras." },
      { image: "/images/klyn/mockup-3.png", text: "Flujo de transacciones: Diseño por pasos (stepper) que previene errores humanos al momento de mover USD entre cuentas." },
      { image: "/images/klyn/mockup-4.png", text: "Gestión de tarjetas: Interfaz esquelética y oscura que resalta la tarjeta virtual, generando una sensación de seguridad y estética premium." },
      { image: "/images/klyn/mockup-5.png", text: "Analíticas: Visualización de datos mediante gráficos minimalistas, ayudando al usuario a comprender sus gastos de un vistazo rápido." },
      { image: "/images/klyn/mockup-6.png", text: "Configuración de seguridad: Integración perfecta del flujo de validación biométrica y ajustes de cuenta." }
    ],
    theme: {
      accent: "#FF7040",
      gradient:
        "radial-gradient(900px 600px at 18% 8%, rgba(255,112,64,.34), transparent 58%), linear-gradient(180deg, rgba(8,8,8,.88), rgba(0,0,0,.98))"
    }
  },
  {
    slug: "vurelo",
    title: "Vurelo",
    subtitle: "Fintech / Rediseño Mobile Banking",
    tags: ["UX Strategy", "UI Redesign", "Interaction Design", "Prototyping"],
    summary:
      "Rediseño integral de interfaz y experiencia de usuario para una plataforma de banca móvil. El proyecto se centró en la reestructuración completa de la arquitectura de la información y la simplificación de transacciones financieras críticas. El resultado es una interfaz intuitiva, ágil y libre de fricciones, diseñada estratégicamente para aumentar la retención y mejorar la navegabilidad general del usuario.",
    role: ["Product Designer", "Mobile UI", "UX Research"],
    tools: ["Adobe XD", "Figma"],
    highlights: [
      "Simplificación exhaustiva de la arquitectura de la información y optimización de los flujos transaccionales clave (envíos de dinero, pagos y consulta de saldo).",
      "Modernización total de la interfaz de usuario, elevando drásticamente los estándares de usabilidad, accesibilidad y confianza visual.",
      "Implementación de un sistema de navegación intuitivo diseñado para disminuir la tasa de abandono y potenciar la retención de usuarios."
    ],
    links: [{ label: "Case study", href: "#" }],
    mockups: [
      { image: "/images/vurelo/mockup1.png", text: "Inicio de sesión: Autenticación optimizada y acceso rápido a funciones no autenticadas esenciales." },
      { image: "/images/vurelo/mockup2.png", text: "Home bancario: Reestructuración de la jerarquía visual para destacar productos de crédito y saldos de cuentas corrientes." },
      { image: "/images/vurelo/mockup3.png", text: "Movimientos: Rediseño del historial de transacciones con categorización por iconos para facilitar el escaneo visual." },
      { image: "/images/vurelo/mockup4.png", text: "Pagos de servicios: Flujo simplificado que reduce los clics necesarios para abonar facturas recurrentes." },
      { image: "/images/vurelo/mockup5.png", text: "Transferencias: Diseño de selección de destinatarios tipo 'favoritos' para agilizar envíos de dinero." },
      { image: "/images/vurelo/mockup6.png", text: "Comprobantes: Pantalla de éxito diseñada para generar confianza y ofrecer opciones rápidas de compartir el recibo." },
      { image: "/images/vurelo/mockup7.png", text: "Perfil: Centralización de ajustes, límites transaccionales y soporte técnico en un solo lugar." }
    ],
    theme: {
      accent: "#78AAFF",
      gradient:
        "radial-gradient(900px 600px at 24% 10%, rgba(120,170,255,.3), transparent 58%), linear-gradient(180deg, rgba(8,8,8,.88), rgba(0,0,0,.98))"
    }
  },
  {
    slug: "groc",
    title: "Groc",
    subtitle: "E-Commerce / Plataforma Web",
    tags: ["UI Design", "Web Design", "Conversion", "Design System"],
    summary:
      "Conceptualización visual y diseño de interfaz creado 100% desde cero para una plataforma de comercio electrónico. El proyecto se fundamenta en una dirección de arte minimalista y sumamente elegante, eliminando cualquier ruido visual para potenciar la conversión y otorgar el protagonismo absoluto al catálogo de productos.",
    role: ["UI/UX Designer", "Visual Designer", "Art Direction"],
    tools: ["Figma", "Auto-layout", "Componentes Atómicos"],
    highlights: [
      "Construcción del ecosistema visual completo en Figma, estableciendo una jerarquía tipográfica premium y un uso estratégico del espacio negativo.",
      "Optimización del User Journey mediante microinteracciones fluidas, como la \"Vista rápida\" de productos y un carrito desplegable (drawer) diseñado para reducir la fricción en el checkout.",
      "Estructuración de layouts modulares y adaptativos (Mobile First), garantizando una experiencia de navegación de alta gama y responsiva para los usuarios."
    ],
    links: [{ label: "Case study", href: "#" }],
    mockups: [
      { image: "/images/groc/mockup-1.png", text: "Catálogo de productos: Uso intencional del espacio en blanco (negative space) para elevar la percepción de calidad del producto y facilitar la decisión de compra." },
      { image: "/images/groc/mockup-2.png", text: "Vista de detalle y Carrito: Drawer desplegable lateral que permite al usuario revisar su compra sin abandonar el contexto de la tienda, reduciendo la fricción." }
    ],
    mockupOrientation: "landscape",
    theme: {
      accent: "#B478FF",
      gradient:
        "radial-gradient(900px 600px at 22% 14%, rgba(180,120,255,.3), transparent 58%), linear-gradient(180deg, rgba(8,8,8,.88), rgba(0,0,0,.98))"
    }
  }
];
