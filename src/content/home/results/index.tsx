'use client';

import { FakeApiResults } from '@/@Types/fakeApiResults';
import { CallResults } from '@/components/icons/results/callResults';
import { Itr } from '@/components/icons/results/itr';
import { Mockup } from '@/components/icons/results/mockup';
import { ReleaseDoc } from '@/components/icons/results/releaseDoc';
import { SpreadSheet } from '@/components/icons/results/spreadsheet';
import { Slide } from '@/components/Slide';
import { NavigationNext } from '@/components/Slide/navigationNext';
import { NavigationPrev } from '@/components/Slide/navigationPrev';
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
    <div className='max-w-[500px]'>
      <h1>Central de Resultados</h1>

      <Slide
        modules={[A11y, Scrollbar, Navigation]}
        navigation={{
          prevEl: '.navigation-prev-results',
          nextEl: '.navigation-next-results',
        }}
        spaceBetween={20}
        slidesPerView={1}
        style={{ flex: 1, width: '100%' }}
      >
        {fakeAPI.map((data) => (
          <SwiperSlide key={data.id}>
            <Result data={data} />
          </SwiperSlide>
        ))}
      </Slide>
    </div>
  );
}
