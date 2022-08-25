import { GetStaticProps } from "next";
import { PostEntry } from "../components/PostEntry";
import { getAllPosts, PostMeta } from "../lib/post";

export const getStaticProps: GetStaticProps = async () => {
  const posts = (await getAllPosts()).filter(
    ({ language }) => language === "english"
  );

  return {
    props: { posts },
  };
};

type Props = {
  posts: PostMeta[];
};

export default function Index({ posts }: Props) {
  return (
    <div className="flex flex-col gap-10">
      {posts.map((post) => (
        <PostEntry post={post} key={post.slug} />
      ))}
    </div>
  );
}
