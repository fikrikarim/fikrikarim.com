import type { AppProps } from "next/app";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import "../styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Fikri Karim</title>
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
