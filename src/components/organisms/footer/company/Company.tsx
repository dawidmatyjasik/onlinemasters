import React from 'react';

import { Heading } from 'components/atoms/heading/Heading';
import { Text } from 'components/atoms/text/Text';

export const Company = () => (
  <div className="flex flex-col justify-center gap-4 border-l border-[rgb(73,75,65)] px-4">
    <Heading color="white" size="h4">
      Dane firmy
    </Heading>
    <div className="flex flex-col">
      <Text color="footer">NIP: 5492470598</Text>
      <Text color="footer">Kamil Hajduk Strony Internetowe</Text>
      <Text color="footer">ul. Wojska Polskiego 1b./10</Text>
      <Text color="footer">32-640 Zator</Text>
    </div>
  </div>
);
