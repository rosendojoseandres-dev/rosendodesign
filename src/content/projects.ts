export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  summary: string;
  role: string[];
  tools: string[];
  highlights: string[];
  visitUrl?: string;
  links?: { label: string; href: string }[];
  mockups?: { image: string; title?: string; description?: string }[];
  mockupOrientation?: "portrait" | "landscape";
  theme: {
    accent: string; // Tailwind color (e.g. "#FF7040")
    gradient: string; // CSS gradient
  };
};

export const projects: Project[] = [
  {
    slug: "groc",
    title: "Groc",
    subtitle: "E-Commerce / Plataforma Web",
    tags: ["UI Design", "Web Design", "Conversion", "Design System"],
    summary:
      "Conceptualización de experiencia de usuario y diseño de interfaz desarrollados 100% desde cero para una plataforma de comercio electrónico real. El proyecto se fundamenta en una dirección de arte minimalista y limpia que elimina distracciones visuales para otorgar protagonismo absoluto al catálogo y acelerar la decisión de compra.",
    role: ["UI/UX Designer", "Visual Designer", "Art Direction"],
    tools: ["Figma", "Auto-layout", "Componentes Atómicos"],
    highlights: [
      "Creación del ecosistema visual completo en Figma mediante componentes atómicos, estableciendo una jerarquía tipográfica premium y un balance preciso del espacio negativo.",
      "Reducción de fricción en el User Journey con microinteracciones fluidas, carrito desplegable y automatización de órdenes con variables dinámicas para el cierre de ventas.",
      "Estructuración de layouts modulares y adaptativos (Mobile-First), asegurando una experiencia responsiva coherente entre el diseño y la tienda en producción."
    ],
    visitUrl: "https://www.groctienda.com",
    links: [{ label: "Visitar", href: "https://www.groctienda.com" }],
    mockups: [
      {
        image: "/images/groc/groc-desktop.png",
        title: "E-Commerce Tipo Dashboard",
        description: "Propuesta innovadora que transforma la tienda tradicional en un panel interactivo tipo dashboard. La barra lateral fija centraliza la navegación por categorías y el estado de la bolsa en tiempo real, mientras el módulo principal organiza colecciones, filtros rápidos y tarjetas de producto en una cuadrícula modular que acelera el descubrimiento y la decisión de compra."
      },
      {
        image: "/images/groc/groc-mobile-hd.png",
        title: "Diseño Responsive y Mobile-First",
        description: "Adaptación fluida a dispositivos móviles que traslada la arquitectura de la plataforma a una experiencia vertical intuitiva y táctil. La ficha de producto prioriza la selección de talla, el llamado a la acción principal y el canal directo de atención por WhatsApp, conservando la limpieza visual y la jerarquía informativa en pantallas compactas."
      }
    ],
    mockupOrientation: "landscape",
    theme: {
      accent: "#B478FF",
      gradient:
        "radial-gradient(900px 600px at 22% 14%, rgba(180,120,255,.3), transparent 58%), linear-gradient(180deg, rgba(8,8,8,.88), rgba(0,0,0,.98))"
    }
  },
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
      {
        image: "/images/klyn/mockup-1.png",
        title: "Pantalla de Bienvenida",
        description: "La primera impresión lo es todo. El splash screen comunica el valor de la plataforma de forma directa con el eslogan \"El futuro de tus finanzas. Ahora\", estableciendo confianza antes de que el usuario ingrese."
      },
      {
        image: "/images/klyn/mockup-2.png",
        title: "Verificación de Identidad",
        description: "Flujo de onboarding con validación biométrica facial. El uso de una ilustración 3D y una paleta oscura con acento violeta transmite seguridad sin sacrificar la experiencia visual del usuario."
      },
      {
        image: "/images/klyn/mockup-3.png",
        title: "Dashboard Principal",
        description: "El home centraliza la información financiera más crítica: balance en USD y VES con gráficas de tendencia, pagos recientes por avatar y el historial de transacciones, todo sin saturar al usuario."
      },
      {
        image: "/images/klyn/mockup-4.png",
        title: "Comprobante de Pago",
        description: "Pantalla de confirmación en modo claro diseñada para generar confianza. Cada dato clave (beneficiario, monto, fecha y asunto) se despliega con jerarquía clara para validar la transacción al instante."
      },
      {
        image: "/images/klyn/mockup-5.png",
        title: "Panel de Metas de Ahorro",
        description: "Módulo de ahorro por objetivos que usa barras de progreso circulares con porcentajes en tiempo real. El usuario visualiza múltiples metas (iPhone, vacaciones, remodelación) y el monto restante para completarlas."
      },
      {
        image: "/images/klyn/mockup-6.png",
        title: "Chat de Soporte",
        description: "Canal de atención al cliente integrado dentro de la app. El asistente responde de forma conversacional y natural, manteniendo la coherencia visual de la plataforma para no romper el flujo de experiencia del usuario."
      }
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
      "Simplificación exhaustiva de la arquitectura de la información y optimización de flujos clave (envíos de dinero, pagos y consulta de saldo).",
      "Modernización total de la interfaz de usuario, elevando drásticamente los estándares de usabilidad, accesibilidad y confianza visual.",
      "Implementación de un sistema de navegación intuitivo diseñado para disminuir la tasa de abandono y potenciar la retención."
    ],
    links: [{ label: "Case study", href: "#" }],
    mockups: [
      {
        image: "/images/vurelo/mockup1.png",
        title: "Home Principal",
        description: "El dashboard centraliza el saldo en USDT con su equivalente en COP, accesos rápidos a las acciones principales (Agregar, Enviar, Retirar, Convertir) y la tarjeta VISA activa con el historial de movimientos recientes en una sola vista."
      },
      {
        image: "/images/vurelo/mockup2.png",
        title: "Historial de Movimientos",
        description: "Vista completa del historial transaccional con filtros por categoría: Ver todo, Tarjetas y Activos digitales. Cada movimiento muestra tipo, fecha y monto de forma escaneada para una revisión rápida."
      },
      {
        image: "/images/vurelo/mockup3.png",
        title: "Gestión de Tarjetas: Tema Azul",
        description: "Sección 'Mis tarjetas' con carrusel de tarjetas virtuales y accesos directos a Recargar, PIN, Detalles y Congelar. El sistema de temas por color permite al usuario identificar y personalizar visualmente cada tarjeta."
      },
      {
        image: "/images/vurelo/mockup4.png",
        title: "Gestión de Tarjetas: Tema Celeste",
        description: "La misma pantalla de tarjetas en su variante de color celeste, demostrando la flexibilidad del sistema de diseño para representar distintas tarjetas o perfiles dentro de una misma arquitectura de componentes."
      },
      {
        image: "/images/vurelo/mockup5.png",
        title: "Gestión de Tarjetas: Tema Verde",
        description: "Variante verde del gestor de tarjetas, mostrando cómo el sistema de temas dinámicos acompaña la identidad de cada instrumento financiero sin alterar la estructura ni la usabilidad de la interfaz."
      },
      {
        image: "/images/vurelo/mockup6.png",
        title: "Gestión de Tarjetas: Tema Oscuro",
        description: "Versión dark del módulo de tarjetas: fondo negro profundo con tarjeta en escala de grises. El contraste extremo genera una sensación de exclusividad y seguridad, ideal para tarjetas de alta gama o corporativas."
      },
      {
        image: "/images/vurelo/mockup7.png",
        title: "Perfil y Configuración",
        description: "Panel de perfil que consolida toda la gestión personal: información de usuario, seguridad, opciones del ecosistema Vurelo (Temporada, Soporte) y accesos legales. Estructura limpia por categorías que facilita la navegación sin fricción."
      }
    ],
    theme: {
      accent: "#78AAFF",
      gradient:
        "radial-gradient(900px 600px at 24% 10%, rgba(120,170,255,.3), transparent 58%), linear-gradient(180deg, rgba(8,8,8,.88), rgba(0,0,0,.98))"
    }
  }
];
