import BlurFade from '@/components/magicui/blur-fade';
import Markdown from 'react-markdown';

export const metadata = {
  title: 'Política de Privacidade',
  description: 'A nossa Política de Privacidade',
  description1: 'Informações que Recolhemos',
  description2: 'Uso das Informações',
  description3: 'Partilha de Informações',
  description4: 'Proteção das Informações',
  description5: 'Cookies',
  description6: 'Os Seus Direitos',
  description7: 'Contacto',
};

const BLUR_FADE_DELAY = 0.04;

export default async function PrivacyPage() {
  return (
    <section id='privacy' className='mt-4'>
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div className='space-y-2'>
            <div className='inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background'>
              Privacidade
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
          Quando preenche um formulário no nosso site, podemos recolher
          informações pessoais como nome, endereço de e-mail, número de telefone
          e outras informações relevantes. Também podemos recolher informações
          sobre o seu uso do site através de cookies e outras tecnologias de
          rastreamento.
        </Markdown>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <Markdown className='prose mt-4 max-w-full text-pretty text-center font-sans text-base dark:prose-invert'>
          {metadata.description2}
        </Markdown>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4} className='my-4'>
        <Markdown className='prose max-w-full text-pretty text-center font-sans text-base text-muted-foreground dark:prose-invert'>
          As informações que recolhemos são utilizadas para processar e
          responder às suas consultas ou pedidos, melhorar o nosso site e
          serviços, e enviar comunicações promocionais, caso tenha optado por
          recebê-las.
        </Markdown>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <Markdown className='prose mt-4 max-w-full text-pretty text-center font-sans text-base dark:prose-invert'>
          {metadata.description3}
        </Markdown>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4} className='my-4'>
        <Markdown className='prose max-w-full text-pretty text-center font-sans text-base text-muted-foreground dark:prose-invert'>
          Não vendemos, trocamos ou transferimos as suas informações pessoais
          para terceiros, exceto para os nossos parceiros de confiança que nos
          assistem na operação do site, desde que esses parceiros concordem em
          manter essas informações confidenciais.
        </Markdown>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <Markdown className='prose mt-4 max-w-full text-pretty text-center font-sans text-base dark:prose-invert'>
          {metadata.description4}
        </Markdown>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4} className='my-4'>
        <Markdown className='prose max-w-full text-pretty text-center font-sans text-base text-muted-foreground dark:prose-invert'>
          Implementamos medidas de segurança para proteger as suas informações
          pessoais contra acesso, alteração, divulgação ou destruição não
          autorizados. No entanto, nenhum método de transmissão pela Internet ou
          armazenamento eletrónico é 100% seguro, e não podemos garantir
          segurança absoluta.
        </Markdown>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <Markdown className='prose mt-4 max-w-full text-pretty text-center font-sans text-base dark:prose-invert'>
          {metadata.description5}
        </Markdown>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4} className='my-4'>
        <Markdown className='prose max-w-full text-pretty text-center font-sans text-base text-muted-foreground dark:prose-invert'>
          O nosso site utiliza cookies para melhorar a sua experiência de
          navegação. Cookies são pequenos ficheiros de texto armazenados no seu
          dispositivo que nos ajudam a entender como interage com o nosso site.
          Pode optar por desativar os cookies através das definições do seu
          navegador, mas isso pode afetar a funcionalidade do site.
        </Markdown>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <Markdown className='prose mt-4 max-w-full text-pretty text-center font-sans text-base dark:prose-invert'>
          {metadata.description6}
        </Markdown>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4} className='my-4'>
        <Markdown className='prose max-w-full text-pretty text-center font-sans text-base text-muted-foreground dark:prose-invert'>
          Tem o direito de aceder, corrigir, ou solicitar a eliminação das suas
          informações pessoais que mantemos. Para exercer esses direitos, entre
          em contacto connosco através do e-mail fornecido abaixo.
        </Markdown>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <Markdown className='prose mt-4 max-w-full text-pretty text-center font-sans text-base dark:prose-invert'>
          {metadata.description7}
        </Markdown>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4} className='my-4'>
        <Markdown className='prose max-w-full text-pretty text-center font-sans text-base text-muted-foreground dark:prose-invert'>
          Se tiver alguma dúvida sobre esta política de privacidade, entre em
          contacto connosco através do e-mail:
          clubemustangnorteportugal@gmail.com
        </Markdown>
      </BlurFade>
    </section>
  );
}
