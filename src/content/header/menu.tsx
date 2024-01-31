'use client';
import { useState } from 'react';

import { MenuBurger } from '@/components/icons/header/menuBurger';

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  return (
    <>
      <MenuBurger
        className="cursor-pointer text-letter-500 transition-all hover:text-letter-400"
        onClick={() => setIsOpen(true)}
      />

      <div></div>
    </>
  );
}
