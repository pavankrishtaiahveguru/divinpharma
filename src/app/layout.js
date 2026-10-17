import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";
import Navbar from "@/components/layout/Navabr";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "DIVIN PHARMA | APIs & Pharmaceutical Intermediates",
    template: "%s | DIVIN PHARMA",
  },
  description:
    "DIVIN PHARMA is a Hyderabad-based pharmaceutical trading and supply business specializing in APIs and pharmaceutical intermediates, domestic distribution, and international exports.",
  keywords: [
    "DIVIN PHARMA",
    "APIs Trading and Supply",
    "Pharmaceutical Intermediates",
    "API Suppliers Hyderabad",
    "Pharmaceutical Exports India",
    "Pharmaceutical Distribution",
  ],
  authors: [{ name: "DIVIN PHARMA" }],
  openGraph: {
    title: "DIVIN PHARMA | APIs & Pharmaceutical Intermediates",
    description:
      "Connecting Quality, Trust & Pharmaceutical Solutions. Explore our pharmaceutical supply and distribution services.",
    siteName: "DIVIN PHARMA",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white font-sans text-[#172B24]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
