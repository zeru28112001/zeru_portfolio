import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old filename → clean URL
      {
        source: "/WaiYanKoKo_Resume.pdf",
        destination: "/resume",
        permanent: true,
      },
      // Old resume name → clean URL
      {
        source: "/WaiYanKoKo_171026.pdf",
        destination: "/resume",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      // waiyankoko.com/resume → serves the actual PDF
      {
        source: "/resume",
        destination: "/WaiYanKoKo_171026.pdf",
      },
    ];
  },
};

export default nextConfig;
