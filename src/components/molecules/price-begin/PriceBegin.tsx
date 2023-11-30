import React from 'react';

import { Container } from 'components/atoms/container/Container';
import { Text } from 'components/atoms/text/Text';
import { Button } from 'components/ui/button';

export const PriceBegin = () => (
  <div
    className="flex h-[300px] w-full items-center justify-center bg-cover bg-fixed bg-no-repeat"
    style={{
      backgroundPosition: 'top center',
      backgroundImage: `url(/images/website_background_blue_colors_l.webp)`,
    }}>
    <Container>
      <div className="flex flex-col gap-6">
        <Text className="text-center" color="white" as="h2">
          Strony Internetowe Katowice - Cena podstawowej strony zaczyna się od 947 zł
        </Text>
        <Button size="lg" variant="secondary" className="mx-auto w-[400px]">
          Odbieram cennik
        </Button>
      </div>
    </Container>
  </div>
);
