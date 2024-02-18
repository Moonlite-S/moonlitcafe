import type { Metadata } from "next";
import "../styles/globals.css";


export const metadata: Metadata = {
  title: "Moonlit Cafe",
  description: "A cozy place to relax and enjoy a warm drink.",
  authors: {
    name: "Moonlite-S",
    url: "https://github.com/Moonlite-S",
  },
  creator: "Moonlinte-S"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
