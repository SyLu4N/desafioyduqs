'use client';

import { useEffect, useRef, useState } from 'react';

import { AlertBell } from '@/components/icons/header/alertBell';
import { ArrowNotificaiton } from '@/components/icons/header/arrowNotification';
import { Bell } from '@/components/icons/header/bell';
import Link from 'next/link';

const fakeAPINotifications = [
  { date: new Date(), text: 'Divulgação dos resultados 2T21', id: 1 },
  { date: new Date(), text: 'Divulgação dos resultados 1T21', id: 2 },
  { date: new Date(), text: 'Form 20-F 2020 (english only)', id: 3 },
  { date: new Date(), text: 'Teleconferência 1T21', id: 4 },
  { date: new Date(), text: 'Teleconferência 1T21', id: 4 },
];

export function Notifications() {
  const [isOpen, setIsOpen] = useState(false);
  const [newNotifications, setNewNotifications] = useState(0);

  const animationDownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!fakeAPINotifications) return;

    setNewNotifications(fakeAPINotifications.length);
  }, [fakeAPINotifications]);

  function handleNotifications() {
    if (isOpen) {
      animationDownRef?.current?.classList.remove('animate-notifications-up');
      animationDownRef?.current?.classList.add('animate-notifications-down');

      setTimeout(() => {
        setNewNotifications(0);
        setIsOpen(false);
      }, 150);

      return;
    }

    return setIsOpen(true);
  }

  const maxFourNotifications = fakeAPINotifications.slice(0, 4);

  return (
    <div className="relative text-white">
      <div
        className={`flex h-[24px] w-[24px] cursor-pointer items-center justify-center rounded-[2px] transition hover:text-gray-200 ${isOpen && 'bg-secondary-500 text-primary-500 hover:text-primary-600'}`}
        onClick={handleNotifications}
      >
        {newNotifications && !isOpen ? <AlertBell /> : <Bell />}
      </div>

      <div
        ref={animationDownRef}
        className={`absolute right-[-100%] top-[200%] z-10 select-none whitespace-nowrap rounded-sm border bg-white p-4 shadow-xl ${isOpen ? 'animate-notifications-up' : 'hidden'}`}
      >
        <ArrowNotificaiton className="absolute right-[8%] top-[-6.5%] mt-[12px]" />
        <div className="mb-1 flex min-w-[214px] items-center justify-between gap-3">
          <p className="font-bold text-primary-500">Ultimas atualizações</p>

          {newNotifications && (
            <p className="flex items-center rounded-[2px] bg-secondary-500 px-2 py-1 text-sm text-white">
              {newNotifications} novas
            </p>
          )}
        </div>
        {maxFourNotifications.map((notification) => (
          <div
            className="border-b-[1px] border-gray-200 pb-2 pt-3 text-black"
            key={notification.id}
          >
            <time className="text-[12px] text-gray-400">
              {notification.date.toLocaleDateString('pt-br')}
            </time>

            <p className="text-sm">{notification.text}</p>
          </div>
        ))}
        <Link href="#" className="mt-4 inline-block text-letter-500 underline">
          Ver todos
        </Link>
        A
      </div>
    </div>
  );
}
