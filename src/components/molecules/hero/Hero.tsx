import React from 'react';

import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

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
      <Container className="flex flex-col gap-10 pt-[200px] lg:flex-row">
        <section className="flex w-full flex-col gap-6 lg:w-1/2">
          <Text as="span" size="small" className="text-heading">
            ONLINE MASTERS
          </Text>
          <Text type="heading" as="h1">
            {t('title')}
          </Text>
          <Text>{t('_description')}</Text>
          <section className="flex flex-col gap-6 md:flex-row">
            <Link href="https://onlinemasters.pl/bezplatny-projekt-strony" className="w-fit">
              <Button size="md" variant="primary" iconStart={<ChevronDown />}>
                Zamawiam projekt za 0 zł
              </Button>
            </Link>
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
