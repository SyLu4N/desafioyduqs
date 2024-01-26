import { Arrow } from '../icons/arrow';

interface NavigationNextProps {
  className?: string;
  icon?: string;
  id?: string;
}

export function NavigationNext({
  id = 'navigation-next',
  className = 'text-secondary-500',
  icon = '',
}: NavigationNextProps) {
  return (
    <div
      className={`${id} transition cursor-pointer hover:brightness-125 ${className}`}
    >
      <Arrow className={`rotate-180 size-6  ${icon}`} />
    </div>
  );
}
