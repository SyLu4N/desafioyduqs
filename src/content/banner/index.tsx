'use client';
import { useState } from 'react';

import { Slide } from '@/components/Slide';
import { NavigationSlide } from '@/components/Slide/navigationSlide';
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
    <section className="bg-primary-500">
      <Slide>
        <Slide
          modules={[A11y, Scrollbar, Pagination]}
          onSwiper={(swiper) => setSwiper(swiper)}
          pagination={{ clickable: true }}
          width={1038}
          height={500}
          slidesPerView={1}
        >
          {imgs?.map((img: string) => (
            <SwiperSlide key={img} style={{}}>
              <div className="flex w-full justify-end">
                <div className="w-[1032px] h-[500px] overflow-hidden border">
                  <img
                    src={img}
                    alt="Banner de apresentação"
                    className="w-[1038px] h-[200px]"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Slide>
      </Slide>
    </section>
  );
}
