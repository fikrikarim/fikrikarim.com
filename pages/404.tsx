import Head from "next/head";

export default function NotFound() {
  return (
    <div>
      <Head>
        <title>404: Not Found</title>
        <meta property="og:title" content="404: Not Found" />
      </Head>

      <h1 className="text-2xl font-bold">Page not found</h1>
    </div>
  );
}
