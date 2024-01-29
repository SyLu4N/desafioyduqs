import { HTMLAttributes } from 'react';

interface MaenuBurgerProps extends HTMLAttributes<SVGElement> {
  className?: string;
}

export function MenuBurger({ className, ...rest }: MaenuBurgerProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='33'
      viewBox='0 0 32 33'
      fill='none'
      className={className}
      {...rest}
    >
      <path
        d='M28.8002 7.7V10.6333H3.2002V7.7H28.8002ZM3.2002 25.3H28.8002V22.3667H3.2002V25.3ZM3.2002 17.9667H28.8002V15.0333H3.2002V17.9667Z'
        fill='currentColor'
      />
    </svg>
  );
}
