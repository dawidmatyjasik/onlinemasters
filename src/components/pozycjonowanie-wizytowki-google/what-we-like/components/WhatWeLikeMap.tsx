import React from 'react';

import Image from 'next/image';

export const WhatWeLikeMap = () => (
  <article className="mx-auto flex flex-col items-center gap-4 md:flex-row md:gap-12">
    <div className="relative h-full w-full">
      <Image
        src="/pozycjonowanie-wizytowki/what-we-like/mapka-przed.webp"
        alt="Rezulalt przed pozycjonowamiem wizytówki"
        width={400}
        height={400}
        className="rounded-[20px]"
      />
    </div>
    <Image src="/svg/chevron-right.svg" alt="Rezulalt po działaniu" width={90} height={90} />

    <div className="relative h-full w-full">
      <Image
        src="/pozycjonowanie-wizytowki/what-we-like/mapka-po.webp"
        alt="Rezulalt po pozycjonowaniu wizytówki"
        width={400}
        height={400}
        className="rounded-[20px]"
      />
    </div>
  </article>
);
