import React from 'react';

import { useTranslation } from 'app/i18n';
import { Text } from 'components/atoms/text/Text';

interface TileProps {
  index: number;
}

export const Tile = async ({ index }: TileProps) => {
  const { t } = await useTranslation('whyUs.tiles');
  return (
    <article className="flex flex-col gap-4">
      <Text as="h3" size="h3">
        {t(`${index}.title`)}
      </Text>
      <Text>{t(`${index}.description`)}</Text>
    </article>
  );
};
