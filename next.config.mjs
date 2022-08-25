import remarkMdxImages from "remark-mdx-images";
import createMDX from "@next/mdx";
import createBundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkMdxImages],
    rehypePlugins: [],
    providerImportSource: "@mdx-js/react",
  },
});

const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer(
  withMDX({
    reactStrictMode: true,
    swcMinify: true,
  })
);
