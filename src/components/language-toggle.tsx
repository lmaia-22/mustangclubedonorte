'use client';

import React from 'react';
import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';

export const LanguageToggle = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  return (
    <Button 
      ref={ref}
      variant="ghost" 
      size="icon" 
      className="size-12 font-bold text-sm transition-all duration-300 hover:scale-110 hover:bg-accent/50 hover:shadow-lg"
      onClick={toggleLanguage}
      title={`Switch to ${language === 'pt' ? 'English' : 'Português'}`}
      {...props}
    >
      <span className="transition-transform duration-300 hover:scale-110">
        {language === 'pt' ? 'EN' : 'PT'}
      </span>
    </Button>
  );
});

LanguageToggle.displayName = 'LanguageToggle';
