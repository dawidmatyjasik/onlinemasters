import React from 'react';

import { WhatWeLikeMap } from './components/WhatWeLikeMap';

import { useTranslation } from 'app/i18n';
import { Container } from 'components/atoms/container/Container';
import { Divider } from 'components/atoms/divider/Divider';
import { Text } from 'components/atoms/text/Text';

export const WhatWeLike = async () => {
  const { t } = await useTranslation('whatWeLike');

  return (
    <Container>
      <section className="flex flex-col items-center gap-10">
        <Text className="text-center [text-wrap:balance]" as="h2">
          {t('_title')}
        </Text>
        <Divider />
        <Text className="text-center">{t('description')}</Text>
        <WhatWeLikeMap />
      </section>
    </Container>
  );
};
