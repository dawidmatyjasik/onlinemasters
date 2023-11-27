import React from 'react';

import { Step } from '../step/Step';

import Img3 from 'app/assets/svg/website-seo-marketing-hitting-the-bullseye-svgrepo-com.svg';
import Img2 from 'app/assets/svg/website-seo-promotion-svgrepo-com.svg';
import Img1 from 'app/assets/svg/website-theme-svgrepo-com.svg';
import { useTranslation } from 'app/i18n';

export interface StepType {
  id: number;
  icon: string;
  description: string;
  alt: string;
}

export const StepSection = async () => {
  const { t } = await useTranslation('hero.steps');

  const stepsArray: StepType[] = [
    {
      id: 1,
      icon: Img1,
      description: t('1.description'),
      alt: 'Koncepcja strony ikonka',
    },
    {
      id: 2,
      icon: Img2,
      description: t('2.description'),
      alt: 'Skuteczne treści ikonka',
    },
    {
      id: 3,
      icon: Img3,
      description: t('3.description'),
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
