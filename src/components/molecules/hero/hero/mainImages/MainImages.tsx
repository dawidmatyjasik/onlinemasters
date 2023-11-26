import React from 'react';

import Image from 'next/image';

import firstImage from 'assets/img/firstMainImage.webp';
import secondImage from 'assets/img/secondMainImage.webp';

export const MainImages = async () => (
  <div className=" flex w-4/12 flex-col pr-16 align-middle">
    <div className="relative left-0 top-0">
      <div className="">
        <Image
          src={firstImage}
          alt="Strony internetowe — kobieta i mężczyzna — Online Masters"
          className="relative left-0 top-0 h-auto w-full rounded-lg"
        />
      </div>
      <div className="">
        <Image
          src={secondImage}
          alt="Strony internetowe — kobieta i mężczyzna — Grupa ludzi"
          className="invisible absolute -bottom-48 -right-48 h-96 w-auto rounded-lg md:visible"
        />
      </div>
    </div>
  </div>
);
