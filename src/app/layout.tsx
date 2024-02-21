import type { Metadata } from "next";
import "../styles/globals.css";
import { Providers } from "./providers";
import NaviBar from "../components/NaviBar";
import { Plus_Jakarta_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "Moonlit Cafe",
  description: "A cozy place to relax and enjoy a warm drink.",
  authors: {
    name: "Moonlite-S",
    url: "https://github.com/Moonlite-S",
  },
  creator: "Moonlite-S"
}

const JakarakaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={JakarakaSans.className}>
      <body className="gradientBG">
        <Providers>
          <NaviBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
