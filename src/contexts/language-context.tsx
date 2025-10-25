'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('mustang-club-language') as Language;
    if (savedLanguage && (savedLanguage === 'pt' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('mustang-club-language', language);
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    const translations = {
      // Navigation
      'nav.home': { pt: 'Home', en: 'Home' },
      'nav.about': { pt: 'Sobre', en: 'About' },
      'nav.portfolio': { pt: 'Portfolio', en: 'Portfolio' },
      'nav.contact': { pt: 'Contacto', en: 'Contact' },
      'nav.language': { pt: 'Idioma', en: 'Language' },

      // Hero Section
      'hero.title': { pt: 'Mustang Clube Do Norte', en: 'Mustang Club of the North' },
      'hero.description': {
        pt: 'Somos uma comunidade vibrante de aficionados por um dos ícones mais emblemáticos do mundo automobilístico: o Ford Mustang. Desde o ronco inconfundível do motor até às linhas clássicas que definem seu design, cada detalhe dos Mustangs desperta uma paixão que decidimos celebrar juntos.',
        en: 'We are a vibrant community of enthusiasts for one of the most iconic automotive icons in the world: the Ford Mustang. From the unmistakable engine roar to the classic lines that define its design, every detail of Mustangs awakens a passion that we decided to celebrate together.'
      },

      // About Section
      'about.badge': { pt: 'Sobre', en: 'About' },
      'about.title': { pt: 'Quem Somos', en: 'Who We Are' },
      'about.subtitle': { pt: 'Como nascemos e como vamos viver', en: 'How we were born and how we live' },
      'about.summary': {
        pt: 'Somos uma comunidade vibrante de aficionados por Mustangs que se reúne regularmente. Cada encontro é uma oportunidade para os membros mostrarem seus carros, trocarem experiências e criar memórias duradouras. Nossos encontros são também uma oportunidade para admirar a evolução destes carros espetaculares ao longo dos anos e ver de perto modelos clássicos e modernos.',
        en: 'We are a vibrant community of Mustang enthusiasts who meet regularly. Each meeting is an opportunity for members to show their cars, exchange experiences and create lasting memories. Our meetings are also an opportunity to admire the evolution of these spectacular cars over the years and see classic and modern models up close.'
      },
      'about.summary1': {
        pt: 'Se tem um Mustang e está no Norte de Portugal, venha fazer parte do nosso clube! Não importa se o seu Mustang é um clássico restaurado ou um modelo mais recente, o que nos une é a paixão por este carro extraordinário. Ao se juntar a nós, você terá a oportunidade de participar em todos os nossos encontros, além de ter acesso a um grupo de apoio entusiasta para qualquer necessidade ou dúvida relacionada ao seu Mustang.',
        en: 'If you have a Mustang and are in Northern Portugal, come join our club! It doesn\'t matter if your Mustang is a restored classic or a newer model, what unites us is the passion for this extraordinary car. By joining us, you will have the opportunity to participate in all our meetings, in addition to having access to an enthusiastic support group for any need or question related to your Mustang.'
      },

      // Mission Section
      'mission.badge': { pt: 'Missão', en: 'Mission' },
      'mission.title': { pt: 'Principais Objetivos', en: 'Main Objectives' },
      'mission.subtitle': { pt: 'Como em todos os bons projetos devem existir objectivos e nós temos estes.', en: 'As in all good projects, there must be objectives and we have these.' },
      'mission.1': { pt: 'Unir fanáticos de Mustangs através de encontros e convívio.', en: 'Unite Mustang fans through meetings and socializing.' },
      'mission.2': { pt: 'Proporcionar momentos de pura adrenalina e convívio.', en: 'Provide moments of pure adrenaline and socializing.' },
      'mission.3': { pt: 'Oferecer uma plataforma para compartilhar conhecimentos e experiências.', en: 'Offer a platform to share knowledge and experiences.' },

      // Metrics Section
      'metrics.badge': { pt: 'Clube', en: 'Club' },
      'metrics.title': { pt: 'Métricas', en: 'Metrics' },
      'metrics.subtitle': { pt: 'Os números que nos orgulhamos e que continuam a crescer.', en: 'The numbers we are proud of and that continue to grow.' },
      'metrics.tours': { pt: '9 Passeios', en: '9 Tours' },
      'metrics.kilometers': { pt: '1020 Quilómetros', en: '1020 Kilometers' },
      'metrics.hours': { pt: '160 Horas', en: '160 Hours' },
      'metrics.members': { pt: '56 Membros', en: '56 Members' },

      // Skills Section
      'skills.badge': { pt: 'Conquistas', en: 'Achievements' },
      'skills.title': { pt: 'Cidades Conquistadas', en: 'Conquered Cities' },
      'skills.subtitle': { pt: 'Devagar se vai ao longe, vamos conquistar Portugal inteiro!', en: 'Slowly but surely, we will conquer all of Portugal!' },

      // Portfolio Section
      'portfolio.badge': { pt: 'Portfolio', en: 'Portfolio' },
      'portfolio.title': { pt: 'Espreitem as nossas melhores \'chapas\'!', en: 'Check out our best \'shots\'!' },
      'portfolio.subtitle': { pt: 'As fotografias tiradas pelo nosso fotógrafo do Clube e também alguns membros.', en: 'Photos taken by our Club photographer and also some members.' },

      // FAQ Section
      'faq.badge': { pt: 'FAQ', en: 'FAQ' },
      'faq.title': { pt: 'Questões mais frequentes', en: 'Frequently Asked Questions' },
      'faq.subtitle': { pt: 'Como tirar as dúvidas de forma rápida.', en: 'How to clear doubts quickly.' },
      'faq.q1': { pt: 'Como me posso juntar ao Clube?', en: 'How can I join the Club?' },
      'faq.a1': { pt: 'Basta contactar-nos através das nossas redes sociais ou email e desde que cumpra os requisitos entramos em contacto consigo.', en: 'Just contact us through our social networks or email and as long as you meet the requirements we will get in touch with you.' },
      'faq.q2': { pt: 'Quais são as requisitos para pertencer ao clube?', en: 'What are the requirements to belong to the club?' },
      'faq.a2': { pt: 'Ser o propietário de um mustang em condições de circular na estrada e auto-estrada com o devido seguro e viver no Norte de Portugal.', en: 'Be the owner of a mustang in conditions to drive on the road and highway with proper insurance and live in Northern Portugal.' },
      'faq.q3': { pt: 'Posso ser expulso do clube?', en: 'Can I be expelled from the club?' },
      'faq.a3': { pt: 'Sim, pode ser expulso se houver razão para tal e a adminsitração assim o decidir.', en: 'Yes, you can be expelled if there is reason for it and the administration decides so.' },
      'faq.q4': { pt: 'Há regras no clube?', en: 'Are there rules in the club?' },
      'faq.a4': { pt: 'Sim, se cumprir os requisitos mínimos iremos partilhar o regulamento interno do clube com as devidas regras.', en: 'Yes, if you meet the minimum requirements we will share the club\'s internal regulations with the proper rules.' },
      'faq.q5': { pt: 'Existe alguma restrição?', en: 'Are there any restrictions?' },
      'faq.a5': { pt: 'Carros por restaurar ou ainda por arranjar ou reparar não podem pertencer ao clube.', en: 'Cars to be restored or still to be fixed or repaired cannot belong to the club.' },
      'faq.q6': { pt: 'Podemos participar à experiência?', en: 'Can we participate in the experience?' },
      'faq.a6': { pt: 'Sim podem participar à experiência, mas devem estar em condições de circular na estrada e auto-estrada com o devido seguro.', en: 'Yes, you can participate in the experience, but you must be in conditions to drive on the road and highway with proper insurance.' },

      // Spotify Section
      'spotify.badge': { pt: 'Spotify', en: 'Spotify' },
      'spotify.title': { pt: 'A playlist favorita dos nossos carros', en: 'Our cars\' favorite playlist' },
      'spotify.subtitle': { pt: 'Não se esqueça de adicionar aos favoritos', en: 'Don\'t forget to add to favorites' },

      // Contact Section
      'contact.badge': { pt: 'Contactos', en: 'Contact' },
      'contact.title': { pt: 'Entre em contacto', en: 'Get in touch' },
      'contact.subtitle': { pt: 'Se quer saber mais sobre o clube ou entrar nele, contacte-nos através das nossas redes sociais ou através do nosso email.', en: 'If you want to know more about the club or join it, contact us through our social networks or through our email.' },

      // Language Toggle
      'lang.pt': { pt: 'Português', en: 'Portuguese' },
      'lang.en': { pt: 'English', en: 'English' },
    };

    const translation = translations[key as keyof typeof translations];
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return translation[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
