'use client'; // Keep this directive to make this a Client Component

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/navbar';
import { ThemeProvider } from '@/components/theme-provider';
import { TooltipProvider } from '@/components/ui/tooltip';
import { DATA } from '@/data/resume';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import FullScreenImage from '@/components/firstRender';
import Footer from '@/components/footer';
import FullscreenVideo from '@/components/video';
import ScrollLogo from '@/components/logo_on_top_right';
import { Toaster } from "@/components/ui/toaster";
import { useIsMobile } from '@/hooks/useIsMobile'; // Correctly import the custom hook
import Loader from '@/components/loader'; // Import the Loader component
import { delay } from 'framer-motion';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const isMobile = useIsMobile(); // Use the custom hook to check if it's a mobile screen

  useEffect(() => {
    const imageUrl = isMobile ? DATA.firstRenderUrlMobile : DATA.firstRenderUrl;
    const img = new Image();
    img.src = imageUrl;

    // Once the image is loaded, set loading to false
    img.onload = () => {
      setIsLoading(false);
    };
  }, [isMobile]);
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans scrollbar-hide',
          fontSans.variable
        )}
      >
        {/* Only conditionally render the content within the body */}
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <ScrollLogo logoSrc='/logo_no_bk.png' altText='Small Logo' />
            <FullScreenImage imageUrl={isMobile ? DATA.firstRenderUrlMobile : DATA.firstRenderUrl} />
            <FullscreenVideo videoSrc='/mustang.mp4' />
            <div
              className={cn(
                'sm:py-18 mx-auto min-h-screen max-w-5xl bg-background px-6 py-6 font-sans antialiased',
                fontSans.variable
              )}
            >
              <ThemeProvider attribute='class' defaultTheme='dark'>
                <TooltipProvider delayDuration={0}>
                  {children}
                  <Navbar />
                </TooltipProvider>
                <Footer />
              </ThemeProvider>
            </div>
            <Toaster />
          </>
        )}
      </body>
    </html>
  );
}
