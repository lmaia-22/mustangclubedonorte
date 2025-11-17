"use client";

import React, { useState, useEffect } from 'react';
import { DATA } from '@/data/resume';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import FullscreenVideo from '@/components/video';
import ScrollLogo from '@/components/logo_on_top_right';
import { useIsMobile } from '@/hooks/useIsMobile';
import Loader from '@/components/loader';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/navbar';
import { ThemeProvider } from '@/components/theme-provider';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ErrorBoundary } from '@/components/error-boundary';
import { ServiceWorkerRegister } from '@/components/service-worker-register';
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
    const video = document.createElement('video');
    video.src = DATA.videoUrl;
    video.preload = 'metadata'; // Only load metadata, not full video
    video.muted = true; // Required for autoplay

    // Use loadedmetadata instead of canplaythrough for faster initial load
    // This only waits for metadata, allowing page to show faster
    const videoLoadPromise = new Promise<void>((resolve, reject) => {
      const onMetadataLoaded = () => {
        video.removeEventListener('loadedmetadata', onMetadataLoaded);
        video.removeEventListener('error', onError);
        resolve();
      };

      const onError = () => {
        video.removeEventListener('loadedmetadata', onMetadataLoaded);
        video.removeEventListener('error', onError);
        // Don't reject, just resolve to show page even if video fails
        resolve();
      };

      video.addEventListener('loadedmetadata', onMetadataLoaded, { once: true });
      video.addEventListener('error', onError, { once: true });
      
      // Load the video metadata
      video.load();

      // Fallback timeout to prevent infinite loading
      setTimeout(() => {
        if (video.readyState === 0) {
          onError();
        }
      }, 3000);
    });

    // Set loading state once metadata is loaded
    Promise.all([videoLoadPromise])
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error loading video', error);
        setIsLoading(false); // Always hide loader
      });

    // Cleanup on component unmount
    return () => {
      video.src = '';
      video.load();
    };
  }, []);

  return (
      <body
      className={cn(
        'min-h-screen w-full max-w-full bg-background font-sans overflow-x-hidden',
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
          <FullscreenVideo videoSrc={DATA.videoUrl} />
          <div
            className={cn(
              'sm:py-18 mx-auto min-h-screen max-w-5xl bg-background px-4 py-6 sm:px-6 font-sans antialiased overflow-x-hidden',
              fontSans.variable
            )}
          >
            <ErrorBoundary>
              <ServiceWorkerRegister>
                <ThemeProvider attribute='class' defaultTheme='dark'>
                  <TooltipProvider delayDuration={0}>
                    {children}
                    <Navbar />
                  </TooltipProvider>
                  <Footer />
                </ThemeProvider>
              </ServiceWorkerRegister>
            </ErrorBoundary>
          </div>
          <Toaster />
        </>
      )}
    </body>
  );
}
