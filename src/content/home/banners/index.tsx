'use client';

import { Slide } from '@/components/Slide';
import { PaginationSlide } from '@/components/Slide/paginationSlide';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';

import { Banner } from './banner';

const fakeAPIBanners = [
  {
    src: '/assets/banner-img.png',
    title: 'Divulgação de Resultados',
    date: '3° TRI 2021',
  },
  {
    src: '/assets/banner-img-2.jpg',
    title: 'Divulgação de Resultados',
    date: '3° TRI 2021',
  },
  {
    src: '/assets/banner-img-3.jpg',
    title: 'Divulgação de Resultados',
    date: '3° TRI 2021',
  },
];

export function Banners() {
  return (
    <section className='bg-primary-500 overflow-hidden lg:pl-[75px] lg:pt-[24px]'>
      <div className='m-auto max-w-[1032px] lg:min-w-[1365px] relative'>
        <Slide
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
          }}
          navigation={{
            prevEl: '.navigation-prev',
            nextEl: '.navigation-next',
          }}
          modules={[A11y, Scrollbar, Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
        >
          {fakeAPIBanners?.map((banner, index) => (
            <SwiperSlide key={banner.title + index}>
              <Banner banner={banner} />
            </SwiperSlide>
          ))}

          <div className='absolute w-full bottom-[8%] lg:right-[5%] lg:top-[50%] lg:w-auto lg:bottom-auto'>
            <PaginationSlide className='lg:flex-col' />
          </div>
        </Slide>
      </div>
    </section>
  );
}
