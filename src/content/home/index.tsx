import { Banner } from './banner';
import { Cards } from './cards';
import { Results } from './results';
import { Shortcut } from './shortcut';

export function Home() {
  return (
    <main>
      <Banner />
      <Shortcut />
      <Cards />

      <div className='flex'>
        <Results />
      </div>
    </main>
  );
}
