import React from 'react';

import Image from 'next/image';

export const WhatWeLikeMap = () => (
  <article className="mx-auto flex items-center gap-16">
    <div className="relative h-full w-full">
      <Image
        src="/pozycjonowanie-wizytowki/what-we-like/mapka-przed.webp"
        alt="Rezulalt przed pozycjonowamiem wizytówki"
        width={400}
        height={400}
      />
    </div>
    <Image src="/svg/chevron-right.svg" alt="Rezulalt po działaniu" width={90} height={90} />

    <div className="relative h-full w-full">
      <Image
        src="/pozycjonowanie-wizytowki/what-we-like/mapka-po.webp"
        alt="Rezulalt po pozycjonowaniu wizytówki"
        width={400}
        height={400}
      />
    </div>
  </article>
);
