import BlurFade from '@/components/magicui/blur-fade';
import { getBlogPosts } from '@/data/blog';
import Link from 'next/link';

export const metadata = {
  badge: 'Blog',
  title: 'Blog das nossas aventuras',
  description: 'As nossas pequenas grandes aventuras.',
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section id='blog' className='mt-4'>
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div className='space-y-2'>
            <div className='inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background'>
              {metadata.badge}
            </div>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
              {metadata.title}
            </h2>
            <p className='text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
              {metadata.description}
            </p>
          </div>
        </div>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <div className='mt-4 flex flex-col space-y-4 text-center'>
          {posts
            .sort((a, b) => {
              if (
                new Date(a.metadata.publishedAt) >
                new Date(b.metadata.publishedAt)
              ) {
                return -1;
              }
              return 1;
            })
            .map((post, id) => (
              <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
                <Link className='space-y-1' href={`/blog/${post.slug}`}>
                  <div className='mx-auto flex w-full flex-col'>
                    <p className='tracking-tight'>{post.metadata.title}</p>
                    <p className='h-6 text-xs text-muted-foreground'>
                      {post.metadata.publishedAt}
                    </p>
                  </div>
                </Link>
              </BlurFade>
            ))}
        </div>
      </BlurFade>
    </section>
  );
}
