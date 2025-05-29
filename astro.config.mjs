import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: "static",
  base: "./",
  site: "https://syvbiotech.com", // Replace with your actual domain
  integrations: [sitemap()],
});
