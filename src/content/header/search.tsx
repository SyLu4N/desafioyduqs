import {
  SheetTrigger,
  Sheet,
  SheetContent,
  SheetClose,
} from '@/components/ui/sheet';
import { Close } from '@/icons/close';
import { cn } from '@/lib/utils';

import { Search as SearchIcon } from '../../icons/search';

interface SearchProps {
  className?: string;
}

export function Search({ className }: SearchProps) {
  return (
    <div className={cn('flex items-center', className)}>
      <Sheet>
        <SheetTrigger className="text-white hover:text-gray-200">
          <SearchIcon />
        </SheetTrigger>

        <SheetContent className="px-[75px] py-8" side="top" overlay={false}>
          <form className="relative flex justify-between">
            <input
              placeholder="Digite aqui oque você procura"
              className="w-full text-[19px] font-bold outline-none placeholder:text-primary-500 focus:border-0"
            />

            <SheetClose>
              <Close className="text-secondary-500 transition hover:text-secondary-400" />
            </SheetClose>

            <div className="absolute bottom-[-6px] w-full border-b-[1px] border-primary-400 opacity-30" />
          </form>

          <p className="mt-3 text-[12px] text-primary-500">
            Aperte Enter para pesquisar
          </p>
        </SheetContent>
      </Sheet>
    </div>
  );
}
