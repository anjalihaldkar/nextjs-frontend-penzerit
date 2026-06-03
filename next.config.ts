import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      {
        source: "/download",
        destination: "/resources",
        permanent: true,
      },
    ];
  },
  turbopack: {
    // Prevent Next from guessing the wrong monorepo/workspace root.
    root: __dirname,
  },
};

export default nextConfig;
