import React from 'react';

import { Link } from '../atoms/link/Link';
import { Heading } from '../ui/heading';
import { Text } from '../ui/text';

interface NavigationMenuContentProps {
  title: string;
  description: string;
  href: string;
}

export function NavigationMenuContent({ title, description, href }: NavigationMenuContentProps) {
  return (
    <div className="flex flex-col px-3 py-2">
      <Heading size="h5" as="h4" weight="medium">
        {title}
      </Heading>
      <Text size="small">{description}</Text>
      <Link href={href} className="flex items-center">
        Przejdź do oferty
        {' '}
        {'>'}
      </Link>
    </div>
  );
}
