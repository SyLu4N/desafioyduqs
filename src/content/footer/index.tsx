import { LinkedIn } from '@/icons/linkedIn';

export function Footer() {
  return (
    <div className="relative flex flex-col items-center gap-2 bg-primary-600 py-4 font-light text-white md:block md:text-center lg:flex lg:flex-row lg:justify-around">
      <p className="font-bold text-letter-500">Copyright 2021 YDUQS</p>

      <a href="#">
        Termo de Privacidade <span className="mx-2 text-[20px]">|</span> Termos
        de condições
      </a>

      <a href="#" className="md:inline-block md:px-4 lg:block lg:px-0">
        Trabalhe Conosco
      </a>

      <a
        href="https://www.linkedin.com/in/luan-sim%C3%B5es-617492236/"
        target="_blank"
        rel="noreferrer"
        className="text-secondary-500 transition hover:text-secondary-400 md:absolute md:bottom-[40%] md:inline-block lg:static lg:block"
      >
        <LinkedIn />
      </a>

      <p className="flex gap-1 md:block">
        Desenvolvido por:
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="font-bold md:px-2"
        >
          SyLu4N
        </a>
      </p>
    </div>
  );
}
