import React from 'react';

import { useTranslation } from 'app/i18n';
import { Container } from 'components/atoms/container/Container';
import { Divider } from 'components/atoms/divider/Divider';
import { Text } from 'components/atoms/text/Text';

export const WhatIsGmf = async () => {
  const { t } = await useTranslation('gmf');
  return (
    <Container>
      <section className="flex flex-col gap-6">
        <Text type="heading" as="h2">
          {t('title')}
        </Text>
        <Divider />
        <Text>{t('_description1')}</Text>
        <Text>{t('_description2')}</Text>
        <Text>{t('_description3')}</Text>
        <Text>{t('_description4')}</Text>
      </section>
    </Container>
  );
};
