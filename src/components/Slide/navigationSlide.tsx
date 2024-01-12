import { HTMLAttributes, useRef } from 'react';

import Img from 'next/image';

import { ArrowLeft } from '../icons/arrowLeft';

interface NavigationSlideProps extends HTMLAttributes<HTMLDivElement> {
  swiper: any;
  className?: string;
  classNameLeft?: string;
  classNameRight?: string;
  boxSize?: string | number;
}

export function NavigationSlide({
  swiper,
  className = '',
  classNameLeft = '',
  classNameRight = '',
  boxSize = 18,
  ...rest
}: NavigationSlideProps) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className={`border-red-50 flex gap-4 ${className}`} {...rest}>
      <div
        className={`flex prev button transition cursor-pointer hover:text-black-600 ${classNameLeft}`}
        ref={prevRef}
        onClick={() => swiper?.slidePrev()}
      >
        <ArrowLeft className="text-red-500" />
      </div>

      <div
        className={`flex next button transition cursor-pointer hover:bg-primary-400 rounded-md py-[1px] pl-[2px] ${classNameRight}`}
        ref={nextRef}
        onClick={() => swiper?.slideNext()}
      >
        <Img
          src="/icons/right.svg"
          alt="Passar slide para direita"
          width={Number(boxSize)}
          height={Number(boxSize)}
        />
      </div>
    </div>
  );
}
