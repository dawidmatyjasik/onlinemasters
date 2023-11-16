import React from 'react';

import { Heading } from 'components/atoms/heading/Heading';
import { Link } from 'components/atoms/link/Link';

export const Menu = () => (
  <div className="flex flex-col justify-center gap-4 border-l border-[#494B41] px-4">
    <Heading size="h4">Menu</Heading>
    <div className="flex flex-col">
      <Link href="https://onlinemasters.pl/">Główna</Link>
      <Link href="https://onlinemasters.pl/oferta">Oferta</Link>
      <Link href="https://onlinemasters.pl/realizacje">Realizacje</Link>
      <Link href="https://onlinemasters.pl/o-nas">O nas</Link>
    </div>
  </div>
);
