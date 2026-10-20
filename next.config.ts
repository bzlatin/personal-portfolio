import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep compilation scoped to this repository when a parent has a lockfile.
  turbopack: { root: process.cwd() },
};

export default nextConfig;
