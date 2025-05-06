import type { Metadata } from "next";
import Popins from "next/font/local";
import "../.././globals.css";
import Header from "@/components/Header";
// import Footer from "@/components/Footer";

const popins = Popins({
  src: "../../../fonts/Poppins-Light.ttf",
});

export const metadata: Metadata = {
  title: "Contact Us: Department of Computer Science | KSKVKU",
  description:
    "Prototype Website of Department of computer Science at Krantiguru Shyamji Krishna verma Kachchh university",
};

export default function ContactLayout({
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
        {/* <Footer /> */}
      </body>
    </html>
  );
}
