import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['@heroicons/react', 'lottie-react', 'framer-motion'],
  },
  // Optimasi untuk production
  compress: true,
  poweredByHeader: false,
  trailingSlash: false,
};

export default nextConfig;
