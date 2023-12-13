import type { PropsWithChildren } from 'react';
import React from 'react';

import { cn } from 'lib/utils';

interface CardProps {
  className?: string;
}

export const Card = ({ className, children }: PropsWithChildren<CardProps>) => (
  <article
    className={cn('rounded-3xl bg-white p-10', className)}
    style={{ boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.05)' }}>
    {children}
  </article>
);
