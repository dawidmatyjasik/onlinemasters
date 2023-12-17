import React from 'react';

import { ChevronRight } from 'lucide-react';

import { useTranslation } from 'app/i18n';
import { Divider } from 'components/atoms/divider/Divider';
import { Link } from 'components/atoms/link/Link';
import { Step } from 'components/atoms/step/Step';
import { Text } from 'components/atoms/text/Text';
import { Button } from 'components/ui/button';

export const TakingLookContent = async () => {
  const { t } = await useTranslation();
  return (
    <article className="flex flex-col justify-center gap-6">
      <Text as="h2">Opieka nad stronami WordPress Katowice. Przyglądamy się temu, na co inni przymykają oko</Text>
      <Divider />
      <Step img="/svg/star-svgrepo-com.svg" hideArrow hideStep className="h-24 w-24" alt="Zadowolenie Katowice" />
      <Text as="h3">{t('takingLook.subTitle1')}</Text>
      <Text>{t('takingLook._subDescription1')}</Text>
      <Step img="/svg/support-svgrepo-com.svg" hideArrow hideStep className="h-24 w-24" alt="Wsparcie Katowice" />
      <Text as="h3">{t('takingLook.subTitle2')}</Text>
      <Text>{t('takingLook._subDescription2')}</Text>
      <Link href="https://onlinemasters.pl/bezplatny-projekt-strony" className="w-fit">
        <Button size="md" variant="primary" iconStart={<ChevronRight />}>
          Zobacz cennik
        </Button>
      </Link>
    </article>
  );
};
