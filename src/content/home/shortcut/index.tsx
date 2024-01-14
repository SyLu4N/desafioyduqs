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
    <div className="bg-primary-500 border-b-[3px] border-b-secundary-500">
      <div className="max-w-[1440px] m-auto py-[80px] px-[16px] grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-[30px] justify-center items-center lg:py-[96px] lg:px-[186px] lg:grid-cols-6 lg:grid-flow-row">
        {shortcuts.map((shortcut) => (
          <div
            key={shortcut.text}
            className="m-auto bg-secundary-500 w-[140px] h-[112px] flex items-center justify-center flex-col rounded-[4px] hover:bg-secundary-400 transition cursor-pointer"
          >
            <div className="h-[50px] w-[50px] flex items-center justify-center mb-2">
              <Img
                src={`/icons/${shortcut.icon}`}
                width={50}
                height={50}
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
