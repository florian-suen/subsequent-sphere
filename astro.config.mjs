// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://floriansuen.com",
  integrations: [mdx(), sitemap()],
  //@ts-ignore
  vite: { plugins: [tailwindcss()] },
});
