import React from 'react';

import { Tile } from './components/Tile';

import { useTranslation } from 'app/i18n';
import { Container } from 'components/atoms/container/Container';
import { Divider } from 'components/atoms/divider/Divider';
import { Text } from 'components/atoms/text/Text';

export const WhyUs = async () => {
  const { t } = await useTranslation('whyUs');

  return (
    <Container>
      <section className="flex flex-col gap-4">
        <Text as="h2">{t('title')}</Text>
        <Divider />
        <Text className="text-balance">{t('_description')}</Text>
        <section className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          {Array.from({ length: 6 }, (_, i) => i + 1).map((index) => (
            <Tile index={index} key={index} />
          ))}
        </section>
        <Text>{t('_summary')}</Text>
      </section>
    </Container>
  );
};
