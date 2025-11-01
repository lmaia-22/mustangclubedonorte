import { Icons } from '@/components/icons';
import { HomeIcon, ContactIcon, CameraIcon, UsersRoundIcon } from 'lucide-react';

export const DATA = {
  name: 'Mustang Clube Do Norte',
  initials: 'MCdN',
  url: 'https://mustangclubedonorte.pt',
  description:
    '		Somos uma comunidade vibrante de aficionados por um dos ícones mais emblemáticos do mundo automobilístico: o Ford Mustang. Desde o ronco inconfundível do motor até às linhas clássicas que definem seu design, cada detalhe dos Mustangs desperta uma paixão que decidimos celebrar juntos.',
  summary:
    'Somos uma comunidade vibrante de aficionados por Mustangs que se reúne regularmente. ' +
    'Cada encontro é uma oportunidade para os membros mostrarem seus carros, trocarem experiências e criar memórias duradouras.' +
    'Nossos encontros são também uma oportunidade para admirar a evolução destes carros espetaculares ao longo dos anos e ver de perto modelos clássicos e modernos.',
  summary1:
    'Se tem um Mustang e está no Norte de Portugal, venha fazer parte do nosso clube!' +
    'Não importa se o seu Mustang é um clássico restaurado ou um modelo mais recente, o que nos une é a paixão por este carro extraordinário.' +
    'Ao se juntar a nós, você terá a oportunidade de participar em todos os nossos encontros, além de ter acesso a um grupo de apoio entusiasta para qualquer necessidade ou dúvida relacionada ao seu Mustang.',
  mission1: 'Unir fanáticos de Mustangs através de encontros e convívio.',
  mission2: 'Proporcionar momentos de pura adrenalina e convívio.',
  mission3: 'Oferecer uma plataforma para compartilhar conhecimentos e experiências.',
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
    'Figueira da Foz',
    'Caminha',
    'Geres',
  ],
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    { href: '#about', icon: UsersRoundIcon, label: 'Sobre' },
    { href: '#projects', icon: CameraIcon, label: 'Portfolio' },
    { href: '#contact', icon: ContactIcon, label: 'Contacto' },
  ],
  contact: {
    email: 'mustangclubedonorte@gmail.com',
    social: {
      Instagram: {
        name: 'Instagram',
        url: 'https://www.instagram.com/mustangclubdonorte?igsh=MXgxbGEwMTZudjQ1Mw%3D%3D',
        icon: Icons.instagram,

        navbar: true,
      },
      Email: {
        name: 'Email',
        url: 'mailto:mustangclubedonorte@gmail.com',
        icon: Icons.email,

        navbar: true,
      },
    },
  },
  faq: [
    {
      question: 'Como me posso juntar ao Clube?',
      answer:
        'Basta contactar-nos através das nossas redes sociais ou email e desde que cumpra os requisitos entramos em contacto consigo.',
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
      question: 'Há regras no clube?',
      answer:
        'Sim, se cumprir os requisitos mínimos iremos partilhar o regulamento interno do clube com as devidas regras.',
    },
    {
      question: 'Existe alguma restrição?',
      answer:
        'Carros por restaurar ou ainda por arranjar ou reparar não podem pertencer ao clube.',
    },
    {
      question: 'Podemos participar à experiência?',
      answer:
        'Sim podem participar à experiência, mas devem estar em condições de circular na estrada e auto-estrada com o devido seguro.',
    },
  ],
  metrics: 'Os números que nos orgulhamos e que continuam a crescer.',
} as const;
