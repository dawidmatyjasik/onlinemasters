import React from 'react';

import { Backups } from 'components/opieka-nad-stronami-wordpress/backups/Backups';
import { Characters } from 'components/opieka-nad-stronami-wordpress/characters/Characters';
import { ChooseUs } from 'components/opieka-nad-stronami-wordpress/choose-us/ChooseUs';
import { DontWorry } from 'components/opieka-nad-stronami-wordpress/dont-worry/DontWorry';
import Gallery from 'components/opieka-nad-stronami-wordpress/gallery/Gallery';
import { Hero } from 'components/opieka-nad-stronami-wordpress/hero/Hero';
import { PriceBegin } from 'components/opieka-nad-stronami-wordpress/price-begin/PriceBegin';
import { PriceList } from 'components/opieka-nad-stronami-wordpress/price-list/PriceList';
import { Speed } from 'components/opieka-nad-stronami-wordpress/speed/Speed';
import { TakingLook } from 'components/opieka-nad-stronami-wordpress/taking-look/TakingLook';
import { WhatGot } from 'components/opieka-nad-stronami-wordpress/what-got/WhatGot';
import { WhyUs } from 'components/opieka-nad-stronami-wordpress/why-us/WhyUs';

export const OpiekaNadStronamiWordpress = () => (
  <>
    <Hero />
    <DontWorry />
    <ChooseUs />
    <PriceBegin />
    <WhatGot />
    <TakingLook />
    <Gallery />
    <PriceList />
    <Characters />
    <WhyUs />
    <Backups />
    <Speed />
  </>
);
