import React from 'react';

import { Link } from 'components/atoms/link/Link';
import { Text } from 'components/atoms/text/Text';

export const Menu = () => (
  <div className="flex flex-col justify-center gap-4 border-l border-[#494B41] px-4">
    <Text size="h4" color="white" type="heading">
      Menu
    </Text>
    <div className="flex flex-col">
      <Link href="https://onlinemasters.pl/">Główna</Link>
      <Link href="https://onlinemasters.pl/oferta">Oferta</Link>
      <Link href="https://onlinemasters.pl/realizacje">Realizacje</Link>
      <Link href="https://onlinemasters.pl/o-nas">O nas</Link>
    </div>
  </div>
);
