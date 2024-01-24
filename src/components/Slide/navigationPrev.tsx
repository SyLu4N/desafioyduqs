import SwiperProps from 'swiper';

import { Arrow } from '../icons/arrow';

interface NavigationPrevProps {
  className?: string;
  swiper: SwiperProps;
  icon?: string;
}

export function NavigationPrev({
  swiper,
  icon = 'text-secondary-500',
  className = '',
}: NavigationPrevProps) {
  const isBeginning = swiper?.isBeginning || false;
  console.log(isBeginning);

  return (
    <div
      className={`transition cursor-pointer ${className}
      ${isBeginning ? 'opacity-50' : 'opacity-100 hover:brightness-125'}`}
      onClick={() => swiper?.slidePrev()}
    >
      <Arrow className={`size-6 ${icon}`} />
    </div>
  );
}
