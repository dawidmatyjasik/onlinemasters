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
      icon: '/svg/security-svgrepo-com.svg',
      description: 'Profesjonalne usługi',
      alt: 'Bezpieczeństwo strony ikonka',
    },
    {
      id: 2,
      icon: '/svg/settings-cogwheel-svgrepo-com.svg',
      description: 'Fachowcy w swojej dziedzinie',
      alt: 'Działająca strona ikonka',
    },
    {
      id: 3,
      icon: '/svg/page-svgrepo-com.svg',
      description: 'Jesteśmy zawsze do dyspozycji',
      alt: 'Aktualizowanie strony ikonka',
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
