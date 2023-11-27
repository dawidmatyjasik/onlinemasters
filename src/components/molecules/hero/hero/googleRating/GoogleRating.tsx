import React from 'react';

import { useTranslation } from 'app/i18n';
import { Text } from 'components/atoms/text/Text';

export const GoogleRating = async () => {
  const { t } = await useTranslation('hero');
  return (
    <div>
      <div>
        <div>★★★★★</div>
        <Text size="small">{t('rating')}</Text>
      </div>
    </div>
  );
};
