import React from 'react';

import Image from 'next/image';

import firstImage from '../../../../../app/assets/img/firstMainImage.webp';
import secondImage from '../../../../../app/assets/img/secondMainImage.webp';

export const MainImages = async () => (
  <div className=" flex w-4/12 flex-col pr-16 align-middle">
    <div className="relative left-0 top-0">
      <div className="">
        <Image src={firstImage} alt="" className="relative left-0 top-0 h-auto w-full rounded-lg" />
      </div>
      <div className="">
        <Image
          src={secondImage}
          alt=""
          className="invisible absolute -bottom-48 -right-48 h-96 w-auto rounded-lg md:visible"
        />
      </div>
    </div>
  </div>
);
