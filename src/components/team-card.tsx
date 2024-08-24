import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { config } from '@fortawesome/fontawesome-svg-core';
import { Url } from 'next/dist/shared/lib/router/router';
import { BorderBeam } from './magicui/border-beam';
config.autoAddCss = false;

interface TeamMemberCardProps {
  name: string;
  role: string;
  picture: string;
  social: Url;
  className?: string;
}

export function TeamMemberCard({
  name,
  role,
  picture,
  social,
  className,
}: TeamMemberCardProps) {
  return (
    <div className='rounded-lg border'>
      <BorderBeam size={250} duration={12} delay={9} />
      <Card
        className={cn(
          'flex h-full flex-col border transition-all duration-300 ease-out hover:shadow-lg',
          className
        )}
      >
        <div className='flex flex-col items-center justify-center p-4'>
          <Image
            src={picture}
            alt={name}
            width={150}
            height={150}
            className='h-auto w-auto object-cover object-center'
          />
          <CardHeader className='mt-4 text-center'>
            <CardTitle className='text-lg font-semibold'>{name}</CardTitle>
            <p className='text-sm text-muted-foreground'>{role}</p>
          </CardHeader>
        </div>
        <CardFooter className='flex justify-center pb-4'>
          <div className='flex gap-3'>
            <Link href={social} target='_blank'>
              <Badge variant='outline' className='size-12 border-none'>
                <FontAwesomeIcon icon={faInstagram} size='lg' />
              </Badge>
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
