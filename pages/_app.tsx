import type { AppProps } from "next/app";

import "../styles/globals.css";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex justify-center">
      <div className="flex max-w-2xl flex-col gap-14 py-14 px-4">
        <Link href="/">
          <a className="text-3xl font-bold no-underline">Fikri Karim</a>
        </Link>

        <div>
          <Component {...pageProps} />
        </div>

        <div className="flex gap-1.5">
          <a href="mailto:hello@fikrikarim.com" target="_blank">
            Email
          </a>
          &bull;
          <a href="https://github.com/fikrikarim" rel="noopener noreferrer">
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
