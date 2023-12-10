import React from 'react';

import Image from 'next/image';

import { Text } from '../text/Text';

import { cn } from 'lib/utils';

interface StepProps {
  img: string;
  alt: string;
  step?: number;
  hideArrow?: boolean;
  hideStep?: boolean;
  className?: string;
}

export const Step = ({ step, img, hideArrow, hideStep, className, alt }: StepProps) => (
  <div className="flex gap-4">
    <div className={cn('relative grid h-32 w-32 place-items-center rounded-lg border border-primary', className)}>
      {!hideStep && (
        <Text
          as="span"
          size="tiny"
          className="absolute right-0 top-1.5 rounded-[10px_0_1px_10px] bg-primary p-1.5"
          color="white">
          Krok {step}
        </Text>
      )}
      <Image src={img} width={46} height={46} alt={alt} />
    </div>
    {!hideArrow && <Image src="/svg/right-arrow-svgrepo-com.svg" width={120} height={100} alt="Strzałka w prawo" />}
  </div>
);
