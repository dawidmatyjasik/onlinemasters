import React from 'react';

import Image from 'next/image';

import { Content } from './components/Content';

import { Container } from 'components/atoms/container/Container';

export const ChooseUs = () => (
  <Container>
    <section className="flex items-center gap-20">
      <Image
        src="/strony-internetowe/choose-us/wybierz-nas.webp"
        alt="Strony www katowice - Online Masters"
        width={425}
        height={640}
        className="hidden rounded-2xl lg:block"
      />
      <Content />
    </section>
  </Container>
);
