import { Arrow } from '../icons/arrow';

interface NavigationPrevProps {
  className?: string;
  icon?: string;
  id?: string;
}

export function NavigationPrev({
  id = 'navigation-prev',
  icon = 'text-secondary-500',
  className = '',
}: NavigationPrevProps) {
  return (
    <div
      className={`${id} hover:brightness-125 transition cursor-pointer ${className}`}
    >
      <Arrow className={`size-6 ${icon}`} />
    </div>
  );
}
