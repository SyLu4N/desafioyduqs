import { Textura } from '@/components/textura';

import { Banners } from './banners';
import { Calendar } from './calendar';
import { Cards } from './cards';
import { Results } from './results';
import { Shortcut } from './shortcut';

export function Home() {
  return (
    <main>
      <Banners />
      <Shortcut />
      <Cards />

      <div className='relative h-[82px]'>
        <Textura />
      </div>

      <div className='flex px-[16px] gap-16 flex-col lg:flex-row sm:px-[75px] mb-16'>
        <Results />
        <Calendar />
      </div>
    </main>
  );
}
