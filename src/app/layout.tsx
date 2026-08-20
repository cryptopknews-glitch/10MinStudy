import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "10MinStudy — Student 10-Minute Study Helper",
  description:
    "10MinStudy is a fast study helper for Class 9–12 students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
