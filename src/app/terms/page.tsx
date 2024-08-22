import BlurFade from '@/components/magicui/blur-fade';
import Markdown from 'react-markdown';

export const metadata = {
  title: 'Termos e Condições',
  description: 'Os nossos Termos e Condições',
  description1: 'Aceitação dos Termos',
  description2: 'Utilização do Site',
  description3: 'Modificações aos Termos',
  description4: 'Direitos de Propriedade Intelectual',
  description5: 'Links para Sites de Terceiros',
};

const BLUR_FADE_DELAY = 0.04;

export default async function TermsPage() {
  return (
    <section id='terms' className='mt-4'>
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div className='space-y-2'>
            <div className='inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background'>
              Termos
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
        <Markdown className='prose mt-4 max-w-full text-pretty text-center font-sans text-base dark:prose-invert'>
          {metadata.description1}
        </Markdown>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4} className='my-4'>
        <Markdown className='prose max-w-full text-pretty text-center font-sans text-base text-muted-foreground dark:prose-invert'>
          Ao aceder e utilizar este site, concorda em cumprir e estar vinculado
          aos seguintes termos e condições. Se não concordar com alguma parte
          destes termos, por favor, não utilize o site.
        </Markdown>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <Markdown className='prose mt-4 max-w-full text-pretty text-center font-sans text-base dark:prose-invert'>
          {metadata.description2}
        </Markdown>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4} className='my-4'>
        <Markdown className='prose max-w-full text-pretty text-center font-sans text-base text-muted-foreground dark:prose-invert'>
          Este site é oferecido para uso pessoal e não comercial. Concorda em
          não utilizar este site para qualquer propósito ilegal ou proibido por
          estes termos e condições.
        </Markdown>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <Markdown className='prose mt-4 max-w-full text-pretty text-center font-sans text-base dark:prose-invert'>
          {metadata.description3}
        </Markdown>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4} className='my-4'>
        <Markdown className='prose max-w-full text-pretty text-center font-sans text-base text-muted-foreground dark:prose-invert'>
          Reservamo-nos o direito de alterar estes termos a qualquer momento.
          Quaisquer alterações serão publicadas nesta página e entrarão em vigor
          imediatamente após a publicação. Recomendamos que reveja esta página
          regularmente.
        </Markdown>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <Markdown className='prose mt-4 max-w-full text-pretty text-center font-sans text-base dark:prose-invert'>
          {metadata.description4}
        </Markdown>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4} className='my-4'>
        <Markdown className='prose max-w-full text-pretty text-center font-sans text-base text-muted-foreground dark:prose-invert'>
          Todo o conteúdo deste site, incluindo textos, gráficos, logótipos,
          ícones e imagens, é da nossa propriedade ou dos nossos licenciadores e
          está protegido por leis de direitos de autor e outras leis de
          propriedade intelectual.
        </Markdown>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <Markdown className='prose mt-4 max-w-full text-pretty text-center font-sans text-base dark:prose-invert'>
          {metadata.description5}
        </Markdown>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4} className='my-4'>
        <Markdown className='prose max-w-full text-pretty text-center font-sans text-base text-muted-foreground dark:prose-invert'>
          ste site pode conter links para outros sites que não são operados por
          nós. Não temos controlo sobre o conteúdo desses sites e não aceitamos
          responsabilidade por qualquer perda ou dano que possa surgir do uso
          dos mesmos.
        </Markdown>
      </BlurFade>
    </section>
  );
}
