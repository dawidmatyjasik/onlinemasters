import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="https://onlinemasters.pl/">
      <Image
        src="/images/website/logo.webp"
        height={60}
        width={130}
        alt="Online Masters logo"
        className="object-contain"
      />
    </Link>
  );
}
