import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

// GitHub Pages serves static files only: set STATIC_EXPORT=true to build `out/`.
// (Security headers and the image optimizer need a Node host such as Vercel.)
const isStatic = process.env.STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  ...(isStatic ? { output: "export" as const, trailingSlash: true } : {}),
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: isStatic
    ? { unoptimized: true }
    : { formats: ["image/avif", "image/webp"] },
  async headers() {
    if (isStatic) return [];
    return [
      { source: "/:path*", headers: securityHeaders },
      {
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
