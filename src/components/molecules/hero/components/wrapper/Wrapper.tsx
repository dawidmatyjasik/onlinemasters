import type { PropsWithChildren } from 'react';
import React from 'react';

import BackgroundImage from 'app/assets/img/blue-background.webp';

export const Wrapper = ({ children }: PropsWithChildren) => (
  <div
    className="mt-[-200px] bg-contain bg-right-top bg-no-repeat pb-10"
    style={{
      backgroundImage: `url(${BackgroundImage.src})`,
    }}>
    {children}
  </div>
);
