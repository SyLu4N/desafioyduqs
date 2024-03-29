'use client';

import { FakeApiResults } from '@/@types/fakeApiResults';
import { Slide } from '@/components/slide';
import Link from 'next/link';
import { A11y, Navigation, Scrollbar } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';

import { Result } from './result';

const fakeAPI: FakeApiResults[] = [
  {
    id: 1,
    timestre: '1',
    ano: '2021',
    IR: true,
    AR: true,
    RR: true,
    PA: true,
    CR: true,
  },

  {
    id: 2,
    timestre: '2',
    ano: '2021',
    IR: true,
    AR: true,
    RR: true,
    PA: false,
    CR: true,
  },

  {
    id: 3,
    timestre: '3',
    ano: '2021',
    IR: true,
    AR: true,
    RR: false,
    PA: true,
    CR: false,
  },
];

export function Results() {
  return (
    <div className="flex w-full flex-col gap-4 overflow-hidden lg:gap-8 lg:pr-[42px]">
      <h2 className="text-[29px] lg:text-[40px]">Central de Resultados</h2>

      <div className="w-full">
        <Slide
          modules={[A11y, Scrollbar, Navigation]}
          navigation={{
            prevEl: '.navigation-prev-results',
            nextEl: '.navigation-next-results',
          }}
          spaceBetween={20}
          slidesPerView={1}
        >
          {fakeAPI.map((data) => (
            <SwiperSlide key={data.id}>
              <Result data={data} />
            </SwiperSlide>
          ))}
        </Slide>
      </div>

      <div>
        <Link
          href=""
          className="text-primary-500 underline"
          aria-label="Ver todos resultados"
        >
          Ver todos os resultados
        </Link>
      </div>
    </div>
  );
}
