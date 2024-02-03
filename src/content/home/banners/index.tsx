'use client';

import { Slide } from '@/components/slide2';
import { PaginationSlide } from '@/components/slide2/paginationSlide';
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
    <section className="overflow-hidden bg-primary-500 lg:pl-[75px] lg:pt-[24px]">
      <div className="relative m-auto max-w-[1032px] lg:min-w-[1365px]">
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

          <div className="absolute bottom-[8%] w-full lg:bottom-auto lg:right-[5%] lg:top-[50%] lg:w-auto">
            <PaginationSlide className="lg:flex-col" />
          </div>
        </Slide>
      </div>
    </section>
  );
}
