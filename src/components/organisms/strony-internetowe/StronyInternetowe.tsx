import React from 'react';

import { Characters } from 'components/molecules/characters/Characters';
import { ChooseUs } from 'components/molecules/choose-us/ChooseUs';
import { DontWorry } from 'components/molecules/dont-worry/DontWorry';
import { FreeStaff } from 'components/molecules/free-staff/FreeStaff';
import Gallery from 'components/molecules/gallery/Gallery';
import { GetProject } from 'components/molecules/get-project/GetProject';
import { Hero } from 'components/molecules/hero/Hero';
import { Informations } from 'components/molecules/informations/Informations';
import { Intuition } from 'components/molecules/intuition/Intuition';
import { PageCosts } from 'components/molecules/page-costs/PageCosts';
import { PriceBegin } from 'components/molecules/price-begin/PriceBegin';
import { PriceList } from 'components/molecules/price-list/PriceList';
import { TakingLook } from 'components/molecules/taking-look/TakingLook';
import { WhatGot } from 'components/molecules/what-got/WhatGot';
import { WhyUs } from 'components/molecules/why-us/WhyUs';

export const StronyInternetowe = () => (
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
