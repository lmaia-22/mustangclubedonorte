import BlurFade from '@/components/magicui/blur-fade';
import TeamGrid from '@/components/team-grid';

const BLUR_FADE_DELAY = 0.04;

export default async function TeamPage() {
  return (
    <section id='members'>
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div className='space-y-2'>
            <div className='inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background'>
              Membros
            </div>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
              Os nossos grandes cavaleiros/as
            </h2>
            <p className='text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
              Vejam bem estas beldades
            </p>
          </div>
        </div>
      </BlurFade>
      <TeamGrid />
    </section>
  );
}
