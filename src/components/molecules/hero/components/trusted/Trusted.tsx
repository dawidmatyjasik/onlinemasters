import React from 'react';

import Image from 'next/image';

import { Text } from 'components/atoms/text/Text';

export const Trusted = () => (
  <article className="flex w-full flex-col justify-center gap-4">
    <div className="flex flex-1 items-center justify-between">
      <Image src="/images/pospawane.webp" alt="pospawane" className="object-contain" width={100} height={100} />
      <Image src="/images/contaria.png" alt="contaria" className="object-contain" width={100} height={100} />
      <Image src="/images/fizjoterapia.png" alt="fizjoterapia" className="object-contain" width={100} height={100} />
      <Image src="/images/demman.webp" alt="demman" className="object-contain" width={100} height={100} />
    </div>
    <Text as="span" size="small" className="text-center !text-[#8f8f8f]">
      ZAUFALI NAM
    </Text>
  </article>
);
