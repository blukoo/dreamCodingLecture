import Link from "next/link";
import "./globals.css";
import styles from "./layout.module.css";
import { Metadata } from "next";

export const metadata = {
  title: "멋진 제품 사이트",
  description: "멋진 제품을 판매하는 곳입니다.",
  icons: {
    icon: "/favicon.ico",
  },
};
let dt: any[] = [];
let a: any = dt;
let m = a.a;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header className={styles.header}>
          <h1>Demo Note</h1>
          <nav className={styles.nav}>
            <Link href="/products">Products</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
S;
