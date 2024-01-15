import React from 'react';

import { Gallery } from 'components/molecules/gallery/Gallery';
import { Characters } from 'components/pozycjonowanie-wizytowki-google/characters/Characters';
import { ChooseUs } from 'components/pozycjonowanie-wizytowki-google/choose-us/ChooseUs';
import { DontWorry } from 'components/pozycjonowanie-wizytowki-google/dont-worry/DontWorry';
import { FreeStaff } from 'components/pozycjonowanie-wizytowki-google/free-staff/FreeStaff';
import { GetProject } from 'components/pozycjonowanie-wizytowki-google/get-project/GetProject';
import { Hero } from 'components/pozycjonowanie-wizytowki-google/hero/Hero';
import { Informations } from 'components/pozycjonowanie-wizytowki-google/informations/Informations';
import { Intuition } from 'components/pozycjonowanie-wizytowki-google/intuition/Intuition';
import { PageCosts } from 'components/pozycjonowanie-wizytowki-google/page-costs/PageCosts';
import { PriceBegin } from 'components/pozycjonowanie-wizytowki-google/price-begin/PriceBegin';
import { PriceList } from 'components/pozycjonowanie-wizytowki-google/price-list/PriceList';
import { TakingLook } from 'components/pozycjonowanie-wizytowki-google/taking-look/TakingLook';
import { WhatGot } from 'components/pozycjonowanie-wizytowki-google/what-got/WhatGot';
import { WhyUs } from 'components/pozycjonowanie-wizytowki-google/why-us/WhyUs';
import { getCityData } from 'utils/getCityData';

import type { Metadata } from 'next';

export async function generateStaticParams() {
  const fileNames = getCityData('pozycjonowanie-wizytowki-google');
  return fileNames;
}

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const { city } = params;
  const capitalizeFirstLetter = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

  return {
    title: `Pozycjonowanie Wizytówki Google ${capitalizeFirstLetter(city)} | Online Masters`,
    description: `Strony Internetowe ${city} - Profesjonalnie zaprezentuj swoją firmę w internecie i przyciągnij nowych klientów! Zamów darmowy projekt>`, // TODO
    icons: '/images/favicon.png',
    referrer: 'origin-when-cross-origin',
    publisher: 'Online Masters',
    creator: 'Online Masters',
  };
}

export default async function Page() {
  return (
    <>
      <Hero />
      <WhyUs />
      <DontWorry />
      <ChooseUs />
      <PriceBegin />
      <WhatGot />
      <TakingLook />
      <Gallery />
      <PriceList />
      <GetProject />
      <FreeStaff />
      <PageCosts />
      <Informations />
      <Characters />
      <Intuition />
    </>
  );
}
