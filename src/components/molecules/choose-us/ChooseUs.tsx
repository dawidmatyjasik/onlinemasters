import React from 'react';

import Image from 'next/image';

import { Content } from './components/Content';

import { Container } from 'components/atoms/container/Container';

export const ChooseUs = () => (
  <Container>
    <section className="flex items-center gap-20">
      <Image
        src="/images/choose-us/choose-us.webp"
        alt="Wybierz nas"
        width={425}
        height={640}
        className="hidden rounded-2xl lg:block"
      />
      <Content />
    </section>
  </Container>
);
