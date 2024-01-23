import SwiperProps from 'swiper';

import { Arrow } from '../icons/arrow';

interface NavigationPrevProps {
  className?: string;
  swiper: SwiperProps;
}

export function NavigationPrev({
  swiper,
  className = '',
}: NavigationPrevProps) {
  return (
    <div
      className={`transition cursor-pointer hover:brightness-125 ${className}`}
      onClick={() => swiper?.slidePrev()}
    >
      <Arrow className='size-6 text-secundary-500' />
    </div>
  );
}
