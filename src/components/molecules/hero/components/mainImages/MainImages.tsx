import React from 'react';

import Image from 'next/image';

export const MainImages = async () => (
  <div className=" flex w-4/12 flex-col pr-16 align-middle">
    <div className="relative left-0 top-0">
      <div>
        <Image
          src="/strony-internetowe/hero/hero-first-image.webp"
          alt="Strony internetowe — kobieta i mężczyzna — Online Masters"
          className="relative left-0 top-0 rounded-lg"
          width={335}
          height={504}
        />
      </div>
      <div>
        <Image
          src="/strony-internetowe/hero/hero-second-image.webp"
          alt="Strony internetowe — kobieta i mężczyzna — Grupa ludzi"
          className="invisible absolute -bottom-48 -right-48 rounded-lg md:visible"
          width={260}
          height={390}
        />
      </div>
    </div>
  </div>
);
