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
    title: 'Pakiet BASIC Strona Internetowa',
    description: 'Dla firm, które chcą w podstawowy sposób zaprezentować swoją ofertę',
    price: '1200 zł',
    features: [
      {
        text: 'Bezpłatny projekt strony głównej',
        included: true,
      },
      {
        text: 'Cała treść na stronie głównej',
        included: true,
      },
      {
        text: 'Nowoczesny design',
        included: true,
      },
      {
        text: 'Grafiki/animacje',
        included: true,
      },
      {
        text: 'Profesjonalne teksty',
        included: true,
      },
      {
        text: 'Narzędzia analityczne',
        included: false,
      },
      {
        text: 'Optymalizacja SEO',
        included: false,
      },
      {
        text: 'Blog',
        included: false,
      },
    ],
  },
  {
    title: 'Pakiet BASIC Strona Internetowa',
    description: 'Dla firm, które chcą w podstawowy sposób zaprezentować swoją ofertę',
    price: '1900 zł',
    features: [
      {
        text: 'Bezpłatny projekt strony głównej',
        included: true,
      },
      {
        text: 'Do 7 podstron',
        included: true,
      },
      {
        text: 'Nowoczesny design',
        included: true,
      },
      {
        text: 'Grafiki/animacje',
        included: true,
      },
      {
        text: 'Profesjonalne teksty',
        included: true,
      },
      {
        text: 'Narzędzia analityczne',
        included: true,
      },
      {
        text: 'Optymalizacja SEO',
        included: true,
      },
      {
        text: 'Blog',
        included: false,
      },
    ],
  },
  {
    title: 'Pakiet ADVANCED Strona Internetowa',
    description: 'Dla firm, które chcą budować widoczność za pomocą bloga',
    price: '2600 zł',
    features: [
      {
        text: 'Bezpłatny projekt strony głównej',
        included: true,
      },
      {
        text: 'Do 9 podstron',
        included: true,
      },
      {
        text: 'Nowoczesny design',
        included: true,
      },
      {
        text: 'Grafiki/animacje',
        included: true,
      },
      {
        text: 'Profesjonalne teksty',
        included: true,
      },
      {
        text: 'Narzędzia analityczne',
        included: true,
      },
      {
        text: 'Optymalizacja SEO',
        included: true,
      },
      {
        text: 'Blog',
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
