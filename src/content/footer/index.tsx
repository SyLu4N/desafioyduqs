import { LinkedIn } from '@/components/icons/linkedIn';

export function Footer() {
  return (
    <div className='flex flex-col gap-2 relative py-4 font-light bg-primary-600 text-white items-center md:block md:text-center lg:flex lg:flex-row lg:justify-around'>
      <p className='text-letter-500 font-bold'>Copyright 2021 YDUQS</p>

      <a href='#'>
        Termo de Privacidade <span className='mx-2 text-[20px]'>|</span> Termos
        de condições
      </a>

      <a href='#' className='md:inline-block md:px-4 lg:px-0 lg:block'>
        Trabalhe Conosco
      </a>

      <a
        href='https://www.linkedin.com/in/luan-sim%C3%B5es-617492236/'
        target='_blank'
        rel='noreferrer'
        className='text-secondary-500 transition hover:text-secondary-400 md:inline-block md:absolute md:bottom-[40%] lg:block lg:static'
      >
        <LinkedIn />
      </a>

      <p className='flex gap-1 md:block'>
        Desenvolvido por:
        <a
          href='#'
          target='_blank'
          rel='noreferrer'
          className='font-bold md:px-2'
        >
          SyLu4N
        </a>
      </p>
    </div>
  );
}
