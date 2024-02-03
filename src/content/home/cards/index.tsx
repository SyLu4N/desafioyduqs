'use client';

import { useState } from 'react';

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
  const [isLastSlide, setIsLastSlide] = useState(false);

  function verifySwiper(swiper: Swiper) {
    if (!swiper) return;

    if (swiper.isEnd && swiper.isBeginning) return setIsLastSlide(true);

    return setIsLastSlide(false);
  }

  return (
    <>
      <Slide
        modules={[A11y, Scrollbar, Pagination, Navigation]}
        pagination={{ clickable: true, el: '.swiper-pagination' }}
        navigation={{
          prevEl: '.navigation-prev-cards',
          nextEl: '.navigation-next-cards',
        }}
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
          <div className="flex items-center justify-center gap-8 p-2 py-4">
            <NavigationPrev id="navigation-prev-cards" />

            <PaginationSlide className="text-primary-500" />

            <NavigationNext id="navigation-next-cards" />
          </div>
        )}
      </Slide>
    </>
  );
}
