import React from 'react';

import { WhatImportantItem } from './components/WhatImportantItem';

import { useTranslation } from 'app/i18n';
import { Container } from 'components/atoms/container/Container';
import { Text } from 'components/atoms/text/Text';

const WHAT_IMPORTANT_STRUCTURE = [
  { title: '1.title', description: '1.description' },
  { title: '2.title', description: '2.description' },
  { title: '3.title', description: '3.description' },
  { title: '4.title', description: '4.description' },
  { title: '5.title', description: '5.description' },
  { title: '6.title', description: '6.description' },
  { title: '7.title', description: '7.description' },
  { title: '8.title', description: '8.description' },
  { title: '9.title', description: '9.description' },
  { title: '10.title', description: '10.description' },
];

export const WhatImportant = async () => {
  const { t } = await useTranslation('whatImportant');
  return (
    <Container>
      <section className="flex flex-col gap-4">
        <Text as="h2">{t('title')}</Text>
        <Text>{t('description')}</Text>
        <div className="grid grid-cols-1 grid-rows-5 gap-12 md:grid-cols-2">
          {WHAT_IMPORTANT_STRUCTURE.map(({ title, description }, index) => (
            <WhatImportantItem title={title} description={description} index={index + 1} key={title} />
          ))}
        </div>
      </section>
    </Container>
  );
};
