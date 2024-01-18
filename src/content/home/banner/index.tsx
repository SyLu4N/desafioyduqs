'use client';

import { useState } from 'react';

import { Slide } from '@/components/Slide';
import { NavigationSlide } from '@/components/Slide/navigationSlide';
import { PaginationSlide } from '@/components/Slide/paginationSlide';
import { Textura } from '@/components/textura';
import Img from 'next/image';
import { A11y, Pagination, Scrollbar } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';

const imgs = [
  '/assets/banner-img.png',
  '/assets/banner-img-2.jpg',
  '/assets/banner-img-3.jpg',
];

export function Banner() {
  const [swiper, setSwiper] = useState<any>(null);

  return (
    <section className="bg-primary-500 overflow-hidden lg:pl-[75px] lg:pt-[24px]">
      <div className="m-auto max-w-[1032px] lg:min-w-[1365px] relative">
        <Slide
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
          }}
          modules={[A11y, Scrollbar, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          onSwiper={(swiper) => setSwiper(swiper)}
        >
          {imgs?.map((img: string, index) => (
            <SwiperSlide key={img + index}>
              <div className="flex w-full justify-end items-center relative">
                <div className="absolute ml-auto items-center flex flex-col gap-8 left-0 mb-24 z-[1] lg:items-start">
                  <h1 className="text-white leading-[40px] text-shadow-sm text-center">
                    Divulgação de Resultados
                  </h1>

                  <p className="text-letter-500 font-bold text-[30px] leading-[30px]">
                    3° TRI 2021
                  </p>

                  <div className="flex items-center gap-24">
                    <button className="border border-white py-1 text-white rounded-sm w-[110px]">
                      Saiba mais
                    </button>

                    <NavigationSlide
                      swiper={swiper}
                      className="hidden lg:flex"
                    />
                  </div>
                </div>

                <div className="inline-flex justify-center overflow-hidden relative h-[500px] w-full lg:justify-end">
                  <Img
                    width={0}
                    height={0}
                    src={img}
                    alt="Banner de apresentação"
                    className="absolute min-w-[700px] h-[500px] border-secundary-500 border-b-[3px] lg:min-w-[1032px] "
                  />
                </div>

                <Textura className="left-0 bottom-[-3%] z-[1] lg:bottom-[-7.2%] lg:left-[8%]" />
              </div>
            </SwiperSlide>
          ))}

          <PaginationSlide
            classNameContainer="lg:right-[5%] lg:top-[50%] lg:w-auto lg:bottom-auto"
            className="lg:flex-col"
          />
        </Slide>
      </div>
    </section>
  );
}
