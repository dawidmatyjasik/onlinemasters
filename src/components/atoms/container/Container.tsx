import type { ReactNode } from 'react';

import { Gutter } from 'components/atoms/gutter/Gutter';

interface Props {
  children: ReactNode | ReactNode[];
}

export const Container = ({ children }: Props) => (
  <Gutter>
    <div className="mx-auto max-w-[1200px]">{children}</div>
  </Gutter>
);
