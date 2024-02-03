import { ReactNode } from 'react';

interface NavProps {
  title: string;
  children: ReactNode;
}

export function Nav({ title, children }: NavProps) {
  return (
    <div className="flex flex-col gap-1">
      <p className="mb-4 text-[19px] font-bold text-secondary-500">{title}</p>

      {children}
    </div>
  );
}
