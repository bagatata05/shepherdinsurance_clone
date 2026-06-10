import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home | Shepherd",
  description: "Insurance for the builders and operators shaping our physical world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
