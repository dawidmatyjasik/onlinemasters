import React from 'react';

import { ChooseUs } from 'components/molecules/choose-us/ChooseUs';
import { DontWorry } from 'components/molecules/dont-worry/DontWorry';
import { FreeStaff } from 'components/molecules/free-staff/FreeStaff';
import Gallery from 'components/molecules/gallery/Gallery';
import { GetProject } from 'components/molecules/get-project/GetProject';
import { Hero } from 'components/molecules/hero/Hero';
import { PriceBegin } from 'components/molecules/price-begin/PriceBegin';
import { TakingLook } from 'components/molecules/taking-look/TakingLook';
import { WhatGot } from 'components/molecules/what-got/WhatGot';
import { WhatImportant } from 'components/molecules/what-important/WhatImportant';
import { WhyUs } from 'components/molecules/why-us/WhyUs';
import { getCityData, useRedirect } from 'utils/getCityData';

export async function generateStaticParams() {
  const fileNames = getCityData('strony-internetowe');
  return fileNames;
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
      <GetProject />
      <FreeStaff />
    </>
  );
}
