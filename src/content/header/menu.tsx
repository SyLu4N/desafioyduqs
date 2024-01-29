'use client';
import { useState } from 'react';

import { MenuBurger } from '@/components/icons/header/menuBurger';

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  return (
    <>
      <MenuBurger
        className='text-letter-500 cursor-pointer transition-all hover:text-letter-400'
        onClick={() => setIsOpen(true)}
      />

      <div></div>
    </>
  );
}
