"use client"; // use this at the top because usePathname is client-side

import { Geist, Geist_Mono, Alex_Brush } from "next/font/google";
import "./globals.css";
import Home from "@/Components/Home";
import { usePathname } from "next/navigation";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";


const alex_brush = Alex_Brush({
  variable: "--font-alex-brush",
  weight: ["400"],
  subsets: ["latin"]
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});



export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${alex_brush.variable} antialiased`}>
        <Header></Header>
        {/* Render Home only if not on the root page */}
        {pathname === "/" && <Home />}
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
