import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/resume",
        destination: "/WaiYanKoKo_Resume.pdf",
      },
    ];
  },
};

export default nextConfig;
