import React from 'react';

import { ChevronDown } from 'lucide-react';

import { GoogleRating } from './components/googleRating/GoogleRating';
import { MainImages } from './components/mainImages/MainImages';
import { StepSection } from './components/stepSection/StepSection';
import { Trusted } from './components/trusted/Trusted';
import { Wrapper } from './components/wrapper/Wrapper';

import { useTranslation } from 'app/i18n';
import { Container } from 'components/atoms/container/Container';
import { Line } from 'components/atoms/line/Line';
import { Text } from 'components/atoms/text/Text';
import { Button } from 'components/ui/button';

export const Hero = async () => {
  const { t } = await useTranslation('hero');

  return (
    <Wrapper>
      <Container className="flex gap-10 pt-[200px]">
        <section className="flex w-1/2 flex-col gap-6">
          <Text as="h5">{t('subTitle')}</Text>
          <Text as="h1">{t('title')}</Text>
          <Text>{t('description')}</Text>
          <section className="flex gap-6">
            <Button size="lg" iconStart={<ChevronDown />}>
              {t('cta')}
            </Button>
            <GoogleRating />
          </section>
          <Line />
          <StepSection />
          <Trusted />
        </section>
        <MainImages />
      </Container>
    </Wrapper>
  );
};
