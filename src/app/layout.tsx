import type { Metadata } from "next";

import { Montserrat } from "next/font/google";

import "./globals.css";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fikri Karim",
  description: "Fikri Karim's blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="flex justify-center">
          <div className="flex max-w-2xl flex-grow flex-col gap-14 py-14 px-8">
            <Header />

            <div>{children}</div>

            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
