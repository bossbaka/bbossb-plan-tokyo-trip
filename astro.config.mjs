import { defineConfig } from "astro/config";

import icon from "astro-icon";

import AstroPWA from "@vite-pwa/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon(),
    AstroPWA({
      injectRegister: "auto",
      registerType: "autoUpdate",
      manifest: {
        name: "Tokyo with My Mother",
        short_name: "Tokyo with My Mother",
        theme_color: "#ffffff",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
        navigateFallback: "/",
        globPatterns: ["**/*.{js,css,html,ico,png,svg,astro,jpg}"],
        cleanupOutdatedCaches: true,
      },
      devOptions: {
        enabled: true,
        navigateFallbackAllowlist: [/^\//],
      },
      experimental: {
        directoryAndTrailingSlashHandler: true,
      },
    }),
  ],
});
