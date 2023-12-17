import React from 'react';

import Image from 'next/image';

import { Text } from 'components/atoms/text/Text';

export const GoogleRating = () => (
  <article className="flex flex-col">
    <div className="flex gap-1">
      <Image src="/svg/star-sharp-svgrepo-com.svg" width={25} height={25} alt="" />
      <Image src="/svg/star-sharp-svgrepo-com.svg" width={25} height={25} alt="" />
      <Image src="/svg/star-sharp-svgrepo-com.svg" width={25} height={25} alt="" />
      <Image src="/svg/star-sharp-svgrepo-com.svg" width={25} height={25} alt="" />
      <Image src="/svg/star-sharp-svgrepo-com.svg" width={25} height={25} alt="" />
    </div>
    <Text size="small">5.0 ocena w Google</Text>
  </article>
);
