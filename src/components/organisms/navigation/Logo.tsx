import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="https://onlinemasters.pl/">
      <div className="relative h-[60px] w-[130px] ">
        <Image src="/images/logo.webp" layout="fill" alt="Online Masters logo" className="object-contain" />
      </div>
    </Link>
  );
}
