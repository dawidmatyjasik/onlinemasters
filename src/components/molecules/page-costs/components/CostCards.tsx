import React from 'react';

import { useTranslation } from 'app/i18n';
import { Card } from 'components/atoms/card/Card';
import { Text } from 'components/atoms/text/Text';

const COSTS_STRUCTURE = [
  {
    title: '1.title',
    features: [
      { subTitle: '1.subTitle1', subDescription: '1._subDescription1' },
      { subTitle: '1.subTitle2', subDescription: '1._subDescription2' },
    ],
  },
  {
    title: '2.title',
    features: [
      { subTitle: '2.subTitle1', subDescription: '2._subDescription1' },
      { subTitle: '2.subTitle2', subDescription: '2._subDescription2' },
    ],
  },
];

const CostCards = async () => {
  const { t } = await useTranslation('pageCosts.cards');
  return (
    <div className="flex gap-10 py-6">
      {COSTS_STRUCTURE.map(({ title, features }) => (
        <Card key={title} className="flex flex-1 flex-col gap-6">
          <Text type="heading" as="h3">
            {t(title)}
          </Text>
          <ul className="flex flex-col gap-4">
            {features.map(({ subTitle, subDescription }) => (
              <li key={subTitle}>
                <Text>
                  <span className="mr-1 font-bold">{t(subTitle)}:</span>
                  {t(subDescription)}
                </Text>
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
};

export default CostCards;
