import { HTMLAttributes, useRef } from 'react';

import { Arrow } from '../icons/arrow';

interface NavigationSlideProps extends HTMLAttributes<HTMLDivElement> {
  swiper: any;
  className?: string;
  classNameLeft?: string;
  classNameRight?: string;
}

export function NavigationSlide({
  swiper,
  className = '',
  classNameLeft = '',
  classNameRight = '',
  ...rest
}: NavigationSlideProps) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className={`border-red-50 flex gap-4 ${className}`} {...rest}>
      <div
        className={`transition cursor-pointer hover:brightness-125 ${classNameLeft}`}
        ref={prevRef}
        onClick={() => swiper?.slidePrev()}
      >
        <Arrow className="size-6" />
      </div>

      <div
        className={`transition cursor-pointer hover:brightness-125 ${classNameRight}`}
        ref={nextRef}
        onClick={() => swiper?.slideNext()}
      >
        <Arrow className="rotate-180 size-6" />
      </div>
    </div>
  );
}
