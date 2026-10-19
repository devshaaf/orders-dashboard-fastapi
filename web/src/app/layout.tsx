import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Orders Dashboard",
  description: "Orders and clients dashboard for small-business operations.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
