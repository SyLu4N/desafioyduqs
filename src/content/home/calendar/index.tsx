import Link from 'next/link';

import { Event } from './event';

const fakeAPIEvents = [
  {
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint',
    date: new Date('2024-04-23'),
  },

  {
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint',
    date: new Date('2024-04-23'),
  },

  {
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint',
    date: new Date('2024-04-22'),
  },

  {
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint',
    date: new Date('2024-04-21'),
  },
];

export function Calendar() {
  return (
    <div className="flex !w-full flex-col gap-4 lg:pr-[42px]">
      <h2 className="text-[29px] lg:text-[40px]">Calendário de Eventos</h2>

      {fakeAPIEvents.map((event, index) => (
        <Event
          key={index}
          event={event}
          index={index}
          className={index < fakeAPIEvents.length - 2 ? 'border-b-[1px]' : ''}
        />
      ))}

      <div>
        <Link
          href=""
          className="text-primary-500 underline"
          aria-label="Ver todos eventos"
        >
          Ver todos os eventos
        </Link>
      </div>
    </div>
  );
}
