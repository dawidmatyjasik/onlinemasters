import React from 'react';

import Image from 'next/image';

import contariaImg from 'app/assets/img/contaria.png';
import demmanImg from 'app/assets/img/demman.webp';
import fizjoterapiaImg from 'app/assets/img/fizjoterapia.png';
import pospawaneImg from 'app/assets/img/pospawane.webp';
import { Text } from 'components/atoms/text/Text';

export const Trusted = () => (
  <article className="flex w-full flex-col justify-center gap-4">
    <div className="flex flex-1 items-center justify-between">
      <Image src={pospawaneImg} alt="pospawane" className=" w-[100px] object-contain" />
      <Image src={contariaImg} alt="contaria" className="w-[100px] object-contain" />
      <Image src={fizjoterapiaImg} alt="fizjoterapia" className=" w-[100px] object-contain" />
      <Image src={demmanImg} alt="demman" className="w-[100px] object-contain" />
    </div>
    <Text size="h4" color="footer" type="heading" className="text-center">
      ZAUFALI NAM
    </Text>
  </article>
);
