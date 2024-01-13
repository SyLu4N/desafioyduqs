'use client';

import { useEffect, useRef, useState } from 'react';

import { Slide } from '@/components/Slide';
import { NavigationSlide } from '@/components/Slide/navigationSlide';
import { PaginationSlide } from '@/components/Slide/paginationSlide';
import { A11y, Pagination, Scrollbar } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';

const cards = [
  { card: 'cards-2.png', alt: 'Card Nossa estratégia' },
  { card: 'banner-img.png', alt: 'Card nossas unidades de negocio' },
  { card: 'cards-3.png', alt: 'Card nosso impacto' },
  { card: 'banner-img-3.png', alt: 'Card quem somos' },
];

export function Cards() {
  const [swiper, setSwiper] = useState<any>(null);
  const bulletRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bulletRef.current) return;

    const bullets = bulletRef.current.querySelectorAll(
      '.swiper-pagination-bullet'
    );
    if (!bullets) return;

    bullets.forEach((bullet) => {
      bullet?.classList?.add('!bg-primary-500', 'before:border-primary-500');
    });
  }, []);

  return (
    <div className="max-w-[1440px]">
      <Slide
        pagination={{ clickable: true, el: '.swiper-pagination' }}
        modules={[A11y, Scrollbar, Pagination]}
        onSwiper={(swiper) => setSwiper(swiper)}
        slidesPerView={1.1}
        breakpoints={{
          450: { slidesPerView: 1.5 },

          600: { slidesPerView: 2.1 },

          820: { slidesPerView: 2.5 },

          950: { slidesPerView: 3.1 },

          1220: { slidesPerView: 3.5 },

          1440: { slidesPerView: 4 },
        }}
      >
        {cards?.map((card) => (
          <SwiperSlide key={card.card}>
            <div className="relative flex justify-center overflow-hidden h-[450px]">
              <img
                src={`/assets/${card.card}`}
                alt="Banner de apresentação"
                className="absolute object-cover w-full h-full"
              />
            </div>
          </SwiperSlide>
        ))}

        <div className="relative p-4" ref={bulletRef}>
          <NavigationSlide
            swiper={swiper}
            className=" border-black justify-around"
          />

          <div className="absolute flex justify-center border-blue-50">
            <PaginationSlide classNameContainer="!static max-w-[80px] m-auto" />
          </div>
        </div>
      </Slide>
    </div>
  );
}
