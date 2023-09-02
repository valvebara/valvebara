import React from "react";

export const metadata = {
  title: "Valve",
  description: "Cut down your AI Inference costs in a matter of minutes!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
