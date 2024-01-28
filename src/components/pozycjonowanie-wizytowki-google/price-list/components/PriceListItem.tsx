import React from 'react';

import Image from 'next/image';

import { Divider } from 'components/atoms/divider/Divider';
import { Text } from 'components/atoms/text/Text';

import type { PriceListStructure } from '../PriceList';

export const PriceListItem = ({ description, features, price, title }: PriceListStructure) => (
  <article className="grid items-center gap-5 rounded-3xl border border-[#D1D1D1] px-8 py-10">
    <Text as="h3" className="text-center">
      {title}
    </Text>
    <Divider />
    <Text className="text-center">{description}</Text>
    <ul className="list-none">
      {features.map(({ text, included }) => (
        <Text as="li" key={text} className="flex gap-2 [&:nth-child(2)]:font-bold">
          <Image
            src={included ? '/svg/check-circle-svgrepo-com.svg' : '/svg/circle-xmark-svgrepo-com.svg'}
            width={14}
            height={14}
            alt="Checks"
          />
          {text}
        </Text>
      ))}
    </ul>
    <Text size="h2" weight="bold" color="heading">
      {price}
    </Text>
  </article>
);
