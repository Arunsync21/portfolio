import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arun - Portfolio",
  description: "Created by Arunbalaji S",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans} ${GeistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
