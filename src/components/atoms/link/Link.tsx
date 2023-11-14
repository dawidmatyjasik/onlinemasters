import type { PropsWithChildren } from 'react';
import React from 'react';
import NextLink from 'next/link';
import { cn } from '@/lib/utils';

interface LinkProps {
  href: string;
  className?: string;
}

export function Link({ href, className, children }: PropsWithChildren<LinkProps>) {
  return (
    <NextLink href={href} className={cn('font-medium font-body text-[#4175FC] hover:text-[#084af3]', className)}>
      {children}
    </NextLink>
  );
}
