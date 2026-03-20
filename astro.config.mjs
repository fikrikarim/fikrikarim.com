import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://fikrikarim.com",
  integrations: [mdx(), sitemap(), tailwind()],
  redirects: {
    "/cv": "/Resume_of_Fikri_Karim.pdf",
  },
});
