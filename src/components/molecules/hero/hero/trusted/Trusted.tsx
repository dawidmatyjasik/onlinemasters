import React from 'react';

import Image from 'next/image';

import contariaImg from 'assets/img/contaria.png';
import demmanImg from 'assets/img/demman.webp';
import fizjoterapiaImg from 'assets/img/fizjoterapia.png';
import pospawaneImg from 'assets/img/pospawane.webp';
import { Text } from 'components/atoms/text/Text';

export const Trusted = () => (
  <div className="flex w-full flex-col justify-center gap-4 border-b">
    <div className="flex flex-1">
      <Image src={contariaImg} alt="contaria" className="w-1/4 object-contain" />
      <Image src={demmanImg} alt="demman" className="w-1/4 object-contain" />
      <Image src={pospawaneImg} alt="pospawane" className="w-1/4 object-contain" />
      <Image src={fizjoterapiaImg} alt="fizjoterapia" className="w-1/4 object-contain" />
    </div>
    <Text size="h4" color="footer" type="heading">
      ZAUFALI NAM
    </Text>
  </div>
);
