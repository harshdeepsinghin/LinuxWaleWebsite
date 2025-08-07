import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/linuxwale-nextjs' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/linuxwale-nextjs/' : '',
  trailingSlash: true,
  // ...other config options
};

export default nextConfig;
