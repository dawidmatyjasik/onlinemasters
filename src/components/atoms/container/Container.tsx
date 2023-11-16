import type { ReactNode } from 'react';

import { Gutter } from 'components/atoms/gutter/Gutter';
import { cn } from 'lib/utils';

interface Props {
  children: ReactNode | ReactNode[];
  className?: string;
}

export const Container = ({ children, className }: Props) => (
  <Gutter>
    <div className={cn('mx-auto max-w-[1200px]', className)}>{children}</div>
  </Gutter>
);
