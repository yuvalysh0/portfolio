import "./globals.css";
import { poppins } from "../utils/fonts";
import LayoutWrapper from "./components/layout/LayoutWrapper";
import Head from "next/head";

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
        <title>Yuval Shalom&apos;s Portfolio</title>{" "}
        {/* Escaped the single quote */}
        <meta name="description" content="Welcome to my portfolio" />
      </Head>
      <body className={poppins.className}>
        <main className="flex flex-col md:flex-row relative">
          <section className="md:w-7/12 flex flex-col">
            <LayoutWrapper>{children}</LayoutWrapper>
          </section>
        </main>
      </body>
    </html>
  );
}
