import React from 'react';

import Image from 'next/image';

import { Text } from 'components/atoms/text/Text';

export const Trusted = () => (
  <article className="flex w-full flex-col justify-center gap-4">
    <div className="flex flex-1 items-center justify-between gap-4">
      <Image
        src="/images/hero/pospawane.webp"
        alt="Strony Internetowe - Online Masters"
        className="object-contain"
        width={100}
        height={100}
      />
      <Image
        src="/images/hero/contaria.png"
        alt="Sklepy Internetowe - Online Masters"
        className="object-contain"
        width={100}
        height={100}
      />
      <Image
        src="/images/hero/fizjoterapia.png"
        alt="Opieka nad stroną - Online Masters"
        className="object-contain"
        width={100}
        height={100}
      />
      <Image
        src="/images/hero/demman.webp"
        alt="Social Media - Online Masters"
        className="object-contain"
        width={100}
        height={100}
      />
    </div>
    <Text as="span" size="small" className="text-center tracking-[2px] !text-[#8f8f8f]" type="heading">
      ZAUFALI NAM
    </Text>
  </article>
);
