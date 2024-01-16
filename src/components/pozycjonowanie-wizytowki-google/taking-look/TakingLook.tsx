import React from 'react';

import Image from 'next/image';

import { TakingLookContent } from './components/TakingLookContent';

import { Container } from 'components/atoms/container/Container';
import { Link } from 'components/atoms/link/Link';

export const TakingLook = () => (
  <Container>
    <section className="flex gap-10">
      <article className="hidden flex-col gap-2 lg:flex ">
        <Image
          src="/strony-internetowe/taking-look/przygladamy-sie.webp"
          alt="Przyglądamy się Online Masters"
          width={520}
          height={770}
          className="rounded-3xl "
        />
        <div className="flex flex-wrap gap-1.5">
          <Link href="https://onlinemasters.pl" className="flex h-[48px] w-fit items-center font-semibold md:h-auto">
            #OnlineMasters
          </Link>
          <Link
            href="https://onlinemasters.pl/oferta"
            className="flex h-[48px] w-fit items-center font-semibold md:h-auto">
            #NajlepszeRozwiązaniaOnline
          </Link>
        </div>
      </article>
      <TakingLookContent />
    </section>
  </Container>
);
