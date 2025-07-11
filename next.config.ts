import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['@heroicons/react', 'lottie-react', 'framer-motion'],
  },
  // Optimasi untuk production
  compress: true,
  poweredByHeader: false,
  // Enable static exports untuk better performance
  trailingSlash: false,
};

export default nextConfig;
