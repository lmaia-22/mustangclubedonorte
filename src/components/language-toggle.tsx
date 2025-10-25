'use client';

import React from 'react';
import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';

export const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      className="size-12 font-bold text-sm"
      onClick={toggleLanguage}
      title={`Switch to ${language === 'pt' ? 'English' : 'Português'}`}
    >
      {language === 'pt' ? 'EN' : 'PT'}
    </Button>
  );
};
