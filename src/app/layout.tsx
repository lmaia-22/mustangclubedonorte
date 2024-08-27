'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/navbar';
import { ThemeProvider } from '@/components/theme-provider';
import { TooltipProvider } from '@/components/ui/tooltip';
import { DATA } from '@/data/resume';
import { cn } from '@/lib/utils';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import FullScreenImage from '@/components/firstRender';
import Footer from '@/components/footer';
import FullscreenVideo from '@/components/video';
import ScrollLogo from '@/components/logo_on_top_right';
import { Toaster } from '@/components/ui/toaster';
import { useIsMobile } from '@/hooks/useIsMobile';
import Loader from '@/components/loader';

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
    const videoUrl = DATA.videoUrl;
    const img = new Image();
    img.src = imageUrl;

    const video = document.createElement('video');
    video.src = videoUrl;
    video.playsInline = true;

    Promise.all([
      new Promise<void>((resolve) => {
        img.onload = () => resolve();
      }),
      new Promise<void>((resolve) => {
        video.onloadeddata = () => resolve();
      }),
    ]).then(() => {
      setIsLoading(false);
    });
  }, [isMobile]);

  return (
    <html lang='en' suppressHydrationWarning className='scrollbar-hide'>
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
            <ScrollLogo logoSrc='/logo_no_bk.png' altText='Small Logo' />
            <FullScreenImage
              imageUrl={
                isMobile ? DATA.firstRenderUrlMobile : DATA.firstRenderUrl
              }
            />
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
