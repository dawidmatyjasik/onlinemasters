import React from 'react';

import { useTranslation } from 'app/i18n';
import { Text } from 'components/atoms/text/Text';

import type { InformationsStructure } from '../Informations';

const InformationsCard = async ({ subTitle, description1, description2 }: InformationsStructure) => {
  const { t } = await useTranslation('informations.items');
  return (
    <article className="flex flex-col gap-1 rounded-md border border-[#C3C3C3] p-5">
      <Text as="h3" size="body" type="text" className="font-bold">
        {t(subTitle)}
      </Text>
      <Text>{t(description1)}</Text>
      {description2 && <Text>{t(description2)}</Text>}
    </article>
  );
};
export default InformationsCard;
