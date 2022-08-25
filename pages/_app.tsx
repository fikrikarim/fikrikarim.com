import type { AppProps } from "next/app";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex justify-center">
      <div className="flex max-w-2xl flex-grow flex-col gap-14 py-14 px-8">
        <Header />

        <div>
          <Component {...pageProps} />
        </div>

        <Footer />
      </div>
    </div>
  );
}
