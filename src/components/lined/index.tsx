import { cn } from '@/lib/utils';

interface LinedProps {
  className?: string;
}

export function Lined({ className }: LinedProps) {
  return <div className={cn('h-[1px] w-full bg-secondary-500', className)} />;
}
