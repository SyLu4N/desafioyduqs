import { Communication } from '@/icons/shortcut/communication';
import { ContatcUs } from '@/icons/shortcut/contactUs';
import { Day } from '@/icons/shortcut/day';
import { Mailing } from '@/icons/shortcut/mailing';
import { Presentations } from '@/icons/shortcut/presentatios';
import { Results } from '@/icons/shortcut/results';

const shortcuts = [
  { icon: Results, text: 'Resultados' },
  { icon: Communication, text: 'Comunicados e FR' },
  { icon: Presentations, text: 'Apresentações' },
  { icon: Day, text: 'EMPRESA Day' },
  { icon: ContatcUs, text: 'Fale conosco' },
  { icon: Mailing, text: 'Mailing' },
];

export function Shortcut() {
  return (
    <div className="border-b-[3px] border-b-secondary-500 bg-primary-500">
      <div className="m-auto grid max-w-[1440px] grid-cols-2 items-center justify-center gap-[30px] px-[16px] py-[80px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:px-[186px] lg:py-[96px]">
        {shortcuts.map((shortcut) => (
          <div
            key={shortcut.text}
            className="m-auto flex h-[112px] w-full min-w-[140px] max-w-[220px] cursor-pointer flex-col items-center justify-center rounded-[4px] bg-secondary-500 transition hover:bg-secondary-400"
          >
            <shortcut.icon className="h-auto w-[25%] min-w-[50px]" />

            <p className="text-[16px] text-primary-500">{shortcut.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
