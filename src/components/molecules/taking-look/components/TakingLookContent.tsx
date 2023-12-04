import React from 'react';

import { ChevronRight } from 'lucide-react';

import { useTranslation } from 'app/i18n';
import { Divider } from 'components/atoms/divider/Divider';
import { Step } from 'components/atoms/step/Step';
import { Text } from 'components/atoms/text/Text';
import { Button } from 'components/ui/button';

export const TakingLookContent = async () => {
  const { t } = await useTranslation();
  return (
    <article className="flex flex-col justify-center gap-6">
      <Text as="h2">{t('takingLook.title')}</Text>
      <Divider />
      <Step img="/svg/star-svgrepo-com.svg" hideArrow hideStep className="h-24 w-24" />
      <Text as="h3">{t('takingLook.subTitle1')}</Text>
      <Text>{t('takingLook.subDescription1')}</Text>
      <Step img="/svg/support-svgrepo-com.svg" hideArrow hideStep className="h-24 w-24" />
      <Text as="h3">{t('takingLook.subTitle2')}</Text>
      <Text>{t('takingLook.subDescription2')}</Text>
      <Button size="md" variant="primary" className="w-[260px]" iconStart={<ChevronRight />}>
        Odbieram cennik
      </Button>
    </article>
  );
};
