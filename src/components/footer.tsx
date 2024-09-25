import { DATA } from '@/data/resume';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from './ui/button';
import Image from 'next/image';
import BlurFade from './magicui/blur-fade';

const BLUR_FADE_DELAY = 2.9;

export default function footer() {
  return (
    <footer>
      <div className='mx-auto w-full max-w-screen-xl xl:pb-2'>
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className='gap-4 p-4 px-8 py-16 sm:pb-16 md:flex md:justify-between'>
            <div className='mb-12 flex flex-col gap-4'>
              <a className='flex items-center gap-2' href='/'>
                <Image
                  src='/logo_no_bk.png'
                  width={100}
                  height={80}
                  className='h-8 w-12 text-primary'
                  alt='Logo'
                />
                <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
                  Mustang Clube do Norte
                </span>
              </a>
              <p className='max-w-xs'>
                Um clube para todos os apaixonados pelo modelo icónico Ford
                Mustang.
              </p>
            </div>
            <div className='grid grid-cols-3 gap-8 sm:gap-10'>
              <div>
                <h2 className='mb-6 text-sm font-medium uppercase tracking-tighter text-gray-900 dark:text-white'>
                  Website
                </h2>
                <ul className='grid gap-2'>
                  <li key='sobre'>
                    <a
                      className='cursor-pointer text-sm font-[450] text-gray-400 duration-200 hover:text-gray-200'
                      href='#about'
                    >
                      Sobre
                    </a>
                  </li>
                  <li key='eventos'>
                    <a
                      className='cursor-pointer text-sm font-[450] text-gray-400 duration-200 hover:text-gray-200'
                      href='#eventos'
                    >
                      Eventos
                    </a>
                  </li>
                  <li key='faq'>
                    <a
                      className='cursor-pointer text-sm font-[450] text-gray-400 duration-200 hover:text-gray-200'
                      href='#faq'
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className='mb-6 text-sm font-medium uppercase tracking-tighter text-gray-900 dark:text-white'>
                  Comunidade
                </h2>
                <ul className='grid gap-2'>
                  <li key='instagram'>
                    <a
                      className='cursor-pointer text-sm font-[450] text-gray-400 duration-200 hover:text-gray-200'
                      target='_blank'
                      href='https://www.instagram.com/mustangclubedonorte?igsh=MTRxcXE3aHEwcnlxdQ=='
                    >
                      Instagram
                    </a>
                  </li>
                  <li key='tiktok'>
                    <a
                      className='cursor-pointer text-sm font-[450] text-gray-400 duration-200 hover:text-gray-200'
                      target='_blank'
                      href='https://www.tiktok.com/@mustangclubedonorte'
                    >
                      Tiktok
                    </a>
                  </li>
                  <li key='email'>
                    <a
                      className='cursor-pointer text-sm font-[450] text-gray-400 duration-200 hover:text-gray-200'
                      target='_blank'
                      href='mailto:mustangclubedonorte@gamil.com'
                    >
                      Email
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className='mb-6 text-sm font-medium uppercase tracking-tighter text-gray-900 dark:text-white'>
                  Legal
                </h2>
                <ul className='grid gap-2'>
                  <li key='termos'>
                    <a
                      className='cursor-pointer text-sm font-[450] text-gray-400 duration-200 hover:text-gray-200'
                      href='/terms'
                    >
                      Termos
                    </a>
                  </li>
                  <li key='privacidade'>
                    <a
                      className='cursor-pointer text-sm font-[450] text-gray-400 duration-200 hover:text-gray-200'
                      href='/privacy'
                    >
                      Privacidade
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className='mb-6 flex flex-col items-center gap-2 rounded-md border-neutral-700/20 px-8 sm:flex-row sm:justify-between'>
            <div className='space-x-5 sm:mt-0 sm:justify-center'>
              {Object.entries(DATA.contact.social)
                .filter(([_, social]) => social.navbar)
                .map(([name, social]) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    target='_blank'
                    className={cn(
                      buttonVariants({ variant: 'ghost', size: 'icon' }),
                      'size-12'
                    )}
                  >
                    <social.icon className='size-4' />
                  </Link>
                ))}
            </div>
            <span className='text-center text-sm text-gray-500 dark:text-gray-400'>
              Copyright © 2024
              <a className='cursor-pointer' href='/'>
                {' '}
                Mustang Clube do Norte
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </BlurFade>
      </div>
    </footer>
  );
}
