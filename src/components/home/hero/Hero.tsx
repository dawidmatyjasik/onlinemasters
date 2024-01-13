import React from 'react';

import { GoogleRating } from './components/googleRating/GoogleRating';
import { MainImages } from './components/mainImages/MainImages';
import { StepSection } from './components/stepSection/StepSection';
import { Trusted } from './components/trusted/Trusted';
import { Wrapper } from './components/wrapper/Wrapper';

import { Container } from 'components/atoms/container/Container';
import { Line } from 'components/atoms/line/Line';
import { Text } from 'components/atoms/text/Text';

export const Hero = () => (
  <Wrapper>
    <Container className="flex flex-col gap-10 pt-[200px] lg:flex-row">
      <section className="flex w-full flex-col gap-6 lg:w-1/2">
        <Text as="span" type="heading" size="small" className="text-heading tracking-[5px] text-[#101218]">
          ONLINE MASTERS
        </Text>
        <Text type="heading" as="h1">
          Rozwijaj profesjonalny wizerunek swojej firmy online i przyciągaj nowych klientów.
        </Text>
        <Text>STRONY | SKLEPY | SYSTEMY | SOCIAL MEDIA | MARKETING</Text>
        <section className="flex flex-col gap-6 md:flex-row">
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
