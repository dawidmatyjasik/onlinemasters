import React from 'react';

import { ChevronDown } from 'lucide-react';

import { GoogleRating } from './hero/googleRating/GoogleRating';
import { MainImages } from './hero/mainImages/MainImages';
import { Step } from './hero/step/Step';
import { Trusted } from './hero/trusted/Trusted';

import { useTranslation } from 'app/i18n';
import { Container } from 'components/atoms/container/Container';
import { Text } from 'components/atoms/text/Text';
import { Button } from 'components/ui/button';

export const Hero = async () => {
  const { t } = await useTranslation('hero');

  const stepsArray = [
    {
      id: 1,
      icon: '',
      description: t('steps.1.description'),
    },
    {
      id: 2,
      icon: '',
      description: t('steps.2.description'),
    },
    {
      id: 3,
      icon: '',
      description: t('steps.3.description'),
    },
  ];

  return (
    <Container className="flex justify-center align-middle  ">
      <section className=" block sm:flex">
        <div className="flex w-7/12 flex-col gap-4">
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
          <div>
            {stepsArray.map((step) => (
              <Step key={step.id} icon={step.icon} description={step.description} />
            ))}
          </div>
          <Trusted />
        </div>
        <MainImages />
      </section>
    </Container>
  );
};
