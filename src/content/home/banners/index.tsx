'use client';

import { Slide } from '@/components/slide';
import { PaginationSlide } from '@/components/slide/paginationSlide';
import { useQuery } from '@tanstack/react-query';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';

import { getBanners } from '../../../../db/banners';
import { Banner } from './banner';
import { Loading } from './loading';

export function Banners() {
  const { data: banners, isLoading } = useQuery({
    queryKey: ['banners'],
    queryFn: getBanners,
  });

  return (
    <section className="overflow-hidden bg-primary-500 lg:pl-[75px] lg:pt-[24px]">
      {isLoading ? (
        <Loading />
      ) : (
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
            {banners?.map((banner, index) => (
              <SwiperSlide key={banner.title + index}>
                <Banner banner={banner} />
              </SwiperSlide>
            ))}

            <div className="absolute bottom-[8%] w-full text-white lg:bottom-auto lg:right-[5%] lg:top-[47%] lg:w-auto">
              <PaginationSlide className="lg:flex-col" />
            </div>
          </Slide>
        </div>
      )}
    </section>
  );
}
