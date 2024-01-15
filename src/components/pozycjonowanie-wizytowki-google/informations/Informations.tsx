import React from 'react';

import InformationsCard from './components/InformationsCard';

import { useTranslation } from 'app/i18n';
import { Container } from 'components/atoms/container/Container';
import { Divider } from 'components/atoms/divider/Divider';
import { Text } from 'components/atoms/text/Text';

export interface InformationsStructure {
  subTitle: string;
  description1: string;
  description2?: string;
}

const INFORMATIONS_STRUCTURE: InformationsStructure[] = [
  {
    subTitle: '1._subTitle',
    description1: '1._subDescription1',
    description2: '1._subDescription2',
  },
  {
    subTitle: '2._subTitle',
    description1: '2._subDescription1',
    description2: '2._subDescription2',
  },
  {
    subTitle: '3._subTitle',
    description1: '3._subDescription1',
    description2: '3._subDescription2',
  },
  {
    subTitle: '4._subTitle',
    description1: '4._subDescription1',
    description2: '4._subDescription2',
  },
  {
    subTitle: '5._subTitle',
    description1: '5._subDescription1',
    description2: '5._subDescription2',
  },
  {
    subTitle: '6._subTitle',
    description1: '6._subDescription1',
    description2: '6._subDescription2',
  },
  {
    subTitle: '7._subTitle',
    description1: '7._subDescription1',
  },
  {
    subTitle: '8._subTitle',
    description1: '8._subDescription1',
  },
  {
    subTitle: '9._subTitle',
    description1: '9._subDescription1',
  },
];

export const Informations = async () => {
  const { t } = await useTranslation('informations');
  return (
    <Container>
      <section className="flex flex-col gap-6">
        <Text type="heading" as="h2">
          {t('_title')}
        </Text>
        <Divider />
        <Text type="heading">{t('_description')}</Text>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2  lg:grid-cols-3">
          {INFORMATIONS_STRUCTURE.map(({ subTitle, description1, description2 }) => (
            <InformationsCard
              key={subTitle}
              subTitle={subTitle}
              description1={description1}
              description2={description2}
            />
          ))}
        </div>
      </section>
    </Container>
  );
};
