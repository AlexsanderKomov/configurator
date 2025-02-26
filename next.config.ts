import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["localhost", "localhost:5000"], // Добавь домен и порт
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Все запросы, начинающиеся с /api
        destination: "http://localhost:5000/api/:path*", // Проксировать на Express
      },
    ];
  },
};

export default nextConfig;
