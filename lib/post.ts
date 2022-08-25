import path from "path";
import dayjs from "dayjs";
import { getDirectories } from "./fs";

export type PostMeta = {
  title: string;
  date: string;
  spoiler: string;
  language: "english" | "indonesian";
  slug: string;
};

export async function getAllPostSlugs(): Promise<string[]> {
  return await getDirectories(path.join(process.cwd(), "pages"));
}

export async function getPostMetaFromSlug(slug: string): Promise<PostMeta> {
  return import(`../pages/${slug}/index.mdx`).then(({ meta }) => ({
    ...meta,
    slug,
  }));
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const postSlugs = await getAllPostSlugs();

  const posts = await Promise.all(postSlugs.map(getPostMetaFromSlug));

  // Newest post first
  return posts.sort((a, b) => dayjs(b.date).unix() - dayjs(a.date).unix());
}
