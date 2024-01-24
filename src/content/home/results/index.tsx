'use client';

import { useState } from 'react';

import { CallResults } from '@/components/icons/results/callResults';
import { Itr } from '@/components/icons/results/itr';
import { Mockup } from '@/components/icons/results/mockup';
import { ReleaseDoc } from '@/components/icons/results/releaseDoc';
import { SpreadSheet } from '@/components/icons/results/spreadsheet';
import { Slide } from '@/components/Slide';
import { NavigationNext } from '@/components/Slide/navigationNext';
import { NavigationPrev } from '@/components/Slide/navigationPrev';
import { A11y, Pagination, Scrollbar } from 'swiper/modules';

export function Results() {
  const [swiper, setSwiper] = useState<any>(null);

  return (
    <div>
      <h1>Central de Resultados</h1>

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
        <div className='flex gap-5 items-center justify-center'>
          <NavigationPrev swiper={swiper} icon='text-primary-500 !size-4' />

          <h2 className='font-extrabold text-[22px]'>
            1T<span className='font-normal'>21</span>
          </h2>

          <NavigationNext swiper={swiper} icon='text-primary-500 !size-4' />
        </div>

        <div className='grid grid-cols-3 grid-flow-row gap-[30px] justify-center items-center'>
          <div className='flex flex-col items-center'>
            <Itr className='text-secondary-500' />
            <p>ITR</p>
          </div>

          <div className='flex flex-col items-center'>
            <Mockup className='text-secondary-500' />
            <p>Apresentação de Resultados</p>
          </div>

          <div className='flex flex-col items-center'>
            <ReleaseDoc className='text-secondary-500' />
            <p>Release de Resultados</p>
          </div>

          <div className='flex flex-col items-center'>
            <SpreadSheet className='text-secondary-500' />
            <p>Planilha de Apoio</p>
          </div>

          <div className='flex flex-col items-center'>
            <CallResults className='text-secondary-500' />
            <p>Call de Resultados</p>
          </div>
        </div>
      </Slide>
    </div>
  );
}
