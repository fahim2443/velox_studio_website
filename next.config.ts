import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/velox_studio_website" : "",
  assetPrefix: isProd ? "/velox_studio_website" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
