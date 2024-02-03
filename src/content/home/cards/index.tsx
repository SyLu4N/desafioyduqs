'use client';

import { useEffect, useRef, useState } from 'react';

import { Slide } from '@/components/slide';
import { NavigationNext } from '@/components/slide/navigationNext';
import { NavigationPrev } from '@/components/slide/navigationPrev';
import { PaginationSlide } from '@/components/slide/paginationSlide';
import { AboutUs } from '@/icons/cards/about-us';
import { Book } from '@/icons/cards/book';
import { Strategy } from '@/icons/cards/strategy';
import { World } from '@/icons/cards/world';
import Swiper from 'swiper';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
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
      '.swiper-pagination-bullet',
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
        modules={[A11y, Scrollbar, Pagination, Navigation]}
        pagination={{ clickable: true, el: '.swiper-pagination' }}
        navigation={{
          prevEl: '.navigation-prev-cards',
          nextEl: '.navigation-next-cards',
        }}
        onSwiper={(swiper) => setSwiper(swiper)}
        onResize={verifySwiper}
        slidesPerView={1.1}
        breakpoints={{
          450: { slidesPerView: 1.5 },
          600: { slidesPerView: 2, slidesPerGroup: 2 },
          820: { slidesPerView: 2.5 },
          950: { slidesPerView: 3 },
          1220: { slidesPerView: 3.5 },
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
            className="flex items-center justify-center gap-8 p-2 py-4"
            ref={bulletRef}
          >
            <NavigationPrev id="navigation-prev-cards" />

            <PaginationSlide />

            <NavigationNext id="navigation-next-cards" />
          </div>
        )}
      </Slide>
    </>
  );
}
