import React from 'react';

import Image from 'next/image';

export const MainImages = async () => (
  <div className=" flex w-full flex-col lg:w-4/12 lg:pr-16 ">
    <div className="relative left-0 top-0">
      <Image
        src="/strony-internetowe/hero/hero-first-image.webp"
        alt="Strony internetowe — kobieta i mężczyzna — Online Masters"
        className="relative mx-auto rounded-lg lg:left-0 lg:top-0 lg:mx-0"
        width={335}
        height={504}
      />
      <div>
        <Image
          src="/strony-internetowe/hero/hero-second-image.webp"
          alt="Strony internetowe — kobieta i mężczyzna — Grupa ludzi"
          className="absolute -bottom-48 -right-48 hidden rounded-lg lg:block"
          width={260}
          height={390}
        />
      </div>
    </div>
  </div>
);
