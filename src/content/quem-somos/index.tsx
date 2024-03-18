import { Institution } from './institution';

export function QuemSomosContent() {
  return (
    <div>
      <div className="relative min-h-[152px] bg-primary-500 md:h-[300px]">
        <div className="absolute top-10 m-auto flex h-full overflow-hidden">
          <div className="min-w-[7%]" />

          <img
            src="/assets/quem-somos/quem-somos.png"
            className="w-screen min-w-full object-cover"
          />
        </div>
      </div>

      <section className="mt-40 flex flex-col items-center">
        <article className="mb-16 flex max-w-[860px] flex-col gap-16 px-[7%]">
          <div className="w-full">
            <span className="text-sm font-normal text-gray-400">
              EMPRESA / Canal / Página
            </span>

            <h2>Quem Somos</h2>
          </div>

          <div>
            <strong className="text-3xl text-secondary-500">
              Somos um grupo de tecnologia e serviços em educação. Nosso
              trabalho é o de promover um salto de qualidade para o ensino
              universitário no Brasil.
            </strong>

            <p className="mt-8">
              Com uma forte apropriação da cultura digital, e por meio do
              desenvolvimento de metodologias e de conteúdos que refletem os
              desafios e as necessidades do nosso tempo, oferecemos educação
              superior de qualidade para pessoas de todas as classes sociais, em
              todo o país, e ao longo de toda a sua vida adulta.
              <br />
              <br />
              Nos constituímos como sociedade anônima de capital aberto em 2007,
              entretanto algumas instituições que hoje compõem o grupo têm mais
              de 50 anos de tradição e excelência em ensino. Estamos listados no
              Novo Mercado da B3 sob o código de negociação “YDUQ3” e suas ADRs
              negociadas no mercado norte-americano sob o código “YDUQY”.
            </p>
          </div>

          <div>
            <strong className="text-3xl text-secondary-500">MISSÃO</strong>

            <p className="mt-8">
              Transformar a educação no Brasil a partir do uso intenso de
              tecnologia para apoiar o desenvolvimento de jovens e adultos de
              todas as classes, do Oiapoque ao Chuí, com práticas sustentáveis
              para todos os nossos públicos.
            </p>
          </div>

          <div>
            <strong className="text-3xl text-secondary-500">
              PLATAFORMA DE ENSINO
            </strong>

            <p className="mt-8">
              Estamos presentes em todo o território nacional e contamos com
              mais de 1 milhão de alunos. Somos uma das organizações que mais
              inova e cresce no país, por meio da expansão do nosso ensino e
              pelo ingresso de novas instituições e negócios ao grupo.
              <br />
              <br />
              Estamos estruturados em três grandes unidades de negócio [inserir
              link] - Ensino Presencial, Digital e Operações premium - e
              contamos com uma equipe corporativa multidisciplinar, que reúne,
              entre outras atividades, as de Finanças, Marketing, TI e Gente &
              Gestão.
              <br />
              <br />
              Temos a EnsineMe, unidade de conteúdos e metodologias digitais e
              coloca a Yduqs na dianteira da pesquisa, desenvolvimento e
              produção de conhecimento para nossos cursos.
            </p>
          </div>
        </article>

        <aside className="w-full bg-primary-500 pb-20 text-white">
          <div className="m-auto mb-16 mt-16 flex max-w-[860px] flex-col px-[7%]">
            <strong className="mb-8 text-3xl text-secondary-500">
              Conheça as instituições que integram o nosso grupo:
            </strong>

            <p className="mb-8 text-lg">
              Clique aqui para baixar a lista de IES.
            </p>

            <Institution
              img="estacio.png"
              text=" A Estácio é um dos maiores players do ensino superior brasileiro
                e, desde 1970, sinônimo quando falamos de acesso das classes CDE
                a uma educação de excelência. A maior parte dos seus alunos é o
                primeiro da família a ingressar no ensino superior. Hoje, está
                em plena expansão com seu ensino digital, presente em todos os
                municípios brasileiros com mais de 50 mil habitantes. Além
                disso, possui um dos mais sólidos e atuantes programas de
                responsabilidade social do país e apoia projetos nas áreas de
                educação, cultura, esporte e cidadania."
            />

            <Institution
              img="ibmec.png"
              text="Ibmec é uma das principais escolas de negócios do Brasil,
              presente em São Paulo, Brasília, Minas Gerais e Rio de Janeiro,
              com unidades próprias, e em todo o País via e-learning. Desde
              1970, coleciona histórias de sucesso de alunos ao lançar
              empreendedores bem-preparados e líderes que se destacam entre os
              mais disputados executivos do mercado. Sua proposta pedagógica
              propõe, ao longo de toda a jornada do aluno, o desenvolvimento
              das competências e habilidades socioemocionais exigidas dos
              profissionais do futuro."
            />

            <Institution
              img="unitoledo.png"
              text="O Centro Universitário UniToledo, com sede em Araçatuba (SP), é
              uma das instituições de ensino superior de maior prestígio e
              credibilidade do estado de São Paulo, com elevados indicadores
              de qualidade e cursos de projeção nacional. Com um ensino de
              excelência, aliando tradição, inovação e evolução tecnológica, o
              UniToledo, desde 1968, constrói sua história por meio da
              valorização do ser humano e da oferta de profissionais
              qualificados e preparados para solucionar os problemas da
              sociedade."
            />

            <Institution
              img="damasio.png"
              text="Reconhecida nacionalmente como uma das instituições mais
              conceituadas no campo do Direito, Damásio oferece uma jornada
              completa para a carreira jurídica. São programas de
              pós-graduação, preparação para carreiras públicas e correlatas,
              além de preparação para o exame da Ordem dos Advogados do Brasil
              (OAB). Conta também com a Faculdade Damásio, formando bacharéis
              de Direito com excelência."
            />

            <Institution
              img="clio.png"
              text="Fundado em 2003, é hoje a grande referência nacional na
              preparação para as carreiras diplomáticas. Entre 2011 e 2018,
              100% dos aprovados no Instituto Rio Branco, o centro de formação
              de diplomatas do Ministério das Relações Exteriores, foram
              alunos do Clio."
            />

            <Institution
              img="wyden.png"
              text="A Wyden reúne nove instituições de ensino, com presença
              concentrada nas regiões Nordeste e Norte e mais de 50 mil
              alunos. É composta pelas seguintes instituições: UniFacid,
              UniFanor, UniFBV, UniRuy, Faculdade Martha Falcão, UniFavip,
              UniMetrocamp, Facimp e Faci. São instituições de ensino
              referência em suas cidades, com elevados índices de qualidade."
            />

            <Institution
              img="qconcursos.png"
              text="Uma das mais inovadoras e dinâmicas edtechs do país, Qconcursos
              se destaca no segmento de educação continuada, com preparatórios
              para concursos, avaliações e guias de estudos. O Qconcursos
              torna o preparo para concursos mais prático, por meio de um
              ambiente digital que integra todas as etapas de estudo e
              direciona o que a pessoa precisa estudar, apontando soluções que
              potencializam seu desempenho."
            />

            <Institution
              img="sjt-med.png"
              text="  Fundado em 1999, o SJT MED se tornou referência no país com o
              compromisso de preparar e instruir os alunos de Medicina para
              aprovação nas provas de Residência Médica e em cursos de
              conhecimento específico."
              lined={false}
            />
          </div>
        </aside>
      </section>
    </div>
  );
}
