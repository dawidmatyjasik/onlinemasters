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
        <Text size="h2" type="heading">
          {t('title')}
        </Text>
        <Divider />
        <Text className="text-balance">{t('description')}</Text>
        <section className="grid grid-cols-3 grid-rows-2 gap-12 ">
          {Array.from({ length: 6 }, (_, i) => i + 1).map((index) => (
            <Tile index={index} key={index} />
          ))}
        </section>
        <Text>{t('summary')}</Text>
      </section>
    </Container>
  );
};
