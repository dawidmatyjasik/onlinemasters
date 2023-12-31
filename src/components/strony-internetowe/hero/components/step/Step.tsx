import React from 'react';

import Image from 'next/image';

import { Text } from 'components/atoms/text/Text';

import type { StepType } from '../stepSection/StepSection';

export const Step = ({ icon, description, alt }: Omit<StepType, 'id'>) => (
  <div className="flex items-center gap-3">
    <Image src={icon} width={32} height={32} alt={alt} />
    <Text>{description}</Text>
  </div>
);
