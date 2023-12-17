import React from 'react';

import { CharactersItem } from './components/CharactersItem';

import { useTranslation } from 'app/i18n';
import { Container } from 'components/atoms/container/Container';
import { Divider } from 'components/atoms/divider/Divider';
import { Text } from 'components/atoms/text/Text';

export interface CharactersStructure {
  subTitle: string;
  subDescription: string;
}

const INFORMATIONS_STRUCTURE: CharactersStructure[] = [
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
  {
    subTitle: '10._subTitle',
    subDescription: '10._subDescription',
  },
  {
    subTitle: '11._subTitle',
    subDescription: '11._subDescription',
  },
  {
    subTitle: '12._subTitle',
    subDescription: '12._subDescription',
  },
];

export const Characters = async () => {
  const { t } = await useTranslation('characters');
  return (
    <Container>
      <section className="flex flex-col gap-6">
        <Text type="heading" as="h2">
          {t('_title')}
        </Text>
        <Divider />
        <Text type="heading">{t('_description')}</Text>
        <ul className="flex list-inside list-disc flex-col gap-2">
          {INFORMATIONS_STRUCTURE.map(({ subDescription, subTitle }) => (
            <CharactersItem key={subTitle} subTitle={subTitle} subDescription={subDescription} />
          ))}
        </ul>
      </section>
    </Container>
  );
};
