import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization for better performance
  images: {
    unoptimized: true, // Netlify serves static assets directly
  },

  // React configuration
  reactStrictMode: true,

  // Compression and minification handled by Netlify
  compress: true,

  // SWR headers for static content
  headers: async () => {
    return [
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Redirect for root path
  redirects: async () => {
    return [];
  },
};

export default nextConfig;
