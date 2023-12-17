import React from 'react';

import { useTranslation } from 'app/i18n';
import { Container } from 'components/atoms/container/Container';
import { Divider } from 'components/atoms/divider/Divider';
import { Text } from 'components/atoms/text/Text';

export const Speed = async () => {
  const { t } = await useTranslation('speed');
  return (
    <Container>
      <section className="flex flex-col gap-6">
        <Text as="h2">{t('_title')}</Text>
        <Divider />
        <Text>{t('_description1')}</Text>
        <Text>{t('_description2')}</Text>
        <Text>{t('_description3')}</Text>
        <Text>{t('_description4')}</Text>
        <Text>{t('_summary')}</Text>
      </section>
    </Container>
  );
};
