import React from 'react';

import CostCards from './components/CostCards';

import { useTranslation } from 'app/i18n';
import { Container } from 'components/atoms/container/Container';
import { Divider } from 'components/atoms/divider/Divider';
import { Text } from 'components/atoms/text/Text';

export const PageCosts = async () => {
  const { t } = await useTranslation('pageCosts');
  return (
    <Container>
      <section className="flex flex-col gap-6">
        <Text type="heading" as="h2">
          {t('_title')}
        </Text>
        <Divider />
        <Text type="heading">{t('_description')}</Text>
        <CostCards />
        <Text type="heading">{t('_summary')}</Text>
      </section>
    </Container>
  );
};
