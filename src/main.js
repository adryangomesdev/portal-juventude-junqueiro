/**
 * Portal Juventude Junqueiro
 * Vanilla JS SPA Engine
 */

import "./index.css";

// --- DATABASE / STATE ---

const PLATFORMS = [
  {
    id: "id-jovem",
    name: "ID Jovem",
    category: "Cidadania",
    url: "https://idjovem.juventude.gov.br/",
    description:
      "Documento digital gratuito que garante ao jovem de baixa renda meia-entrada em eventos culturais e esportivos e vagas gratuitas ou com desconto em viagens interestaduais.",
    icon: "id-card",
    color: "blue",
  },
  {
    id: "escola-virtual",
    name: "Escola Virtual Gov",
    category: "Educação",
    url: "https://www.escolavirtual.gov.br/",
    description:
      "Plataforma do Governo Federal com centenas de cursos online gratuitos e certificados nas áreas de gestão, tecnologia, cidadania e desenvolvimento profissional.",
    icon: "graduation-cap",
    color: "emerald",
  },
  {
    id: "oxetech",
    name: "OxeTech",
    category: "Tecnologia",
    url: "https://oxetech.al.gov.br/",
    description:
      "Programa do Governo de Alagoas de formação em tecnologia, com trilhas em programação, dados e inovação, conectando jovens ao mercado digital.",
    icon: "code",
    color: "indigo",
  },
  {
    id: "mec-idiomas",
    name: "MEC Idiomas",
    category: "Idiomas",
    url: "https://www.gov.br/mec/pt-br/mec-idiomas",
    description:
      "Cursos gratuitos de idiomas oferecidos pelo Ministério da Educação para ampliar oportunidades acadêmicas e profissionais.",
    icon: "languages",
    color: "violet",
  },
  {
    id: "mec-enem",
    name: "MEC ENEM",
    category: "Educação",
    url: "https://www.gov.br/mec/pt-br/mec-enem",
    description:
      "Materiais oficiais de preparação para o ENEM: videoaulas, simulados e conteúdo de revisão para conquistar uma vaga no ensino superior.",
    icon: "book-open",
    color: "amber",
  },
  {
    id: "mec-livros",
    name: "MEC Livros",
    category: "Educação",
    url: "https://www.gov.br/mec/pt-br/mec-livros",
    description:
      "Biblioteca digital do MEC com livros e materiais didáticos gratuitos para estudantes de todos os níveis.",
    icon: "library",
    color: "cyan",
  },
  {
    id: "escola-solano",
    name: "Escola Solano Trindade",
    category: "Cultura",
    url: "https://escult.cultura.gov.br/",
    description:
      "Formação gratuita em cultura, arte e economia criativa, voltada à profissionalização de agentes culturais e jovens produtores.",
    icon: "palette",
    color: "rose",
  },
  {
    id: "senac-gratuidade",
    name: "Programa Senac Gratuidade",
    category: "Educação",
    url: "https://www.ead.senac.br/gratuito/",
    description:
      "Cursos técnicos e de qualificação profissional totalmente gratuitos oferecidos pelo Senac na modalidade EAD.",
    icon: "briefcase",
    color: "orange",
  },
];

const NEWS = [
  {
    id: "news-1",
    title:
      "A SECRETARIA DA JUVENTUDE JUNTO COM A PREFEITURA MUNICIPAL DE JUNQUEIRO REALIZOU O II FESTIVAL DA JUVENTUDE",
    category: "EVENTO",
    date: "10 de agosto de 2026",
    summary:
      "O II Festival da Juventude de Junqueiro movimenta o mês de agosto com um extenso cronograma de atividades culturais, esportivas e ações de capacitação, destacando a inclusão social e o protagonismo jovem.",
    content:
      "O II Festival da Juventude de Junqueiro teve sua grande abertura no dia 31 de julho, marcada por um desfile pelas ruas da cidade que reuniu escolas e parceiros em torno do tema da <strong>juventude inclusiva</strong>, com destaque para a participação e valorização das Pessoas com Deficiência (PCD). A programação se estende por todo o mês de agosto e já contou com momentos marcantes como a Gincana Interescolar, realizada no Ginásio de Esportes, além de diversas atividades culturais, competições esportivas e homenagens a personalidades locais.<br><br>Mais do que celebração, o festival também foca no futuro dos jovens. O evento é palco para a entrega de certificados de cursos profissionalizantes promovidos em parceria com o Senac, reafirmando o compromisso do município em capacitar e abrir novas portas para a juventude junqueirense.",
    image: "/juventude_group.png",
  },
  {
    id: "news-2",
    title:
      "MAIS UM CURSO ENTREGUE AOS JOVENS DE JUNQUEIRO PELA SECRETARIA DA JUVENTUDE",
    category: "Cursos",
    date: "31 de Julho de 2026",
    summary:
      "A parceria entre a Secretaria da Juventude de Junqueiro e o Senac formou novos profissionais através do curso de Técnicas de Maquiagem de 40 horas, cujos certificados foram entregues com destaque durante o II Festival da Juventude.",
    content:
      "O curso de Técnicas de Maquiagem, realizado através de uma sólida parceria entre a Secretaria Municipal de Juventude de Junqueiro e o Senac, ofereceu uma imersão prática com 40 horas de duração voltada para a qualificação profissional e geração de renda rápida. A iniciativa capacita os participantes com as tendências e habilidades práticas exigidas pelo mercado da beleza, incentivando o empreendedorismo e a autonomia financeira. O sucesso e o encerramento dessa jornada de aprendizado foram celebrados em grande estilo durante a programação do II Festival da Juventude, momento em que os alunos formandos participaram da entrega simbólica de seus certificados, marcando um novo e promissor capítulo em suas carreiras profissionais.",
    image: "/assistente_adm_otm.png",
  },
  {
    id: "news-3",
    title:
      "PARCERIA COM O SENAC TRAZ CURSOS DE ASSISTENTE ADMINISTRATIO E DE MARKETING E VENDAS PARA A JUVENTUDE DE JUNQUEIRO",
    category: "Cursos",
    date: "01 de Julho de 2026",
    summary:
      "Com 160 horas de duração, as novas qualificações oferecidas pelo Senac chegam para preparar os jovens com habilidades essenciais para o mercado de trabalho local e regional.",
    content:
      "A parceria de sucesso entre a Secretaria Municipal de Juventude e o Senac continua a gerar oportunidades transformadoras com a oferta dos cursos de <strong>Assistente Administrativo</strong> e <strong>Assistente de Marketing e Vendas</strong>. Com uma robusta carga horária de 160 horas, as formações foram estruturadas para oferecer um preparo completo, unindo teoria e prática para desenvolver as competências mais exigidas pelo atual mercado de trabalho. Para garantir o sucesso e a acessibilidade da iniciativa, a Secretaria organizou toda a articulação logística necessária para a permanência dos jovens no projeto e planejou as aulas para acontecerem nas instalações da Escola Estadual Padre Aurélio Góis. Essa união de esforços reafirma o compromisso contínuo do município em transformar a realidade dos nossos jovens através da educação e da qualificação profissional de excelência.",
    image: "/marketing_e_vendas.png",
  },
  {
    id: "news-4",
    title:
      "ARRAIÁ DA JUVENTUDE: TRADIÇÃO JUNINA E TORCIDA VERDE E AMARELA NO DIA DE SÃO JOÃO",
    category: "Educação",
    date: "24 de Junho de 2026",
    summary:
      "O Arraiá da Juventude do dia 24 de junho unirá as tradições do Dia de São João à transmissão do jogo do Brasil na Copa do Mundo, reunindo os jovens com comidas típicas, quadrilhas e muita torcida.",
    content:
      "No dia 24 de junho, o Arraiá da Juventude promete movimentar a galera ao unir a magia do Dia de São João com a emoção contagiante do jogo da Seleção Brasileira na Copa do Mundo. Em uma celebração vibrante que mistura o verde e amarelo às clássicas bandeirinhas coloridas, o evento contará com transmissão ao vivo da partida em telão, comidas típicas, apresentações de quadrilhas e muita música para embalar a torcida. É a fusão perfeita entre a riqueza da nossa cultura popular e a paixão pelo futebol, reunindo os jovens em um ambiente de pura alegria, união e celebração.",
    image: "/arraia.png",
  },
  {
    id: "news-6",
    title:
      "AULÃO VEM QUE TEM ENEM LOTA TEATRO SÃO JOSÉ COM SUPER TIME DE PROFESSORES",
    category: "Educação",
    date: "13 de Junho de 2026",
    summary:
      "Realizado na manhã do dia 13 de junho, a nova edição do Aulão reuniu especialistas das Ciências da Natureza e Humanas no Teatro São José, oferecendo preparação intensiva e suporte completo aos jovens.",
    content:
      "A manhã do dia 13 de junho de 2026 foi superada por muito aprendizado no Teatro São José, que sediou mais uma edição de sucesso do Aulão Vem Que Tem ENEM. Promovido em forte parceria com a Secretaria da Juventude, o evento mobilizou toda a equipe para garantir um ambiente acolhedor, com controle de acesso organizado, distribuição de materiais didáticos e lanches para os estudantes. No palco, a preparação de excelência ficou por conta de um verdadeiro super time de professores: Jessica Moreira (Biologia), Tryciany (Química), Eudes (Sociologia), Nivaldo (Física), Clézia (Geografia), Davi Silva (História) e Wanderlan (Filosofia). Essa grande maratona de aulas integrou as áreas de Ciências da Natureza e Humanas, proporcionando aos jovens de Junqueiro uma imersão completa de conhecimentos, dicas valiosas e muita motivação para a reta final rumo ao ensino superior.",
    image: "/aulao_1.png",
  },
  {
    id: "news-7",
    title:
      "PROJETO 'TRILHA DA JUVENTUDE: JUVENTUDE CONECTADA' LEVA MAIS DE MIL ALUNOS À LAGOA DO RETIRO",
    category: "Conscientização",
    date: "22 de maio de 2026",
    summary:
      "Em uma grande imersão ecológica e cultural durante o mês de maio, o projeto mobilizou estudantes para valorizar a fauna, a flora e a tradição do artesanato de junco em Junqueiro.",
    content:
      "A Lagoa do Retiro foi palco de um momento histórico de educação socioambiental com a realização da <strong>Trilha da Juventude: Juventude Conectada</strong>. Durante os dias 13, 14, 15, 20, 21 e 22 de maio, a iniciativa da Secretaria Municipal de Juventude reuniu mais de mil estudantes em uma verdadeira expedição ecológica. O evento foi realizado em forte parceria com a Escola Estadual Padre Aurélio Góis, a Escola Estadual Maria Liege de Albuquerque Tavares e a Escola Municipal de Educação Básica Integral Agrícola São Francisco de Assis, proporcionando aos jovens um aprendizado prático e profundo sobre a rica fauna e flora do município. Indo além da conscientização e preservação ambiental, o projeto resgatou as raízes e a identidade da região ao promover uma vivência especial sobre a cultura do junco e a tradicional criação de balaios, ensinada por artesãos da própria comunidade, conectando o protagonismo da nova geração ao valioso patrimônio histórico da nossa terra.",
    image: "/trilha.png",
  },
  {
    id: "news-8",
    title:
      "MAIO AMARELO: SECRETARIA DA JUVENTUDE E SEGURANÇA PROMOVEM BLITZ EDUCATIVA DE TRÂNSITO",
    category: "Conscientização",
    date: "11 de Maio de 2026",
    summary:
      "Ação realizada no dia 11 de maio uniu secretarias em uma mobilização com panfletagem e cartazes para conscientizar motoristas e pedestres sobre a prevenção de acidentes.",
    content:
      "Em prol de um trânsito mais seguro e responsável, a Secretaria Municipal da Juventude uniu forças com a Secretaria de Segurança para promover uma grande mobilização da campanha Maio Amarelo no dia 11 de maio de 2026. A ação contou com uma blitz educativa pelas ruas da cidade, na qual foram distribuídos panfletos informativos e exibidos cartazes de conscientização para alertar a população sobre os riscos e a prevenção de acidentes. Durante as abordagens, as equipes reforçaram dicas vitais para o dia a dia: respeitar rigorosamente a sinalização e os limites de velocidade, nunca utilizar o celular ao volante, garantir o uso do cinto de segurança por todos os passageiros e, no caso dos motociclistas, utilizar o capacete corretamente afivelado. A presença ativa da juventude na campanha reforçou a mensagem de que a empatia e as atitudes preventivas são os melhores caminhos para preservar vidas nas vias do nosso município.",
    image: "/maio_amarelo.png",
  },
  {
    id: "news-9",
    title:
      "SUCESSO DE PÚBLICO: 2ª EDIÇÃO DO AULÃO VEM QUE TEM ENEM FORTALECE PREPARAÇÃO DOS JOVENS",
    category: "Educação",
    date: "25 de Abril de 2026",
    summary:
      "A 2ª edição do Aulão Vem Que Tem ENEM reuniu centenas de jovens no dia 25 de abril para um dia intenso de preparação gratuita com grandes especialistas em Matemática, Redação e História.",
    content:
      "A preparação para o acesso ao ensino superior ganhou um reforço de peso com a realização da 2ª edição do Aulão Vem Que Tem ENEM, ocorrida com grande sucesso no dia 25 de abril de 2026. Organizado com foco total na excelência acadêmica e apoio aos jovens do nosso município, o evento ofereceu aulas estratégicas e dinâmicas com um time de professores de destaque: Fabrício Lima desmistificando a Matemática, Isabel Guedes compartilhando as técnicas essenciais para uma Redação nota mil, e Davi Silva trazendo abordagens aprofundadas em História. Mais do que apenas repassar conteúdos, o aulão foi um momento fundamental de incentivo, troca de experiências e fortalecimento da confiança dos nossos estudantes na reta de preparação para o exame nacional.",
    image: "/aulao_2.png",
  },
  {
    id: "news-10",
    title:
      "PROJETO 'MÃOS DADAS COM A JUVENTUDE' LEVA LIGA DE BASQUETE PARA RODADA OFICIAL NO SEST SENAT",
    category: "esportes",
    date: "12 de Abril de 2026",
    summary:
      "No dia 12 de abril, uma parceria inédita garantiu que os jovens atletas junqueirenses vivenciassem a experiência de disputar o campeonato em uma quadra profissional de alto padrão.",
    content:
      "O esporte local vivenciou um momento de grande valorização no dia 12 de abril de 2026, impulsionado pelas ações do projeto <strong>'Mãos Dadas com a Juventude'</strong>. Através de uma importante parceria firmada com o SEST SENAT, a Secretaria da Juventude proporcionou à Liga de Basquete junqueirense a oportunidade única de realizar uma rodada oficial do seu campeonato nas instalações esportivas profissionais da instituição, localizada no município vizinho de Teotônio Vilela. Essa iniciativa elevou o nível da competição e garantiu aos nossos atletas a experiência motivadora de atuar em uma quadra de excelência técnica. A ação reforça o compromisso da gestão em incentivar o esporte, apoiar os talentos locais e buscar parcerias regionais que ampliem os horizontes e as vivências da nossa juventude.",
    image: "/maos_dadas.png",
  },
];

