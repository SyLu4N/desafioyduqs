import { Gmail } from '@/components/icons/gmail';
import { Outlook } from '@/components/icons/outlook';

interface EventProps {
  event: {
    description: string;
    date: Date;
  };

  index: number;
  className?: string;
}

export function Event({ event, index, className = '' }: EventProps) {
  const month = new Date(event.date)
    .toLocaleDateString('pt-br', { month: 'long' })
    .slice(0, 3)
    .toLocaleUpperCase();

  const day = new Date(event.date).toLocaleDateString('pt-br', {
    day: '2-digit',
  });

  const hours = new Date(event.date).toLocaleString('pt-br', {
    hour: '2-digit',
    minute: '2-digit',
  });

  if (index > 2) return <></>;

  return (
    <article className={`${className} flex gap-2 justify-between`}>
      <div>
        <time
          className='flex items-center gap-2 text-letter-500'
          dateTime={event.date.toLocaleDateString('pt-br')}
        >
          <p>{month}</p>
          <span className='text-[12px]'>|</span>
          <p className='font-bold'>{day}</p>
        </time>

        <p>{event.description}</p>

        <aside className='mb-3'>
          <span className='text-[14px] text-gray-400'>
            {hours} - 00:00 (Horário de Brasília)
          </span>
        </aside>
      </div>

      <div className='flex flex-col justify-center gap-2'>
        <Gmail />
        <Outlook />
      </div>
    </article>
  );
}
