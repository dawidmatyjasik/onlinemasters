import React from 'react';

import { Carousel } from './components/Carousel';

import { useTranslation } from 'app/i18n';
import { Container } from 'components/atoms/container/Container';
import { Divider } from 'components/atoms/divider/Divider';
import { Text } from 'components/atoms/text/Text';

export const Gallery = async () => {
  const { t } = await useTranslation('gallery');
  return (
    <section className="flex flex-col gap-12">
      <Container className="flex flex-col gap-4">
        <Text as="h2">{t('_title')}</Text>
        <Divider />
      </Container>
      <Carousel />
    </section>
  );
};
