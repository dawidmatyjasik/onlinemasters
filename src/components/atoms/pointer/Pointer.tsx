import React from 'react';

import { ChevronDown } from 'lucide-react';

import { Line } from '../line/Line';

export const Pointer = () => (
  <div className="flex items-center pb-10">
    <Line />
    <div>
      <ChevronDown className="h-16 w-16 text-primary" strokeWidth={0.5} />
    </div>
    <Line />
  </div>
);
