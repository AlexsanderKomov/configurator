import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["localhost", "localhost:5000"], // Добавь домен и порт
  },
};

export default nextConfig;
