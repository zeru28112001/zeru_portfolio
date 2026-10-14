import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/WaiYanKoKo_Resume.pdf",
        destination: "/resume",
        permanent: true,
      },
    ];
  },
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
