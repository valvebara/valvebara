import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";

const slogan = "No more Hugging Face cost leaks!";

export const metadata: Metadata = {
  title: `Valve - ${slogan}`,
  description: slogan,
  keywords: [""],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
