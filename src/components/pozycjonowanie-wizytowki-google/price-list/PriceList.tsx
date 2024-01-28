import React from 'react';

import { PriceListItem } from './components/PriceListItem';

import { Container } from 'components/atoms/container/Container';

type PriceListFeature = {
  text: string;
  included: boolean;
};

export type PriceListStructure = {
  title: string;
  description: string;
  price: string;
  features: PriceListFeature[];
};

export const PRICE_LIST_STRUCTURE: PriceListStructure[] = [
  {
    title: 'Założenie Wizytówki Google',
    description: 'Dla firm, które chcą w podstawowy sposób zaprezentować swoją ofertę',
    price: '347 zł',
    features: [
      {
        text: 'Dodanie danych firmy',
        included: true,
      },
      {
        text: 'Stworzenie i optymalizacja opisu firmy',
        included: true,
      },
      {
        text: 'Stworzenie i optymalizacja opisu usług lub produktów',
        included: true,
      },
      {
        text: 'Dodanie obszaru działaności',
        included: true,
      },
      {
        text: 'Dodanie godzin otwarcia',
        included: true,
      },
      {
        text: 'Dodanie zdjęć',
        included: true,
      },
      {
        text: 'Uzupełnienie pozostałych informacji',
        included: true,
      },
    ],
  },
  {
    title: 'Pakiet BASIC Pozycjonowanie Wizytówki Google',
    description:
      'Dla firm posiadających małą lokalną konkurencję, które chcą małym kosztem, znacząco zwiększyć swoją widoczność w internecie.',
    price: '477 zł/mies',
    features: [
      {
        text: 'Analiza Wizytówki Google',
        included: true,
      },
      {
        text: 'Optymalizacja opisu',
        included: true,
      },
      {
        text: 'Optymalizacja usług',
        included: true,
      },
      {
        text: 'Systematyczne publikacje (2 post w miesiącu)',
        included: true,
      },
      {
        text: 'Odpowiadanie na opinie',
        included: true,
      },
      {
        text: 'Pozyskiwanie linków',
        included: false,
      },
      {
        text: 'Monitorowanie wyników',
        included: true,
      },
      {
        text: 'Zwiększenie widoczności',
        included: true,
      },
    ],
  },
  {
    title: 'Pakiet ADVANCED Strona Internetowa',
    description:
      'Dla firm posiadających dużą lokalną konkurencję, które chcą małym kosztem, znacząco zwiększyć swoją widoczność w internecie.',
    price: '627 zł/mies',
    features: [
      {
        text: 'Analiza Wizytówki Google',
        included: true,
      },
      {
        text: 'Optymalizacja opisu',
        included: true,
      },
      {
        text: 'Optymalizacja usług',
        included: true,
      },
      {
        text: 'Systematyczne publikacje (4 posty w miesiącu)',
        included: true,
      },
      {
        text: 'Odpowiadanie na opinie',
        included: true,
      },
      {
        text: 'Pozyskiwanie linków',
        included: true,
      },
      {
        text: 'Monitorowanie wyników',
        included: true,
      },
      {
        text: 'Zwiększenie widoczności',
        included: true,
      },
    ],
  },
];

export const PriceList = () => (
  <Container>
    <section className="grid grid-cols-1 grid-rows-1 gap-5 lg:grid-cols-3">
      {PRICE_LIST_STRUCTURE.map(({ title, description, price, features }) => (
        <PriceListItem key={title} title={title} description={description} price={price} features={features} />
      ))}
    </section>
  </Container>
);
