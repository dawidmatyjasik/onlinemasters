import React from 'react';

import { OpiekaNadStronamiWordpress } from 'components/organisms/opieka-nad-stronami-wordpress/OpiekaNadStronamiWordpress';
import { getCityData, useRedirect } from 'utils/getCityData';

import type { Metadata } from 'next';

export async function generateStaticParams() {
  const fileNames = getCityData('opieka-nad-stronami-wordpress');
  return fileNames;
}

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const { city } = params;
  const capitalizeFirstLetter = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

  return {
    title: `Opieka nad Stronami Wordpress ${capitalizeFirstLetter(city)} | Online Masters`,
    description: `Opieka nad stronami WordPress ${city}. Nie martw o to czy Twoja strona jest bezpieczna i zawsze widoczna. Sprawdź teraz naszą ofertę >`,
    alternates: {
      canonical: `https://oferty.onlinemasters.pl/opieka-nad-stronami-wordpress/${city}`,
      languages: {
        pl: `https://oferty.onlinemasters.pl/opieka-nad-stronami-wordpress/${city}`,
      },
    },
    referrer: 'origin-when-cross-origin',
    publisher: 'Online Masters',
    creator: 'Online Masters',
  };
}

export default async function Page({ params }: { params: { city: string } }) {
  useRedirect('opieka-nad-stronami-wordpress', params.city);
  return <OpiekaNadStronamiWordpress />;
}
