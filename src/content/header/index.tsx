import { EUA } from '@/icons/header/EUA';
import Img from 'next/image';
import Link from 'next/link';

import { Acessibility } from './acessibility';
import { Menu } from './menu';
import { Notifications } from './notifications';
import { Resume } from './resume';
import { Search } from './search';

export function Header() {
  return (
    <header className="flex h-[95px] items-center justify-between bg-primary-500 px-[10px] sm:px-[75px]">
      <Link href="/" aria-label="Ir para home">
        <Img
          src="/assets/logo.png"
          alt="Logo da empresa"
          width={170}
          height={47}
        />
      </Link>

      <Resume className="hidden lg:flex" />

      <Acessibility className="hidden lg:flex" />

      <div className="flex items-center gap-8">
        <EUA className="hidden lg:flex" />

        <Notifications />

        <Search className="hidden lg:flex" />

        <Menu />
      </div>
    </header>
  );
}
