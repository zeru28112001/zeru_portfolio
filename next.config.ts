import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Any *.pdf URL → /resume
      {
        source: "/:file(.*\\.pdf)",
        destination: "/resume",
        permanent: true,
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
