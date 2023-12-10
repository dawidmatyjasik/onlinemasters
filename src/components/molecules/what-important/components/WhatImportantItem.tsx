import React from 'react';

import { useTranslation } from 'app/i18n';
import { Text } from 'components/atoms/text/Text';

interface WhatImportantItemProps {
  title: string;
  description: string;
  index: number;
}

export const WhatImportantItem = async ({ description, index, title }: WhatImportantItemProps) => {
  const { t } = await useTranslation('whatImportant.items');
  return (
    <article>
      <Text as="h3" size="body" weight="bold">
        {index}. {title}:{' '}
      </Text>
      <Text className="inline">{t(description)}</Text>
    </article>
  );
};
