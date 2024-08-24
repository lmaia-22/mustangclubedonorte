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
import { Toaster } from "@/components/ui/toaster"

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: 'pt_PT',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: 'summary_large_image',
  },
  verification: {
    google: '',
    yandex: '',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      { rel: 'icon', url: '/favicon-32x32.png', sizes: '32x32' },
      { rel: 'icon', url: '/favicon-16x16.png', sizes: '16x16' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans scrollbar-hide',
          fontSans.variable
        )}
      >
        <ScrollLogo logoSrc='/logo_no_bk.png' altText='Small Logo' />
        <FullScreenImage imageUrl={DATA.firstRenderUrl} />
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
      </body>
    </html>
  );
}
