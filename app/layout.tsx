import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DataSAZ Solutions",
  description:
    "Empowering businesses with cutting-edge technology and financial expertise. We provide automated account information systems and premium business development services.",
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
