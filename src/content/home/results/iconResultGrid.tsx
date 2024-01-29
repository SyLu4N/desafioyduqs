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
  const url = encodeURIComponent(name).toLocaleLowerCase();

  if (!available) {
    return (
      <abbr
        title='Indisponível no momento'
        className='no-underline cursor-default flex flex-col items-center text-gray-300 w-[164px] lg:w-[183px]'
      >
        <Icon />
        <p>{name}</p>
      </abbr>
    );
  }

  return (
    <Link
      href={`/detalhes/${url}?timestre=${data.timestre}&ano=${data.ano}`}
      aria-label={`Ir para ${name} do Timestre ${data.timestre} do ano de ${data.ano}`}
      className='w-[164px] text-secondary-500 flex flex-col items-start lg:items-center lg:w-[183px]'
    >
      <Icon />
      <p className='text-primary-500 text-start lg:text-center'>{name}</p>
    </Link>
  );
}
