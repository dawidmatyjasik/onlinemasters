import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="https://onlinemasters.pl/">
      <div className="relative w-[130px] h-[60px] ">
        <Image src="/images/logo.webp" layout="fill" alt="Online Masters logo" objectFit="contain" />
      </div>
    </Link>
  );
}
