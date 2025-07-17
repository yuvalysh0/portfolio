/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",

  compress: true,
  poweredByHeader: false,

  images: {
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 60,
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
