import React from 'react';

import { WhatImportantItem } from './components/WhatImportantItem';

import { useTranslation } from 'app/i18n';
import { Container } from 'components/atoms/container/Container';
import { Text } from 'components/atoms/text/Text';

const WHAT_IMPORTANT_STRUCTURE = [
  { title: 'Responsywność', description: '1._description' },
  { title: 'Lokalna Optymalizacja', description: '2._description' },
  { title: 'Nawigacja i Struktura', description: '3._description' },
  { title: 'Personalizacja Treści', description: '4._description' },
  { title: 'Estetyka i Design', description: '5._description' },
  { title: 'Bezpieczeństwo', description: '6._description' },
  { title: 'SEO-friendly', description: '7._description' },
  { title: 'Interakcja i Engażowanie', description: '8._description' },
  { title: 'Aktualizacje Treści', description: '9._description' },
  { title: 'Analiza i Statystyki', description: '10._description' },
];

export const WhatImportant = async () => {
  const { t } = await useTranslation('whatImportant');
  return (
    <Container>
      <section className="flex flex-col gap-4">
        <Text as="h2">{t('_title')}</Text>
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
