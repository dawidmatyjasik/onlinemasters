import React from 'react';

import { useTranslation } from 'app/i18n';
import { Text } from 'components/atoms/text/Text';

import type { CharactersStructure } from '../Characters';

export const CharactersItem = async ({ subDescription, subTitle }: CharactersStructure) => {
  const { t } = await useTranslation('characters.items');
  return (
    <Text as="li">
      <span className="font-bold">{t(subTitle)} - </span>
      {t(subDescription)}
    </Text>
  );
};
