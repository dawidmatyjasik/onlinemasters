import React from 'react';

import Image from 'next/image';

import { TakingLookContent } from './components/TakingLookContent';

import { Container } from 'components/atoms/container/Container';
import { Link } from 'components/atoms/link/Link';

export const TakingLook = () => (
  <Container>
    <section className="flex gap-10">
      <article className="hidden flex-[1] flex-col justify-center gap-2 lg:flex">
        <Image
          src="/opieka/taking-look/przygladamy-sie.webp"
          alt="Przyglądamy się Online Masters"
          width={520}
          height={770}
          className="rounded-3xl"
        />
        <div className="flex gap-1.5">
          <Link href="https://onlinemasters.pl" className="flex h-[48px] w-fit items-center font-semibold">
            #OnlineMasters
          </Link>
          <Link href="https://onlinemasters.pl/oferta" className="flex h-[48px] w-fit items-center font-semibold">
            #NajlepszeRozwiązaniaOnline
          </Link>
        </div>
      </article>
      <TakingLookContent />
    </section>
  </Container>
);
