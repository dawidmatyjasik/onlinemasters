import React from 'react';

import { ChooseUs } from 'components/molecules/choose-us/ChooseUs';
import { DontWorry } from 'components/molecules/dont-worry/DontWorry';
import { FreeStaff } from 'components/molecules/free-staff/FreeStaff';
import Gallery from 'components/molecules/gallery/Gallery';
import { GetProject } from 'components/molecules/get-project/GetProject';
import { Hero } from 'components/molecules/hero/Hero';
import { PriceBegin } from 'components/molecules/price-begin/PriceBegin';
import { PriceList } from 'components/molecules/price-list/PriceList';
import { TakingLook } from 'components/molecules/taking-look/TakingLook';
import { WhatGot } from 'components/molecules/what-got/WhatGot';
import { WhatImportant } from 'components/molecules/what-important/WhatImportant';
import { WhyUs } from 'components/molecules/why-us/WhyUs';
import { getCityData, useRedirect } from 'utils/getCityData';

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
    keywords: `strony internetowe ${city}, strony www ${city}, strony internetowe dla firm ${city}, strony www dla firm ${city}`,
    alternates: {
      canonical: `https://oferty.onlinemasters.pl/strony-internetowe/${city}`,
      languages: {
        pl: `https://oferty.onlinemasters.pl/strony-internetowe/${city}`,
      },
    },
    referrer: 'origin-when-cross-origin',
    publisher: 'Online Masters',
    creator: 'Online Masters',
    verification: { google: '' },
  };
}

export default async function Page({ params }: { params: { city: string } }) {
  useRedirect('strony-internetowe', params.city);
  return (
    <>
      <Hero />
      <WhyUs />
      <DontWorry />
      <ChooseUs />
      <PriceBegin />
      <WhatGot />
      <WhatImportant />
      <TakingLook />
      <Gallery />
      <PriceList />
      <GetProject />
      <FreeStaff />
    </>
  );
}
