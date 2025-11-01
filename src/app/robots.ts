import { MetadataRoute } from 'next';
import { DATA } from '@/data/resume';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = DATA.url;

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

