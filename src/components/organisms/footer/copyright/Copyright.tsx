import React from 'react';

import { Container } from 'components/atoms/container/Container';
import { Line } from 'components/atoms/line/Line';
import { Link } from 'components/atoms/link/Link';
import { Text } from 'components/atoms/text/Text';

export const Copyright = () => (
  <Container className="flex flex-col items-center gap-6">
    <Line />
    <Text color="footer" size="small">
      © 2023 Designed by <Link href="https://onlinemasters.pl">Online Masters</Link> |{' '}
      <Link href="https://onlinemasters.pl/polityka-prywatnosci/">Polityka prywatności</Link>
    </Text>
  </Container>
);
