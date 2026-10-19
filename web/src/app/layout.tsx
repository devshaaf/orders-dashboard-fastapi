import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Orders Dashboard",
  description: "Sample project: orders and clients dashboard for a small business.",
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
