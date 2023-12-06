import React from 'react';

import { useTranslation } from 'app/i18n';
import { Divider } from 'components/atoms/divider/Divider';
import { Text } from 'components/atoms/text/Text';

export const Content = async () => {
  const { t } = await useTranslation('chooseUs');
  return (
    <article className="flex flex-col gap-4">
      <Text as="h2">{t('_title')}</Text>
      <Divider />
      <Text>{t('_description1')}</Text>
      <Text>{t('_description2')}</Text>
      <Text>{t('_description3')}</Text>
      <Text>{t('_description4')}</Text>
    </article>
  );
};
