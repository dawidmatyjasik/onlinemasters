import React from 'react';

import { LogoDark } from './LogoDark';

import { Text } from 'components/atoms/text/Text';
import { MailerFooter } from 'components/molecules/mailerLite/mailerFooter';

export const NewsletterInfo = () => {
  const newsletterStructure = [
    'Dołącz do newslettera i zyskaj:',
    '👉 Dawkę wiedzy o Sztucznej Inteligencji',
    '👉 Ciekawostki i możliwości jej wykorzystania',
    '👉 Specjalne rabaty i bonusy',
  ];

  return (
    <div className="flex flex-col gap-5 pr-4">
      <LogoDark />
      <ul>
        {newsletterStructure.map((item) => (
          <Text as="li" color="white" key={item}>
            {item}
          </Text>
        ))}
      </ul>
      <MailerFooter />
    </div>
  );
};
