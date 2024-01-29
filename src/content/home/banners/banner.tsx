import { NavigationNext } from '@/components/Slide/navigationNext';
import { NavigationPrev } from '@/components/Slide/navigationPrev';
import { Textura } from '@/components/textura';

interface BannerProps {
  banner: {
    src: string;
    title: string;
    date: string;
  };
}

export function Banner({ banner }: BannerProps) {
  return (
    <div className='flex w-full justify-end items-center relative'>
      <div className='absolute ml-auto items-center w-full flex flex-col gap-8 left-0 mb-24 z-[1] lg:w-auto lg:items-start'>
        <h1 className='text-white leading-[40px] text-center'>
          {banner.title}
        </h1>

        <p className='text-letter-500 font-bold text-[30px] leading-[30px]'>
          {banner.date}
        </p>

        <div className='flex items-center gap-24'>
          <button className='border border-white py-1 text-white rounded-sm w-[110px]'>
            Saiba mais
          </button>

          <div className='hidden gap-5 lg:flex'>
            <NavigationPrev />
            <NavigationNext />
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center relative w-full min-h-[440px] max-h-[500px] border-secondary-500 border-b-[3px] max-w-[1032px] overflow-hidden lg:justify-end'>
        <img
          src={banner.src}
          alt='Banner de apresentação'
          className='absolute h-auto min-h-[440px] max-h-[500px] w-full min-w-[800px]'
        />

        <div className='absolute h-full w-full bg-primary-500 opacity-55' />
      </div>

      <Textura className='left-0 bottom-[-3%] z-[1] lg:bottom-[-7.2%] lg:left-[8%]' />
    </div>
  );
}