const TESTIMONIALS = [
  {
    name: "Mateus Santos",
    age: "19 anos",
    location: "Centro",
    program: "OxeTech Alagoas",
    quote:
      "Graças à trilha de programação do OxeTech e com o apoio dos computadores do Espaço Juventude Tech, consegui meu primeiro estágio remoto como programador júnior. Uma oportunidade incrível que mudou meu caminho!",
    avatar: "M",
  },
  {
    name: "Camila Oliveira",
    age: "21 anos",
    location: "Povoado Retiro",
    program: "ID Jovem",
    quote:
      "O ID Jovem transformou minha rotina. Agora viajo de graça para fazer as provas e seleções de emprego em Maceió e Arapiraca. Economizo uma grana pesada que ajuda muito em casa.",
    avatar: "C",
  },
  {
    name: "Douglas Silva",
    age: "18 anos",
    location: "Chã do Pilar",
    program: "MEC ENEM & Livros",
    quote:
      "Os simulados e as videoaulas oficiais me deram o ritmo que eu precisava para a prova. Consegui passar em Administração Pública e recomendo demais as plataformas gratuitas!",
    avatar: "D",
  },
  {
    name: "Rafaela Cavalcante",
    age: "23 anos",
    location: "Usina Uruba",
    program: "Escola Solano Trindade",
    quote:
      "Fiz o curso gratuito de Economia Criativa na Escola Solano Trindade e hoje gerencio o marketing digital do artesanato de palha da minha comunidade. Abriu os meus olhos para o empreendedorismo.",
    avatar: "R",
  },
];

// --- SVG ICON PROVIDER ---

function getSvgIcon(name, customClass = "h-5 w-5") {
  const icons = {
    "id-card": `<svg class="${customClass}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.333 0 4 .667 4 2v1H5v-1c0-1.333 2.667-2 4-2z"/></svg>`,
    "graduation-cap": `<svg class="${customClass}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-5.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>`,
    code: `<svg class="${customClass}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>`,
    languages: `<svg class="${customClass}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 11.37 7.31 16.5 3 18.75" /></svg>`,
    "book-open": `<svg class="${customClass}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>`,
    library: `<svg class="${customClass}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>`,
    palette: `<svg class="${customClass}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>`,
    briefcase: `<svg class="${customClass}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>`,
    calendar: `<svg class="${customClass}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>`,
    phone: `<svg class="${customClass}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>`,
    mail: `<svg class="${customClass}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>`,
    "map-pin": `<svg class="${customClass}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>`,
    search: `<svg class="${customClass}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>`,
    "arrow-right": `<svg class="${customClass}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>`,
    "check-circle": `<svg class="${customClass}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
    award: `<svg class="${customClass}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>`,
    info: `<svg class="${customClass}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
    instagram: `<svg class="${customClass}" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>`,
  };
  return (
    icons[name] ||
    `<svg class="${customClass}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`
  );
}

function getColorClasses(colorName) {
  const map = {
    blue: {
      bg: "bg-blue-50 text-blue-700 border-blue-100",
      pill: "bg-[#092986]/10 text-[#092986]",
      hover: "hover:border-blue-300 hover:shadow-blue-50",
    },
    emerald: {
      bg: "bg-emerald-50 text-emerald-700 border-emerald-100",
      pill: "bg-emerald-100 text-emerald-800",
      hover: "hover:border-emerald-300 hover:shadow-emerald-50",
    },
    indigo: {
      bg: "bg-indigo-50 text-indigo-700 border-indigo-100",
      pill: "bg-indigo-100 text-indigo-800",
      hover: "hover:border-indigo-300 hover:shadow-indigo-50",
    },
    violet: {
      bg: "bg-violet-50 text-violet-700 border-violet-100",
      pill: "bg-violet-100 text-violet-800",
      hover: "hover:border-violet-300 hover:shadow-violet-50",
    },
    amber: {
      bg: "bg-amber-50 text-amber-700 border-amber-100",
      pill: "bg-amber-100 text-amber-800",
      hover: "hover:border-amber-300 hover:shadow-amber-50",
    },
    cyan: {
      bg: "bg-cyan-50 text-cyan-700 border-cyan-100",
      pill: "bg-cyan-100 text-cyan-800",
      hover: "hover:border-cyan-300 hover:shadow-cyan-50",
    },
    rose: {
      bg: "bg-rose-50 text-rose-700 border-rose-100",
      pill: "bg-rose-100 text-rose-800",
      hover: "hover:border-rose-300 hover:shadow-rose-50",
    },
    orange: {
      bg: "bg-orange-50 text-orange-700 border-orange-100",
      pill: "bg-orange-100 text-orange-800",
      hover: "hover:border-orange-300 hover:shadow-orange-50",
    },
  };
  return map[colorName] || map.blue;
}

// --- APP ROUTING & CORE ENGINE ---

const appContainer = document.getElementById("app");

