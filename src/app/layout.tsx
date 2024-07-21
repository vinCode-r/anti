import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Partytown } from "@builder.io/partytown/react";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ANTI",
  description: "Automated Navigation & Trash Identification",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Partytown debug={true} />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
