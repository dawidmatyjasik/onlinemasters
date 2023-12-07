import React from 'react';

import { ChevronDown, ChevronRight } from 'lucide-react';

import { Container } from 'components/atoms/container/Container';
import { Link } from 'components/atoms/link/Link';
import { Pointer } from 'components/atoms/pointer/Pointer';
import { Text } from 'components/atoms/text/Text';
import { Button } from 'components/ui/button';

export const GetProject = () => (
  <Container>
    <Pointer />
    <article className="flex flex-col items-center gap-4">
      <Text as="h2">Odbierz bezpłatny projekt strony głównej</Text>
      <ChevronDown className="h-16 w-16 text-primary" strokeWidth={0.5} />
      <Link href="https://onlinemasters.pl/bezplatny-projekt-strony" className="mx-auto w-fit">
        <Button iconStart={<ChevronRight />}>Odbieram projekt</Button>
      </Link>
    </article>
  </Container>
);
