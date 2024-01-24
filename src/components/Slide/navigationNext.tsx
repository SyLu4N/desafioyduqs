import SwiperProps from 'swiper';

import { Arrow } from '../icons/arrow';

interface NavigationNextProps {
  swiper: SwiperProps;
  className?: string;
  icon?: string;
}

export function NavigationNext({
  swiper,
  className = 'text-secondary-500',
  icon = '',
}: NavigationNextProps) {
  return (
    <div
      className={`transition cursor-pointer hover:brightness-125 ${className}`}
      onClick={() => swiper?.slideNext()}
    >
      <Arrow className={`rotate-180 size-6  ${icon}`} />
    </div>
  );
}
