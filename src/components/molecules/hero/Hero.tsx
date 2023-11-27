import React from 'react';

import { ChevronDown } from 'lucide-react';

import { GoogleRating } from './hero/googleRating/GoogleRating';
import { MainImages } from './hero/mainImages/MainImages';
import { StepSection } from './hero/stepSection/StepSection';
import { Trusted } from './hero/trusted/Trusted';

import { useTranslation } from 'app/i18n';
import { Container } from 'components/atoms/container/Container';
import { Text } from 'components/atoms/text/Text';
import { Button } from 'components/ui/button';

export const Hero = async () => {
  const { t } = await useTranslation('hero');

  return (
    <Container className="block justify-center align-middle sm:flex  ">
      <div className="flex w-full flex-col gap-4 md:w-7/12">
        <Text type="heading" as="h2" size="h6">
          {t('subTitle')}
        </Text>
        <Text as="h1" size="h1" type="heading">
          {t('title')}
        </Text>
        <Text>{t('description')}</Text>

        <div className="block justify-between border-b p-3 align-middle sm:flex">
          <Button size="lg" iconStart={<ChevronDown />}>
            {t('cta')}
          </Button>
          <GoogleRating />
        </div>
        <StepSection />
        <Trusted />
      </div>
      <MainImages />
    </Container>
  );
};
