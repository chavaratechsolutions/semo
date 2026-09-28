import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Home/Navbar/Nav";

const font= Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO
export const metadata: Metadata = {
  title: "jaba portfolio",
  description: "jaba full stack developer",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${font.className} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`&{font.className} bg-black`}>{children}
        <Nav/>
      </body>
    </html>
  );
}
