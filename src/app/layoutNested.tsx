"use client";

import React, { useState, useEffect } from 'react';
import { DATA } from '@/data/resume';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import FullScreenImage from '@/components/firstRender';
import FullscreenVideo from '@/components/video';
import ScrollLogo from '@/components/logo_on_top_right';
import { useIsMobile } from '@/hooks/useIsMobile';
import Loader from '@/components/loader';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/navbar';
import { ThemeProvider } from '@/components/theme-provider';
import { TooltipProvider } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    const imageUrl = isMobile ? DATA.firstRenderUrlMobile : DATA.firstRenderUrl;

    const img = new Image();
    img.src = imageUrl;

    // Ensure all promises complete
    const imageLoadPromise = new Promise<void>((resolve, reject) => {
      img.onload = () => resolve();
      img.onerror = reject;
    });

    // Set loading state once all assets are loaded
    Promise.all([imageLoadPromise])
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error loading assets', error);
        setIsLoading(false); // Still hide loader on error
      });

    // Cleanup on component unmount
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, []);

  return (
      <body
      className={cn(
        'min-h-screen bg-background font-sans',
        fontSans.variable
      )}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {!isMobile && (
            <ScrollLogo logoSrc={DATA.avatarUrl} altText='Small Logo' />
          )}
          <FullScreenImage
            imageUrl={
              isMobile ? DATA.firstRenderUrlMobile : DATA.firstRenderUrl
            }
          />
          <FullscreenVideo videoSrc={DATA.videoUrl} />
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
  );
}
