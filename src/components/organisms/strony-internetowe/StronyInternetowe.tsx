import React from 'react';

import { Characters } from 'components/strony-internetowe/characters/Characters';
import { ChooseUs } from 'components/strony-internetowe/choose-us/ChooseUs';
import { DontWorry } from 'components/strony-internetowe/dont-worry/DontWorry';
import { FreeStaff } from 'components/strony-internetowe/free-staff/FreeStaff';
import Gallery from 'components/strony-internetowe/gallery/Gallery';
import { GetProject } from 'components/strony-internetowe/get-project/GetProject';
import { Hero } from 'components/strony-internetowe/hero/Hero';
import { Informations } from 'components/strony-internetowe/informations/Informations';
import { Intuition } from 'components/strony-internetowe/intuition/Intuition';
import { PageCosts } from 'components/strony-internetowe/page-costs/PageCosts';
import { PriceBegin } from 'components/strony-internetowe/price-begin/PriceBegin';
import { PriceList } from 'components/strony-internetowe/price-list/PriceList';
import { TakingLook } from 'components/strony-internetowe/taking-look/TakingLook';
import { WhatGot } from 'components/strony-internetowe/what-got/WhatGot';
import { WhyUs } from 'components/strony-internetowe/why-us/WhyUs';

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
