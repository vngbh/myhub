import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MyHub Portfolio",
  description: "A personal portfolio built with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
