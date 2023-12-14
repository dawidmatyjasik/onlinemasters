import React from 'react';

import { useTranslation } from 'app/i18n';
import { Step } from 'components/atoms/step/Step';
import { Text } from 'components/atoms/text/Text';

interface StepBoxProps {
  step: number;
  title: string;
  description: string;
  img: string;
  alt: string;
  isLast?: boolean;
}

const StepBox = async ({ step, isLast, title, img, description, alt }: StepBoxProps) => {
  const { t } = await useTranslation('dontWorry.steps');
  return (
    <article className="flex flex-col gap-6">
      <Step step={step} hideArrow={isLast} img={img} alt={alt} />
      <Text>{title}</Text>
      <Text>{t(description)}</Text>
    </article>
  );
};

export default StepBox;
