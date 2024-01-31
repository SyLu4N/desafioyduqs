import Img from 'next/image';

const shortcuts = [
  { icon: 'resultados.svg', text: 'Resultados' },
  { icon: 'comunicados.svg', text: 'Comunicados e FR' },
  { icon: 'apresentacoes.svg', text: 'Apresentações' },
  { icon: 'day.svg', text: 'YDUQS Day' },
  { icon: 'fale-conosco.svg', text: 'Fale conosco' },
  { icon: 'mailing.svg', text: 'Mailing' },
];

export function Shortcut() {
  return (
    <div className="border-b-[3px] border-b-secondary-500 bg-primary-500">
      <div className="m-auto grid max-w-[1440px] grid-cols-[repeat(auto-fill,minmax(140px,1fr))] items-center justify-center gap-[30px] px-[16px] py-[80px] lg:grid-flow-row lg:grid-cols-6 lg:px-[186px] lg:py-[96px]">
        {shortcuts.map((shortcut) => (
          <div
            key={shortcut.text}
            className="m-auto flex h-[112px] w-[140px] cursor-pointer flex-col items-center justify-center rounded-[4px] bg-secondary-500 transition hover:bg-secondary-400"
          >
            <div className="mb-2 flex h-[50px] w-[50px] items-center justify-center">
              <Img
                src={`/icons/shortcut/${shortcut.icon}`}
                width="0"
                height="0"
                sizes="100vw"
                className="h-auto w-full"
                alt={`Icone de ${shortcut.text}`}
              />
            </div>

            <p className="text-[16px] text-primary-500">{shortcut.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
