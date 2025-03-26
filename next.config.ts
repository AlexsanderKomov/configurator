import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http", // или "https", в зависимости от вашего сервера
        hostname: "localhost",
        port: "3001", // Указываем порт, если он отличается от стандартного
      },
      {
        protocol: "http", // или "https"
        hostname: "localhost",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Все запросы, начинающиеся с /api
        destination: "http://localhost:3001/api/:path*", // Проксировать на Express
      },
    ];
  },
};

export default nextConfig;
