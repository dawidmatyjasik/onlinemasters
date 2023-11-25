import React from 'react';

import { useTranslation } from 'app/i18n';
import { Hero } from 'components/molecules/hero/Hero';
import { getCityData } from 'utils/getCityData';

export async function generateStaticParams() {
  const fileNames = getCityData('strony-internetowe');
  return fileNames;
}

export default async function Page() {
  const { t } = await useTranslation();
  return (
    <div>
      <h1>{t('title')}</h1>
      <Hero />
    </div>
  );
}
