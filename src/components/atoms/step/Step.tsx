import React from 'react';

import Image from 'next/image';

import { Text } from '../text/Text';

import Img from 'app/assets/svg/right-arrow-svgrepo-com.svg';
import { cn } from 'lib/utils';

interface StepProps {
  img: any;
  step?: number;
  hideArrow?: boolean;
  hideStep?: boolean;
  className?: string;
}

export const Step = ({ step, img, hideArrow, hideStep, className }: StepProps) => (
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
      <Image src={img} className="w-[40px]" alt="Krok" />
    </div>
    {!hideArrow && <Image src={Img} className="w-[100px]" alt="Strzałka w prawo" />}
  </div>
);
