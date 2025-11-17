import { DATA } from '@/data/resume';
import type { Metadata as typeMetadata } from 'next';

export const Metadata: typeMetadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: 'Mustang Clube Do Norte | Mustang Club of the North',
    template: `%s | Mustang Clube Do Norte`,
  },
  
  description: 'We are a vibrant community of enthusiasts for one of the most iconic automotive icons in the world: the Ford Mustang. From the unmistakable engine roar to the classic lines that define its design, every detail of Mustangs awakens a passion that we decided to celebrate together.',
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: 'pt_PT',
    alternateLocale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${DATA.url}/logo_no_bk.png`,
        width: 600,
        height: 600,
        alt: DATA.name,
      },
    ],
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
    images: [`${DATA.url}/logo_no_bk.png`],
    description: DATA.description,
  },
  verification: {
    google: 'G-1V0LZJSJ4N',
  },
  keywords: [
    'Mustang',
    'Ford Mustang',
    'Clube Automóvel',
    'Norte Portugal',
    'Carros Clássicos',
    'Mustang Portugal',
    'Automóveis',
    'Carros Antigos',
    'Mustang Clube',
    'Comunidade Automóvel'
  ],
  authors: [{ name: 'Mustang Clube Do Norte' }],
  creator: 'Mustang Clube Do Norte',
  publisher: 'Mustang Clube Do Norte',
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      { rel: 'icon', url: '/favicon-32x32.png', sizes: '32x32' },
      { rel: 'icon', url: '/favicon-16x16.png', sizes: '16x16' },
      { rel: 'manifest', url: '/site.webmanifest' },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'MCdN',
  },
  other: {
    'google-site-verification': 'G-1V0LZJSJ4N',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
};
