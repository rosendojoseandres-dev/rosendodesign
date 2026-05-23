import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Andres Rosendo — UX/UI Designer",
    template: "%s — Andres Rosendo"
  },
  description:
    "Portafolio UX/UI con enfoque en producto, sistemas de diseño y prototipado. Animaciones fluidas y experiencia premium.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Andres Rosendo — UX/UI Designer",
    description:
      "Casos de estudio y proyectos con enfoque en UX/UI, producto y diseño de interfaces.",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-radial grain">{children}</body>
    </html>
  );
}

