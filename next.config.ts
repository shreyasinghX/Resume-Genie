import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "4mb",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "njuq4e9sqzy4w0q9.public.blob.vercel-storage.com"
      },
    ]
  }
};

export default nextConfig;
