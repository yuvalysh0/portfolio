import type { Metadata } from 'next';
import './globals.css';
import { poppins } from './utils/fonts';

export const metadata: Metadata = {
  title: "Yuval Shalom's Portfolio",
  description: 'Welcome to my portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
