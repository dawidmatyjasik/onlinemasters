import React from 'react';

import OfferItem from './components/OfferItem';

import { Container } from 'components/atoms/container/Container';

import type { OfferItemProps } from './components/OfferItem';

const OFFER_STRUCTURE: Omit<OfferItemProps, 'index'>[] = [
  {
    title: 'Strony Internetowe',
    description1:
      'Oferujemy profesjonalne usługi tworzenia stron internetowych, które nie tylko zachwycą wizualnie, ale także przyciągną nowych klientów i zwiększą widoczność Twojej firmy online. Nasz zespół doświadczonych projektantów i programistów jest gotów spełnić wszystkie Twoje potrzeby związane z stronami internetowymi, niezależnie od skali projektu.',
    description2:
      'Dzięki naszemu podejściu skoncentrowanemu na klientach, jesteśmy w stanie dostosować każdy projekt do Twoich indywidualnych celów i wymagań. Bez względu na to, czy potrzebujesz responsywnej strony internetowej, sklepu internetowego czy platformy e-commerce, zapewniamy najnowocześniejsze rozwiązania technologiczne i design, które pomogą Ci osiągnąć sukces w świecie online. Wybierając naszą firmę, inwestujesz w innowacyjność, profesjonalizm i skuteczność, co przekłada się na rosnący zysk i zadowolenie klientów. Daj nam szansę, a przekonasz się, że nasze strony internetowe to klucz do sukcesu Twojego biznesu online!',
    src: '/strony-internetowe/hero/hero-1.webp',
    alt: 'Strony Internetowe',
    link: '/strony-internetowe',
  },
  {
    title: 'Opieka nad Stronami Wordpress',
    description1:
      'Zaufaj nam opiece nad Twoją stroną WordPress i skoncentruj się na rozwoju swojego biznesu! Nasza firma specjalizuje się w kompleksowej opiece technicznej i administracyjnej nad witrynami opartymi na WordPress. Dzięki naszym usługom możesz spać spokojnie, wiedząc, że Twoja strona działa sprawnie i jest zabezpieczona przed wszelkimi zagrożeniami. ',
    description2:
      'Nasi doświadczeni specjaliści regularnie aktualizują WordPress, wtyczki i motywy, dbając o bezpieczeństwo i wydajność Twojej strony. Dodatkowo, zapewniamy backupy danych oraz monitorujemy witrynę 24/7, gotowi do szybkiej reakcji w razie jakichkolwiek problemów. Nasza opieka techniczna WordPress to gwarancja, że Twoja strona będzie działać bezawaryjnie, a Ty będziesz mieć więcej czasu na rozwijanie swojego biznesu. Skorzystaj z naszych usług i poczuj ulgę w zarządzaniu swoją stroną internetową!',
    src: '/opieka/hero/hero-1.webp',
    alt: 'Opieka nad Stronami Wordpress',
    link: '/opieka-nad-stronami-wordpress',
  },
];

const Offer = () => (
  <Container>
    <article className="flex flex-col gap-12">
      {OFFER_STRUCTURE.map(({ alt, description1, description2, link, src, title }, index) => (
        <OfferItem
          key={title}
          alt={alt}
          description1={description1}
          description2={description2}
          link={link}
          src={src}
          title={title}
          index={index}
        />
      ))}
    </article>
  </Container>
);

export default Offer;
