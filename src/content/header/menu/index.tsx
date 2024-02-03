'use client';

import { Accordion } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import {
  SheetTrigger,
  SheetContent,
  SheetClose,
  Sheet,
  SheetHeader,
} from '@/components/ui/sheet';
import { Close } from '@/icons/close';
import { EUA } from '@/icons/header/EUA';
import { MenuBurger } from '@/icons/header/menuBurger';
import { Search } from '@/icons/search';
import Image from 'next/image';

import { Resume } from '../resume';
import { LinkNav } from './linkNav';
import { Nav } from './nav';

export function Menu() {
  return (
    <Sheet>
      <SheetTrigger className="text-white hover:text-gray-200">
        <MenuBurger className="cursor-pointer text-letter-500 transition-all hover:text-letter-400" />
      </SheetTrigger>

      <SheetContent
        className="bg-transparent px-[10px] py-6 shadow-transparent sm:px-[75px]"
        side="top-opacity"
        animate="opacity"
        classNameOverlay="h-screen bg-primary-500 lg:bg-primary-500/95"
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

        <div className="space-y-4 lg:hidden">
          <div className="mt-8 flex flex-col items-end justify-between gap-4 sm:flex-row">
            <Resume />

            <div className="flex items-center gap-2 text-white">
              <p className="text-[14px] font-light">English</p>
              <EUA />
            </div>
          </div>

          <div className="relative text-white">
            <Input
              className="bg-transparent pl-8 pt-1 placeholder:text-white/90 focus:border-[2px]"
              placeholder="Pesquisar"
            />

            <Search className="absolute left-2 top-[8px] w-[17px] " />
          </div>
        </div>

        <Accordion
          type="single"
          className="mt-8 flex flex-col items-end justify-around bg-transparent text-end text-white lg:mt-14 lg:flex-row lg:items-start lg:gap-7 lg:text-start"
        >
          <Nav title="A EMPRESA">
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
            <LinkNav text="Instituto EMPRESA" url="#" />
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
            <LinkNav text="EMPRESA Day" url="#" />
          </Nav>

          <Nav title="Contato">
            <LinkNav text="Cadastre-se no mailing" url="#" />
            <LinkNav text="Fale conosco" url="#" />
            <LinkNav text="Trabalhe conosco" url="#" />
          </Nav>
        </Accordion>
      </SheetContent>
    </Sheet>
  );
}
