import React from 'react';

import { ChevronRight } from 'lucide-react';

import { Container } from 'components/atoms/container/Container';
import { Link } from 'components/atoms/link/Link';
import { Pointer } from 'components/atoms/pointer/Pointer';
import { Text } from 'components/atoms/text/Text';
import { Button } from 'components/ui/button';

export const GetProject = () => (
  <Container>
    <Pointer />
    <article className="flex flex-col items-center gap-4">
      <Text as="h2">Zamów bezpłatny projekt</Text>
      <Text>
        lub zadzwoń:{' '}
        <Link className="text-center font-bold" href="tel:575990730">
          575 990 730
        </Link>
      </Text>
      <Link href="https://onlinemasters.pl/bezplatny-projekt-strony" className="mx-auto w-fit">
        <Button iconStart={<ChevronRight />}>Zamawiam projekt za 0 zł</Button>
      </Link>
    </article>
  </Container>
);
