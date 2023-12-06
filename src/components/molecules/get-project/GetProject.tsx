import React from 'react';

import { ChevronDown, ChevronRight } from 'lucide-react';

import { Container } from 'components/atoms/container/Container';
import { Pointer } from 'components/atoms/pointer/Pointer';
import { Text } from 'components/atoms/text/Text';
import { Button } from 'components/ui/button';

export const GetProject = () => (
  <Container>
    <Pointer />
    <article className="flex flex-col items-center gap-4">
      <Text as="h2">Odbierz bezpłatny projekt strony głównej</Text>
      <ChevronDown className="h-16 w-16 text-primary" strokeWidth={0.5} />
      <Button iconStart={<ChevronRight />}>Odbieram projekt</Button>
    </article>
  </Container>
);
