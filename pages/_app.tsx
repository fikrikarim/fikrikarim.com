import type { AppProps } from "next/app";

import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-4 py-6 px-4">
        <h1 className="text-3xl font-bold">Fikri Karim</h1>

        <Component {...pageProps} />

        <div className="flex gap-1.5">
          <a href="mailto:hello@fikrikarim.com" target="_top">
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

export default App;
