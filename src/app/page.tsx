import { GetStaticProps } from "next";
import { PostEntry } from "../components/PostEntry";
import { getAllPosts, PostMeta } from "../lib/post";

export default async function Home() {
  const posts = (await getAllPosts()).filter(
    ({ language }) => language === "english"
  );

  return (
    <div className="flex flex-col gap-10">
      {posts.map((post) => (
        <PostEntry post={post} key={post.slug} />
      ))}
    </div>
  );
}
