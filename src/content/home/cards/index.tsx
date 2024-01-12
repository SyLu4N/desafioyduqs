'use client';

import { useEffect, useRef, useState } from 'react';

import { Slide } from '@/components/Slide';
import { NavigationSlide } from '@/components/Slide/navigationSlide';
import { PaginationSlide } from '@/components/Slide/paginationSlide';
import { A11y, Pagination, Scrollbar } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';

const cards = [
  { card: 'cards-2.png', alt: 'Card Nossa estratégia' },
  { card: 'cards.png', alt: 'Card nossas unidades de negocio' },
  { card: 'cards-3.png', alt: 'Card nosso impacto' },
  { card: 'cards-4.png', alt: 'Card quem somos' },
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
    <>
      <Slide
        pagination={{ clickable: true, el: '.swiper-pagination' }}
        modules={[A11y, Scrollbar, Pagination]}
        onSwiper={(swiper) => setSwiper(swiper)}
        breakpoints={{
          300: { slidesPerView: 1.1 },

          540: { slidesPerView: 2 },

          650: { slidesPerView: 2.5 },

          850: { slidesPerView: 3 },

          900: { slidesPerView: 4 },
        }}
      >
        {cards?.map((card) => (
          <SwiperSlide key={card.card}>
            <img
              src={`/assets/${card.card}`}
              alt="Banner de apresentação"
              className="w-[1032px] h-[450px] lg:h-[500px]"
            />
          </SwiperSlide>
        ))}

        <div className="relative p-4" ref={bulletRef}>
          <NavigationSlide
            swiper={swiper}
            className=" border-black justify-around"
            boxSize={22}
          />

          <PaginationSlide classNameContainer="bottom-[-32%] left-[1%]" />
        </div>
      </Slide>
    </>
  );
}
