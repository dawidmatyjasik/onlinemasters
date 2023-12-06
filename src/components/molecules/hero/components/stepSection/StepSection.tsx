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
      description: 'Stworzymy koncepcję strony',
      alt: 'Koncepcja strony ikonka',
    },
    {
      id: 2,
      icon: '/svg/website-seo-promotion-svgrepo-com.svg',
      description: 'Przygotujemy skuteczne treści',
      alt: 'Skuteczne treści ikonka',
    },
    {
      id: 3,
      icon: '/svg/website-seo-marketing-hitting-the-bullseye-svgrepo-com.svg',
      description: 'Wykonamy indywidualny projekt',
      alt: 'Indywidualny projekt',
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
