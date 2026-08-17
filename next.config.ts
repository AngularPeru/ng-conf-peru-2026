import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Compresión y optimizaciones */
  compress: true,

  /* Configuración de imágenes */
  images: {
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 año para imágenes estáticas
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  /* Headers de seguridad y SEO */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          /* Cache headers para diferentes tipos de contenido */
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=3600",
          },
        ],
      },
      /* Cache agresivo para archivos estáticos */
      {
        source: "/fonts/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      /* Desabilitar cache para HTML */
      {
        source: "/:path*.html",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, s-maxage=0",
          },
        ],
      },
    ];
  },

  /* Redirects para URLs antiguas o alternativas */
  async redirects() {
    return [
      /* Redirigir desde URL sin www (si aplica) */
      // {
      //   source: '/:path*',
      //   destination: 'https://ngconf.pe/:path*',
      //   permanent: true,
      // },
    ];
  },

  /* Reescrituras si es necesario */
  async rewrites() {
    return {
      beforeFiles: [],
    };
  },

  /* Generación incremental de sitios estáticos */
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },

  /* Trailing slash consistente */
  trailingSlash: false,

  /* Validación de middleware */
  reactStrictMode: true,

  /* Configuración de escaneo de paquetes */
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },
};

export default nextConfig;
