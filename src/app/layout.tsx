import React from 'react';
import './globals.css';
import { Metadata as typeMetadata } from 'next';
import { Metadata } from './metadata';
import LayoutNested from './layoutNested';

export const metadata: typeMetadata = {
  ...Metadata
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt' suppressHydrationWarning className='scrollbar-hide'>
      <LayoutNested>{children}</LayoutNested>
    </html>
  );
}
