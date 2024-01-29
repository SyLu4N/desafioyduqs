'use client';

import { useState } from 'react';

import { AlertBell } from '@/components/icons/header/alertBell';
import { Bell } from '@/components/icons/header/bell';

const fakeAPINotifications = [
  { date: new Date(), text: 'Divulgação dos resultados 2T21' },
  { date: new Date(), text: 'Divulgação dos resultados 1T21' },
  { date: new Date(), text: 'Form 20-F 2020 (english only)' },
  { date: new Date(), text: 'Teleconferência 1T21' },
];

export function Notifications() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='cursor-pointer text-white' onClick={() => setIsOpen(true)}>
      {fakeAPINotifications.length ? <AlertBell /> : <Bell />}
    </div>
  );
}
