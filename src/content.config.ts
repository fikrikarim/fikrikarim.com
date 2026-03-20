import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "*/index.mdx", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    language: z.enum(["english", "indonesian", "standalone"]),
    spoiler: z.string(),
  }),
});

export const collections = { blog };
