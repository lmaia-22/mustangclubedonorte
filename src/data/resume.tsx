import { Icons } from '@/components/icons';
import { HomeIcon, NotebookIcon, PenIcon, PersonStandingIcon } from 'lucide-react';

export const DATA = {
  name: 'Mustang Clube Do Norte',
  initials: 'MCdN',
  url: 'https://mustangclubedonorte.pt',
  description:
    '		Somos uma comunidade vibrante de aficionados por um dos ícones mais emblemáticos do mundo automobilístico: o Ford Mustang. Desde o ronco inconfundível do motor até às linhas clássicas que definem seu design, cada detalhe dos Mustangs desperta uma paixão que decidimos celebrar juntos.',
  summary:
    'Organizamos regularmente eventos e passeios que são a verdadeira expressão da nossa paixão por Mustangs. ' +
    'Desde encontros casuais, a eventos mais elaborados, cada ocasião é uma oportunidade para os membros mostrarem seus carros, trocarem experiências e criar memórias duradouras.' +
    'Nossos eventos são também uma oportunidade para admirar a evolução destes carros espetaculares ao longo dos anos e ver de perto modelos clássicos e modernos.',
  summary1:
    'Se tem um Mustang e está no Norte de Portugal, venha fazer parte do nosso clube!' +
    'Não importa se o seu Mustang é um clássico restaurado ou um modelo mais recente, o que nos une é a paixão por este carro extraordinário.' +
    'Ao se juntar a nós, você terá a oportunidade de participar em todos os nossos eventos, além de ter acesso a um grupo de apoio entusiasta para qualquer necessidade ou dúvida relacionada ao seu Mustang.',
  mission1: 'Unir fanáticos de Mustangs através de eventos e passeios.',
  mission2: 'Proporcionar momentos de pura adrenalina e convívio.',
  mission3: 'Oferecer uma plataforma para compartilhar conhecimentos e experiências.',
  firstRenderUrl: '/bk_bigger.png',
  firstRenderUrlMobile: '/bk_mobile.png',
  avatarUrl: '/logo_no_bk.png',
  videoUrl: '/mustang.mp4',
  skills: [
    'Gaia',
    'Penafiel',
    'Viana Do Castelo',
    'Gondomar',
    'Castelo da Paiva',
    'Guimarães',
    'Aveiro',
    'Caramulo',
    'Fafe',
    'Matosinhos',
    'Paços de Ferreira',
    'Figueira da Foz'
  ],
  team: [
    {
      name: 'Fábio Santos',
      role: 'Presidente',
      image: '/team/team-1.jpg',
      instagram:
        'https://www.instagram.com/mustangclubedonorte?igsh=MTRxcXE3aHEwcnlxdQ==',
    },
    {
      name: 'Mauro Munoz',
      role: 'Vice-Presidente',
      image: '/team/team-2.jpg',
      instagram:
        'https://www.instagram.com/mauro.munoz6?igsh=MWJha3QxbDVtcDF4aw==',
    },
    {
      name: 'João Abreu',
      role: 'Administrador',
      image: '/team/team-3.jpg',
      instagram:
        'https://www.instagram.com/the_muscle.car_2.3?igsh=MTA2a3VmOTcxOTNvNA==',
    },
    {
      name: 'Luís Maia',
      role: 'Administrador',
      image: '/team/team-4.jpg',
      instagram:
        'https://www.instagram.com/the.great.red.devil?igsh=ZGE5NGM0dnMwOHkz&utm_source=qr',
    },
  ],
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    { href: '/blog', icon: NotebookIcon, label: 'Blog' },
    // { href: '/form', icon: PenIcon, label: 'Form' },
    // { href: '/members', icon: PersonStandingIcon, label: 'Membros' },
  ],
  contact: {
    email: 'mustangclubedonorte@gamil.com',
    social: {
      Instagram: {
        name: 'Instagram',
        url: 'https://www.instagram.com/mustangclubedonorte?igsh=MTRxcXE3aHEwcnlxdQ==',
        icon: Icons.instagram,

        navbar: true,
      },
      Tiktok: {
        name: 'Tiktok',
        url: 'https://www.tiktok.com/@mustangclubedonorte',
        icon: Icons.tiktok,

        navbar: true,
      },
      X: {
        name: 'X',
        url: 'https://x.com/ClubeMustangNP',
        icon: Icons.x,

        navbar: true,
      },
    },
  },
  faq: [
    {
      question: 'Como me posso juntar ao Clube?',
      answer:
        'Basta preenhcer o formulário no fim da página e desde que cumpra os requisitos entramos em contacto consigo.',
    },
    {
      question: 'Quais são as requisitos para pertencer ao clube?',
      answer:
        'Ser o propietário de um mustang em condições de circular na estrada e auto-estrada com o devido seguro e viver no Norte de Portugal.',
    },
    {
      question: 'Posso ser expulso do clube?',
      answer:
        'Sim, pode ser expulso se houver razão para tal e a adminsitração assim o decidir.',
    },
    {
      question: 'Há regras do clube?',
      answer:
        'Sim, se cumprir os requisitos mínimos iremos partilhar o regulamento interno do clube com as devidas regras.',
    },
    {
      question: 'Quantos eventos/passeios há por ano?',
      answer: 'No mínimo 12 eventos ao ano.',
    },
    {
      question: 'Os eventos/passeios são todos pagos?',
      answer: 'Cada membro paga as suas despesas.',
    },
    {
      question: 'Posso levar quem quiser para os eventos/passeios?',
      answer:
        'Sim claro, desde que o número de pessoas seja previamente notificado.',
    },
    {
      question: 'Existe alguma restrição?',
      answer:
        'Carros por restaurar ou ainda por arranjar ou reparar não podem pertencer ao clube.',
    },
    {
      question: 'Os eventos/passeios são todos em Portugal?',
      answer:
        'Não, alguns eventos serão no Norte de Espanha em pareceria com outros clubes de mustangs',
    },
  ],
  metrics: 'Os números que nos orgulhamos e que continuam a crescer.',
  hackathons: [
    {
      title: 'Passeio a Figueira da Foz',
      dates: '9 Fevereiro, 2025',
      location: 'Figueira da Foz, Portugal',
      image: '/portfolio/portfolio-35.jpg',
      description: 
        'Conhecer a cidade da Figueira da Foz, onde fizemos a famosa enforca cães e visitamos o Miradouro da Bandeira.',
      links: [],
      postLink: '/blog/figueiradafoz',
    },
    {
      title: 'Passeio a Paços de Ferreira',
      dates: '11 Janeiro, 2025',
      location: 'Paços de Ferreira, Portugal',
      image: '/portfolio/portfolio-34.jpg',
      description: 
        'Visitamos a cidade de Paços de Ferreira e acabamos a jantar no famoso Wing Club.',
      links: [],
      postLink: '/blog/pacosdeferreira',
    },
    {
      title: 'Jantar de Natal',
      dates: '14 Dezembro, 2024',
      location: 'Norte, Portugal',
      image: '/portfolio/portfolio-33.jpg',
      description: 
        'Fizemos a marginal de Leça até Grijó, onde jantamos no restaurante Tainha.',
      links: [],
      postLink: '/blog/natal2024',
    },
    {
      title: 'Passeio a Fafe',
      dates: '24 Novembro, 2024',
      location: 'Fafe, Portugal',
      image: '/portfolio/portfolio-32.jpg',
      description: 
        'Fomos visitar a bela cidade de fafe e como tal o famoso museu de rally de fafe e ver as lendas do rally',
      links: [],
      postLink: '/blog/fafe',
    },
    {
      title: 'Passeio a Bitetos',
      dates: '27 Outubro, 2024',
      location: 'Bitetos, Portugal',
      image: '/portfolio/portfolio-31.jpg',
      description: 
        'Fomos convidados a jantar no restaurante Cais B Petiscaria, no cais em Bitetos e como tal organizamos um passeio pelo Douro. Foi um dia divertido e um passeio cheio de belas vistas!',
      links: [],
      postLink: '/blog/bitetos',
    },
    {
      title: 'AutoClássicos Porto',
      dates: '6 Outubro, 2024',
      location: 'Porto, Portugal',
      image: '/portfolio/portfolio-30.jpg',
      description: 
        'Fomos convidados a participar no evento a AutoClássicos Porto, onde tivemos a oportunidade de mostrar os nossos cavalos e de participar numa "corrida" de carros cavalos no mini circuito existente na Exponor. Foi uma experiência incrível e divertida!',
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className='h-4 w-4' />,
          href: 'https://www.exponor.pt/agenda/autoclassico-2024/',
        },
      ],
      postLink: '/blog/autoclassicosporto',
    },
    {
      title: 'Caramulo MotorFestival',
      dates: '8 Setembro, 2024',
      location: 'Caramulo, Portugal',
      description:
        'Um passeio pela bela serra do Caramulo, onde entramos no Caramulo Motorfestival, para conhecer outras máquinas e também fazer a subida da famosa rampa.',
      image: '/portfolio/portfolio-29.jpg',
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className='h-4 w-4' />,
          href: 'https://www.caramulo-motorfestival.com/pt/',
        },
      ],
      postLink: '/blog/caramulo',
    },
    {
      title: 'Passeio ao Berço de Portugal',
      dates: '11 Agosto, 2024',
      location: 'Guimarães, Portugal',
      description:
        'Um passeio pela estrada do Berco de Portugal, a serra da Penha e a parte histórica da cidade com apoio da Policia Municipal.',
      image: '/portfolio/portfolio-28.jpg',
      links: [],
      postLink: '/blog/guimaraes',
    },
    {
      title: 'Passeio a Aveiro',
      dates: '21 Julho 2024',
      location: 'Aveiro, Portugal',
      description:
        'Vsitar a bela cidade de Aveiro e a zona do Furo. Onde fomos acompanhados pela Policia Municipal, para nos ajudar a movimentar.',
      image: '/portfolio/portfolio-19.jpg',
      mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
      links: [],
      postLink: '/blog/aveiro',
    },
    {
      title: 'Evento "Cars n Cans"',
      dates: '30 Julho, 2024',
      location: 'Gondomar, Portugal',
      description:
        'Parceria com cars n cans para participarmos no evento deles.',
      icon: 'public',
      image: '/portfolio/portfolio-14.jpg',
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className='h-4 w-4' />,
          href: 'https://www.b5oliveira.pt/carsncans',
        },
      ],
      postLink: '/blog/carsncans',
    },
    {
      title: 'Evento Penafiel Racing Fest',
      dates: '16 de Junho, 2024',
      location: 'Penafiel, Portugal',
      description:
        'Fomos convidados pelos organizadores e escusado será que dizer que o evento foi incrível. Recomendamos!',
      image: '/portfolio/portfolio-21.jpg',
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className='h-4 w-4' />,
          href: 'https://racingfest.pt/',
        },
      ],
      postLink: '/blog/penafiel_racing_fest',
    },
    {
      title: 'Passeio à cidade da Bola de Berlim',
      dates: '9 Junho, 2024',
      location: 'Viana do Castelo, Portugal',
      description: 'O primeiro passeio oficial como clube Mustang Do Norte.',
      image: '/portfolio/portfolio-20.jpg',
      links: [],
      postLink: '/blog/viana_do_castelo',
    },
    {
      title: 'Passeio a Castelo de Paiva',
      dates: '8 Maio, 2024',
      location: 'Castelo de Paiva, Portugal',
      description:
        'Primeiro passeio, ainda como um grupo de amigos, não como um clube ainda, foi neste passeio que tudo mudou.',
      image: '/portfolio/portfolio-4.jpg',
      links: [],
      postLink: '/blog/castelo_paiva',
    },
    {
      title: 'O ínicio',
      dates: '26 de Abril, 2024',
      location: 'Gaia, Portugal',
      description: 'Aqui começou tudo, num simples jantar',
      image: '/portfolio/portfolio-8.jpg',
      links: [],
      postLink: '/blog/gaia',
    },
  ],
} as const;
