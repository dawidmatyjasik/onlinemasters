import React from 'react';

import Image from 'next/image';

import { useTranslation } from 'app/i18n';
import { Text } from 'components/atoms/text/Text';

interface WhatGotCardsProps {
  src: string;
  title: string;
  description: string;
}

export const WhatGotCards = async ({ description, src, title }: WhatGotCardsProps) => {
  const { t } = await useTranslation('whatGot.cards');
  return (
    <div className="flex flex-col gap-2">
      <Image src={src} alt="TODO" width={38} height={38} />
      <Text weight="medium" as="h3">
        {title}
      </Text>
      <Text>{t(description)}</Text>
    </div>
  );
};
