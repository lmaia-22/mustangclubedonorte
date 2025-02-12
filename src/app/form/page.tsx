import BlurFade from '@/components/magicui/blur-fade';
import { ProfileForm } from '@/components/memberForm';

const BLUR_FADE_DELAY = 0.04;

export default async function FormPage() {
  return (
    <section id='form'>
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div className='space-y-2'>
            <div className='inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background'>
              Formulário
            </div>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
              Junta-te a nós
            </h2>
            <p className='text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
              Preenche o formulário para sabermos mais sobre ti
            </p>
          </div>
        </div>
      </BlurFade>
      <div className="mt-8">
        <ProfileForm />
      </div>
    </section>
  );
}
