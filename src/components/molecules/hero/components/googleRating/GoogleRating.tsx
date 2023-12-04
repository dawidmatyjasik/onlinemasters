import React from 'react';

import Image from 'next/image';

import { useTranslation } from 'app/i18n';
import { Text } from 'components/atoms/text/Text';

export const GoogleRating = async () => {
  const { t } = await useTranslation('hero');
  return (
    <article className="flex flex-col">
      <div className="flex gap-1">
        <Image src="/svg/star-sharp-svgrepo-com.svg" width={25} height={25} alt="Google Rate" />
        <Image src="/svg/star-sharp-svgrepo-com.svg" width={25} height={25} alt="Google Rate" />
        <Image src="/svg/star-sharp-svgrepo-com.svg" width={25} height={25} alt="Google Rate" />
        <Image src="/svg/star-sharp-svgrepo-com.svg" width={25} height={25} alt="Google Rate" />
        <Image src="/svg/star-sharp-svgrepo-com.svg" width={25} height={25} alt="Google Rate" />
      </div>
      <Text size="small">{t('rating')}</Text>
    </article>
  );
};
