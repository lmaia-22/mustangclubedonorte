'use client';

import BlurFade from '@/components/magicui/blur-fade';
import BlurFadeText from '@/components/magicui/blur-fade-text';
import { OrbitingMetrics } from '@/components/orbiting_metrics';
import { ResumeCard } from '@/components/resume-card';
import { Badge } from '@/components/ui/badge';
import { DATA } from '@/data/resume';
import Markdown from 'react-markdown';
import { MarqueeDemo } from '@/components/portfolio';
import { useLanguage } from '@/contexts/language-context';

const BLUR_FADE_DELAY = 0.3;

export default function Page() {
  const { t } = useLanguage();
  
  return (
    <main className='flex min-h-[100dvh] w-full max-w-full flex-col space-y-10 overflow-x-hidden' role='main'>
      <a 
        href='#hero' 
        className='sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-ring'
      >
        Skip to main content
      </a>
      <section id='hero'>
        <div className='mx-auto w-full space-y-8'>
          <div className='flex flex-col items-center justify-between md:flex-row md:gap-2'>
            <div className='flex flex-1 flex-col items-center justify-center space-y-1.5 md:text-left'>
              <h1 className='mb-4 text-center text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>{t('hero.title')}</h1>
              <BlurFadeText
                className='max-w-[600px] text-center md:text-xl'
                delay={BLUR_FADE_DELAY}
                text={t('hero.description')}
              />
            </div>
          </div>
        </div>
      </section>
      <section id='about'>
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className='flex flex-col items-center justify-center space-y-4 text-center'>
            <div className='space-y-2'>
              <div className='inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background transition-all duration-300 hover:scale-105 hover:shadow-lg animate-scale-in'>
                {t('about.badge')}
              </div>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                {t('about.title')}
              </h2>
              <p className='text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                {t('about.subtitle')}
              </p>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className='prose mt-4 max-w-full text-pretty text-center font-sans text-base text-muted-foreground dark:prose-invert'>
            {t('about.summary')}
          </Markdown>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className='my-4'>
          <Markdown className='prose max-w-full text-pretty text-center font-sans text-base text-muted-foreground dark:prose-invert'>
            {t('about.summary1')}
          </Markdown>
        </BlurFade>
      </section>
      <section id='mission'>
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className='flex flex-col items-center justify-center space-y-4 text-center'>
            <div className='space-y-2'>
              <div className='inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background transition-all duration-300 hover:scale-105 hover:shadow-lg animate-scale-in'>
                {t('mission.badge')}
              </div>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                {t('mission.title')}
              </h2>
              <p className='text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                {t('mission.subtitle')}
              </p>
            </div>
          </div>
        </BlurFade>
        <ul className='mt-4 flex list-inside list-square flex-col items-center'>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <li
              key='mission1'
              className='w-full max-w-[500px] text-pretty text-center font-sans text-base text-muted-foreground'
            >
              {t('mission.1')}
            </li>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <li
              key='mission2'
              className='w-full max-w-[500px] text-pretty text-center font-sans text-base text-muted-foreground'
            >
              {t('mission.2')}
            </li>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <li
              key='mission3'
              className='w-full max-w-[500px] text-pretty text-center font-sans text-base text-muted-foreground'
            >
              {t('mission.3')}
            </li>
          </BlurFade>
        </ul>
      </section>
      <section id='metrics'>
        <div className='flex min-h-0 flex-col gap-y-3'>
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
              <div className='inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background transition-all duration-300 hover:scale-105 hover:shadow-lg animate-scale-in'>
                {t('metrics.badge')}
              </div>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                  {t('metrics.title')}
                </h2>
                <p className='text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  {t('metrics.subtitle')}
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <OrbitingMetrics></OrbitingMetrics>
          </BlurFade>
        </div>
      </section>
      <section id='skills'>
        <div className='flex min-h-0 flex-col gap-y-5'>
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
              <div className='inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background transition-all duration-300 hover:scale-105 hover:shadow-lg animate-scale-in'>
                {t('skills.badge')}
              </div>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                  {t('skills.title')}
                </h2>
                <p className='text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  {t('skills.subtitle')}
                </p>
              </div>
            </div>
          </BlurFade>
          <div className='mx-auto flex flex-wrap gap-2'>
            {DATA.skills.map((skill, id) => (
              <BlurFade key={id} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill} className="transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-primary hover:text-primary-foreground cursor-pointer">{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id='projects'>
        <div className='w-full space-y-12 py-4'>
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
              <div className='inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background transition-all duration-300 hover:scale-105 hover:shadow-lg animate-scale-in'>
                {t('portfolio.badge')}
              </div>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                  {t('portfolio.title')}
                </h2>
                <p className='text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  {t('portfolio.subtitle')}
                </p>
              </div>
            </div>
          </BlurFade>
          <div className='mx-auto flex flex-col gap-4'>
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <MarqueeDemo />
            </BlurFade>
          </div>
        </div>
      </section>
      <section id='faq' className='w-full max-w-full scrollbar-hide'>
        <div className='w-full space-y-12 py-4'>
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
              <div className='inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background transition-all duration-300 hover:scale-105 hover:shadow-lg animate-scale-in'>
                {t('faq.badge')}
              </div>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                  {t('faq.title')}
                </h2>
                <p className='text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  {t('faq.subtitle')}
                </p>
              </div>
            </div>
          </BlurFade>
          <div className='container mx-auto w-full max-w-full px-5'>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
              {[
                { q: 'faq.q1', a: 'faq.a1' },
                { q: 'faq.q2', a: 'faq.a2' },
                { q: 'faq.q3', a: 'faq.a3' },
                { q: 'faq.q4', a: 'faq.a4' },
                { q: 'faq.q5', a: 'faq.a5' },
                { q: 'faq.q6', a: 'faq.a6' },
              ].map((item, id) => (
                <BlurFade
                  key={item.q}
                  delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                >
                  <div className='flex h-full w-full'>
                    <ResumeCard
                      key={item.q}
                      title={t(item.q)}
                      description={t(item.a)}
                    />
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id='spotify'>
        <div className='relative w-full max-w-full text-center'>
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
              <div className='space-y-3'>
              <div className='inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background transition-all duration-300 hover:scale-105 hover:shadow-lg animate-scale-in'>
                {t('spotify.badge')}
              </div>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                  {t('spotify.title')}
                </h2>
                <p className='mx-auto mb-4 max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  {t('spotify.subtitle')}
                </p>
              <div className='relative mx-auto max-w-md rounded-lg'>
                <iframe 
                  data-testid="embed-iframe" 
                  src="https://open.spotify.com/embed/playlist/0sFvlfRxkQ8yInfiGXKTtE?utm_source=generator" 
                  width="100%" 
                  height="352" 
                  frameBorder="0" 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                  loading="lazy"
                  className="rounded-lg"
                  title="Spotify playlist - Mustang Clube do Norte"
                  aria-label="Spotify playlist embed"
                />
              </div>
              </div>
            </BlurFade>
        </div>
      </section>
      <section id='contact'>
        <div className='relative w-full max-w-full text-center'>
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className='space-y-3'>
              <div className='inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background transition-all duration-300 hover:scale-105 hover:shadow-lg animate-scale-in'>
                {t('contact.badge')}
              </div>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                {t('contact.title')}
              </h2>
              <p className='mx-auto mb-8 max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                {t('contact.subtitle')}
              </p>
              <div className='flex flex-col items-center space-y-6'>
                {/* Email Contact */}
                <BlurFade delay={BLUR_FADE_DELAY * 17}>
                  <a
                    href={`mailto:${DATA.contact.email}`}
                    className='flex items-center space-x-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-all duration-300 hover:scale-105 hover:shadow-lg group'
                    aria-label={`Send email to ${DATA.contact.email}`}
                  >
                    <svg className='h-6 w-6 transition-transform duration-300 group-hover:scale-110' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                    </svg>
                    <span className='text-lg font-medium hover:underline transition-all duration-300 group-hover:text-primary'>
                      {DATA.contact.email}
                    </span>
                  </a>
                </BlurFade>

                {/* Social Media Links */}
                <BlurFade delay={BLUR_FADE_DELAY * 18}>
                  <div className='flex flex-wrap justify-center gap-4 sm:gap-6'>
                    {Object.entries(DATA.contact.social)
                      .filter(([_, social]) => social.navbar)
                      .map(([name, social], index) => (
                        <BlurFade key={social.name} delay={BLUR_FADE_DELAY * 19 + index * 0.1}>
                          <a
                            href={social.url}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex flex-col items-center space-y-2 p-3 sm:p-4 rounded-lg bg-muted/50 hover:bg-muted transition-all duration-300 hover:scale-110 hover:shadow-lg min-w-[80px] group'
                            aria-label={`Visit our ${social.name} page`}
                          >
                            <social.icon className='h-6 w-6 sm:h-8 sm:w-8 transition-transform duration-300 group-hover:scale-110' aria-hidden='true' />
                            <span className='text-xs sm:text-sm font-medium text-center transition-colors duration-300 group-hover:text-primary'>{social.name}</span>
                          </a>
                        </BlurFade>
                      ))}
                  </div>
                </BlurFade>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
