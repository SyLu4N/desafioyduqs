import Img from 'next/image';
import Link from 'next/link';

export function Header() {
  return (
    <header className="px-[75px] h-[95px] bg-primary-500 flex items-center justify-between">
      <Link href="#id" /* TODO: Banner */ aria-label="Ir para home">
        <Img
          src="/assets/logo-estacio.png"
          alt="Logo da Estacio"
          width={170}
          height={47}
        />
      </Link>

      <div className="flex gap-[24px]">
        <p className="font-bold text-white">
          YDUQ3: <span className="text-letter-500">R$ 35,13</span>
        </p>

        <p className="font-bold text-white">
          YDUQY: <span className="text-letter-500">R$ 35,13</span>
        </p>

        <Link
          href="/central-resultados"
          className="flex items-center p-1 rounded-md hover:bg-primary-400"
        >
          <Img
            src="/icons/grafico.svg"
            alt="Icone de um gráfico"
            width={20}
            height={17}
          />
        </Link>
      </div>

      <div className="flex items-center gap-[8px] text-white font-thin">
        <p className="pb-[1px]">Acessibilidade:</p>

        <Img
          className="cursor-pointer p-[3px] rounded-md hover:bg-primary-400"
          src="/icons/acessibilidade.svg"
          alt="Icone para mudar de tema"
          width={20}
          height={20}
        />

        <p className="cursor-pointer flex items-center h-[20px] p-[2px] rounded-md hover:bg-primary-400">
          A+
        </p>

        <p className="cursor-pointer flex items-center h-[20px] p-[2px] rounded-md hover:bg-primary-400">
          A-
        </p>
      </div>

      <div className="flex items-center gap-8">
        <Img
          src="/language/en-square.png"
          alt="Alterar linguagem"
          width={22}
          height={14}
        />

        <Img
          src="/icons/sino-hover.png"
          alt="Sino de notificações"
          height={16}
          width={16}
        />

        <Img
          src="/icons/busca.png"
          alt="Lupa para buscar"
          width={16}
          height={16}
        />

        <Img
          src="/icons/nav.png"
          alt="Icone de hamburguer para o menu"
          width={32}
          height={32}
        />
      </div>
    </header>
  );
}
