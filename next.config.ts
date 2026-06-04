import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    // Prevent Next from guessing the wrong monorepo/workspace root.
    root: __dirname,
  },
};

export default nextConfig;
