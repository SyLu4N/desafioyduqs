import { FakeApiResults } from '@/@Types/fakeApiResults';
import { CallResults } from '@/components/icons/results/callResults';
import { Itr } from '@/components/icons/results/itr';
import { Mockup } from '@/components/icons/results/mockup';
import { ReleaseDoc } from '@/components/icons/results/releaseDoc';
import { SpreadSheet } from '@/components/icons/results/spreadsheet';
import { NavigationNext } from '@/components/Slide/navigationNext';
import { NavigationPrev } from '@/components/Slide/navigationPrev';

import { IconResultGrid } from './iconResultGrid';

interface ResultProps {
  data: FakeApiResults;
}

export function Result({ data }: ResultProps) {
  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      <div className="flex items-center gap-5 lg:justify-center">
        <NavigationPrev
          id="navigation-prev-results"
          icon="text-primary-500 !size-4"
        />

        <h2 className="text-[22px] font-extrabold">
          {data.timestre}T
          <span className="font-normal">{data.ano.slice(2)}</span>
        </h2>

        <NavigationNext
          icon="text-primary-500 !size-4"
          id="navigation-next-results"
        />
      </div>

      <div className="grid grid-flow-row grid-cols-2 items-center gap-[16px] text-center sm:grid-cols-3">
        <IconResultGrid Icon={Itr} data={data} name="ITR" available={data.IR} />

        <IconResultGrid
          Icon={Mockup}
          data={data}
          name="Apresentação de Resultados"
          available={data.AR}
        />

        <IconResultGrid
          Icon={ReleaseDoc}
          data={data}
          name="Release de Resultados"
          available={data.RR}
        />

        <IconResultGrid
          Icon={SpreadSheet}
          data={data}
          name="Planilha de Apoio"
          available={data.PA}
        />

        <IconResultGrid
          Icon={CallResults}
          data={data}
          name="Call de Resultados"
          available={data.CR}
        />
      </div>
    </div>
  );
}
