interface PaginationSlideProps {
  className?: string;
}

export function PaginationSlide({ className = '' }: PaginationSlideProps) {
  return (
    <div
      className={`swiper-pagination swiper-block flex justify-center gap-[7px] ${className}`}
    />
  );
}
