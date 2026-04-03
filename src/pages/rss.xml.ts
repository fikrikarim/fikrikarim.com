import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context: any) {
  const posts = (await getCollection("blog"))
    .filter((post) => post.data.language === "english")
    .sort(
      (a, b) =>
        new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
    );

  return rss({
    title: "Fikri Karim",
    description: "Software engineer building AI tools. Writing about voice AI, on-device ML, and open source projects.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.date),
      description: post.data.description || post.data.spoiler,
      link: `/${post.id}/`,
    })),
  });
}
