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

      <div className="relative h-[82px]">
        <Textura />
      </div>

      <div className="mb-16 flex flex-col gap-16 px-[16px] sm:px-[75px] lg:flex-row">
        <Results />
        <Calendar />
      </div>
    </main>
  );
}
