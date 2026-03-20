import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import "../styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const canonicalUrl = `https://fikrikarim.com${router.asPath}`;

  return (
    <>
      <Head>
        <title>Fikri Karim</title>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <div className="flex justify-center">
        <div className="flex max-w-2xl flex-grow flex-col gap-14 px-8 py-14">
          <Header />

          <div>
            <Component {...pageProps} />
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}
