import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["localhost", "localhost:3001"], // Добавь домен и порт
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
