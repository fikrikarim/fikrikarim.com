import remarkFrontmatter from "remark-frontmatter";
import remarkMdxImages from "remark-mdx-images";
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkFrontmatter, remarkMdxImages],
    rehypePlugins: [],
    providerImportSource: "@mdx-js/react",
  },
});

export default withMDX({
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
});
