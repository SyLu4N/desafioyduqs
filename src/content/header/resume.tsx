import { Grafic } from '@/icons/header/grafic';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ResumeProps {
  className?: string;
}

export function Resume({ className }: ResumeProps) {
  return (
    <div className={cn('flex gap-[24px]', className)}>
      <p className="font-bold text-white">
        DADAQ3: <span className="text-letter-500">R$ 35,13</span>
      </p>

      <p className="font-bold text-white">
        DADAY: <span className="text-letter-500">R$ 35,13</span>
      </p>

      <Link
        href="/central-resultados"
        className="flex items-center text-secondary-500 transition hover:text-secondary-400"
      >
        <Grafic />
      </Link>
    </div>
  );
}
