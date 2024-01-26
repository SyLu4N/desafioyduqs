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
    <>
      <div className='flex gap-5 items-center justify-center'>
        <NavigationPrev
          id='navigation-prev-results'
          icon='text-primary-500 !size-4'
        />

        <h2 className='font-extrabold text-[22px]'>
          {data.timestre}T
          <span className='font-normal'>{data.ano.slice(2)}</span>
        </h2>

        <NavigationNext
          icon='text-primary-500 !size-4'
          id='navigation-next-results'
        />
      </div>

      <div className='grid grid-cols-3 grid-flow-row gap-[30px] justify-center items-center text-center'>
        <IconResultGrid Icon={Itr} data={data} name='ITR' available={data.IR} />

        <IconResultGrid
          Icon={Mockup}
          data={data}
          name='Apresentação de Resultados'
          available={data.AR}
        />

        <IconResultGrid
          Icon={ReleaseDoc}
          data={data}
          name='Release de Resultados'
          available={data.RR}
        />

        <IconResultGrid
          Icon={SpreadSheet}
          data={data}
          name='Planilha de Apoio'
          available={data.PA}
        />

        <IconResultGrid
          Icon={CallResults}
          data={data}
          name='Call de Resultados'
          available={data.CR}
        />
      </div>
    </>
  );
}
