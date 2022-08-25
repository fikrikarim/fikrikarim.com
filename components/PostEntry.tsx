import dayjs from "dayjs";
import Link from "next/link";
import { PostMeta } from "../lib/post";

export function PostEntry({ post }: { post: PostMeta }): JSX.Element {
  return (
    <Link key={post.title} href={post.slug}>
      <a className="group flex flex-col gap-1 no-underline">
        <h2 className="text-xl font-bold text-white group-hover:underline">
          {post.title}
        </h2>
        <p className="text-sm text-slate-500">
          {dayjs(post.date).format("MMMM D, YYYY")}
        </p>
        <p className="text-md text-slate-300">{post.spoiler}</p>
      </a>
    </Link>
  );
}
