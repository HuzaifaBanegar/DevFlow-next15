import React from "react";
import type { Metadata } from "next";
import ThemeProvider from '../context/Theme'
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "./fonts/InterVF.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 700 800 900",
});

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGroteskVF.ttf",
  variable: "--font-space-grotesk",
  weight: "300 400 500 700 800 900",
});



export const metadata: Metadata = {
  title: "Dev Overflow",
  description:
    "Join Dev Overflow, a vibrant community platform where developers can ask questions, share insights, and collaborate on programming challenges. Whether you're delving into web development, mobile apps, algorithms, or data structures, find the support and knowledge you need to enhance your skills and connect with fellow developers worldwide.",
  icons: {
    icon: "/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>{children}</ThemeProvider>
        
      </body>
    </html>
  );
}
