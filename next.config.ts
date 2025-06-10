import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Other global Next.js options here (images, eslint, etc.)

  /**
   * 1️⃣  Webpack section ─ still used for `next build` (until you opt into
   *     `next build --turbopack`, which is alpha as of 15.3).
   */
  webpack(config) {
    // Make `import Logo from './logo.svg'` work in JS/TS files
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/, // only JS/TS files
      use: ["@svgr/webpack"],
    });

    return config;
  },

  /**
   * 2️⃣  Turbopack section ─ used automatically by `next dev` (and by
   *     `next build --turbopack` if/when you try that).
   */
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
    // You can also add `resolveAlias`, `resolveExtensions`, etc. here.
  },
};

export default nextConfig;
