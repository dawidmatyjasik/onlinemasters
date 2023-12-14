import React from 'react';

import { Link } from 'components/atoms/link/Link';
import { Text } from 'components/atoms/text/Text';

export const Menu = () => (
  <div className="flex flex-col justify-center gap-4 border-l border-[#494B41] px-4">
    <Text as="h4" color="white">
      Menu
    </Text>
    <div className="flex flex-col">
      <Link href="https://onlinemasters.pl/" className="h-[48px] sm:h-fit">
        Główna
      </Link>
      <Link href="https://onlinemasters.pl/oferta" className="h-[48px] sm:h-fit">
        Oferta
      </Link>
      <Link href="https://onlinemasters.pl/realizacje" className="h-[48px] sm:h-fit">
        Realizacje
      </Link>
      <Link href="https://onlinemasters.pl/o-nas" className="h-[48px] sm:h-fit">
        O nas
      </Link>
    </div>
  </div>
);
