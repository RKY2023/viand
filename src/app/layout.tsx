import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import NavigationMenuDemo from "@/components/layout/hea";
import Footer from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  // loading
});

export const metadata: Metadata = {
  title: "ShopEase - Premium Online Shopping Experience",
  description: "Shop the latest trends in fashion, electronics, and home goods with fast delivery and easy returns.",
  keywords: "online shopping, fashion, electronics, home goods, ecommerce",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shopease.vercel.app",
    title: "ShopEase - Premium Online Shopping Experience",
    description: "Shop the latest trends in fashion, electronics, and home goods with fast delivery and easy returns.",
    siteName: "ShopEase",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ShopEase - Premium Online Shopping Experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShopEase - Premium Online Shopping Experience",
    description: "Shop the latest trends in fashion, electronics, and home goods with fast delivery and easy returns.",
    images: ["/og-image.jpg"],
  },  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        {/* header  */}
        <NavigationMenuDemo />
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <Toaster />
        {/* header  */}
        <NavigationMenuDemo />
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
