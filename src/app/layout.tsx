import React from 'react';
import './globals.css';
import { Metadata as typeMetadata } from 'next';
import { Metadata } from './metadata';
import LayoutNested from './layoutNested';
import GoogleAnalytics from '@/components/google-analytics';
import { WebVitals } from '@/components/web-vitals';
import { LanguageProvider } from '@/contexts/language-context';
import { StructuredData } from '@/components/structured-data';

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
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="MCdN" />
        {gaMeasurementId && <GoogleAnalytics measurementId={gaMeasurementId} />}
        <StructuredData />
        {gaMeasurementId && <WebVitals gaMeasurementId={gaMeasurementId} />}
      </head>
      <LanguageProvider>
        <LayoutNested>{children}</LayoutNested>
      </LanguageProvider>
    </html>
  );
}
