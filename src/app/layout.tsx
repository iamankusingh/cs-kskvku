import type { Metadata } from "next";
import Popins from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

// main fonts
const popins = Popins({
  src: "../fonts/Poppins-Light.ttf",
});

export const metadata: Metadata = {
  title: "Department of Computer Science | KSKVKU",
  description:
    "Prototype Website of Department of computer Science at Krantiguru Shyamji Krishna verma Kachchh university",
  keywords: [
    "department of computer science",
    "kskvku",
    "kachchh university",
    "computer science kachchh",
    "mac ca it",
    "msc it",
    "pgdca",
    "bs in cs",
    "bachelor of science in computer science",
    "phd in computer science",
    "it colleg in kachchh",
  ],
  authors: [{ name: "Anku Singh", url: "https://github.com/iamankusingh" }],
  creator: "Anku Singh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>

      <body className={`${popins.className} antialiased`}>
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
