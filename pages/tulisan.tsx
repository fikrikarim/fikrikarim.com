import { GetStaticProps } from "next";
import { PostEntry } from "../components/PostEntry";
import { getAllPosts, PostMeta } from "../lib/post";

export const getStaticProps: GetStaticProps = async () => {
  const posts = (await getAllPosts()).filter(
    ({ language }) => language === "indonesian"
  );

  return { props: { posts } };
};

type Props = {
  posts: PostMeta[];
};

export default function Tulisan({ posts }: Props) {
  return (
    <div>
      <h1 className="text-2xl font-bold">Tulisan Indonesia</h1>

      <hr className="mt-2 mb-10" />

      <div className="flex flex-col gap-10">
        {posts.map((post) => (
          <PostEntry post={post} key={post.slug} />
        ))}
      </div>
    </div>
  );
}
