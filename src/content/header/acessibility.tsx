import { Theme } from '@/icons/header/theme';
import { cn } from '@/lib/utils';

interface AcessbilityProps {
  className?: string;
}

export function Acessibility({ className }: AcessbilityProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-[8px] font-thin text-white',
        className,
      )}
    >
      <p className="pb-[1px]">Acessibilidade:</p>

      <Theme className="flex h-[20px] cursor-pointer items-center rounded-md p-[1px] hover:bg-primary-400" />

      <p className="flex h-[20px] cursor-pointer items-center rounded-md p-[2px] hover:bg-primary-400">
        A+
      </p>

      <p className="flex h-[20px] cursor-pointer items-center rounded-md p-[2px] hover:bg-primary-400">
        A-
      </p>
    </div>
  );
}
