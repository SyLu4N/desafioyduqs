import { NavigationNext } from '@/components/slide/navigationNext';
import { NavigationPrev } from '@/components/slide/navigationPrev';
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
    <div className="relative flex w-full items-center justify-end">
      <div className="absolute left-0 z-[1] mb-24 ml-auto flex w-full flex-col items-center gap-8 lg:w-auto lg:items-start">
        <h1 className="text-center leading-[40px] text-white">
          {banner.title}
        </h1>

        <p className="text-[30px] font-bold leading-[30px] text-letter-500">
          {banner.date}
        </p>

        <div className="flex items-center gap-24">
          <button className="w-[110px] rounded-sm border border-white py-1 text-white">
            Saiba mais
          </button>

          <div className="hidden gap-5 lg:flex">
            <NavigationPrev />
            <NavigationNext />
          </div>
        </div>
      </div>

      <div className="relative flex max-h-[500px] min-h-[440px] w-full max-w-[1032px] items-center justify-center overflow-hidden border-b-[3px] border-secondary-500 lg:justify-end">
        <img
          src={banner.src}
          alt="Banner de apresentação"
          className="absolute h-auto max-h-[500px] min-h-[440px] w-full min-w-[800px]"
        />

        <div className="absolute h-full w-full bg-primary-500 opacity-55" />
      </div>

      <Textura className="bottom-[-3%] left-0 z-[1] lg:bottom-[-7.2%] lg:left-[8%]" />
    </div>
  );
}
