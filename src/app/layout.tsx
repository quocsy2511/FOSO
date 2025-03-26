import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "@/utils/SmoothScroll";
const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FOSO - Test",
  description: "Blog FOSO -Cập Nhật Tin Tức Mới Nhất bgy Nguyen Quoc Sy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body className={`${raleway.variable} antialiased`}>{children}</body>
      </ReactLenis>
    </html>
  );
}
