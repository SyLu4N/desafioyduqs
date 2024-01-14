import { Banner } from './banner';
import { Cards } from './cards';
import { Shortcut } from './shortcut';

export function Home() {
  return (
    <main>
      <Banner />
      <Shortcut />
      <Cards />
    </main>
  );
}
