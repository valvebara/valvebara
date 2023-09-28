import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

const title = "Valvebara - No more Hugging Face cost leaks.";
const description =
  "Valvebara is open-source project that helps you manage subscription-based billing to save on costs.";

export const metadata: Metadata = {
  title: {
    template: "%s - No more Hugging Face cost leaks.",
    default: title,
  },
  description,
  keywords: [
    "AI Inference",
    "Hugging Face",
    "Save on costs",
    "Billing Management",
    "Subscription Management",
  ],
  openGraph: {
    title,
    description,
    url: "https://valvebara.com/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body>{children}</body>
      </ThemeProvider>
      <Analytics />
    </html>
  );
}
