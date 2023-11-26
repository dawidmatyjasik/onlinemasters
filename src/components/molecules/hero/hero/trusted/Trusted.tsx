import React from 'react';

import Image from 'next/image';

import contaria from '../../../../../app/assets/img/contaria.png';
import demman from '../../../../../app/assets/img/demman.webp';
import fizjoterapia from '../../../../../app/assets/img/fizjoterapia.png';
import pospawane from '../../../../../app/assets/img/pospawane.webp';

import { Text } from 'components/atoms/text/Text';

export const Trusted = () => (
  <div className="flex w-full flex-col justify-center gap-4 border-b">
    <div className="flex w-full">
      <Image src={contaria} alt="contaria" className="w-1/4 object-contain" />
      <Image src={demman} alt="demman" className="w-1/4 object-contain" />
      <Image src={pospawane} alt="pospawane" className="w-1/4 object-contain" />
      <Image src={fizjoterapia} alt="fizjoterapia" className="w-1/4 object-contain" />
    </div>
    <Text size="h4" color="footer" type="heading">
      XDDDDDDDDD
    </Text>
  </div>
);
