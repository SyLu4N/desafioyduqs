'use client';

import { useEffect, useRef, useState } from 'react';

import { AboutUs } from '@/components/icons/about-us';
import { Book } from '@/components/icons/book';
import { Strategy } from '@/components/icons/strategy';
import { World } from '@/components/icons/world';
import { Slide } from '@/components/Slide';
import { NavigationSlide } from '@/components/Slide/navigationSlide';
import { PaginationSlide } from '@/components/Slide/paginationSlide';
import Swiper from 'swiper';
import { A11y, Pagination, Scrollbar } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';

import { Card } from './card';

export function Cards() {
  const [swiper, setSwiper] = useState<any>(null);
  const [isLastSlide, setIsLastSlide] = useState(false);

  function verifySwiper(mySwiper: Swiper) {
    if (!mySwiper) return;

    if (mySwiper.isEnd && mySwiper.isBeginning) return setIsLastSlide(true);

    return setIsLastSlide(false);
  }

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

  useEffect(() => {
    verifySwiper(swiper);
  }, [swiper]);

  return (
    <>
      <Slide
        pagination={{ clickable: true, el: '.swiper-pagination' }}
        modules={[A11y, Scrollbar, Pagination]}
        onSwiper={(swiper) => setSwiper(swiper)}
        onResize={verifySwiper}
        slidesPerView={1.1}
        breakpoints={{
          450: { slidesPerView: 1.5 },

          600: { slidesPerView: 2 },

          820: { slidesPerView: 2 },

          950: { slidesPerView: 2 },

          1220: { slidesPerView: 2 },

          1440: { slidesPerView: 4 },
        }}
      >
        <SwiperSlide>
          <Card
            src="/assets/cards-4.jpg"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum enim"
            Icon={Book}
            title="Nossas unidades de negocio"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Card
            src="/assets/cards.jpg"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum enim"
            Icon={Strategy}
            title="Nossa estratégia"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Card
            src="/assets/cards-3.jpg"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum enim"
            Icon={World}
            title="Nosso impacto (ESG)"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Card
            src="/assets/cards-2.jpg"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum enim"
            Icon={AboutUs}
            title="Quem Somos"
          />
        </SwiperSlide>

        {!isLastSlide && (
          <div
            className="flex justify-center items-center relative p-4"
            ref={bulletRef}
          >
            <NavigationSlide
              swiper={swiper}
              className=" border-black justify-around w-full"
            />

            <div className="absolute flex justify-center">
              <PaginationSlide
                classNameContainer="!static max-w-[80px] m-auto"
                className="mb-0"
              />
            </div>
          </div>
        )}
      </Slide>
    </>
  );
}
