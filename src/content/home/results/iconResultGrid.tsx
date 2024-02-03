import { FakeApiResults } from '@/@types2/fakeApiResults';
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
        title="Indisponível no momento"
        className="flex w-[164px] cursor-default flex-col items-center text-gray-300 no-underline lg:w-[183px]"
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
      className="flex w-[164px] flex-col items-start text-secondary-500 lg:w-[183px] lg:items-center"
    >
      <Icon />
      <p className="text-start text-primary-500 lg:text-center">{name}</p>
    </Link>
  );
}
