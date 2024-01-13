import React from 'react';

import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Divider } from 'components/atoms/divider/Divider';
import { Text } from 'components/atoms/text/Text';
import { Button } from 'components/ui/button';
import { cn } from 'lib/utils';

export interface OfferItemProps {
  src: string;
  alt: string;
  title: string;
  description1: string;
  description2: string;
  link: string;
  index: number;
}

const OfferItem = ({ src, alt, title, description1, description2, link, index }: OfferItemProps) => (
  <section className={cn('flex items-center justify-start gap-20', index % 2 && 'flex-row-reverse')}>
    <Image src={src} alt={alt} width={425} height={640} className="flex-1 rounded-2xl lg:block" />
    <article className="flex flex-col gap-6">
      <Text as="h2">{title}</Text>
      <Divider />
      <Text>{description1}</Text>
      <Text>{description2}</Text>
      <Link href={link}>
        <Button size="md" variant="primary" iconStart={<ChevronRight />}>
          Zobacz gdzie jesteśmy
        </Button>
      </Link>
    </article>
  </section>
);

export default OfferItem;
