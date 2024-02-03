import { EUA } from '@/icons/header/EUA';
import { Grafic } from '@/icons/header/grafic';
import { Theme } from '@/icons/header/theme';
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
          src="/assets/logo.png"
          alt="Logo da empresa"
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
          className="flex items-center text-secondary-500 transition hover:text-secondary-400"
        >
          <Grafic />
        </Link>
      </div>

      <div className="flex items-center gap-[8px] font-thin text-white">
        <p className="pb-[1px]">Acessibilidade:</p>

        <Theme className="flex h-[20px] cursor-pointer items-center rounded-md p-[1px] hover:bg-primary-400" />

        <p className="flex h-[20px] cursor-pointer items-center rounded-md p-[2px] hover:bg-primary-400">
          A+
        </p>

        <p className="flex h-[20px] cursor-pointer items-center rounded-md p-[2px] hover:bg-primary-400">
          A-
        </p>
      </div>

      <div className="flex items-center gap-8">
        <EUA />

        <Notifications />

        <Search />

        <Menu />
      </div>
    </header>
  );
}
