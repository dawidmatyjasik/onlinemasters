import React from 'react';

import { useTranslation } from 'app/i18n';
import { Divider } from 'components/atoms/divider/Divider';
import { Text } from 'components/atoms/text/Text';

export const Content = async () => {
  const { t } = await useTranslation('chooseUs');
  return (
    <article className="flex flex-col gap-4">
      <Text as="h2">{t('title')}</Text>
      <Divider />
      <Text>{t('description1')}</Text>
      <Text>{t('description2')}</Text>
      <Text>{t('description3')}</Text>
      <Text>{t('description4')}</Text>
    </article>
  );
};
