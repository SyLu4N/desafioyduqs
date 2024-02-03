import { ReactNode } from 'react';

import { Swiper, SwiperProps } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

interface SlideProps extends SwiperProps {
  children: ReactNode;
}

export function Slide({ children, ...rest }: SlideProps) {
  return <Swiper {...rest}>{children}</Swiper>;
}