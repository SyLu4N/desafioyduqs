import SwiperProps from 'swiper';

import { Arrow } from '../icons/arrow';

interface NavigationNextProps {
  swiper: SwiperProps;
  className?: string;
}

export function NavigationNext({
  swiper,
  className = '',
}: NavigationNextProps) {
  return (
    <div
      className={`transition cursor-pointer hover:brightness-125 ${className}`}
      onClick={() => swiper?.slideNext()}
    >
      <Arrow className='rotate-180 size-6 text-secundary-500' />
    </div>
  );
}
