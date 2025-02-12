import OrbitingCircles from '@/components/magicui/orbiting-circles';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DATA } from '@/data/resume';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faUserGroup,
  faCalendarDays,
  faRoad,
} from '@fortawesome/free-solid-svg-icons';
export function OrbitingMetrics() {
  return (
    <div className='relative flex h-[500px] w-full flex-col items-center justify-center rounded-lg bg-background'>
      <span className='pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black'>
        <Avatar className='h-24 w-32'>
          <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
          <AvatarFallback>{DATA.initials}</AvatarFallback>
        </Avatar>
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className='size-[0px] border-none bg-transparent'
        radius={110}
        duration={20}
        delay={20}
      >
        <div className='items-center justify-center'>
          <FontAwesomeIcon icon={faCalendarDays} />
          <p className='text-center font-sans text-xs'>9 Passeios</p>
        </div>
      </OrbitingCircles>
      <OrbitingCircles
        className='size-[0px] border-none bg-transparent'
        radius={110}
        duration={20}
        delay={10}
      >
        <div className='items-center justify-center'>
          <FontAwesomeIcon icon={faRoad} />
          <p className='text-center font-sans text-xs'>1020 Quilómetros</p>
        </div>
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className='size-[0px] border-none bg-transparent'
        radius={200}
        duration={20}
        reverse
      >
        <div className='items-center justify-center'>
          <FontAwesomeIcon icon={faClock} />
          <p className='text-center font-sans text-xs'>160 Horas</p>
        </div>
      </OrbitingCircles>
      <OrbitingCircles
        className='size-[0px] border-none bg-transparent'
        radius={200}
        duration={20}
        delay={20}
        reverse
      >
        <div className='items-center justify-center'>
          <FontAwesomeIcon icon={faUserGroup} />
          <p className='text-center font-sans text-xs'>56 Membros</p>
        </div>
      </OrbitingCircles>
    </div>
  );
}
