import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type React from 'react';
import { createElement } from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

type TextElements = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'a' | 'div' | 'span' | 'p' | 'li' | 'label' | 'th' | 'td';

const textVariants = cva('font-body', {
  variants: {
    weight: {
      regular: 'font-normal',
      medium: 'font-medium',
      bold: 'font-bold',
    },
    color: {
      text: 'text-font-text',
      heading: 'text-font-heading',
      white: 'text-white',
      black: 'text-black',
      primary: 'text-font-primary',
    },
    size: {
      h1: 'text-h1',
      h2: 'text-h2',
      h3: 'text-h3',
      h4: 'text-h4',
      h5: 'text-h5',
      h6: 'text-h6',
      body: 'text-body',
      small: 'text-small',
      tiny: 'text-tiny',
    },
  },
  defaultVariants: {
    weight: 'regular',
    color: 'text',
    size: 'body',
  },
});

export type TextProps<T extends TextElements> = {
  children?: ReactNode | React.ReactNode[] | string | number;
  className?: string;
  weight?: 'regular' | 'medium' | 'bold';
  color?: 'text' | 'heading' | 'white' | 'black' | 'primary';
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'small' | 'tiny';
  as?: T;
} & ComponentPropsWithoutRef<T> &
  VariantProps<typeof textVariants>;

export function Text<T extends TextElements = 'p'>({
  children,
  weight = 'regular',
  color,
  size,
  as,
  className,
  ...rest
}: TextProps<T>) {
  return children
    ? createElement(
        as || 'p',
        {
          className: cn(textVariants({ weight, color, size }), className),
          ...rest,
        },
        children
      )
    : null;
}
