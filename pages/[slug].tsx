import { GetStaticPaths, GetStaticProps } from "next";
import dynamic from "next/dynamic";
import { getAllPostSlugs } from "../lib/post";

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getAllPostSlugs();

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async (
  context
) => {
  return { props: { slug: context.params?.slug } };
};

type Props = { slug: string };

export default function Post({ slug }: Props) {
  const Page = dynamic(() => import(`./posts/${slug}/index.mdx`));

  return <Page />;
}
