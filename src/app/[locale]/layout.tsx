"use client";

import "@/styles/globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import ToasterContext from "../context/ToastContext";

const inter = Inter({ subsets: ["latin"] });

export default function LocaleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const params = useParams();
  const locale = params.locale as string;
  
  useEffect(() => {
    // Set HTML lang attribute based on current locale
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale || 'en';
    }
  }, [locale]);

  return (
    <html lang={locale || 'en'} suppressHydrationWarning>
      <body className={inter.className}>
        <NextTopLoader
          color="#006BFF"
          crawlSpeed={300}
          showSpinner={false}
          shadow="none"
        />
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="dark"
        >
          <ToasterContext />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}