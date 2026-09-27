import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Evelyn Li — Product Designer",
  description: "Evelyn Li is a product designer creating clear tools for complex workflows and thoughtful consumer experiences.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
