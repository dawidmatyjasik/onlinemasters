import React from 'react';

import { useTranslation } from 'app/i18n';
import { Container } from 'components/atoms/container/Container';
import { Divider } from 'components/atoms/divider/Divider';
import { Text } from 'components/atoms/text/Text';

export const Intuition = async () => {
  const { t } = await useTranslation('intuition');
  return (
    <Container>
      <section className="flex flex-col gap-6">
        <Text type="heading" as="h2">
          {t('_title')}
        </Text>
        <Divider />
        <Text>{t('_description')}</Text>
      </section>
    </Container>
  );
};
