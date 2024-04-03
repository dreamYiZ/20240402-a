import Head from 'next/head'
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "蓝星计划",
  description: "保护蓝星， 拯救人类",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="shortcut icon" href="/favicon.png" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
