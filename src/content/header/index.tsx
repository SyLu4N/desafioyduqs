import Img from 'next/image';
import Link from 'next/link';

import { Menu } from './menu';
import { Notifications } from './notifications';
import { Search } from './search';

export function Header() {
  return (
    <header className="flex h-[95px] items-center justify-between bg-primary-500 px-[75px]">
      <Link href="/" aria-label="Ir para home">
        <Img
          src="/assets/logo-estacio.png"
          alt="Logo da Estacio"
          width={170}
          height={47}
        />
      </Link>

      <div className="flex gap-[24px]">
        <p className="font-bold text-white">
          YDUQ3: <span className="text-letter-500">R$ 35,13</span>
        </p>

        <p className="font-bold text-white">
          YDUQY: <span className="text-letter-500">R$ 35,13</span>
        </p>

        <Link
          href="/central-resultados"
          className="flex items-center rounded-md p-1 hover:bg-primary-400"
        >
          <Img
            src="/icons/grafico.svg"
            alt="Icone de um gráfico"
            width={20}
            height={17}
          />
        </Link>
      </div>

      <div className="flex items-center gap-[8px] font-thin text-white">
        <p className="pb-[1px]">Acessibilidade:</p>

        <Img
          className="cursor-pointer rounded-md p-[3px] hover:bg-primary-400"
          src="/icons/acessibilidade.svg"
          alt="Icone para mudar de tema"
          width={20}
          height={20}
        />

        <p className="flex h-[20px] cursor-pointer items-center rounded-md p-[2px] hover:bg-primary-400">
          A+
        </p>

        <p className="flex h-[20px] cursor-pointer items-center rounded-md p-[2px] hover:bg-primary-400">
          A-
        </p>
      </div>

      <div className="flex items-center gap-8">
        <Img
          src="/language/en-square.png"
          alt="Alterar linguagem"
          width={0}
          height={0}
        />

        <Notifications />

        <Search />

        <Menu />
      </div>
    </header>
  );
}
