import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    // Esto le dice a Vercel que ignore los errores de ESLint al subir
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

