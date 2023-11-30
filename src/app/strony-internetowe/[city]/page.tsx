import React from 'react';

import { ChooseUs } from 'components/molecules/choose-us/ChooseUs';
import { DontWorry } from 'components/molecules/dont-worry/DontWorry';
import { Hero } from 'components/molecules/hero/Hero';
import { PriceBegin } from 'components/molecules/price-begin/PriceBegin';
import { WhatGot } from 'components/molecules/what-got/WhatGot';
import { WhatImportant } from 'components/molecules/what-important/WhatImportant';
import { WhyUs } from 'components/molecules/why-us/WhyUs';
import { getCityData } from 'utils/getCityData';

export async function generateStaticParams() {
  const fileNames = getCityData('strony-internetowe');
  return fileNames;
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
      <WhatImportant />
    </>
  );
}
