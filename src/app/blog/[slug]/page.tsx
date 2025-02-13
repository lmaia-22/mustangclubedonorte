import { getPost } from '@/data/blog';
import { DATA } from '@/data/resume';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import Image from 'next/image';

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  let post = await getPost(params.slug);

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${DATA.url}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  let post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section id='blog' className='flex flex-col items-center text-center'>
      <script
        type='application/ld+json'
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${DATA.url}${post.metadata.image}`
              : `${DATA.url}/og?title=${post.metadata.title}`,
            url: `${DATA.url}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: DATA.name,
            },
          }),
        }}
      />
      <h1 className='title max-w-[650px] text-2xl font-medium tracking-tighter'>
        {post.metadata.title}
      </h1>
      <div className='mb-8 mt-2 flex max-w-[650px] items-center justify-center text-sm'>
        <Suspense fallback={<p className='h-5' />}>
          <p className='text-sm text-neutral-600 dark:text-neutral-400'>
            {(post.metadata.publishedAt)}
          </p>
        </Suspense>
      </div>
      <article
        className='prose mb-8 max-w-[650px] dark:prose-invert'
        dangerouslySetInnerHTML={{ __html: post.source }}
      ></article>
      {post.metadata.image && (
        <div className='mt-8'>
          <Image
            src={`${DATA.url}${post.metadata.image}`}
            width={650}
            height={500}
            alt={post.metadata.title}
            className='mx-auto h-auto max-w-full'
            layout='responsive'
          />
        </div>
      )}
    </section>
  );
}
