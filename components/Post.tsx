import { MDXProvider } from "@mdx-js/react";
import Image from "next/image";

const ResponsiveImage = (props) => (
  <Image alt={props.alt} layout="responsive" {...props} />
);

const mdxComponents = {
  img: ResponsiveImage,
};

export function Post(props): JSX.Element {
  return (
    <MDXProvider components={mdxComponents}>
      <div className="prose-body:white prose prose-invert">
        <h1>{props.meta.title}</h1>

        {props.children}
      </div>
    </MDXProvider>
  );
}
