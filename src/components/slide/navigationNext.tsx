import { Arrow } from '../../icons/arrow';

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
      className={`${id} cursor-pointer transition hover:brightness-125 ${className}`}
    >
      <Arrow className={`size-6 rotate-180  ${icon}`} />
    </div>
  );
}
