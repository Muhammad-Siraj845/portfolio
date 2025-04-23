'use client';

import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Header from "./components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
            <Header />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
