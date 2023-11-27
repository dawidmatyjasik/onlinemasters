import React from 'react';

import { Step } from '../step/Step';

import { useTranslation } from 'app/i18n';

export const StepSection = async () => {
  const { t } = await useTranslation('hero.steps');

  const stepsArray = [
    {
      id: 1,
      icon: '',
      description: t('1.description'),
    },
    {
      id: 2,
      icon: '',
      description: t('2.description'),
    },
    {
      id: 3,
      icon: '',
      description: t('3.description'),
    },
  ];

  return (
    <div>
      {stepsArray.map(({ id, icon, description }) => (
        <Step key={id} icon={icon} description={description} />
      ))}
    </div>
  );
};
