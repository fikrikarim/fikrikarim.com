import { readdir, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pagesDir = path.join(__dirname, "..", "pages");
const publicDir = path.join(__dirname, "..", "public");
const baseUrl = "https://fikrikarim.com";

const staticPages = [
  { url: "/", priority: "1.0" },
  { url: "/tulisan", priority: "0.7" },
  { url: "/portfolio", priority: "0.7" },
];

async function getPostSlugs() {
  const entries = await readdir(pagesDir, { withFileTypes: true });
  const dirs = entries.filter((e) => e.isDirectory()).map((e) => e.name);

  const slugs = [];
  for (const dir of dirs) {
    try {
      const files = await readdir(path.join(pagesDir, dir));
      if (files.some((f) => f.endsWith(".mdx"))) {
        slugs.push(dir);
      }
    } catch {}
  }
  return slugs;
}

async function main() {
  const slugs = await getPostSlugs();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
${slugs
  .map(
    (slug) => `  <url>
    <loc>${baseUrl}/${slug}</loc>
    <priority>0.8</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  await writeFile(path.join(publicDir, "sitemap.xml"), sitemap);
  console.log("Generated sitemap.xml with", staticPages.length + slugs.length, "URLs");
}

main();
