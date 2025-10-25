import React from 'react';
import './globals.css';
import { Metadata as typeMetadata } from 'next';
import { Metadata } from './metadata';
import LayoutNested from './layoutNested';
import GoogleAnalytics from '@/components/google-analytics';
import { LanguageProvider } from '@/contexts/language-context';

export const metadata: typeMetadata = {
  ...Metadata
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang='pt' suppressHydrationWarning className='scrollbar-hide'>
      <head>
        {gaMeasurementId && <GoogleAnalytics measurementId={gaMeasurementId} />}
      </head>
      <LanguageProvider>
        <LayoutNested>{children}</LayoutNested>
      </LanguageProvider>
    </html>
  );
}
