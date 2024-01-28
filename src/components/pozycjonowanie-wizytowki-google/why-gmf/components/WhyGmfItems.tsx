import React from 'react';

import { useTranslation } from 'app/i18n';
import { Text } from 'components/atoms/text/Text';

export const WHY_GMF_STRUCTURE = [
  { subTitle: '_subTitle1', subDescription: '_subDescription1' },
  { subTitle: '_subTitle2', subDescription: '_subDescription1' },
  { subTitle: '_subTitle3', subDescription: '_subDescription1' },
  { subTitle: '_subTitle4', subDescription: '_subDescription1' },
  { subTitle: '_subTitle5', subDescription: '_subDescription1' },
];

export const WhyGmfItems = async () => {
  const { t } = await useTranslation('whyGmf');
  return (
    <ul className="flex flex-col gap-4">
      {WHY_GMF_STRUCTURE.map(({ subTitle, subDescription }) => (
        <li key={subTitle}>
          <Text>
            <span className="mr-1 font-bold">{t(subTitle)}:</span>
            {t(subDescription)}
          </Text>
        </li>
      ))}
    </ul>
  );
};
