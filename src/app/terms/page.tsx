'use client';

import { useEffect, useState } from 'react';
import BlurFade from '@/components/magicui/blur-fade';
import { useLanguage } from '@/contexts/language-context';

const BLUR_FADE_DELAY = 0.04;

export default function TermsPage() {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setMounted(true);
    }
  }, []);

  if (typeof window === 'undefined' || !mounted) {
    return (
      <section id='terms' className='mt-4 min-h-screen' suppressHydrationWarning>
        <div className='flex items-center justify-center min-h-[50vh]'>
          <div className='text-muted-foreground'>Loading...</div>
        </div>
      </section>
    );
  }

  return (
    <section id='terms' className='mt-4' suppressHydrationWarning>
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div className='space-y-2'>
            <div className='inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background'>
              {t('terms.badge')}
            </div>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
              {t('terms.title')}
            </h2>
            <p className='text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
              {t('terms.description')}
            </p>
          </div>
        </div>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <h3 className='prose mt-4 max-w-full text-pretty text-center font-sans text-base dark:prose-invert'>
          {t('terms.acceptance')}
        </h3>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4} className='my-4'>
        <p className='prose max-w-full text-pretty text-center font-sans text-base text-muted-foreground dark:prose-invert'>
          {t('terms.acceptance.text')}
        </p>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <h3 className='prose mt-4 max-w-full text-pretty text-center font-sans text-base dark:prose-invert'>
          {t('terms.usage')}
        </h3>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4} className='my-4'>
        <p className='prose max-w-full text-pretty text-center font-sans text-base text-muted-foreground dark:prose-invert'>
          {t('terms.usage.text')}
        </p>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <h3 className='prose mt-4 max-w-full text-pretty text-center font-sans text-base dark:prose-invert'>
          {t('terms.modifications')}
        </h3>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4} className='my-4'>
        <p className='prose max-w-full text-pretty text-center font-sans text-base text-muted-foreground dark:prose-invert'>
          {t('terms.modifications.text')}
        </p>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <h3 className='prose mt-4 max-w-full text-pretty text-center font-sans text-base dark:prose-invert'>
          {t('terms.intellectual')}
        </h3>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4} className='my-4'>
        <p className='prose max-w-full text-pretty text-center font-sans text-base text-muted-foreground dark:prose-invert'>
          {t('terms.intellectual.text')}
        </p>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <h3 className='prose mt-4 max-w-full text-pretty text-center font-sans text-base dark:prose-invert'>
          {t('terms.links')}
        </h3>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4} className='my-4'>
        <p className='prose max-w-full text-pretty text-center font-sans text-base text-muted-foreground dark:prose-invert'>
          {t('terms.links.text')}
        </p>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 5} className='my-4'>
        <p className='prose mt-4 max-w-full text-pretty text-center font-sans text-base font-semibold dark:prose-invert'>
          {t('terms.admission')}
        </p>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 5} className='my-4'>
        <p className='prose max-w-full text-pretty text-center font-sans text-sm italic text-muted-foreground dark:prose-invert'>
          {t('terms.ford.trademark')}
        </p>
      </BlurFade>
    </section>
  );
}
