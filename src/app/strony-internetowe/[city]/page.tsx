import React from 'react';

import { Hero } from 'components/molecules/hero/Hero';
import { WhyUs } from 'components/molecules/why-us/WhyUs';
import { getCityData } from 'utils/getCityData';

export async function generateStaticParams() {
  const fileNames = getCityData('strony-internetowe');
  return fileNames;
}

export default async function Page() {
  return (
    <div>
      <Hero />
      <WhyUs />
    </div>
  );
}
