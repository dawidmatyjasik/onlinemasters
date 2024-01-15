import React from 'react';

import { WhatGotCard } from './components/WhatGotCard';
import { WhatGotCards } from './components/WhatGotCards';

import { Container } from 'components/atoms/container/Container';
import { Text } from 'components/atoms/text/Text';

const WHAT_GOT_STRUCTURE = [
  { src: '/svg/support-svgrepo-com.svg', title: 'Optymalizacja opisu', description: '1._description' },
  { src: '/svg/website-theme-svgrepo-com.svg', title: 'Optymalizacja usług', description: '2._description' },
  { src: '/svg/content-right-svgrepo-com.svg', title: 'Publikacje', description: '3._description' },
  { src: '/svg/iphone-svgrepo-com.svg', title: 'Odpowiadanie na opinie', description: '4._description' },
  { src: '/svg/handshake-deal-svgrepo-com.svg', title: 'Monitorowanie wyników', description: '5._description' },
];

export const WhatGot = async () => (
  <Container>
    <section className="lg grid grid-cols-1 grid-rows-2 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <Text as="h2" className="p-8">
        Prowadzona przez nas wizytówka, będzie idealna
      </Text>
      {WHAT_GOT_STRUCTURE.map(({ src, title, description }) => (
        <WhatGotCard key={title}>
          <WhatGotCards src={src} title={title} description={description} />
        </WhatGotCard>
      ))}
    </section>
  </Container>
);
