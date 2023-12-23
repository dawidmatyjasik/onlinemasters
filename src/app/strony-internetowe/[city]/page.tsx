import React from 'react';

import { StronyInternetowe } from 'components/organisms/strony-internetowe/StronyInternetowe';
import { getCityData } from 'utils/getCityData';

import type { Metadata } from 'next';

export async function generateStaticParams() {
  const fileNames = getCityData('strony-internetowe');
  return fileNames;
}

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const { city } = params;
  const capitalizeFirstLetter = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

  return {
    title: `Strony Internetowe ${capitalizeFirstLetter(city)} | Online Masters`,
    description: `Strony Internetowe ${city} - Profesjonalnie zaprezentuj swoją firmę w internecie i przyciągnij nowych klientów! Zamów darmowy projekt>`,
    icons: '/images/favicon.png',
    referrer: 'origin-when-cross-origin',
    publisher: 'Online Masters',
    creator: 'Online Masters',
  };
}

export default async function Page() {
  return <StronyInternetowe />;
}