// Hamburger Menu Toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-icon");

if (mobileMenuBtn && mobileMenu && hamburgerIcon && closeIcon) {
  mobileMenuBtn.addEventListener("click", () => {
    const isHidden = mobileMenu.classList.contains("hidden");
    if (isHidden) {
      mobileMenu.classList.remove("hidden");
      hamburgerIcon.classList.add("hidden");
      closeIcon.classList.remove("hidden");
    } else {
      mobileMenu.classList.add("hidden");
      hamburgerIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    }
  });

  // Close menu on navigation click
  document.addEventListener("click", (e) => {
    if (e.target.closest(".mobile-nav-link")) {
      mobileMenu.classList.add("hidden");
      hamburgerIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    }
  });
}

// Highlight Current Active Navigation Link
function updateNavigationActiveState(route) {
  // Desktop Header Links
  const links = document.querySelectorAll(".nav-link");
  links.forEach((link) => {
    const dataRoute = link.getAttribute("data-route");
    if (dataRoute === route) {
      link.classList.remove("text-slate-600");
      link.classList.add("text-[#092986]", "bg-slate-100/80");
    } else {
      link.classList.add("text-slate-600");
      link.classList.remove("text-[#092986]", "bg-slate-100/80");
    }
  });

  // Mobile Menu Links
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");
  mobileLinks.forEach((link) => {
    const dataRoute = link.getAttribute("data-route");
    if (dataRoute === route) {
      link.classList.remove("text-slate-700");
      link.classList.add(
        "text-[#092986]",
        "bg-blue-50/50",
        "border-l-4",
        "border-[#092986]",
      );
    } else {
      link.classList.add("text-slate-700");
      link.classList.remove(
        "text-[#092986]",
        "bg-blue-50/50",
        "border-l-4",
        "border-[#092986]",
      );
    }
  });
}

// Show standard elegant toast notifications
function triggerToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const id = "toast-" + Math.random().toString(36).substr(2, 9);
  const color = type === "success" ? "bg-emerald-600" : "bg-red-600";
  const icon = type === "success" ? "check-circle" : "info";

  const toastHtml = `
    <div id="${id}" class="flex items-center gap-3 p-4 bg-slate-900 text-white rounded-xl shadow-2xl border border-slate-800 transition-all duration-300 transform translate-y-2 opacity-0 pointer-events-auto max-w-sm">
      <div class="h-6 w-6 text-emerald-400 shrink-0">
        ${getSvgIcon(icon, "h-6 w-6")}
      </div>
      <p class="text-sm font-medium leading-tight">${message}</p>
      <button onclick="document.getElementById('${id}').remove()" class="text-slate-400 hover:text-white font-bold ml-2 text-lg">×</button>
    </div>
  `;

  container.insertAdjacentHTML("beforeend", toastHtml);

  // Trigger Animation Frame
  setTimeout(() => {
    const element = document.getElementById(id);
    if (element) {
      element.classList.remove("translate-y-2", "opacity-0");
    }
  }, 50);

  // Auto Dismiss
  setTimeout(() => {
    const element = document.getElementById(id);
    if (element) {
      element.classList.add("opacity-0", "translate-y-1");
      setTimeout(() => element.remove(), 300);
    }
  }, 4500);
}

