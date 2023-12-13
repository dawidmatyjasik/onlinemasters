import type { PropsWithChildren } from 'react';
import React from 'react';

import { cn } from 'lib/utils';

interface WhatGotCardProps {
  className?: string;
}

export const WhatGotCard = ({ className, children }: PropsWithChildren<WhatGotCardProps>) => (
  <article className={cn('bg-white p-10', className)} style={{ boxShadow: '0px 10px 35px -20px rgba(0,0,0,.16)' }}>
    {children}
  </article>
);
