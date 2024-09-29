'use client';

import { HackathonCard } from '@/components/hackathon-card';
import BlurFade from '@/components/magicui/blur-fade';
import BlurFadeText from '@/components/magicui/blur-fade-text';
import { OrbitingMetrics } from '@/components/orbiting_metrics';
import { ResumeCard } from '@/components/resume-card';
import { TeamMemberCard } from '@/components/team-card';
import { Badge } from '@/components/ui/badge';
import { DATA } from '@/data/resume';
import Markdown from 'react-markdown';
import { MarqueeDemo } from '@/components/portfolio';
import { ProfileForm } from '@/components/contact';
import { BorderBeam } from '@/components/magicui/border-beam';
import SpotifyPlayer from '@/components/spotify';

const BLUR_FADE_DELAY = 0.8;

export default function Page() {
  return (
    <main className='flex min-h-[100dvh] flex-col space-y-10'>
      <section id='hero'>
        <div className='mx-auto w-full space-y-8'>
          <div className='flex flex-col items-center justify-between md:flex-row md:gap-2'>
            <div className='flex flex-1 flex-col items-center justify-center space-y-1.5 md:text-left'>
              <h1 className='mb-4 text-center text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>{DATA.name}</h1>
              <BlurFadeText
                className='max-w-[600px] text-center md:text-xl'
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
          </div>
        </div>
      </section>
      <section id='about'>
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className='flex flex-col items-center justify-center space-y-4 text-center'>
            <div className='space-y-2'>
              <div className='inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background'>
                Sobre
              </div>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                Quem Somos
              </h2>
              <p className='text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                Como nascemos e como vamos viver
              </p>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className='prose mt-4 max-w-full text-pretty text-center font-sans text-base text-muted-foreground dark:prose-invert'>
            {DATA.summary}
          </Markdown>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className='my-4'>
          <Markdown className='prose max-w-full text-pretty text-center font-sans text-base text-muted-foreground dark:prose-invert'>
            {DATA.summary1}
          </Markdown>
        </BlurFade>
      </section>
      <section id='misson'>
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className='flex flex-col items-center justify-center space-y-4 text-center'>
            <div className='space-y-2'>
              <div className='inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background'>
                Missão
              </div>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                Principais Objetivos
              </h2>
              <p className='text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                Como em todos os bons projetos devem existir objectivos e nós temos
                estes.
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
              {DATA.mission1}
            </li>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <li
              key='mission2'
              className='w-full max-w-[500px] text-pretty text-center font-sans text-base text-muted-foreground'
            >
              {DATA.mission2}
            </li>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <li
              key='mission3'
              className='w-full max-w-[500px] text-pretty text-center font-sans text-base text-muted-foreground'
            >
              {DATA.mission3}
            </li>
          </BlurFade>
        </ul>
      </section>
      <section id='metrics'>
        <div className='flex min-h-0 flex-col gap-y-3'>
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <div className='inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background'>
                  Clube
                </div>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                  Métricas
                </h2>
                <p className='text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  {DATA.metrics}
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
                <div className='inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background'>
                  Conquistas
                </div>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                  Cidades Conquistadas
                </h2>
                <p className='text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Devagar se vai ao longe, vamos conquistar Portugal inteiro!
                </p>
              </div>
            </div>
          </BlurFade>
          <div className='mx-auto flex flex-wrap gap-2'>
            {DATA.skills.map((skill, id) => (
              <BlurFade key={id} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
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
                <div className='inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background'>
                  Portfolio
                </div>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                  Espreitem as nossas melhores &apos;chapas&apos;!
                </h2>
                <p className='text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  As fotografias dos passeios e eventos tiradas pelo nosso fotógrafo
                  do Clube e também alguns membros.
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
      <section id='eventos'>
        <div className='w-full space-y-12 py-4'>
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <div className='inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background'>
                  Passeios anteriores
                </div>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                  O nosso Histórico
                </h2>
                <p className='text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Os passeios efetuados desde a criação do Clube.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className='mb-4 ml-4 divide-y divide-dashed border-l'>
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                    postLink={project.postLink}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      <section id='faq'>
        <div className='w-full space-y-12 py-4'>
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <div className='inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background'>
                  FAQ
                </div>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                  Questões mais frequentes
                </h2>
                <p className='text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Como tirar as dúvidas de forma rápida.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className='container mx-auto px-4'>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
              {DATA.faq.map((work, id) => (
                <BlurFade
                  key={work.question}
                  delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                >
                  <div className='flex h-full w-full'>
                    <ResumeCard
                      key={work.question}
                      title={work.question}
                      description={work.answer}
                    />
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id='spotify'>
        <div className='relative w-full text-center'>
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className='space-y-3'>
              <div className='inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background'>
                Spotify
              </div>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                A playlist favorita dos nossos carros
              </h2>
              <p className='mx-auto mb-4 max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                Não se esqueça de adicionar aos favoritos
              </p>
              <div className='relative mx-auto max-w-md rounded-lg'>
                <SpotifyPlayer embedId="playlist/0RJqpCxLZaSthsoEqJYZkh?utm_source=generator&theme=0" />
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id='contact'>
        <div className='relative w-full text-center'>
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className='space-y-3'>
              <div className='inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background'>
                Contactos
              </div>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                Entre em contacto
              </h2>
              <p className='mx-auto mb-4 max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                Se quer saber mais sobre o clube ou entrar nele preencha o formulário abaixo. 
              </p>
              <div className='relative mx-auto max-w-md rounded-lg'>
                <BorderBeam />
                <ProfileForm />
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