// Open News Details Modal Popup
window.openNewsModal = function (id) {
  const newsItem = NEWS.find((item) => item.id === id);
  if (!newsItem) return;

  const existingModal = document.getElementById("news-modal");
  if (existingModal) existingModal.remove();

  const modalHtml = `
    <!-- DIV PRINCIPAL DO MODAL (Fundo escuro transparente flutuante) -->
    <div id="news-modal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
      
      <!-- CAIXA BRANCA DO CONTEÚDO -->
      <div class="bg-white rounded-2xl w-full max-w-3xl max-h-[85vh] overflow-y-auto shadow-2xl border border-slate-100 flex flex-col relative animate-scale-up">
        
        <!-- Modal Banner Illustration (Com o ajuste de altura e espaçamento) -->
        <div class="min-h-[12rem] md:min-h-[16rem] pt-12 pb-24 w-full bg-gradient-to-r from-[#092986] to-indigo-800 text-white relative flex items-center justify-center overflow-hidden px-8">
          <div class="absolute inset-0 bg-slate-900/40 mix-blend-multiply"></div>
          <div class="relative z-10 max-w-2xl text-center">
            <span class="inline-block px-3 py-1 bg-[#e6af00] text-slate-950 text-xs font-extrabold uppercase rounded-full tracking-wider mb-2">${newsItem.category}</span>
            <h3 class="text-xl md:text-3xl font-black leading-tight tracking-tight">${newsItem.title}</h3>
          </div>
          <!-- Decorative SVGs -->
          <svg class="absolute bottom-0 left-0 right-0 w-full text-white" viewBox="0 0 1440 120" fill="currentColor"><path d="M0,64L80,80C160,96,320,128,480,128C640,128,800,96,960,74.7C1120,53,1280,43,1360,37.3L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path></svg>
        </div>

        <!-- Sticky close button -->
        <button onclick="document.getElementById('news-modal').remove()" class="absolute top-4 right-4 z-20 bg-slate-900/60 hover:bg-slate-950/80 text-white rounded-full p-2.5 transition-colors shadow focus:outline-none" aria-label="Fechar Modal">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>

        <!-- Modal Body Content -->
        <div class="p-6 md:p-8 space-y-6">
          <div class="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider">
            ${getSvgIcon("calendar", "h-4 w-4")}
            <span>Publicado em: ${newsItem.date}</span>
          </div>

          <div class="text-slate-700 text-base md:text-lg leading-relaxed space-y-4">
            ${newsItem.content}
          </div>

          <hr class="border-slate-100 my-4">

          <div class="flex items-center justify-between flex-wrap gap-4 pt-2">
            <span class="text-xs text-slate-400 font-semibold">Fonte Oficial: Secretaria de Juventude de Junqueiro</span>
            <button onclick="document.getElementById('news-modal').remove()" class="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-sm font-bold transition-colors">
              Fechar Notícia
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", modalHtml);

  // Close on backdrop click
  document.getElementById("news-modal").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
      e.currentTarget.remove();
    }
  });
};

// --- PAGES RENDERERS ---

// 1. HOME PAGE RENDERER
function renderHome() {
  updateNavigationActiveState("home");

  // Filter 4 platforms for rapid showcase on Home
  const featuredPlatforms = PLATFORMS.slice(0, 4);

  let platformsGridHtml = "";
  featuredPlatforms.forEach((p) => {
    const colors = getColorClasses(p.color);
    platformsGridHtml += `
      <div class="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between ${colors.hover}">
        <div>
          <div class="flex items-center justify-between mb-4">
            <div class="p-3.5 rounded-xl ${colors.bg}">
              ${getSvgIcon(p.icon, "h-6 w-6")}
            </div>
            <span class="px-2.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider ${colors.pill}">
              ${p.category}
            </span>
          </div>
          <h4 class="text-xl font-bold text-slate-900 mb-2 leading-tight">${p.name}</h4>
          <p class="text-sm text-slate-500 leading-relaxed line-clamp-3">${p.description}</p>
        </div>
        <div class="pt-6 border-t border-slate-50 mt-5 flex items-center justify-between">
          <span class="text-xs text-slate-400 font-semibold">Inscrições abertas</span>
          <a href="${p.url}" target="_blank" rel="noopener" class="text-sm font-extrabold text-[#092986] hover:text-blue-800 flex items-center gap-1 group/btn">
            <span>Acessar portal</span>
            <span class="transition-transform group-hover/btn:translate-x-1">${getSvgIcon("arrow-right", "h-4 w-4")}</span>
          </a>
        </div>
      </div>
    `;
  });

  let newsHtml = "";
  NEWS.slice(0, 3).forEach((news) => {
    newsHtml += `
      <div onclick="openNewsModal('${news.id}')" class="bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group flex flex-col justify-between">
        <div class="p-6">
          <div class="flex items-center justify-between mb-3 text-xs font-bold uppercase text-slate-400 tracking-wider">
            <span class="text-[#092986] font-extrabold">${news.category}</span>
            <span>${news.date}</span>
          </div>
          <h4 class="text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-[#092986] transition-colors">${news.title}</h4>
          <p class="text-sm text-slate-500 leading-relaxed line-clamp-3">${news.summary}</p>
        </div>
        <div class="p-4 bg-slate-50 border-t border-slate-100/50 flex items-center justify-between text-xs font-bold text-slate-600">
          <span>Ver detalhes do comunicado</span>
          <span class="text-[#092986] transition-transform group-hover:translate-x-1">${getSvgIcon("arrow-right", "h-4.5 w-4.5")}</span>
        </div>
      </div>
    `;
  });

  let testimonialHtml = "";
  TESTIMONIALS.slice(0, 2).forEach((t) => {
    testimonialHtml += `
      <div class="bg-slate-900 text-slate-100 p-6 rounded-2xl border border-slate-800 shadow-lg flex flex-col justify-between relative overflow-hidden">
        <div class="absolute -right-3 -top-3 text-slate-800 text-7xl font-black opacity-30 select-none">“</div>
        <p class="text-sm italic leading-relaxed mb-6 text-slate-300 relative z-10">
          "${t.quote}"
        </p>
        <div class="flex items-center gap-3">
          <div class="h-10 w-10 rounded-full bg-[#e6af00] text-slate-900 flex items-center justify-center font-black text-base uppercase shrink-0">
            ${t.avatar}
          </div>
          <div>
            <h5 class="text-sm font-bold text-white leading-none">${t.name}</h5>
            <p class="text-xs text-slate-400 mt-1">${t.age} • ${t.location} (${t.program})</p>
          </div>
        </div>
      </div>
    `;
  });

  appContainer.innerHTML = `
  <!-- HERO SECTION WITH BLUE BANNER -->
      <section class="bg-gradient-to-r from-[#092986] to-[#0d3ba3] text-white py-16 md:py-24 relative overflow-hidden">
        <!-- Imagem de Fundo Adicionada (Juventude) -->
        <img src="/juventude_group.png" alt="Festival da Juventude" class="absolute inset-0 w-full h-full object-cover blur-[1px] opacity-40 mix-blend-overlay z-0" />
      
        <!-- Background overlay design grids -->
        <div class="absolute inset-0 bg-grid-white/[0.04] bg-[size:32px_32px] z-10"></div>
        <div class="absolute -right-10 -bottom-10 w-80 h-80 rounded-full bg-[#e6af00] opacity-10 blur-3xl z-10"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div class="lg:col-span-8 text-lef  t space-y-6">
            <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#e6af00]/20 border border-[#e6af00]/30 text-[#e6af00] text-xs font-extrabold uppercase rounded-full tracking-wider animate-pulse">
              <span class="h-2 w-2 bg-[#e6af00] rounded-full"></span>
              Secretaria Municipal de Juventude
            </span>
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none text-white max-w-4xl">
            Conectando a Juventude às <span class="text-[#e6af00]">Melhores Oportunidades</span>
            </h1>
            <p class="text-lg md:text-xl text-blue-100 leading-relaxed max-w-2xl">
              Cursos de capacitação, primeiro emprego, cultura e esporte. Tudo o que você precisa para dar o próximo passo no seu futuro, em um só lugar.
            </p>
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a href="#/oportunidades" class="px-8 py-4 bg-[#e6af00] text-slate-900 hover:bg-[#ffc400] rounded-xl text-base font-extrabold text-center shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
                <span>Ver Oportunidades Abertas</span>
                ${getSvgIcon("arrow-right", "h-5 w-5 stroke-[2.5]")}
              </a>
              <a href="#/sobre" class="px-8 py-4 bg-transparent border-2 border-white/60 text-white hover:bg-white/10 rounded-xl text-base font-bold text-center transition-colors">
                Conhecer a Secretaria
              </a>
            </div>
          </div>

          <!-- Highlight image representation / visual side section -->
          <div class="lg:col-span-4 hidden lg:block">
            <div class="bg-white/10 p-6 rounded-3xl border border-white/20 backdrop-blur-md shadow-2xl space-y-4 max-w-sm ml-auto relative">
              <div class="flex items-center gap-3">
                <div class="h-10 w-10 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                  ${getSvgIcon("award", "h-5.5 w-5.5")}
                </div>
                <div>
                  <h3 class="font-bold text-sm leading-tight">Capacitação Gratuita</h3>
                  <p class="text-xs text-blue-200">Trilhas de formação digital</p>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <div class="h-10 w-10 rounded-full bg-[#e6af00] flex items-center justify-center text-slate-900">
                  ${getSvgIcon("id-card", "h-5.5 w-5.5")}
                </div>
                <div>
                  <h3 class="font-bold text-sm leading-tight">Cultura e Lazer</h3>
                  <p class="text-xs text-blue-200">ID Jovem e meia-entrada</p>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <div class="h-10 w-10 rounded-full bg-cyan-400 flex items-center justify-center text-slate-900">
                  ${getSvgIcon("languages", "h-5.5 w-5.5")}
                </div>
                <div>
                  <h3 class="font-bold text-sm leading-tight">Idiomas Sem Custos</h3>
                  <p class="text-xs text-blue-200">Inglês e Espanhol oficiais</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    
    <div class="w-full h-4 md:h-6 relative z-10 bg-[url('/barra_prefeitura.png')] bg-repeat-x bg-contain bg-center"></div>

    <!-- PILARS/QUICK HIGHLIGHTS FASTRACK -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="bg-white rounded-2xl p-5 border border-slate-100 shadow-md flex flex-col items-center text-center space-y-2 group hover:shadow-lg transition-all">
          <div class="p-3 bg-blue-50 text-[#092986] rounded-xl group-hover:bg-[#092986] group-hover:text-white transition-colors">
            ${getSvgIcon("graduation-cap", "h-6 w-6")}
          </div>
          <h3 class="font-bold text-slate-900 text-sm md:text-base leading-tight">Capacitação</h3>
          <p class="text-xs text-slate-400">Cursos com Certificados</p>
        </div>
        <div class="bg-white rounded-2xl p-5 border border-slate-100 shadow-md flex flex-col items-center text-center space-y-2 group hover:shadow-lg transition-all">
          <div class="p-3 bg-rose-50 text-rose-600 rounded-xl group-hover:bg-rose-600 group-hover:text-white transition-colors">
            ${getSvgIcon("palette", "h-6 w-6")}
          </div>
          <h3 class="font-bold text-slate-900 text-sm md:text-base leading-tight">Cultura</h3>
          <p class="text-xs text-slate-400">Economia Criativa</p>
        </div>
        <div class="bg-white rounded-2xl p-5 border border-slate-100 shadow-md flex flex-col items-center text-center space-y-2 group hover:shadow-lg transition-all">
          <div class="p-3 bg-violet-50 text-violet-600 rounded-xl group-hover:bg-violet-600 group-hover:text-white transition-colors">
            ${getSvgIcon("languages", "h-6 w-6")}
          </div>
          <h3 class="font-bold text-slate-900 text-sm md:text-base leading-tight">Idiomas</h3>
          <p class="text-xs text-slate-400">Aulas Gratuitas</p>
        </div>
        <div class="bg-white rounded-2xl p-5 border border-slate-100 shadow-md flex flex-col items-center text-center space-y-2 group hover:shadow-lg transition-all">
          <div class="p-3 bg-amber-50 text-amber-600 rounded-xl group-hover:bg-amber-600 group-hover:text-white transition-colors">
            ${getSvgIcon("book-open", "h-6 w-6")}
          </div>
          <h3 class="font-bold text-slate-900 text-sm md:text-base leading-tight">ENEM</h3>
          <p class="text-xs text-slate-400">Preparação Completa</p>
        </div>
      </div>
    </section>

    <!-- AÇÕES DA JUVENTUDE & CAMINHOS DIGITAIS (COMBINADOS) -->
    <section id="acoes-wrapper" class="relative z-20 h-[300vh] bg-slate-50">
      <!-- O contêiner sticky agora agrupa as logos e a seção de plataformas -->
      <div class="sticky top-20 pt-8 pb-4 flex flex-col justify-start overflow-hidden min-h-screen">
        
        <!-- PARTE 1: Ações da Juventude -->
        <div>
          <div class="text-center mb-6 px-4 sm:px-6 lg:px-8">
            <span class="text-sm font-extrabold text-[#092986] uppercase tracking-wider">Iniciativas e Eventos</span>
            <h2 class="text-3xl md:text-4xl font-black text-slate-900 mt-1 leading-tight">Ações da Juventude</h2>
            <p class="text-slate-500 mt-2">Conheça os principais eventos e campanhas promovidos pela nossa Secretaria.</p>
          </div>

          <div id="acoes-track" class="flex items-center gap-12 md:gap-16 px-4 sm:px-6 lg:px-8 w-max transition-transform duration-75 ease-out will-change-transform">
            <div class="shrink-0 h-32 md:h-48 flex items-center justify-center">
              <img src="VOLTA_AS_AULAS.png" alt="Volta às Aulas 2026" class="max-h-full w-auto object-contain hover:scale-105 transition-transform duration-300" />
            </div>
            <div class="shrink-0 h-32 md:h-48 flex items-center justify-center">
              <img src="MAOS_DADAS_LOGO.png" alt="De Mãos Dadas com a Juventude" class="max-h-full w-auto object-contain hover:scale-105 transition-transform duration-300" />
            </div>
            <div class="shrink-0 h-32 md:h-48 flex items-center justify-center">
              <img src="CONEXAO_MAES.png" alt="Conexão Mães" class="max-h-full w-auto object-contain hover:scale-105 transition-transform duration-300" />
            </div>
            <div class="shrink-0 h-32 md:h-48 flex items-center justify-center">
              <img src="CINE_RURAL.png" alt="Cine Rural" class="max-h-full w-auto object-contain hover:scale-105 transition-transform duration-300" />
            </div>
            <div class="shrink-0 h-32 md:h-48 flex items-center justify-center">
              <img src="AULAO_ENEM.png" alt="Aulão Vem Que Tem ENEM" class="max-h-full w-auto object-contain hover:scale-105 transition-transform duration-300" />
            </div>
            <div class="shrink-0 h-32 md:h-48 flex items-center justify-center">
              <img src="MAIO_AMARELO_LOGO.png" alt="Maio Amarelo" class="max-h-full w-auto object-contain hover:scale-105 transition-transform duration-300" />
            </div>
            <div class="shrink-0 h-32 md:h-48 flex items-center justify-center">
              <img src="TRILHA_DA_JUVENTUDE.png" alt="Trilha da Juventude" class="max-h-full w-auto object-contain hover:scale-105 transition-transform duration-300" />
            </div>
            <div class="shrink-0 h-32 md:h-48 flex items-center justify-center">
              <img src="ARRAIA_DA_JUVENTUDE_LOGO.png" alt="Arraiá da Juventude" class="max-h-full w-auto object-contain hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>

        <!-- PARTE 2: Caminhos Digitais (Movida para dentro do sticky) -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 w-full">
          <div class="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 gap-4">
            <div>
              <span class="text-sm font-extrabold text-[#092986] uppercase tracking-wider">Caminhos Digitais</span>
              <h2 class="text-3xl md:text-4xl font-black text-slate-900 mt-1 leading-tight">Principais Plataformas</h2>
              <p class="text-slate-500 mt-2">Explore e inscreva-se nos programas parceiros nacionais e estaduais recomendados pela Secretaria.</p>
            </div>
            <a href="#/oportunidades" class="px-5 py-3 bg-blue-50 text-[#092986] hover:bg-[#092986] hover:text-white rounded-xl text-sm font-extrabold transition-all shrink-0 flex items-center gap-1.5">
              <span>Ver todas as 8 oportunidades</span>
              ${getSvgIcon("arrow-right", "h-4.5 w-4.5")}
            </a>
          </div>

          <!-- Grid Cards -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            ${platformsGridHtml}
          </div>
        </div>

      </div>
    </section>

    <!-- DESTAQUES NOTICIAS E COMPROMISSOS -->
    <section class="bg-slate-100 py-20 border-y border-slate-200/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between mb-12 flex-wrap gap-4">
          <div>
            <span class="text-sm font-extrabold text-[#e6af00] uppercase tracking-wider">Mural Informativo</span>
            <h2 class="text-3xl md:text-4xl font-black text-slate-900 mt-1">Avisos e Notícias Recentes</h2>
            <p class="text-slate-500 mt-2">Acompanhe as ações presenciais, prazos e novidades institucionais da nossa secretaria.</p>
          </div>
          <a href="#/noticias" class="text-sm font-extrabold text-[#092986] hover:underline flex items-center gap-1">
            <span>Ver arquivo de comunicados</span>
            ${getSvgIcon("arrow-right", "h-4.5 w-4.5")}
          </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          ${newsHtml}
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS CALL & CALLOUT -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-slate-900 rounded-3xl overflow-hidden p-8 md:p-12 border border-slate-800 shadow-2xl relative">
        <div class="absolute right-0 top-0 w-96 h-96 bg-[#092986] opacity-30 rounded-full blur-3xl"></div>
        <div class="absolute left-0 bottom-0 w-96 h-96 bg-emerald-500 opacity-10 rounded-full blur-3xl"></div>

        <div class="lg:col-span-5 space-y-6 relative z-10 text-white">
          <span class="px-3 py-1 bg-[#e6af00] text-slate-900 text-xs font-black uppercase rounded-full tracking-wider">Histórias Reais</span>
          <h2 class="text-3xl md:text-4xl font-black leading-tight text-white">Quem faz parte, aprova as oportunidades!</h2>
          <p class="text-slate-400 leading-relaxed">
            Diversos jovens do município já mudaram suas carreiras profissionais e de estudos aproveitando as trilhas gratuitas e serviços ofertados. Veja as histórias!
          </p>
          <div class="pt-2">
            <a href="#/depoimentos" class="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl shadow-lg hover:shadow-emerald-950/20 text-sm inline-flex items-center gap-1.5 transition-all">
              <span>Ler mais depoimentos</span>
              ${getSvgIcon("arrow-right", "h-4 w-4")}
            </a>
          </div>
        </div>

        <div class="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          ${testimonialHtml}
        </div>
      </div>
    </section>

    <!-- MAP/LOCAL CALLOUT ATENDIMENTO -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div class="bg-white rounded-3xl p-6 md:p-10 border border-slate-100 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        <div class="lg:col-span-7 space-y-6">
          <div class="flex items-center gap-2 text-[#092986] font-bold text-sm uppercase tracking-wide">
            ${getSvgIcon("map-pin", "h-5.5 w-5.5")}
            <span>Sede Física da Secretaria</span>
          </div>
          <h3 class="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight">Quer fazer sua inscrição presencialmente ou tirar dúvidas?</h3>
          <p class="text-slate-500 leading-relaxed">
            Se você não tem acesso estável à internet ou precisa de orientação sobre como se cadastrar no ID Jovem, OxeTech ou qualquer plataforma, venha até a Secretaria Municipal de Juventude. Nossa equipe está totalmente à disposição para auxiliar você no passo a passo gratuitamente!
          </p>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-600">
            <div class="flex items-start gap-2.5">
              <span class="h-5 w-5 text-[#092986] shrink-0 mt-0.5">${getSvgIcon("check-circle", "h-5 w-5")}</span>
              <span>Estrutura com computadores de livre acesso.</span>
            </div>
            <div class="flex items-start gap-2.5">
              <span class="h-5 w-5 text-[#092986] shrink-0 mt-0.5">${getSvgIcon("check-circle", "h-5 w-5")}</span>
              <span>Assistência na emissão do NIS e CadÚnico.</span>
            </div>
            <div class="flex items-start gap-2.5">
              <span class="h-5 w-5 text-[#092986] shrink-0 mt-0.5">${getSvgIcon("check-circle", "h-5 w-5")}</span>
              <span>Orientação vocacional e trilhas de estudo.</span>
            </div>
            <div class="flex items-start gap-2.5">
              <span class="h-5 w-5 text-[#092986] shrink-0 mt-0.5">${getSvgIcon("check-circle", "h-5 w-5")}</span>
              <span>Simulados e materiais de apoio impressos.</span>
            </div>
          </div>
        </div>

        <div class="lg:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between space-y-4">
          <div class="space-y-3">
            <h4 class="font-extrabold text-slate-900 text-lg">Informações de Atendimento</h4>
            <p class="text-sm text-slate-500">De segunda a sexta-feira, das 08h às 14h.</p>
            <hr class="border-slate-100">
            <p class="text-sm text-slate-600 leading-relaxed font-medium">
              📍 Rua João de Deus, 76, Junqueiro - AL, 57270-000<br>
              📞 (82) 99130-1648<br>
              ✉️ juventudejunqueiro@gmail.com
            </p>
          </div>
          <a href="#/contato" class="w-full text-center py-3 bg-[#092986] text-white rounded-xl font-bold hover:bg-blue-800 transition-colors block text-sm">
            Enviar Mensagem Online
          </a>
        </div>

      </div>
    </section>
  `;
  initHorizontalScroll();
}

// 2. OPORTUNIDADES PAGE RENDERER
function renderOportunidades() {
  updateNavigationActiveState("oportunidades");

  // Local Category Filter State & Search
  let activeCategory = "Todos";
  let searchQuery = "";

  function getFilteredPlatforms() {
    return PLATFORMS.filter((p) => {
      const matchCat =
        activeCategory === "Todos" || p.category === activeCategory;
      const matchSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }

  function renderGrid() {
    const list = getFilteredPlatforms();
    const gridContainer = document.getElementById("oportunidades-grid");
    if (!gridContainer) return;

    if (list.length === 0) {
      gridContainer.innerHTML = `
        <div class="col-span-full py-16 text-center space-y-4 bg-white rounded-2xl border border-slate-100">
          <div class="text-slate-400 max-w-xs mx-auto flex flex-col items-center">
            ${getSvgIcon("info", "h-12 w-12 text-slate-300 mb-2")}
            <h4 class="text-lg font-bold text-slate-950">Nenhuma oportunidade encontrada</h4>
            <p class="text-sm text-slate-500 mt-1">Experimente alterar os filtros de categoria ou busque por outro termo relevante.</p>
          </div>
          <button id="clear-filters-btn" class="px-5 py-2.5 bg-[#092986] text-white font-extrabold text-sm rounded-xl">
            Limpar todos os filtros
          </button>
        </div>
      `;
      const clearBtn = document.getElementById("clear-filters-btn");
      if (clearBtn) {
        clearBtn.addEventListener("click", () => {
          activeCategory = "Todos";
          searchQuery = "";
          const searchInput = document.getElementById("oportunidades-search");
          if (searchInput) searchInput.value = "";
          renderCategories();
          renderGrid();
        });
      }
      return;
    }

    let gridHtml = "";
    list.forEach((p) => {
      const colors = getColorClasses(p.color);
      gridHtml += `
        <div class="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${colors.hover}">
          <div>
            <div class="flex items-center justify-between mb-4">
              <div class="p-3.5 rounded-xl ${colors.bg}">
                ${getSvgIcon(p.icon, "h-6 w-6")}
              </div>
              <span class="px-2.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider ${colors.pill}">
                ${p.category}
              </span>
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-2 leading-snug">${p.name}</h3>
            <p class="text-sm text-slate-500 leading-relaxed mb-4">${p.description}</p>
          </div>

          <div class="pt-6 border-t border-slate-50 mt-5 space-y-3">
            <a href="${p.url}" target="_blank" rel="noopener" class="w-full py-3 bg-[#092986] hover:bg-blue-800 text-white rounded-xl text-center text-sm font-extrabold shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-1.5">
              <span>Acessar portal oficial</span>
              ${getSvgIcon("arrow-right", "h-4 w-4")}
            </a>
            <div class="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 font-bold uppercase tracking-wider">
              <span class="h-2 w-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span>Acesso Gratuito com Certificado</span>
            </div>
          </div>
        </div>
      `;
    });
    gridContainer.innerHTML = gridHtml;
  }

  function renderCategories() {
    const categories = [
      "Todos",
      "Tecnologia",
      "Educação",
      "Cultura",
      "Cidadania",
      "Idiomas",
    ];
    const container = document.getElementById("oportunidades-categories");
    if (!container) return;

    let html = "";
    categories.forEach((cat) => {
      const isActive = cat === activeCategory;
      const activeClass =
        "bg-[#092986] text-white shadow-md shadow-blue-900/10";
      const inactiveClass =
        "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-100";

      html += `
        <button class="px-5 py-2.5 rounded-xl text-sm font-bold transition-all shrink-0 cursor-pointer ${isActive ? activeClass : inactiveClass}" data-category="${cat}">
          ${cat}
        </button>
      `;
    });
    container.innerHTML = html;

    // Attach listeners
    container.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeCategory = btn.getAttribute("data-category");
        renderCategories();
        renderGrid();
      });
    });
  }

  // Inject Initial Scaffold for Opportunities Page
  appContainer.innerHTML = `
    <!-- Header Banner -->
    <section class="relative overflow-hidden bg-gradient-to-r from-[#092986] to-[#0d3ba3] text-white py-12 border-b border-blue-900/10">
      <img src="/juventude_group.png" alt="Fundo do Banner" class="absolute inset-0 w-full h-full object-cover blur-[2px] opacity-40 mix-blend-overlay z-0" />
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
        <h1 class="text-3xl md:text-5xl font-black tracking-tight leading-none">Plataformas Gratuitas</h1>
        <p class="text-sm md:text-base text-blue-100 leading-relaxed max-w-2xl mx-auto">
          Conecte-se com as principais centrais oficiais de formação e incentivos gratuitas do Governo Federal, Estadual e Serviços Parceiros do SENAC.
        </p>
      </div>
    </section>

    <!-- Filters & Search Toolbar -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <div class="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        
        <!-- Category Pill Tabs -->
        <div id="oportunidades-categories" class="flex items-center gap-2 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0">
          <!-- Categories render dynamically -->
        </div>

        <!-- Search Bar Input -->
        <div class="relative max-w-md w-full shrink-0">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
            ${getSvgIcon("search", "h-5 w-5")}
          </div>
          <input type="text" id="oportunidades-search" placeholder="Buscar oportunidade por nome ou palavra-chave..." class="block w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#092986] focus:border-transparent shadow-sm">
        </div>

      </div>

      <!-- Opportunity Cards Grid -->
      <div id="oportunidades-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Render grid dynamically -->
      </div>
    </section>

    <!-- Quick info card for support -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div class="bg-blue-50 border border-blue-100 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-4 text-left">
        <div class="h-12 w-12 rounded-xl bg-[#092986] flex items-center justify-center text-white shrink-0 shadow">
          ${getSvgIcon("info", "h-6 w-6")}
        </div>
        <div>
          <h4 class="font-bold text-slate-900 text-lg leading-snug">Não consegue realizar sua inscrição ou está sem internet?</h4>
          <p class="text-sm text-slate-600 mt-1 leading-relaxed">
            Visite nossa Sede Física! Oferecemos orientação presencial, material didático de apoio e computadores com internet rápida para que você se inscreva em qualquer uma das plataformas acima sem estresse.
          </p>
        </div>
        <a href="#/contato" class="px-5 py-3 bg-[#092986] text-white font-extrabold text-sm rounded-xl shrink-0 whitespace-nowrap hover:bg-blue-800 transition-colors ml-auto">
          Falar com Assessor
        </a>
      </div>
    </section>
  `;

  // Attach search listener
  const searchInput = document.getElementById("oportunidades-search");
  if (searchInput) {
    searchInput.value = searchQuery;
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderGrid();
    });
  }

  // Kickstart Render
  renderCategories();
  renderGrid();
}

// 3. SOBRE PAGE RENDERER
function renderSobre() {
  updateNavigationActiveState("sobre");

  appContainer.innerHTML = `
    <!-- Header Hero banner -->
    <section class="relative overflow-hidden bg-gradient-to-r from-[#092986] to-[#0d3ba3] text-white py-12">
      <img src="/juventude_group.png" alt="Fundo do Banner" class="absolute inset-0 w-full h-full object-cover blur-[2px] opacity-40 mix-blend-overlay z-0" />  
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
        <h1 class="text-3xl md:text-5xl font-black tracking-tight leading-none">A Secretaria de Juventude</h1>
        <p class="text-sm md:text-base text-blue-100 leading-relaxed max-w-2xl mx-auto">
          Saiba quem somos, nossa missão institucional e como atuamos diariamente para transformar o futuro dos jovens de Junqueiro/AL.
        </p>
      </div>
    </section>

    <!-- Institutional Sections -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      <!-- Split visual description -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div class="lg:col-span-7 space-y-6">
          <div class="inline-flex px-3 py-1 bg-blue-50 text-[#092986] text-xs font-black uppercase rounded-full tracking-wider border border-blue-100">
            Nossa Atuação
          </div>
          <h2 class="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-none">Quem somos e o que fazemos</h2>
          <p class="text-slate-600 leading-relaxed text-base md:text-lg">
            A <strong>Secretaria Municipal de Juventude de Junqueiro/AL</strong> consolida-se como o órgão da administração pública dedicado exclusivamente ao desenvolvimento, representação e fomento de políticas públicas voltadas para os jovens do município. Atuando como uma via de comunicação direta entre a gestão municipal e a população jovem, a Secretaria funciona como um núcleo de planejamento e execução de projetos que visam garantir direitos, promover a cidadania e assegurar a participação ativa das novas gerações nas esferas de decisão e no cotidiano da comunidade.
          </p>
          <p class="text-slate-600 leading-relaxed text-sm md:text-base">
            Nossa atuação fundamenta-se na criação, organização e implementação de oportunidades concretas que impactam a formação cidadã, cultural e socioambiental da juventude junqueirense. O trabalho realizado transcende a formulação teórica, materializando-se em ações de infraestrutura, logística e articulação intersetorial. Atuamos em rede, estabelecendo parcerias institucionais que viabilizam o acesso à educação complementar, à integração social e ao desenvolvimento de lideranças locais de forma estruturada e acessível.
          </p>
            <p class="text-slate-600 leading-relaxed text-sm md:text-base">
              Entre as realizações que ilustram nossa frente de atuação operacional, destaca-se a organização do Festival da Juventude. Em edições recentes, a Secretaria assumiu a coordenação integral deste evento de grande porte, gerenciando desde a logística de transporte para garantir a presença das escolas da região até a formulação dos roteiros cerimoniais oficiais. Este nível de organização assegura que os estudantes de diversas localidades tenham acesso a um espaço democrático, focado na troca de experiências, no debate produtivo e no acesso à cultura.
            </p>

            </p>
            <p class="text-slate-600 leading-relaxed text-sm md:text-base">
             Paralelamente às grandes mobilizações urbanas, a Secretaria atua no fortalecimento da identidade regional e da consciência ecológica, promovendo iniciativas como a Trilha da Juventude. Projetos dessa natureza, exemplificados pela expedição à Lagoa do Retiro, integram a vivência ambiental com o reconhecimento das tradições artesanais de Junqueiro. O gerenciamento dessas ações envolve o planejamento minucioso de cronogramas e parcerias, garantindo uma imersão segura e educativa que conecta os jovens ao patrimônio natural e histórico do município.
            </p>

            </p>
            <p class="text-slate-600 leading-relaxed text-sm md:text-base">
            Em síntese, a Secretaria Municipal da Juventude de Junqueiro é uma plataforma institucional de transformação e suporte. Nosso compromisso contínuo é formular e executar iniciativas que conectem a juventude a oportunidades reais de crescimento, seja por meio da integração escolar em festivais ou do resgate cultural em expedições formativas. Trabalhamos com o rigor logístico e administrativo necessário para entregar projetos que estruturem um caminho sólido para o desenvolvimento dos jovens em nosso município.
            </p>

            
          <div class="p-4 border-l-4 border-[#e6af00] bg-amber-50/50 rounded-r-xl">
            <p class="text-sm italic text-slate-600">
              "Trabalhamos incansavelmente para descentralizar e democratizar as melhores oportunidades nacionais para que nenhum jovem de Junqueiro fique para trás."
            </p>
          </div>
        </div>

        <div class="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-8 border border-slate-800 shadow-xl space-y-6 relative overflow-hidden">
          <div class="absolute right-0 bottom-0 w-64 h-64 bg-[#092986] opacity-30 rounded-full blur-3xl"></div>
          <h3 class="text-xl font-bold text-white tracking-tight border-b border-slate-700/50 pb-3">Frentes de Atuação</h3>
          
          <ul class="space-y-4 text-sm relative z-10 text-slate-300">
            <li class="flex items-start gap-3">
              <span class="p-1 bg-emerald-500/20 text-emerald-400 rounded-lg shrink-0 mt-0.5">
                ${getSvgIcon("graduation-cap", "h-4 w-4")}
              </span>
              <div>
                <strong class="text-white">Educação e Idiomas</strong>
                <p class="text-xs text-slate-400 mt-0.5">Mediação de cursos oficiais gratuitos do Ministério da Educação.</p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <span class="p-1 bg-blue-500/20 text-blue-400 rounded-lg shrink-0 mt-0.5">
                ${getSvgIcon("code", "h-4 w-4")}
              </span>
              <div>
                <strong class="text-white">Capacitação em Tecnologia</strong>
                <p class="text-xs text-slate-400 mt-0.5">Articulação com OxeTech e polos para formação no setor digital.</p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <span class="p-1 bg-rose-500/20 text-rose-400 rounded-lg shrink-0 mt-0.5">
                ${getSvgIcon("palette", "h-4 w-4")}
              </span>
              <div>
                <strong class="text-white">Cultura e Economia Criativa</strong>
                <p class="text-xs text-slate-400 mt-0.5">Suporte para projetos culturais e profissionalização de jovens produtores.</p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <span class="p-1 bg-amber-500/20 text-amber-400 rounded-lg shrink-0 mt-0.5">
                ${getSvgIcon("id-card", "h-4 w-4")}
              </span>
              <div>
                <strong class="text-white">Cidadania e Direitos</strong>
                <p class="text-xs text-slate-400 mt-0.5">Emissão itinerante e auxílio do ID Jovem em todas as comunidades.</p>
              </div>
            </li>
          </ul>
        </div>

      </div>

      <!-- Mission, Vision, Values Tri-card layout -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div class="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-4">
          <div class="h-12 w-12 rounded-xl bg-blue-50 text-[#092986] flex items-center justify-center shadow-inner">
            ${getSvgIcon("award", "h-6 w-6")}
          </div>
          <h3 class="text-xl font-bold text-slate-950">Nossa Missão</h3>
          <p class="text-sm text-slate-500 leading-relaxed">
            Garantir aos jovens de Junqueiro o acesso integrado e de qualidade a políticas públicas inovadoras de qualificação, profissionalização, cultura, lazer e inclusão socioeconômica ativa.
          </p>
        </div>

        <div class="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-4">
          <div class="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-inner">
            ${getSvgIcon("info", "h-6 w-6")}
          </div>
          <h3 class="text-xl font-bold text-slate-950">Nossa Visão</h3>
          <p class="text-sm text-slate-500 leading-relaxed">
            Tornar o município de Junqueiro uma referência estadual na implementação de políticas públicas integradas e ágeis de empoderamento e emancipação sustentável da juventude periférica e rural.
          </p>
        </div>

        <div class="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-4">
          <div class="h-12 w-12 rounded-xl bg-amber-50 text-[#e6af00] flex items-center justify-center shadow-inner">
            ${getSvgIcon("check-circle", "h-6 w-6")}
          </div>
          <h3 class="text-xl font-bold text-slate-950">Nossos Valores</h3>
          <p class="text-sm text-slate-500 leading-relaxed">
            Transparência absoluta, inclusão e respeito à diversidade, integridade pública, compromisso social contínuo, inovação digital contínua e foco nas vocações produtivas locais.
          </p>
        </div>

      </div>

      <!-- Physical Presence & Service Info -->
      <div class="bg-[#092986] text-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl">
        <div class="absolute inset-0 bg-grid-white/[0.04] bg-[size:32px_32px]"></div>
        <div class="relative z-10 max-w-3xl space-y-6 text-left">
          <h3 class="text-2xl md:text-3xl font-black">Informações Importantes de Atendimento</h3>
          <p class="text-blue-100 leading-relaxed">
            Nossos serviços, computadores com internet e assistência na emissão de documentos estão disponíveis de forma totalmente gratuita e sem agendamento prévio.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div class="space-y-1">
              <strong class="text-white block font-bold text-sm">📍 Endereço Comercial:</strong>
              <span class="text-xs text-blue-200">Rua João de Deus, 76, Junqueiro - AL, 57270-000</span>
            </div>
            <div class="space-y-1">
              <strong class="text-white block font-bold text-sm">🕒 Horário de Funcionamento:</strong>
              <span class="text-xs text-blue-200">De Segunda a Sexta-feira, das 08h às 14h.</span>
            </div>
            <div class="space-y-1">
              <strong class="text-white block font-bold text-sm">📞 Telefone Oficial:</strong>
              <span class="text-xs text-blue-200">(82) 99130-1648 (Atendimento no horário da sede)</span>
            </div>
            <div class="space-y-1">
              <strong class="text-white block font-bold text-sm">✉️ E-mail Institucional:</strong>
              <span class="text-xs text-blue-200">Juventudejunqueiro@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  `;
}

// 4. NOTICIAS PAGE RENDERER
function renderNoticias() {
  updateNavigationActiveState("noticias");

  let cardsHtml = "";
  NEWS.forEach((news) => {
    cardsHtml += `
      <div class="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
        <div class="h-48 md:h-56 w-full overflow-hidden relative">
          <img src="${news.image}" alt="${news.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.src='https://placehold.co/600x400/092986/FFFFFF/png?text=Sem+Imagem'" />
        </div>        
          <div class="p-6 md:p-8 space-y-4">
          <div class="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400">
            <span class="text-[#092986] font-extrabold bg-blue-50 px-2.5 py-1 rounded-md">${news.category}</span>
            <span class="flex items-center gap-1">
              ${getSvgIcon("calendar", "h-4 w-4")}
              <span>${news.date}</span>
            </span>
          </div>
          
          <h3 class="text-xl md:text-2xl font-black text-slate-900 leading-tight group-hover:text-[#092986] transition-colors">
            ${news.title}
          </h3>
          
          <p class="text-slate-500 text-sm leading-relaxed line-clamp-4">
            ${news.summary}
          </p>
        </div>

        <div class="p-6 bg-slate-50 border-t border-slate-100/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <span class="text-xs text-slate-400 font-bold uppercase tracking-wider">Autor: Adryan Victor SMJ</span>
          <button type="button" onclick="openNewsModal('${news.id}')" class="px-5 py-2.5 bg-[#092986] hover:bg-blue-800 text-white font-extrabold rounded-xl text-sm transition-colors flex items-center justify-center gap-1 shrink-0">
            <span class="pointer-events-none">Ler notícia completa</span>
            <span class="pointer-events-none flex items-center">${getSvgIcon("arrow-right", "h-4 w-4")}</span>
          </button>
        </div>
      </div>
    `;
  });

  appContainer.innerHTML = `
    <!-- Header Hero Banner -->
    <section class="relative overflow-hidden bg-gradient-to-r from-[#092986] to-[#0d3ba3] text-white py-12">
      <img src="/juventude_group.png" alt="Fundo do Banner" class="absolute inset-0 w-full h-full object-cover blur-[2px] opacity-40 mix-blend-overlay z-0" />
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
        <h1 class="text-3xl md:text-5xl font-black tracking-tight leading-none">Notícias e Comunicados</h1>
        <p class="text-sm md:text-base text-blue-100 leading-relaxed max-w-2xl mx-auto">
          Mantenha-se informado sobre as últimas ações, caravanas, aberturas de editais e prazos importantes coordenados pela Secretaria.
        </p>
      </div>
    </section>

    <!-- News Cards Grid -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        ${cardsHtml}
      </div>
    </section>

    <!-- Quick subscription banner (Simulated) -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div class="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">
        <div class="absolute right-0 top-0 w-80 h-80 bg-[#e6af00]/10 rounded-full blur-3xl"></div>
        <div class="relative z-10 space-y-2 text-left">
          <h3 class="text-2xl font-black tracking-tight text-[#e6af00]">Deseja receber avisos urgentes no WhatsApp?</h3>
          <p class="text-slate-400 text-sm max-w-xl leading-relaxed">
            Envie sua mensagem por nosso formulário de contato pedindo inclusão na lista oficial de alertas rápidos da Secretaria Municipal da Juventude.
          </p>
        </div>
        <a href="#/contato" class="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm rounded-xl shrink-0 shadow-lg transition-colors relative z-10 flex items-center gap-1">
          <span>Quero Participar</span>
          ${getSvgIcon("arrow-right", "h-4 w-4")}
        </a>
      </div>
    </section>
  `;
}

// 5. DEPOIMENTOS PAGE RENDERER
function renderDepoimentos() {
  updateNavigationActiveState("depoimentos");

  let testimonialsHtml = "";
  TESTIMONIALS.forEach((t) => {
    testimonialsHtml += `
      <div class="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-xl transition-all duration-300">
        <!-- Huge quotes marks in background -->
        <div class="absolute -right-2 -top-4 text-slate-100 text-8xl font-black select-none pointer-events-none group-hover:text-blue-50 transition-colors">“</div>
        
        <div class="relative z-10 space-y-6">
          <div class="flex items-center gap-3">
            <div class="h-12 w-12 rounded-full bg-[#092986] text-white flex items-center justify-center font-black text-lg shrink-0 border border-blue-100 shadow-sm">
              ${t.avatar}
            </div>
            <div>
              <h4 class="text-base font-bold text-slate-900 leading-none">${t.name}</h4>
              <p class="text-xs text-[#092986] font-bold mt-1 uppercase tracking-wider">${t.program}</p>
            </div>
          </div>

          <p class="text-slate-600 text-sm md:text-base leading-relaxed italic">
            "${t.quote}"
          </p>
        </div>

        <div class="pt-6 border-t border-slate-50 mt-6 flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider">
          <span>Idade: ${t.age}</span>
          <span>Bairro: ${t.location}</span>
        </div>
      </div>
    `;
  });

  appContainer.innerHTML = `
    <!-- Header Hero banner -->
    <section class="relative overflow-hidden bg-gradient-to-r from-[#092986] to-[#0d3ba3] text-white py-12">
      <img src="/juventude_group.png" alt="Fundo do Banner" class="absolute inset-0 w-full h-full object-cover blur-[2px] opacity-40 mix-blend-overlay z-0" />
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
        <h1 class="text-3xl md:text-5xl font-black tracking-tight leading-none">Depoimentos</h1>
        <p class="text-sm md:text-base text-blue-100 leading-relaxed max-w-2xl mx-auto">
          Confira o relato real de jovens de Junqueiro/AL que estão trilhando caminhos incríveis a partir dos cursos e ferramentas gratuitas de apoio.
        </p>
      </div>
    </section>

    <!-- Testimonials Grid -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        ${testimonialsHtml}
      </div>
    </section>

    <!-- Interactive CTA to share user history -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div class="bg-gradient-to-br from-slate-900 to-slate-850 text-white rounded-3xl p-8 md:p-12 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
        <div class="absolute inset-0 bg-grid-white/[0.04] bg-[size:32px_32px]"></div>
        <div class="absolute -right-10 -bottom-10 w-64 h-64 bg-[#e6af00]/10 rounded-full blur-3xl"></div>
        
        <div class="space-y-3 text-left relative z-10">
          <span class="px-3 py-1 bg-emerald-500 text-slate-950 text-xs font-black uppercase rounded-full tracking-wider inline-block">Sua vez!</span>
          <h3 class="text-2xl md:text-3xl font-black tracking-tight text-white leading-tight">Você também participou de alguma plataforma?</h3>
          <p class="text-slate-400 text-sm max-w-xl leading-relaxed">
            Conte-nos como os cursos de idiomas, tecnologia do OxeTech, ID Jovem ou materiais do ENEM fizeram a diferença no seu dia a dia! Sua história pode inspirar outros jovens de Junqueiro.
          </p>
        </div>

        <a href="#/contato" class="px-6 py-3.5 bg-[#e6af00] hover:bg-[#ffc400] text-slate-900 font-extrabold text-sm rounded-xl shrink-0 shadow-lg transition-all relative z-10 transform hover:-translate-y-0.5">
          Enviar Meu Relato
        </a>
      </div>
    </section>
  `;
}

// 6. CONTATO PAGE RENDERER
function renderContato() {
  updateNavigationActiveState("contato");

  appContainer.innerHTML = `
    <!-- Header Hero Banner -->
    <section class="relative overflow-hidden bg-gradient-to-r from-[#092986] to-[#0d3ba3] text-white py-12">
      <img src="/juventude_group.png" alt="Fundo do Banner" class="absolute inset-0 w-full h-full object-cover blur-[2px] opacity-40 mix-blend-overlay z-0" />
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
        <h1 class="text-3xl md:text-5xl font-black tracking-tight leading-none">Fale Conosco</h1>
        <p class="text-sm md:text-base text-blue-100 leading-relaxed max-w-2xl mx-auto">
          Mande suas dúvidas, dê sugestões de cursos ou solicite agendamento para usar os computadores do Espaço Juventude Tech.
        </p>
      </div>
    </section>

    <!-- Split forms and contact parameters -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <!-- Contact Form Card -->
        <div class="lg:col-span-7 bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm space-y-6">
          <div class="border-b border-slate-100 pb-4">
            <h3 class="text-xl font-bold text-slate-950">Enviar Mensagem Online</h3>
            <p class="text-sm text-slate-400 mt-1">Preencha os dados abaixo com atenção. Retornamos em até 48 horas úteis.</p>
          </div>

          <form id="contact-form" class="space-y-5">
            <!-- Full Name -->
            <div class="space-y-1">
              <label for="name" class="block text-sm font-bold text-slate-700">Seu Nome Completo *</label>
              <input type="text" id="name" required placeholder="Digite seu nome completo..." class="block w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#092986] focus:border-transparent transition-all">
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <!-- Email -->
              <div class="space-y-1">
                <label for="email" class="block text-sm font-bold text-slate-700">E-mail de Contato *</label>
                <input type="email" id="email" required placeholder="seuemail@exemplo.com" class="block w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#092986] focus:border-transparent transition-all">
              </div>

              <!-- Phone -->
              <div class="space-y-1">
                <label for="phone" class="block text-sm font-bold text-slate-700">Telefone / WhatsApp *</label>
                <input type="tel" id="phone" required placeholder="(82) 99999-9999" class="block w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#092986] focus:border-transparent transition-all">
              </div>
            </div>

            <!-- Subject Area -->
            <div class="space-y-1">
              <label for="subject" class="block text-sm font-bold text-slate-700">Assunto Principal *</label>
              <select id="subject" class="block w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#092986] focus:border-transparent transition-all">
                <option value="duvidas">Tirar dúvidas sobre as plataformas</option>
                <option value="idjovem">Cadastro / Orientação ID Jovem</option>
                <option value="tech">Agendamento no Espaço Juventude Tech</option>
                <option value="depoimento">Enviar história de sucesso / depoimento</option>
                <option value="outros">Outras solicitações institucionais</option>
              </select>
            </div>

            <!-- Message Area -->
            <div class="space-y-1">
              <label for="message" class="block text-sm font-bold text-slate-700">Mensagem Detalhada *</label>
              <textarea id="message" required rows="5" placeholder="Escreva aqui tudo o que você precisa..." class="block w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#092986] focus:border-transparent transition-all"></textarea>
            </div>

            <!-- Submit Button -->
            <button type="submit" class="w-full py-4 bg-[#092986] hover:bg-blue-800 text-white font-extrabold rounded-xl text-sm tracking-wide shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer">
              <span>Enviar Solicitação por E-mail</span>
              ${getSvgIcon("mail", "h-5 w-5")}
            </button>
          </form>
        </div>

        <!-- Right info panel details -->
        <div class="lg:col-span-5 space-y-8">
          
          <!-- Quick info contact info -->
          <div class="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm space-y-6">
            <h3 class="text-xl font-bold text-slate-950 border-b border-slate-100 pb-3">Canais de Contato</h3>
            
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <div class="p-2.5 bg-blue-50 text-[#092986] rounded-xl shrink-0 mt-0.5">
                  ${getSvgIcon("map-pin", "h-5 w-5")}
                </div>
                <div>
                  <h4 class="font-bold text-sm text-slate-900">Sede Física da Secretaria</h4>
                  <p class="text-xs text-slate-500 mt-1 leading-relaxed">
                    Rua João de Deus, 76, Junqueiro - AL, 57270-000
                  </p>
                </div>
              </li>

              <li class="flex items-start gap-3">
                <div class="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl shrink-0 mt-0.5">
                  ${getSvgIcon("phone", "h-5 w-5")}
                </div>
                <div>
                  <h4 class="font-bold text-sm text-slate-900">Telefone e WhatsApp</h4>
                  <p class="text-xs text-slate-500 mt-1 leading-relaxed">
                    (82) 99130-1648
                  </p>
                </div>
              </li>

              <li class="flex items-start gap-3">
                <div class="p-2.5 bg-amber-50 text-[#e6af00] rounded-xl shrink-0 mt-0.5">
                  ${getSvgIcon("mail", "h-5 w-5")}
                </div>
                <div>
                  <h4 class="font-bold text-sm text-slate-900">E-mail de Suporte</h4>
                  <p class="text-xs text-slate-500 mt-1 leading-relaxed">
                    Juventudejunqueiro@gmail.com
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <!-- Instagram & Social widgets -->
          <div class="bg-slate-900 text-white rounded-2xl p-6 md:p-8 border border-slate-800 shadow-lg space-y-4 relative overflow-hidden">
            <div class="absolute right-0 bottom-0 w-48 h-48 bg-[#092986] opacity-30 rounded-full blur-2xl"></div>
            <h3 class="text-xl font-bold tracking-tight">Acompanhe no Instagram</h3>
            <p class="text-slate-400 text-xs leading-relaxed">
              Fique sabendo de novos editais, eventos culturais na praça, competições de esporte e caravanas ID Jovem em tempo real nos seguindo nas redes sociais!
            </p>
            <div class="pt-2">
              <a href="https://www.instagram.com/sec.juventudejunqueiro/" target="_blank" rel="noopener" class="px-5 py-2.5 bg-pink-600 hover:bg-pink-700 text-white font-extrabold text-xs rounded-xl inline-flex items-center gap-1.5 transition-colors">
                ${getSvgIcon("instagram", "h-4 w-4")}
                <span>@JuventudeJunqueiro</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  `;

  // Attach Phone Auto Mask
  const phoneInput = document.getElementById("phone");
  if (phoneInput) {
    phoneInput.addEventListener("input", (e) => {
      let v = e.target.value.replace(/\D/g, "");
      if (v.length > 11) v = v.slice(0, 11);

      if (v.length > 10) {
        // (XX) XXXXX-XXXX
        v = v.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
      } else if (v.length > 6) {
        // (XX) XXXX-XXXX
        v = v.replace(/^(\d{2})(\d{4})(\d{0,4})$/, "($1) $2-$3");
      } else if (v.length > 2) {
        // (XX) XXX
        v = v.replace(/^(\d{2})(\d{0,5})$/, "($1) $2");
      } else if (v.length > 0) {
        // (XX
        v = v.replace(/^(\d*)$/, "($1");
      }
      e.target.value = v;
    });
  }

  // Handle Form Submission with Client Mailto Client Opener
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const subjectSelect = document.getElementById("subject");
      const subjectText =
        subjectSelect.options[subjectSelect.selectedIndex].text;
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !phone || !message) {
        triggerToast(
          "Por favor, preencha todos os campos obrigatórios marcados com *",
          "error",
        );
        return;
      }

      // Generate Email mailto link
      const emailTo = "Juventudejunqueiro@gmail.com";
      const mailtoSubject = encodeURIComponent(
        `[Portal Juventude] ${subjectText}`,
      );
      const mailtoBody = encodeURIComponent(
        `Olá, equipe da Secretaria Municipal de Juventude de Junqueiro/AL,\n\n` +
          `Gostaria de enviar uma solicitação com as seguintes informações:\n\n` +
          `- Nome Completo: ${name}\n` +
          `- E-mail: ${email}\n` +
          `- Telefone/WhatsApp: ${phone}\n` +
          `- Categoria/Assunto: ${subjectText}\n\n` +
          `Mensagem:\n${message}\n\n` +
          `Atenciosamente,\n${name}`,
      );

      const mailtoUrl = `mailto:${emailTo}?subject=${mailtoSubject}&body=${mailtoBody}`;

      // Open Email Client
      window.location.href = mailtoUrl;

      triggerToast(
        "Mensagem processada! Seu aplicativo de e-mail foi aberto para envio oficial à Secretaria.",
      );
      form.reset();
    });
  }
}

// --- GLOBAL ROUTER SWITCHER ---

function resolveRoute() {
  const hash = window.location.hash || "#/";

  // Scroll to top on navigation change
  window.scrollTo({ top: 0, behavior: "smooth" });

  if (hash === "#/" || hash === "#") {
    renderHome();
  } else if (hash.startsWith("#/oportunidades")) {
    renderOportunidades();
  } else if (hash.startsWith("#/sobre")) {
    renderSobre();
  } else if (hash.startsWith("#/noticias")) {
    renderNoticias();
  } else if (hash.startsWith("#/depoimentos")) {
    renderDepoimentos();
  } else if (hash.startsWith("#/contato")) {
    renderContato();
  } else {
    // Fallback 404
    appContainer.innerHTML = `
      <div class="max-w-md mx-auto py-24 px-4 text-center space-y-6">
        <div class="h-20 w-20 bg-blue-50 text-[#092986] rounded-full flex items-center justify-center mx-auto text-4xl font-black">
          404
        </div>
        <h2 class="text-3xl font-black text-slate-900 tracking-tight">Página Não Encontrada</h2>
        <p class="text-slate-500 text-sm">
          A rota informada não foi localizada em nosso portal municipal. Use os links de navegação superiores para retornar com segurança.
        </p>
        <a href="#/" class="px-6 py-3 bg-[#092986] text-white font-extrabold rounded-xl text-sm hover:bg-blue-800 transition-colors inline-block">
          Voltar para o Início
        </a>
      </div>
    `;
  }
}

// Listen for hash modifications
window.addEventListener("hashchange", resolveRoute);

// Kickstart first execution
document.addEventListener("DOMContentLoaded", () => {
  resolveRoute();
});

// If DOM is already loaded
if (
  document.readyState === "complete" ||
  document.readyState === "interactive"
) {
  resolveRoute();
}

// Função para lidar com o scroll horizontal da seção Ações da Juventude
function initHorizontalScroll() {
  const wrapper = document.getElementById("acoes-wrapper");
  const track = document.getElementById("acoes-track");

  if (!wrapper || !track) return;

  const handleScroll = () => {
    const rect = wrapper.getBoundingClientRect();
    const scrollableDistance = rect.height - window.innerHeight;

    let progress = -rect.top / scrollableDistance;
    progress = Math.max(0, Math.min(1, progress));

    const maxScroll = track.scrollWidth - window.innerWidth + 64;
    track.style.transform = `translateX(-${progress * maxScroll}px)`;
  };

  window.removeEventListener("scroll", handleScroll);
  window.addEventListener("scroll", handleScroll);
}
