// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import { remarkModifiedTime } from "./src/utils/remark-modified-time.mjs";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  site: "https://www.theopenlane.io",
  integrations: [mdx(), sitemap(), react()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [remarkModifiedTime],
  },
  adapter: vercel(),
});
