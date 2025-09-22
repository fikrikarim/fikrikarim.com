import { MDXProvider } from "@mdx-js/react";
import Head from "next/head";
import Image from "next/image";
import dayjs from "dayjs";
import { PostMeta } from "../lib/post";

const ResponsiveImage = (props) => (
  <Image alt={props.alt} layout="responsive" {...props} />
);

const mdxComponents = {
  img: ResponsiveImage,
};

export function Post(props: {
  meta: PostMeta;
  children: JSX.Element;
}): JSX.Element {
  return (
    <MDXProvider components={mdxComponents}>
      <Head>
        <title>{props.meta.title} - Fikri Karim</title>
        <meta name="description" content={props.meta.spoiler} />

        <meta
          property="og:title"
          content={`${props.meta.spoiler} - Fikri Karim`}
        />
        <meta property="og:description" content={props.meta.spoiler} />
      </Head>

      <div className="prose prose-invert">
        <h1 className="text-3xl">{props.meta.title}</h1>
        <p className="text-sm text-slate-500">
          {dayjs(props.meta.date).format("MMMM D, YYYY")}
        </p>

        {props.children}
      </div>
    </MDXProvider>
  );
}
