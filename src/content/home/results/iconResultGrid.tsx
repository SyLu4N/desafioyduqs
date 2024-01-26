import { FakeApiResults } from '@/@Types/fakeApiResults';
import Link from 'next/link';

interface IconResultGridProps {
  data: FakeApiResults;
  name: string;
  Icon: any;
  available: boolean;
}

export function IconResultGrid({
  Icon,
  available,
  data,
  name,
}: IconResultGridProps) {
  if (!available) {
    return (
      <abbr
        title='Indisponível no momento'
        className='no-underline cursor-default'
      >
        <div className='flex flex-col items-center text-gray-300'>
          <Icon className='' />
          <p>{name}</p>
        </div>
      </abbr>
    );
  }

  return (
    <Link
      href={`/detalhes/${name}?timestre=${data.timestre}&ano=${data.ano}`}
      aria-label={`Ir para ${name} do Timestre ${data.timestre} do ano de ${data.ano}`}
    >
      <div className='flex flex-col items-center'>
        <Icon className='text-secondary-500' />
        <p>{name}</p>
      </div>
    </Link>
  );
}
