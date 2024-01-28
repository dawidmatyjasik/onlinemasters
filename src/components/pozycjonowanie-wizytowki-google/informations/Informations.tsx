import React from 'react';

import InformationsCard from './components/InformationsCard';

import { useTranslation } from 'app/i18n';
import { Container } from 'components/atoms/container/Container';
import { Divider } from 'components/atoms/divider/Divider';
import { Text } from 'components/atoms/text/Text';

export interface InformationsStructure {
  subTitle: string;
  subDescription: string;
}

const INFORMATIONS_STRUCTURE: InformationsStructure[] = [
  {
    subTitle: '1._subTitle',
    subDescription: '1._subDescription',
  },
  {
    subTitle: '2._subTitle',
    subDescription: '2._subDescription',
  },
  {
    subTitle: '3._subTitle',
    subDescription: '3._subDescription',
  },
  {
    subTitle: '4._subTitle',
    subDescription: '4._subDescription',
  },
  {
    subTitle: '5._subTitle',
    subDescription: '5._subDescription',
  },
  {
    subTitle: '6._subTitle',
    subDescription: '6._subDescription',
  },
  {
    subTitle: '7._subTitle',
    subDescription: '7._subDescription',
  },
  {
    subTitle: '8._subTitle',
    subDescription: '8._subDescription',
  },
  {
    subTitle: '9._subTitle',
    subDescription: '9._subDescription',
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
          {INFORMATIONS_STRUCTURE.map(({ subTitle, subDescription }) => (
            <InformationsCard key={subTitle} subTitle={subTitle} subDescription={subDescription} />
          ))}
        </div>
      </section>
    </Container>
  );
};
