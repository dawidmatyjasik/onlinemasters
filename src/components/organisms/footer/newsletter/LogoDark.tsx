import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

export const LogoDark = () => (
  <Link href="https://onlinemasters.pl/">
    <Image
      src="/images/website/logo-dark.webp"
      height={60}
      width={130}
      alt="Online Masters logo"
      className="object-contain"
    />
  </Link>
);
