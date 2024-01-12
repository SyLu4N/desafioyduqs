interface PaginationSlideProps {
  classNameContainer?: string;
  className?: string;
}

export function PaginationSlide({
  classNameContainer = '',
  className = '',
}: PaginationSlideProps) {
  return (
    <div className={`absolute bottom-[0] w-full ${classNameContainer}`}>
      <div
        className={`swiper-pagination flex justify-center gap-[7px] swiper-block mb-8 ${className}`}
      />
    </div>
  );
}
