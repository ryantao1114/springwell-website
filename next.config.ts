import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.springwellacu.com",
          },
        ],
        destination: "https://springwellacu.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
