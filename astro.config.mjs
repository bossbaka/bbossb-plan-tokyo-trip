import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import icon from "astro-icon";

import basicSsl from "@vitejs/plugin-basic-ssl";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), icon()],
  // vite: {
  //   plugins: [basicSsl()],
  //   server: {
  //     https: true,
  //   },
  // },
});
