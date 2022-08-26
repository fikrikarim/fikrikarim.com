import remarkMdxImages from "remark-mdx-images";
import createMDX from "@next/mdx";
import createBundleAnalyzer from "@next/bundle-analyzer";

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

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  async redirects() {
    return [
      {
        source: "/cv",
        destination: "/Resume_of_Fikri_Karim.pdf",
        permanent: true,
      },
    ];
  },
};

export default withBundleAnalyzer(withMDX(config));
