import React from 'react';

import StepBox from './components/stepBox/StepBox';

import { useTranslation } from 'app/i18n';
import { Container } from 'components/atoms/container/Container';
import { Divider } from 'components/atoms/divider/Divider';
import { Text } from 'components/atoms/text/Text';

const STEP_STRUCTURE = [
  {
    id: 1,
    title: 'Zoptymalizujemy Twoją wizytówkę Google',
    description: '1._description',
    img: '/svg/website-theme-svgrepo-com.svg',
    alt: 'Pozycjonowanie wizytówki google - krok 1',
  },
  {
    id: 2,
    title: 'Zadbamy o systematyczne publikacje',
    description: '2._description',
    img: '/svg/website-seo-promotion-svgrepo-com.svg',
    alt: 'Pozycjonowanie wizytówki google - krok 2',
  },
  {
    id: 3,
    title: 'Zwiększymy widoczność Twojej firmy w Google',
    description: '3._description',
    img: '/svg/website-seo-marketing-hitting-the-bullseye-svgrepo-com.svg',
    alt: 'Pozycjonowanie wizytówki google - krok 3',
  },
];

export const DontWorry = async () => {
  const { t } = await useTranslation('dontWorry');

  return (
    <Container>
      <section className="flex flex-col gap-4">
        <Text type="heading" as="h2">
          {t('_title')}
        </Text>
        <Divider />
        <Text>{t('_description')}</Text>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {STEP_STRUCTURE.map(({ title, description, img, id, alt }, index) => (
            <StepBox
              step={index + 1}
              isLast={index + 1 === STEP_STRUCTURE.length}
              key={id}
              title={title}
              img={img}
              description={description}
              alt={alt}
            />
          ))}
        </div>
      </section>
    </Container>
  );
};
