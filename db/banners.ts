import { Banner } from '@/@types/banner';

const pathImgs = '/assets/banners/';

const banners = [
  {
    src: `${pathImgs}banner.png`,
    title: 'Divulgação de Resultados',
    date: '3° TRI 2021',
  },
  {
    src: `${pathImgs}banner-2.jpg`,
    title: 'Divulgação de Resultados',
    date: '3° TRI 2021',
  },
  {
    src: `${pathImgs}banner-2.jpg`,
    title: 'Divulgação de Resultados',
    date: '3° TRI 2021',
  },
];

export function getBanners(): Promise<Banner[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(banners);
    }, 1000);
  });
}
