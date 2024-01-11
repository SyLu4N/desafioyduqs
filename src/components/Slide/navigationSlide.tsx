import { useRef } from 'react';

import Img from 'next/image';

interface NavigationSlideProps {
  swiper: any;
  spacingX?: string;
  spacingY?: string;
  classNameLeft?: string;
  classNameRight?: string;
}

export function NavigationSlide({
  swiper,
  classNameLeft = '',
  classNameRight = '',
}: NavigationSlideProps) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="z-10 border-red-50 border">
      <div
        className={`flex prev button p-[2px 6px] w-[12px] h-[20px] ${classNameLeft} overflow-hidden`}
        ref={prevRef}
        onClick={() => swiper?.slidePrev()}
      >
        <Img
          src="/icons/left.png"
          alt="Passar slide para esquerda"
          width={12}
          height={12}
        />
      </div>

      <div
        className={`flex next button p-[2px 6px] w-[12px] h-[20px] ${classNameRight}`}
        ref={nextRef}
        onClick={() => swiper?.slideNext()}
      >
        <Img
          src="/icons/right.png"
          alt="Passar slide para direita"
          width={12}
          height={12}
        />
      </div>
    </div>
  );
}
