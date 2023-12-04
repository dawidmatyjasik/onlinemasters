import React from 'react';

import Image from 'next/image';

import { TakingLookContent } from './components/TakingLookContent';

import { Container } from 'components/atoms/container/Container';

export const TakingLook = () => (
  <Container>
    <section className="flex gap-10">
      <Image src="/images/taking-look/taking-look.webp" alt="Przyglądamy się" width={520} height={770} />
      <TakingLookContent />
    </section>
  </Container>
);
