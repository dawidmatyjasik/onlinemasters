import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

export const LogoDark = () => (
  <Link href="https://onlinemasters.pl/">
    <div className="relative h-[60px] w-[130px] ">
      <Image src="/images/logo-dark.webp" layout="fill" alt="Online Masters logo" objectFit="contain" />
    </div>
  </Link>
);
