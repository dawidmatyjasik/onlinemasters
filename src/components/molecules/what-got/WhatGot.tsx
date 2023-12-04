import React from 'react';

import { WhatGotCards } from './components/WhatGotCard';

import { useTranslation } from 'app/i18n';
import { Card } from 'components/atoms/card/Card';
import { Container } from 'components/atoms/container/Container';
import { Text } from 'components/atoms/text/Text';

const WHAT_GOT_STRUCTURE = [
  { src: '/svg/support-svgrepo-com.svg', title: '1.title', description: '1.description' },
  { src: '/svg/website-theme-svgrepo-com.svg', title: '2.title', description: '2.description' },
  { src: '/svg/content-right-svgrepo-com.svg', title: '3.title', description: '3.description' },
  { src: '/svg/iphone-svgrepo-com.svg', title: '4.title', description: '4.description' },
  { src: '/svg/handshake-deal-svgrepo-com.svg', title: '5.title', description: '5.description' },
];

export const WhatGot = async () => {
  const { t } = await useTranslation('whatGot');

  return (
    <Container>
      <section className="lg grid grid-cols-1 grid-rows-2 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Text as="h2" className="p-8">
          {t('title')}
        </Text>
        {WHAT_GOT_STRUCTURE.map(({ src, title, description }) => (
          <Card key={title}>
            <WhatGotCards src={src} title={title} description={description} />
          </Card>
        ))}
      </section>
    </Container>
  );
};
