'use client';

import {
  SheetTrigger,
  SheetContent,
  SheetClose,
  Sheet,
  SheetHeader,
} from '@/components/ui/sheet';
import { Close } from '@/icons/close';
import { MenuBurger } from '@/icons/header/menuBurger';
import Image from 'next/image';

import { LinkNav } from './linkNav';
import { Nav } from './nav';

export function Menu() {
  return (
    <Sheet>
      <SheetTrigger className="text-white hover:text-gray-200">
        <MenuBurger className="cursor-pointer text-letter-500 transition-all hover:text-letter-400" />
      </SheetTrigger>

      <SheetContent
        className="bg-primary-500/95 px-[75px] py-6 shadow-transparent"
        side="top-opacity"
        animate="opacity"
        classNameOverlay="h-screen bg-primary-500/95"
      >
        <SheetHeader className="flex flex-row items-center justify-between border-b-[1px] pb-2">
          <Image
            src="/assets/logo.png"
            alt="Logo da Estacio"
            width={170}
            height={47}
          />

          <SheetClose className="!mt-0">
            <Close className="text-secondary-500 transition hover:text-secondary-400" />
          </SheetClose>
        </SheetHeader>

        <div className="mt-14 flex justify-around gap-7 text-white">
          <Nav title="A YDUQS">
            <LinkNav text="Quem somos" url="#" />
            <LinkNav text="Nossa História" url="#" />
            <LinkNav text="Unidades de Negócio" url="#" />
            <LinkNav text="Transformação Digital" url="#" />
            <LinkNav text="Estrutura Societária" url="#" />
            <LinkNav text="Nossa Liderança" url="#" />
            <LinkNav text="Notícias" url="#" />
          </Nav>

          <Nav title="ESG">
            <LinkNav text="Estratégia e compromissos" url="#" />
            <LinkNav text="Relatórios de Sustentabilidade" url="#" />
            <LinkNav text="Instituto YDUQS" url="#" />
          </Nav>

          <Nav title="Governança Corporativa">
            <LinkNav text="Visão Geral" url="#" />
            <LinkNav text="Composição Acionária" url="#" />
            <LinkNav text="Assembleia e Reuniões" url="#" />
            <LinkNav text="Estatuto, Políticas e Regimentos" url="#" />
            <LinkNav text="Informe de Governança" url="#" />
            <LinkNav text="Compliance" url="#" />
          </Nav>

          <Nav title="Centra de Resultados">
            <LinkNav text="Calendário de Eventos" url="#" />
            <LinkNav text="Central de Resultados" url="#" />
          </Nav>

          <Nav title="Informações ao Investidor">
            <LinkNav
              text="Apresentações Institucionais e de conferências"
              url="#"
            />
            <LinkNav text="Analistas e Recomendações" url="#" />
            <LinkNav text="Cotações e Gráficos" url="#" />
            <LinkNav text="Dividendos" url="#" />
            <LinkNav text="Dívida e Rating" url="#" />
            <LinkNav text="Demais publicações CVM" url="#" />
            <LinkNav text="YDUQS Day" url="#" />
          </Nav>

          <Nav title="Contato">
            <LinkNav text="Cadastre-se no mailing" url="#" />
            <LinkNav text="Fale conosco" url="#" />
            <LinkNav text="Trabalhe conosco" url="#" />
          </Nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
