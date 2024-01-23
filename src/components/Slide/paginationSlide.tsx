interface PaginationSlideProps {
  className?: string;
}

export function PaginationSlide({ className = '' }: PaginationSlideProps) {
  return (
    <div
      className={`swiper-pagination flex justify-center gap-[7px] swiper-block ${className}`}
    />
  );
}
