import { ReactNode } from 'react';

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface NavProps {
  title: string;
  children: ReactNode;
}

export function Nav({ title, children }: NavProps) {
  return (
    <>
      <div className="hidden flex-col gap-1 lg:flex">
        <p className="mb-4 text-[19px] font-bold text-secondary-500">{title}</p>

        {children}
      </div>

      <AccordionItem value={title} className="block lg:hidden">
        <AccordionTrigger className="tex-end mb-4 justify-end gap-2 text-[19px] font-bold text-secondary-500">
          {title}
        </AccordionTrigger>
        <AccordionContent className="space-y-2">{children}</AccordionContent>
      </AccordionItem>
    </>
  );
}
