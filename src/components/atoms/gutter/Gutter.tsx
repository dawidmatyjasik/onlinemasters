import type { ReactNode } from 'react';

interface Props {
  children: ReactNode | ReactNode[];
}

export const gutterClasses = 'px-4 md:px-6 2xl:px-8';

export const Gutter = ({ children }: Props) => <div className={gutterClasses}>{children}</div>;
