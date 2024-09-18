import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "../utils/fonts";
import LayoutWrapper from "./components/layout/LayoutWrapper";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Yuval Shalom's Portfolio",
  description: "Welcome to my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>"Yuval Shalom's Portfolio"</title>
        <meta name="description" content={metadata.description || ""} />
      </Head>
      <body className={poppins.className}>
        <main className="fle flex-col md:flex-row relative">
          <section className="md:w-7/12 flex flex-col">
            <LayoutWrapper>{children}</LayoutWrapper>
          </section>
        </main>
      </body>
    </html>
  );
}
