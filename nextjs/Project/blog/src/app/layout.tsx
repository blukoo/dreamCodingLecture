import Link from "next/link";
import "./globals.css";

import { Open_Sans } from "next/font/google";
import Header from "./component/Header";
import Footer from "./component/Footer";
const sans = Open_Sans({ subsets: ["latin"] });
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.className}>
      <body className="flex flex-col w-full max-w-screen-2xl mx-autddo">
        ffff
        <Header />
        sssss
        <main className="grow bg-sky-400">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
