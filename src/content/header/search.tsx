import { Close } from '@/components/icons/close';
import {
  SheetTrigger,
  Sheet,
  SheetContent,
  SheetClose,
} from '@/components/ui/sheet';

import { Search as SearchIcon } from '../../components/icons/header/search';

export function Search() {
  return (
    <Sheet>
      <SheetTrigger className='text-white hover:text-gray-200'>
        <SearchIcon />
      </SheetTrigger>

      <SheetContent className='px-[75px] py-8' side='top'>
        <form className='flex justify-between relative'>
          <input
            placeholder='Digite aqui oque você procura'
            className='font-bold w-full text-[19px] placeholder:text-primary-500 focus:border-0 outline-none'
          />

          <SheetClose>
            <Close className='text-secondary-500 hover:text-secondary-400 transition' />
          </SheetClose>

          <div className='absolute bottom-[-6px] w-full border-b-[1px] border-primary-400 opacity-30' />
        </form>

        <p className='text-primary-500 text-[12px] mt-3'>
          Aperte Enter para pesquisar
        </p>
      </SheetContent>
    </Sheet>
  );
}
