import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable font optimization since we're using system fonts
  optimizeFonts: false,
  // Add additional security headers
  headers: async () => {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          }
        ],
      },
    ];
  }
};

export default nextConfig;
