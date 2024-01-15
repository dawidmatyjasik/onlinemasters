import React from 'react';

import { Step } from '../step/Step';

export interface StepType {
  id: number;
  icon: string;
  description: string;
  alt: string;
}

export const StepSection = () => {
  const stepsArray: StepType[] = [
    {
      id: 1,
      icon: '/svg/website-theme-svgrepo-com.svg',
      description: 'Zoptymalizujemy Twoją wizytówkę',
      alt: 'Optymalizacja wizytówki ikonka',
    },
    {
      id: 2,
      icon: '/svg/website-seo-promotion-svgrepo-com.svg',
      description: 'Zadbamy o systematyczne publikacje treści',
      alt: 'Systematyczne publikacje treści ikonka',
    },
    {
      id: 3,
      icon: '/svg/website-seo-marketing-hitting-the-bullseye-svgrepo-com.svg',
      description: 'Zwiększymy widoczność Twojej firmy w Google',
      alt: 'Zwiększenie widoczności w Google ikonka',
    },
  ];

  return (
    <article className="flex flex-col gap-4">
      {stepsArray.map(({ id, icon, description, alt }) => (
        <Step key={id} icon={icon} description={description} alt={alt} />
      ))}
    </article>
  );
};
