import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import ScrollRestoration from "@/components/ScrollRestoration";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Andres Rosendo - Portafolio",
    template: "%s — Andres Rosendo"
  },
  description:
    "Product Designer | UI/UX & Design Systems | Fintech & Digital Platform",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Andres Rosendo - Portafolio",
    description:
      "Product Designer | UI/UX & Design Systems | Fintech & Digital Platform",
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
    <html lang="es" className={`${figtree.variable}`}>
      <body className="bg-radial grain font-sans">
        <ScrollRestoration />
        {children}
      </body>
    </html>
  );
}

