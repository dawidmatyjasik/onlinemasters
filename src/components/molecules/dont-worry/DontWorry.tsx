import React from 'react';

import StepBox from './components/stepBox/StepBox';

import { useTranslation } from 'app/i18n';
import { Container } from 'components/atoms/container/Container';
import { Divider } from 'components/atoms/divider/Divider';
import { Text } from 'components/atoms/text/Text';

const STEP_STRUCTURE = [
  {
    id: 1,
    title: '1.title',
    description: '1.description',
    img: '/svg/website-theme-svgrepo-com.svg',
  },
  {
    id: 2,
    title: '2.title',
    description: '2.description',
    img: '/svg/website-seo-promotion-svgrepo-com.svg',
  },
  {
    id: 3,
    title: '3.title',
    description: '3.description',
    img: '/svg/website-seo-marketing-hitting-the-bullseye-svgrepo-com.svg',
  },
];

export const DontWorry = async () => {
  const { t } = await useTranslation('dontWorry');

  return (
    <Container>
      <section className="flex flex-col gap-4">
        <Text type="heading" as="h2">
          {t('title')}
        </Text>
        <Divider />
        <Text>{t('description')}</Text>
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          {STEP_STRUCTURE.map(({ title, description, img, id }, index) => (
            <StepBox
              step={index + 1}
              isLast={index + 1 === STEP_STRUCTURE.length}
              key={id}
              title={title}
              img={img}
              description={description}
            />
          ))}
        </div>
      </section>
    </Container>
  );
};
