import React, { ReactNode } from "react";
import type { Metadata } from "next";
import ThemeProvider from '../context/Theme'
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";


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
  title: "DevFlow",
  description:
    "Join DevFlow, a vibrant community platform where developers can ask questions, share insights, and collaborate on programming challenges. Whether you're delving into web development, mobile apps, algorithms, or data structures, find the support and knowledge you need to enhance your skills and connect with fellow developers worldwide.",
  icons: {
    icon: "/images/site-logo.svg",
  },
};

const RootLayout = async ({children}: {children: ReactNode})=>{
  const session = await auth();
  return (
    <html lang="en" suppressHydrationWarning>
      <SessionProvider session={session}>
      <body
        className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
      >
        <Toaster/>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
         
          {children}
        </ThemeProvider>
      </body>
      </SessionProvider>
    </html>
  );
}

export default RootLayout
