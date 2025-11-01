import { DATA } from '@/data/resume';

export function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: DATA.name,
    url: DATA.url,
    description: DATA.description,
    logo: `${DATA.url}${DATA.avatarUrl}`,
    email: DATA.contact.email,
    sameAs: Object.values(DATA.contact.social)
      .filter((social) => social.navbar)
      .map((social) => social.url),
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Norte',
      addressCountry: 'PT',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: DATA.name,
    url: DATA.url,
    description: DATA.description,
    publisher: {
      '@type': 'Organization',
      name: DATA.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

