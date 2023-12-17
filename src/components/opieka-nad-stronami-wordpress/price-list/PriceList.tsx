import React from 'react';

import { PriceListItem } from './components/PriceListItem';

import { Container } from 'components/atoms/container/Container';
import { Text } from 'components/atoms/text/Text';

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
    title: 'Pakiet BASIC Obsługa stron WordPress',
    description: 'Dla właścicieli firm, którzy chcą oszczędzić czas na obsłudze strony www',
    price: '47zł/mies',
    features: [
      {
        text: '1 aktualizacja w miesiącu',
        included: true,
      },
      {
        text: '1 kopia zapasowa w miesiącu',
        included: true,
      },
      {
        text: 'Monitorowanie bezpieczeństwa',
        included: true,
      },
      {
        text: 'Monitorowanie szybkości',
        included: true,
      },
      {
        text: 'Usuwanie wirusów',
        included: true,
      },
      {
        text: '2h pracy specjalisty przy wprowadzaniu zmian',
        included: false,
      },
    ],
  },
  {
    title: 'Pakiet PREMIUM Obsługa stron WordPress',
    description: 'Dla właścicieli firm, którzy potrzebują obsługi strony i systematycznych zmian',
    price: '147zł/mies',
    features: [
      {
        text: '2 aktualizacja w miesiącu',
        included: true,
      },
      {
        text: '2 kopia zapasowa w miesiącu',
        included: true,
      },
      {
        text: 'Monitorowanie bezpieczeństwa',
        included: true,
      },
      {
        text: 'Monitorowanie szybkości',
        included: true,
      },
      {
        text: 'Usuwanie wirusów',
        included: true,
      },
      {
        text: '2h pracy specjalisty przy wprowadzaniu zmian',
        included: true,
      },
    ],
  },
];

export const PriceList = () => (
  <Container>
    <section className="flex flex-col gap-8">
      <article className="grid grid-cols-1 grid-rows-1 gap-5 lg:grid-cols-2">
        {PRICE_LIST_STRUCTURE.map(({ title, description, price, features }) => (
          <PriceListItem key={title} title={title} description={description} price={price} features={features} />
        ))}
      </article>
      <Text className="mx-auto flex w-full justify-center text-center">
        “Większe” pakiety wyceniamy indywidualnie. Jeśli potrzebujesz bardziej zaawansowanej obsługi, wybierz w
        formularzu pakiet PREMIUM, a resztę uzgodnimy telefonicznie.
      </Text>
    </section>
  </Container>
);
